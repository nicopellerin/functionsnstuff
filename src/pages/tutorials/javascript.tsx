import * as React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import CardList from "../../components/card-list"
import PageHeader from "../../components/page-header"
import Layout from "../../components/layout"
import Breadcrumb from "../../components/breadcrumb"
import SEO from "../../components/seo"

const TutorialsJavascript = () => {
  const {
    allMdx: { edges },
  } = useStaticQuery(graphql`
    {
      allMdx(filter: { frontmatter: { tech: { eq: "javascript" } } }) {
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
      <SEO title="Javascript - Tutorials" />
      <PageHeader tech="javascript" />
      <Layout>
        <Breadcrumb />
        <Spacer />
        <CardList data={edges} />
        <Spacer />
      </Layout>
    </>
  )
}

export default TutorialsJavascript

// Styles
const Spacer = styled.div`
  margin-bottom: 4rem;
`
