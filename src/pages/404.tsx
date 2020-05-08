import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/page-header"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <PageHeader title="404: Not found" />
    <Layout>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  </>
)

export default NotFoundPage
