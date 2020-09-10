import BlogList from "../components/BlogList"
import Layout from "../layouts/MarketingLayout"

export default function Blog() {
  const handleClick = console.log
  return (
    <Layout>
      <BlogList onClick={handleClick} />
    </Layout>
  )
}
