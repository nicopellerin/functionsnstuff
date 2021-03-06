import * as React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import PageHeader from "../../components/page-header"
import OgImageGenerator from "../../components/og-image-generator"
import Share from "../../components/share"

const OgImageGeneratorPage = () => {
  return (
    <>
      <SEO
        title="Og:image Generator"
        image="/og-image-generator.png"
        description="Easily create and customize your og images"
      />
      <PageHeader title="Og:image Generator" />
      <Layout template>
        <OgImageGenerator />
        <Share />
      </Layout>
    </>
  )
}

export default OgImageGeneratorPage
