import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Main from "../components/main"
import Header from "../components/header"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Header />
    <Layout>
      <Main />
    </Layout>
  </>
)

export default IndexPage
