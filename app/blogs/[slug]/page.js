import Posts from "./Posts"

async function fetchBlogData(slug) {
  const response = await fetch(
    `https://docs.nautilusshipping.com/wp-json/wp/v2/seo-blogs?_embed&slug=${slug}`
  )
  const data = await response.json()
  return data
}

const Page = async ({ params }) => {
  const { slug } = await params
  const data = await fetchBlogData(slug)
  return <Posts slug={slug} data={data} />
}

export default Page
