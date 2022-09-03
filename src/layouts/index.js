import React from "react"

import Seo from "./seo"
import { Header, Footer } from "../components"
import "../styles/style.less"


const Layout = ({ children }) => {
  return (
    <div className="main-layout">
      <Header />
      <Seo />

      {/* <div className="page-arrow" data-scroll-arrow>
        <button className="page-arrow__button" onClick={onLiftToTop}>
          <img src={arrow} alt="" />
        </button>
      </div> */}
      {children}

      <Footer />
    </div>
)
}

export default Layout
