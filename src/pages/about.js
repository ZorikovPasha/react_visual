import React from "react"
import Helmet from "react-helmet"

import { Content } from "../components/main"

const IndexPage = () => (
  <div className="layout-container">
    <Helmet>
      <title></title>
      <meta name="description" content="" />
    </Helmet>

    <Content />
  </div>
)

export default IndexPage
