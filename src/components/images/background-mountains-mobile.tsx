import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const BackgroundMountainsMobile = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "bg_front_mobile.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1024) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return <ImgStyled fluid={data.file.childImageSharp.fluid} />
}

export default BackgroundMountainsMobile

// Styles
const ImgStyled = styled(Img)`
  position: absolute;
  width: 100%;
  z-index: -1;
  top: 30%;

  @media (max-width: 1024px) {
    top: 40%;
  }

  @media (max-width: 500px) {
    top: 62%;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`
