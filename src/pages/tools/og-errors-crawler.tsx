import * as React from "react"
import { useState } from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import PageHeader from "../../components/page-header"
import OgErrorsChecker from "../../components/og-errors-crawler"
import Share from "../../components/share"

const OgErrorsPage = () => {
  const [ogCrawler, setOgCrawler] = useState(false)
  return (
    <>
      <SEO
        title="Open Graph + Errors Crawler"
        image="/og-image1.png"
        description="Crawl your website to receive Open Graph information and errors for every page"
      />
      <PageHeader ogCrawler={ogCrawler} title="Open Graph + Errors Crawler" />
      <Layout template>
        <OgErrorsChecker setOgCrawler={setOgCrawler} />
        <Share />
      </Layout>
    </>
  )
}

export default OgErrorsPage
