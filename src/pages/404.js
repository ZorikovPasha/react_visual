import React from "react"
import Helmet from "react-helmet"

const NotFoundPage = () => (
  <div className="layout-container">
    <Helmet>
      <title>404: Not Found</title>
    </Helmet>

    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </div>
)

export default NotFoundPage
