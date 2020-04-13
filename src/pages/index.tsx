import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Main } from "../components/main"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Main />
  </Layout>
)

export default IndexPage
