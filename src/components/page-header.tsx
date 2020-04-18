import * as React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { Link } from "gatsby"

import Navbar from "./navbar"

import wave from "../images/wave.svg"

interface Props {
  tech?: string
  title?: string
}

const PageHeader: React.FC<Props> = ({ tech, title }) => {
  return (
    <Wrapper bg={"/bg.png"}>
      <Container>
        <Navbar />
        <Heading>
          {tech ? (
            <Link to={`/tutorials/${tech}`}>
              <motion.img
                initial={{ opacity: 0, y: 170 }}
                animate={{ opacity: [0, 1], y: [170, 0] }}
                src={`/icons/${tech}.png`}
                width={120}
                alt={tech}
              />
            </Link>
          ) : (
            <Title
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: [0, 1], y: [50, 0] }}
            >
              {title}
            </Title>
          )}
        </Heading>
      </Container>
      <img
        src={wave}
        style={{
          position: "absolute",
          bottom: -88,
          height: 265,
          left: 0,
          width: "100%",
          pointerEvents: "none",
          zIndex: 11,
        }}
        alt="wave"
      />
    </Wrapper>
  )
}

export default PageHeader

// Styles
const Wrapper = styled.div`
  background: ${props => `url(${props.bg})`};
  background-size: cover;
  height: 39rem;
  position: relative;
  overflow: hidden;
`

const Container = styled.header`
  max-width: 80rem;
  margin: 0 auto;
  height: 100%;
`

const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 39%;
`

const Title = styled(motion.h1)`
  color: var(--textColor);
`
