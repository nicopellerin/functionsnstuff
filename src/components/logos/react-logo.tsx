import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ReactLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "icons/react.png" }) {
        childImageSharp {
          fixed(quality: 100, width: 100) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  return <Img fixed={data.file.childImageSharp.fixed} />
}

export default ReactLogo
