import React from "react"
import styled from "styled-components"
import { useMedia } from "react-use-media"

import "typeface-lora"

import Footer from "./footer"
import FooterMobile from "./footer-mobile"

import { GlobalStyles } from "../styles/global-styles"

interface Props {
  children: React.ReactNode
  template?: boolean
}

const Layout: React.FC<Props> = ({ children, template }) => {
  const isDesktop = useMedia({
    minWidth: 1024,
  })
  return (
    <Wrapper>
      <Main template={template}>{children}</Main>
      {isDesktop ? <Footer /> : <FooterMobile />}
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

  @media (max-width: 1024px) {
    padding: 8rem 2rem 8rem;
  }
`
