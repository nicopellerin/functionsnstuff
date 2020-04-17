import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader } from "../components/page-header"
import { Card } from "../components/card"

import cover from "../images/cover-react.jpg"

const SecondPage = () => (
  <>
    <SEO title="Page two" />
    <PageHeader />
    <Layout>
      <CardList>
        {[1, 2, 3, 4].map(i => (
          <Card
            title="Build a React slider with Framer Motion"
            image={cover}
            key={i}
          />
        ))}
      </CardList>
    </Layout>
  </>
)

export default SecondPage

// Styles
const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 3rem;
`
