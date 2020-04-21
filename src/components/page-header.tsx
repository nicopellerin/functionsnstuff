import * as React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { Link } from "gatsby"

import Navbar from "./navbar"

interface Props {
  tech?: string
  title?: string
}

const PageHeader: React.FC<Props> = ({ tech, title }) => {
  return (
    <Wrapper bg={"/bg8.png"}>
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
              <span
                style={{ position: "absolute", left: -9999 }}
              >{`${tech} tutorials`}</span>
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
        src={"/wave.svg"}
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
  height: 42rem;
  position: relative;
  overflow: hidden;

  @media (min-width: 1500px) {
    background-position-y: 15%;
    height: 46rem;
  }
`

const Container = styled.header`
  max-width: 100rem;
  margin: 0 auto;
  height: 100%;
`

const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40%;

  @media (min-width: 1500px) {
    height: 46%;
  }
`

const Title = styled(motion.h1)`
  color: var(--primaryColor);
`
