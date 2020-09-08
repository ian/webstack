import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Layout from "../layouts/MarketingLayout"

export default function Home() {
  const hero = <Hero />
  return (
    <Layout hero={hero}>
      <Footer />
    </Layout>
  )
}
