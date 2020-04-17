import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Main } from "../components/main"
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
