import React, { useEffect } from "react"
import Router from "next/router"
import ReactGA from "react-ga"
import "../styles/globals.css"

function App({ Component, pageProps }) {
  const onPageChange = (path) => {
    ReactGA.pageview(path)
  }

  useEffect(() => {
    ReactGA.initialize(process.env.GOOGLE_ANALYTICS_ID)
    Router.events.on("routeChangeStart", onPageChange)
    return () => Router.events.off("routeChangeStart", onPageChange)
  }, [])

  return <Component {...pageProps} />
}

export default App
