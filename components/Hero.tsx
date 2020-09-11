import { useFormik } from "formik"

export const Hero = () => {
  const formik = useFormik({
    initialValues: {
      phone: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <>
      <main className="mt-8 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-20 xl:mt-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            {/* <div className="text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
              Direct to Lenders
            </div> */}
            <h2 className="mt-1 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
              Be on the phone with a top mortgage specialist in under{" "}
              <span className="text-green">10 minutes.</span>
            </h2>

            <div className="mt-5 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              {/* <p className="text-base font-medium text-gray-900">
                Enter your phone number and we'll take it from there.
              </p> */}
              <form className="mt-3 sm:flex" onSubmit={formik.handleSubmit}>
                <div>
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 flex items-center">
                      <select
                        aria-label="Country"
                        className="form-select h-full py-0 pl-3 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm sm:leading-5"
                      >
                        <option>US</option>
                        <option>CA</option>
                      </select>
                    </div>
                    <input
                      id="phone_number"
                      type="number"
                      className="form-input block w-full pl-16 sm:text-sm sm:leading-5"
                      placeholder="+1 (555) 987-6543"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-3 w-full px-6 py-2 sm:py-0 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green shadow-sm hover:bg-gray-700 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray active:bg-gray-900 transition duration-150 ease-in-out sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                >
                  Text Me
                </button>
              </form>
              <p className="mt-3 text-sm leading-5 text-gray-500">
                We care about the protection of your data. Read our{" "}
                <a href="#" className="font-medium text-gray-900 underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <button
                type="button"
                className="relative block w-full rounded-lg overflow-hidden focus:outline-none focus:shadow-outline"
              >
                <img
                  className="w-full"
                  src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Woman making a sale"
                />
                <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                  <svg
                    className="h-20 w-20 text-indigo-500"
                    fill="currentColor"
                    viewBox="0 0 84 84"
                  >
                    <circle opacity="0.9" cx={42} cy={42} r={42} fill="white" />
                    <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Hero
