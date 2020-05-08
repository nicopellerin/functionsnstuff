import * as React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import PageHeader from "../../components/page-header"
import LinksChecker from "../../components/links-checker"
import Share from "../../components/share"

const LinksCheckerPage = () => {
  return (
    <>
      <SEO
        title="Og Crawler"
        image="/og-image-generator.png"
        description="Easily create and customize your og images"
      />
      <PageHeader title="Og Crawler" />
      <Layout template>
        <LinksChecker />
        <Share />
      </Layout>
    </>
  )
}

export default LinksCheckerPage
