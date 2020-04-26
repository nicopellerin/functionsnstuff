import React from "react"
import styled from "styled-components"

import "typeface-lora"

import Footer from "./footer"

import { GlobalStyles } from "../styles/global-styles"

interface Props {
  children: React.ReactNode
  template?: boolean
}

const Layout: React.FC<Props> = ({ children, template }) => {
  return (
    <Wrapper>
      <Main template={template}>{children}</Main>
      <Footer />
      <GlobalStyles />
    </Wrapper>
  )
}

export default Layout

// Styles
const Wrapper = styled.div`
  background: #080808;
`

const Main = styled.main`
  max-width: ${(props: { template: boolean }) =>
    props.template ? "100rem" : "80rem"};
  margin: 0 auto;
  padding: 10rem 0 15rem;
  position: relative;
`
