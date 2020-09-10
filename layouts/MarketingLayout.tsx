import Footer from "../components/Footer"
import Header from "../components/Header"

type Props = {
  children: React.ReactNode
  hero?: React.ReactNode
}

export default (props: Props) => {
  const { children, hero } = props

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="hidden lg:block lg:absolute lg:inset-0">
        {/* <svg
          className="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8"
          width={640}
          height={784}
          fill="none"
          viewBox="0 0 640 784"
        >
          <defs>
            <pattern
              id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
              x={118}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            y={72}
            width={640}
            height={640}
            className="text-gray-50"
            fill="currentColor"
          />
          <rect
            x={118}
            width={404}
            height={784}
            fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)"
          />
        </svg> */}
      </div>
      <div className="relative pt-6">
        <Header />
        {hero}
        <div className="mt-16">{children}</div>
      </div>

      <Footer />
    </div>
  )
}
