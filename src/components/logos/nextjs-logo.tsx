import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const NextjsLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "icons/nextjs.png" }) {
        childImageSharp {
          fixed(quality: 100, width: 140) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  return <Img fixed={data.file.childImageSharp.fixed} />
}

export default NextjsLogo
