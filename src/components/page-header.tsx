import * as React from "react"
import { useRef, useState, useLayoutEffect } from "react"
import styled from "styled-components"
import { motion, useViewportScroll, useTransform } from "framer-motion"
import { Link } from "gatsby"

import Navbar from "./navbar"

interface Props {
  tech?: string
  title?: string
}

const PageHeader: React.FC<Props> = ({ tech, title }) => {
  const [elementTop, setElementTop] = useState(0)
  const { scrollY } = useViewportScroll()
  const ref = useRef()

  const y = useTransform(scrollY, [elementTop, elementTop + 4], [0, -0.3], {
    clamp: false,
  })

  const y2 = useTransform(scrollY, [elementTop, elementTop + 2], [0, -0.3], {
    clamp: false,
  })

  useLayoutEffect(() => {
    const element = ref.current
    setElementTop(element.offsetTop)
  }, [ref])

  return (
    <Wrapper bg={""} ref={ref}>
      <motion.img
        src={"/bg_back.png"}
        initial={{ scale: 1.02 }}
        animate={{
          // opacity: 0.8,
          rotate: [-3, 3],
        }}
        style={{ position: "absolute", top: 0, width: "100%", zIndex: -2, y }}
      />
      <motion.img
        src={"/bg_front.png"}
        style={{
          position: "absolute",
          top: 0,
          width: "100%",
          zIndex: -1,
          y: y2,
        }}
      />
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
  /* background-attachment: fixed; */
  height: 42rem;
  position: relative;
  overflow: hidden;

  @media (min-width: 1500px) {
    background-position-y: 20%;
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
