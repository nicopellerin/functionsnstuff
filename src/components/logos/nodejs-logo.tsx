import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const NodejsLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "icons/nodejs.png" }) {
        childImageSharp {
          fixed(quality: 100, width: 120) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  return <Img fixed={data.file.childImageSharp.fixed} />
}

export default NodejsLogo
