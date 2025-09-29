import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import Header from "@/components/Header/Header"
import Image from "next/image"

// Dynamic import for the client component - removed ssr: false for Next.js 15 compatibility
const Posts = dynamic(() => import('./Posts'), {
  loading: () => <div className="flex items-center justify-center min-h-screen">Loading...</div>
})

const domainName = "https://www.nautilusshipping.com"

async function fetchBlogData(slug) {
  try {
    const response = await fetch(`https://docs.nautilusshipping.com/wp-json/wp/v2/posts?_embed&slug=${slug}`);

    // Check if response is OK
    if (!response.ok) {
      console.error(`Failed to fetch blog data: ${response.status} ${response.statusText}`);
      return [];
    }

    // Check if response is JSON
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      console.error('Response is not JSON:', contentType);
      return [];
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching blog data:', error);
    return [];
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = await fetchBlogData(slug);
  
  if (!data || data.length === 0 || !data[0]) {
    return {
      title: 'Blog Not Found | Nautilus Shipping',
      description: 'The requested blog post could not be found.',
    }
  }

  const post = data[0]
  const metaTitle = post.acf?.meta_title || post.title?.rendered?.replace(/<[^>]+>/g, "") || "Blog"
  const metaDescription = post.acf?.meta_description_ || "Explore the latest insights, updates, and knowledge from Nautilus Shipping."
  const canonical = `${domainName}/news-and-insights/${slug}`
  const metaImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || `${domainName}/logo.png`

  // Detect YouTube video in content
  const videoUrlMatch = post.content.rendered.match(
    /<iframe.*?src="(https:\/\/www\.youtube\.com\/embed\/[^"]+)"/
  )
  const videoEmbedUrl = videoUrlMatch ? videoUrlMatch[1] : null

  return {
    title: metaTitle,
    description: metaDescription,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonical,
      siteName: 'Nautilus Shipping',
      images: [{
        url: metaImage,
        width: 800,
        height: 600,
      }],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
    },
    alternates: {
      canonical: canonical,
    },
    other: {
      'article:modified_time': post.modified || '',
    }
  }
}

// Generate JSON-LD structured data
function generateJsonLd(post, slug) {
  const metaTitle = post.acf?.meta_title || post.title?.rendered?.replace(/<[^>]+>/g, "") || "Blog"
  const metaDescription = post.acf?.meta_description_ || "Explore the latest insights, updates, and knowledge from Nautilus Shipping."
  const canonical = `${domainName}/news-and-insights/${slug}`
  const metaImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || `${domainName}/logo.png`

  // Detect YouTube video in content
  const videoUrlMatch = post.content.rendered.match(
    /<iframe.*?src="(https:\/\/www\.youtube\.com\/embed\/[^"]+)"/
  )
  const videoEmbedUrl = videoUrlMatch ? videoUrlMatch[1] : null
  const videoId = videoEmbedUrl ? videoEmbedUrl.split("/embed/")[1] : null
  const videoThumbnail = videoId ? `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg` : null

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
    headline: metaTitle,
    description: metaDescription,
    image: [metaImage],
    author: {
      "@type": "Organization",
      name: post.author_name || "Nautilus Shipping",
    },
    publisher: {
      "@type": "Organization",
      name: "Nautilus Shipping",
      logo: {
        "@type": "ImageObject",
        url: `${domainName}/logo.png`,
      },
    },
    datePublished: post.date,
    dateModified: post.modified,
  }

  const videoJsonLd = videoEmbedUrl ? {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: metaTitle,
    description: metaDescription,
    thumbnailUrl: videoThumbnail,
    uploadDate: post.date,
    embedUrl: videoEmbedUrl,
    contentUrl: canonical,
    publisher: {
      "@type": "Organization",
      name: "Nautilus Shipping",
      logo: {
        "@type": "ImageObject",
        url: `${domainName}/logo.png`,
      },
    },
  } : null

  return { blogJsonLd, videoJsonLd }
}

const Page = async ({ params }) => {
  const { slug } = await params;
  const data = await fetchBlogData(slug);
  
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading blog post...</div>}>
      <Posts slug={slug} data={data} />
    </Suspense>
  )
}

export default Page;