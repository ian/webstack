import Footer from "../components/Footer"
import Header from "../components/Header"

type Props = {
  children: React.ReactNode
  footer?: boolean
  hero?: React.ReactNode
}

export default (props: Props) => {
  const { children, footer = true, hero } = props

  return (
    <div className="relative overflow-hidden">
      <div className="relative pt-6">
        <Header />
        {hero}
        <div className="mt-16">{children}</div>
      </div>

      {footer && <Footer />}
    </div>
  )
}
