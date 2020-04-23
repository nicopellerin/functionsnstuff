import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/page-header"
import Breadcrumb from "../components/breadcrumb"
import Spacer from "../components/spacer"
import Code from "../components/code"
import Share from "../components/share"

const shortcodes = { SEO, Spacer, pre: Code, Share }

const TipsTemplate = ({ data: { mdx } }) => (
  <>
    <PageHeader tech={mdx.frontmatter.tech} />
    <Layout>
      <Breadcrumb />
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>
      <Share />
    </Layout>
  </>
)

export const pageQuery = graphql`
  query TipsQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        tech
      }
    }
  }
`

export default TipsTemplate
