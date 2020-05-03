import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const BackgroundMountainsDesktop = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "bg_front2.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return <ImgStyled fluid={data.file.childImageSharp.fluid} />
}

export default BackgroundMountainsDesktop

// Styles
const ImgStyled = styled(Img)`
  position: absolute;
  top: 20%;
  width: 100vw;
  z-index: -1;
  overflow: visible;

  @media (max-width: 1024px) {
    display: none;
  }
`
