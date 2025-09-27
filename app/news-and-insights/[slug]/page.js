import Posts from './Posts'

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

const Page = async ({ params }) => {
  const { slug } = await params;
  const data = await fetchBlogData(slug);
  return <Posts slug={slug} data={data} />;
}

export default Page;