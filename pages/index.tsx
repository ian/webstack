import Hero from "../components/Hero"
import Layout from "../layouts/MarketingLayout"

export default function Home() {
  const hero = <Hero />
  return <Layout hero={hero} footer={false}></Layout>
}
