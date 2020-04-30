import * as React from "react"

import SEO from "../../components/seo"
import PageHeader from "../../components/page-header"
import Layout from "../../components/layout"
import Spacer from "../../components/spacer"
import Card from "../../components/card"

const toolsData = [{ title: "React Button Generator" }]

const ToolsPage = () => {
  return (
    <>
      <SEO title="Tools" />
      <PageHeader title="Tools" />
      <Layout>
        <Card
          title="React Button Generator"
          image={"/card1.webp"}
          link="/tools/react-button-generator"
          tech="react"
        />
        <Spacer />
      </Layout>
    </>
  )
}

export default ToolsPage
