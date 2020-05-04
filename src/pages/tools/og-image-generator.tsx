import * as React from "react"
import styled from "styled-components"

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
        image="/og-button-generator-react2.png"
        description="Easily create and customize your og:image"
      />
      <PageHeader title="Og:image Generator" />
      <Layout template>
        <ReactWrapper>
          <ReactLogo
            src={`https://images.weserv.nl/?url=${encodeURI(
              "https://functionsnstuff.netlify.app/icons/react.png"
            )}&w=200`}
            alt="donut"
            width={100}
          />
        </ReactWrapper>
        <OgImageGenerator />
        <Share />
      </Layout>
    </>
  )
}

export default OgImageGeneratorPage

// Styles
const ReactWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -100px;
  margin-bottom: 50px;
  position: relative;
  z-index: 2000;

  @media (max-width: 500px) {
    margin-top: -30px;
  }
`

const ReactLogo = styled.img`
  width: 100px;
  height: 89px;

  @media (max-width: 500px) {
    width: 90px;
    height: 79px;
  }
`
