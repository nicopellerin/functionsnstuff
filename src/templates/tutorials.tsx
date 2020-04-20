import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/page-header"
import Breadcrumb from "../components/breadcrumb"
import Spacer from "../components/spacer"

const shortcodes = { SEO, Spacer }

const TutorialsTemplate = ({ data: { mdx } }) => (
  <>
    <PageHeader tech={mdx.frontmatter.tech} />
    <Layout>
      <Breadcrumb />
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  </>
)

export const pageQuery = graphql`
  query TutorialQuery($id: String) {
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

export default TutorialsTemplate
