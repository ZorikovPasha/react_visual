import React from "react"
import { Footer } from "./footer"
import { Header } from "./header"
import Seo from "./seo"

const Layout = ({ children }) => {

  return (
    <>
      <Seo />
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
