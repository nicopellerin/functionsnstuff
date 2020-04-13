import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"

import { GlobalStyles } from "../styles/global-styles"

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
      <Header />
      <div>
        <main>{children}</main>
      </div>
      <GlobalStyles />
    </Wrapper>
  )
}

export default Layout

// Styles
const Wrapper = styled.div``
