import * as React from "react"
import styled from "styled-components"

import SEO from "../../components/seo"
import PageHeader from "../../components/page-header"
import Layout from "../../components/layout"
import Spacer from "../../components/spacer"
import Card from "../../components/card"

const ToolsPage = () => {
  return (
    <>
      <SEO title="Tools" />
      <PageHeader title="Tools" />
      <Layout template>
        <Wrapper>
          <Card
            title="Og Crawler"
            image={"/card-ogcrawler.webp"}
            link="/tools/og-crawler"
            tech="golang"
          />
          <Card
            title="Og:image Generator"
            image={"/card-oig.webp"}
            link="/tools/og-image-generator"
            tech="javascript"
          />
          <Card
            title="React Button Generator"
            image={"/card-rbg.webp"}
            link="/tools/react-button-generator"
            tech="react"
          />
          <Card
            title="React Card Generator"
            image={"/card-rcg.webp"}
            link="/tools/react-card-generator"
            tech="react"
          />
        </Wrapper>
        <Spacer />
      </Layout>
    </>
  )
}

export default ToolsPage

// Styles
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 4rem;

  @media (max-width: 1024px) {
    justify-items: center;
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`
