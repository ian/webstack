import Link from "next/link"

export const Header = () => {
  return (
    <nav className="relative max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6">
      <div className="flex items-center flex-1">
        <div className="flex items-center justify-between w-full md:w-auto">
          <a href="#" aria-label="Home">
            <img
              className="h-8 w-auto sm:h-10"
              src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
              alt="Logo"
            />
          </a>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              id="main-menu"
              aria-label="Main menu"
              aria-haspopup="true"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="hidden md:block md:ml-10">
          <Link href="/">
            <a className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">
              Home
            </a>
          </Link>
          <Link href="/blog">
            <a className="ml-10 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">
              Blog
            </a>
          </Link>
        </div>
      </div>
      <div className="hidden md:block text-right">
        <span className="inline-flex rounded-md shadow-md">
          <span className="inline-flex rounded-md shadow-xs">
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo transition duration-150 ease-in-out"
            >
              Log in
            </a>
          </span>
        </span>
      </div>
    </nav>
  )
}

export default Header
