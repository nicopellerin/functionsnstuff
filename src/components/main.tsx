import * as React from "react"
import { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { motion, AnimateSharedLayout } from "framer-motion"

const techItems = [
  {
    title: "React",
    link: "/tutorials/react",
  },
  {
    title: "NodeJS",
    link: "/tutorials/nodejs",
  },
  {
    title: "Javascript",
    link: "/tutorials/javascript",
  },
  {
    title: "Typescript",
    link: "/tutorials/typescript",
  },
  {
    title: "Gatsby",
    link: "/tutorials/gatsby",
  },
  {
    title: "Next.js",
    link: "/tutorials/nextjs",
  },
  {
    title: "GraphQL",
    link: "/tutorials/graphql",
  },
  {
    title: "Go",
    link: "/tutorials/go",
  },
]

const Main = () => {
  const [show, setShow] = useState(null)

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
        <TechList onMouseLeave={() => setShow(null)}>
          <AnimateSharedLayout>
            {techItems.map(({ title, link }, i) => (
              <TechListItem key={title} onMouseEnter={() => setShow(i)}>
                <Link to={link}>{title}</Link>
                {show === i && (
                  <motion.div
                    layoutId="techItem"
                    style={{
                      position: "absolute",
                      left: -17,
                      background: "#FF88AA",
                      height: 8,
                      width: 8,
                      borderRadius: "100%",
                      top: "26%",
                      transform: "translateY(-50%)",
                    }}
                  />
                )}
              </TechListItem>
            ))}
          </AnimateSharedLayout>
        </TechList>
      </Tech>
    </Wrapper>
  )
}

export default Main

// Styles
const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr auto;
  justify-items: center;
  grid-gap: 10rem;
  max-width: 80rem;
  margin: 0 auto;
`

const Title = styled.h3`
  font-size: 2.2rem;
`

const Tech = styled.aside`
  justify-self: end;
`

const TechTitle = styled.h4`
  font-size: 1.8rem;
  font-weight: 700;
  font-family: var(--systemFont);
  color: var(--primaryColor);
`

const TechList = styled.ul`
  list-style: none;
  padding: 0;
`

const TechListItem = styled.li`
  font-family: "Lora", serif;
  font-size: 1.6rem;
  font-weight: 500;
  position: relative;

  &:not(:last-of-type) {
    margin-bottom: 1.8rem;
  }
`
