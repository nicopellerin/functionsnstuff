import * as React from "react"
import styled from "styled-components"

import Card from "./card"

interface Props {
  data: any
}

const CardList: React.FC<Props> = ({ data }) => {
  return (
    <Wrapper>
      {data.length > 0 ? (
        data.map(({ node }) => (
          <Card
            title={node.frontmatter.title}
            image={node.frontmatter.cover}
            link={`tutorials/${node.frontmatter.tech}/${node.frontmatter.slug}`}
            key={node.frontmatter.slug}
          />
        ))
      ) : (
        <h3 style={{ color: "white" }}>Coming soon!</h3>
      )}
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
