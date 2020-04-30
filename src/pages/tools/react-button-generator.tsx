import * as React from "react"
import styled from "styled-components"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import PageHeader from "../../components/page-header"
import ButtonGenerator from "../../components/button-generator/button-generator-main"
import Share from "../../components/share"

const ButtonGeneratorPage = () => {
  return (
    <>
      <SEO title="React Button Generator" />
      <PageHeader title="React Button Generator" />
      <Layout>
        <ReactWrapper>
          <ReactLogo
            src={`https://images.weserv.nl/?url=${encodeURI(
              "https://modest-jones-332c08.netlify.app/icons/react.png"
            )}&w=200`}
            alt="donut"
            width={100}
          />
        </ReactWrapper>
        <ButtonGenerator />
        <Share />
      </Layout>
    </>
  )
}

export default ButtonGeneratorPage

// Styles
const ReactWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -100px;
  margin-bottom: 50px;
  position: relative;
  z-index: 2000;
`

const ReactLogo = styled.img`
  width: 100px;
  height: 89px;
`
