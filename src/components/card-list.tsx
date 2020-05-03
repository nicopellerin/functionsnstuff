import * as React from "react"
import styled from "styled-components"

import Card from "./card"

interface Props {
  data: [CardNode]
}

interface CardNode {
  node: {
    frontmatter: {
      tech: string
      title: string
      cover: string
      type: string
      slug: string
    }
  }
}

const CardList: React.FC<Props> = ({ data }) => {
  return (
    <Wrapper>
      {data.length > 0 ? (
        data.map(({ node }: CardNode) => (
          <Card
            tech={node.frontmatter.tech}
            title={node.frontmatter.title}
            image={node.frontmatter.cover}
            link={`${node.frontmatter.type}/${node.frontmatter.tech}/${node.frontmatter.slug}`}
            key={node.frontmatter.slug}
          />
        ))
      ) : (
        <NoCardsWrapper>
          <ComingSoonText>Coming soon!</ComingSoonText>
        </NoCardsWrapper>
      )}
    </Wrapper>
  )
}

export default CardList

// Styles
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 4rem;

  @media (max-width: 1024px) {
    justify-items: center;
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`

const NoCardsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const ComingSoonText = styled.h3`
  font-size: 3.8rem;
  color: var(--primaryColor);
  margin: 4rem 0;
`
