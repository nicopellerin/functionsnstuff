import * as React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import Card from "./card"

interface Props {
  tech: string
}

const CardList: React.FC<Props> = ({ tech }) => {
  const {
    allMdx: { edges },
  } = useStaticQuery(graphql`
    {
      allMdx(filter: { frontmatter: { tech: { eq: "react" } } }) {
        edges {
          node {
            id
            frontmatter {
              title
              tech
              slug
              cover
            }
          }
        }
      }
    }
  `)

  return (
    <Wrapper>
      {edges.map(({ node }) => (
        <Card
          title={node.frontmatter.title}
          image={node.frontmatter.cover}
          link={`tutorials/${node.frontmatter.tech}/${node.frontmatter.slug}`}
          key={node.frontmatter.slug}
        />
      ))}
    </Wrapper>
  )
}

export default CardList

// Styles
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 3rem;
`
