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
    link: "/",
  },
  {
    title: "Javascript",
    link: "/",
  },
  {
    title: "Typescript",
    link: "/",
  },
  {
    title: "Gatsby",
    link: "/",
  },
  {
    title: "Next.js",
    link: "/",
  },
  {
    title: "GraphQL",
    link: "/",
  },
  {
    title: "Go",
    link: "/",
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
  /* padding: 10rem 0 13rem; */
`

const Title = styled.h3`
  font-size: 2.2rem;
`

const Tech = styled.aside`
  justify-self: end;
`

const TechTitle = styled.h4`
  font-size: 1.8rem;
  font-family: var(--systemFont);
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
