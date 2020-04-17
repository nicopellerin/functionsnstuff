import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"

import { GlobalStyles } from "../styles/global-styles"
import { Footer } from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Wrapper>
      <div>
        <Main>{children}</Main>
      </div>
      <Footer />
      <GlobalStyles />
    </Wrapper>
  )
}

export default Layout

// Styles
const Wrapper = styled.div``

const Main = styled.main`
  max-width: 80rem;
  margin: 0 auto;
  padding: 10rem 0 15rem;
`
