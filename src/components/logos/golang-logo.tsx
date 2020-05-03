import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const GolangLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "icons/golang.png" }) {
        childImageSharp {
          fixed(quality: 100, width: 160) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  return <Img fixed={data.file.childImageSharp.fixed} />
}

export default GolangLogo
