import * as React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import CardList from "../../components/card-list"
import PageHeader from "../../components/page-header"
import Layout from "../../components/layout"
import Breadcrumb from "../../components/breadcrumb"
import SEO from "../../components/seo"

const TipsGatsby = () => {
  const {
    allMdx: { edges },
  } = useStaticQuery(graphql`
    {
      allMdx(
        filter: {
          frontmatter: { tech: { eq: "gatsby" }, type: { eq: "tips" } }
        }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              tech
              slug
              cover
              type
            }
          }
        }
      }
    }
  `)
  return (
    <>
      <SEO title="Gatsby - Tips" />
      <PageHeader tech="gatsby" />
      <Layout template>
        <Breadcrumb />
        <Spacer />
        <CardList data={edges} />
        <Spacer />
      </Layout>
    </>
  )
}

export default TipsGatsby

// Styles
const Spacer = styled.div`
  margin-bottom: 4rem;
`
