import * as React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

import CardList from "../../components/card-list"
import PageHeader from "../../components/page-header"
import Layout from "../../components/layout"
import Breadcrumb from "../../components/breadcrumb"
import SEO from "../../components/seo"

const TutorialsNextjs = () => {
  const {
    allMdx: { edges },
  } = useStaticQuery(graphql`
    {
      allMdx(filter: { frontmatter: { tech: { eq: "nextjs" } } }) {
        edges {
          node {
            id
            frontmatter {
              title
              tech
              slug
              cover
            }
          }
        }
      }
    }
  `)
  return (
    <>
      <SEO title="Next.js - Tutorials" />
      <PageHeader tech="nextjs" />
      <Layout>
        <Breadcrumb />
        <Spacer />
        <CardList data={edges} />
        <Spacer />
      </Layout>
    </>
  )
}

export default TutorialsNextjs

// Styles
const Spacer = styled.div`
  margin-bottom: 4rem;
`
