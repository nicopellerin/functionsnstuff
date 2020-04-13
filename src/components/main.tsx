import * as React from "react"
import styled from "styled-components"

export const Main = () => {
  return (
    <Wrapper>
      <div>
        <div style={{ marginBottom: "6rem" }}>
          <Title>Welcome to helloworldnstuff</Title>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div>
          <Title>Learn by building</Title>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <Tech>
        <TechTitle>Technology</TechTitle>
        <TechList>
          <TechListItem>React</TechListItem>
          <TechListItem>NodeJs</TechListItem>
          <TechListItem>Javascript</TechListItem>
          <TechListItem>Typescript</TechListItem>
          <TechListItem>Framer Motion</TechListItem>
          <TechListItem>Gatsby</TechListItem>
          <TechListItem>Next.js</TechListItem>
          <TechListItem>GraphQL</TechListItem>
          <TechListItem>Go</TechListItem>
          <TechListItem>MongoDB</TechListItem>
        </TechList>
      </Tech>
    </Wrapper>
  )
}

// Styles
const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr auto;
  justify-items: center;
  grid-gap: 10rem;
  max-width: 80rem;
  margin: 0 auto;
  padding: 8rem 0;
`

const Title = styled.h3`
  font-size: 1.8rem;
`

const Tech = styled.aside`
  justify-self: end;
`

const TechTitle = styled.h4`
  font-size: 1.8rem;
`

const TechList = styled.ul`
  list-style: none;
  padding: 0;
`

const TechListItem = styled.li`
  font-family: "Lora", serif;
  font-size: 1.6rem;
  font-weight: 500;

  &:not(:last-of-type) {
    margin-bottom: 1.5rem;
  }
`
