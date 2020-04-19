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
                  <motion.svg
                    style={{
                      position: "absolute",
                      left: -15,
                      top: "26%",
                      transform: "translateY(-50%)",
                    }}
                    layoutId="techItem"
                    xmlns="http://www.w3.org/2000/svg"
                    width="5.641"
                    height="10"
                  >
                    <path
                      d="M 0.246 5.395 C 0.006 5.155 0.006 4.766 0.246 4.526 L 4.592 0.18 C 4.832 -0.06 5.221 -0.06 5.461 0.18 L 5.461 0.18 C 5.701 0.42 5.701 0.809 5.461 1.049 L 1.115 5.395 C 0.875 5.635 0.486 5.635 0.246 5.395 Z M 0.18 4.605 C 0.42 4.365 0.809 4.365 1.049 4.605 L 5.395 8.951 C 5.635 9.191 5.635 9.58 5.395 9.82 L 5.395 9.82 C 5.155 10.06 4.766 10.06 4.526 9.82 L 0.18 5.474 C -0.06 5.234 -0.06 4.845 0.18 4.605 Z"
                      transform="rotate(180 2.82 5)"
                      fill="rgba(255, 137, 170, 1.00)"
                    ></path>
                  </motion.svg>
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
