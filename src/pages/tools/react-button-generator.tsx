import * as React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import PageHeader from "../../components/page-header"
import ButtonGenerator from "../../components/button-gen"
import Share from "../../components/share"
import Spacer from "../../components/spacer"

const ButtonGeneratorPage = () => {
  return (
    <>
      <SEO title="React Button Generator" />
      <PageHeader title="React Button Generator" />
      <Layout>
        <ButtonGenerator />
        <Share />
        {/* <Spacer /> */}
      </Layout>
    </>
  )
}

export default ButtonGeneratorPage
