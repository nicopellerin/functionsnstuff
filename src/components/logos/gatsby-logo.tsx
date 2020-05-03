import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const GatsbyLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "icons/gatsby.png" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  return <Img fixed={data.file.childImageSharp.fixed} />
}

export default GatsbyLogo
