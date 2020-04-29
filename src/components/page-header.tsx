import * as React from "react"
import { useRef, useState, useLayoutEffect } from "react"
import styled from "styled-components"
import {
  motion,
  useViewportScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion"
import { Link } from "gatsby"

import Navbar from "./navbar"
import NavbarMobile from "./navbar-mobile"
import BuddyHeader from "./buddy-header"

interface Props {
  tech?: string
  title?: string
  randomTip?: boolean
}

const PageHeader: React.FC<Props> = ({ tech, title, randomTip }) => {
  const isMobile = (width = 1024) => {
    let mql =
      typeof window !== "undefined" &&
      window.matchMedia(`(max-width: ${width}px)`)
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        typeof window !== "undefined" && window.navigator.userAgent
      ) &&
      mql.matches
    ) {
      return true
    }
    return false
  }

  const [elementTop, setElementTop] = useState(0)
  const { scrollY } = useViewportScroll()
  const ref = useRef()

  const y2 = useTransform(scrollY, [elementTop, elementTop + 2], [0, -0.3], {
    clamp: false,
  })

  useLayoutEffect(() => {
    const element = ref.current
    setElementTop(element.offsetTop)
  }, [ref])

  return (
    <Wrapper ref={ref}>
      <BackgroundMountainsMobile
        src={"/bg_front_mobile.png"}
        alt="background mountains"
      />
      <BackgroundMountainsDesktop
        src={"/bg_front2.webp"}
        alt="background mountains"
        style={{
          position: "absolute",
          top: 0,
          width: "100%",
          zIndex: -1,
          y: y2,
        }}
      />
      <Container>
        <NavbarMobile />
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
              animate={{ opacity: randomTip ? 0 : [0, 1], y: [50, 0] }}
            >
              {title}
            </Title>
          )}
        </Heading>
        <AnimatePresence>
          {randomTip && (
            <motion.div
              initial={{ position: "absolute", x: "-50%", y: 200 }}
              animate={{ y: [200, -405] }}
              style={{
                left: "50%",
              }}
            >
              <BuddyHeader toggleBrowser={randomTip} />
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
      <Wave
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="235"
        viewBox={"0 115 1483 1"}
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M 0 140.25 L 61.792 162.216 C 123.583 184.594 247.167 227.906 370.75 217.284 C 494.333 206.25 617.917 140.25 741.5 134.784 C 865.083 128.906 988.667 184.594 1112.25 189.75 C 1235.833 194.906 1359.417 151.594 1421.208 129.216 L 1483 107.25 L 1483 371.25 L 0 371.25 Z"
          fill="#080808"
          strokeWidth="1.02"
          stroke="hsl(0, 0%, 10%)"
          strokeMiterlimit="10"
        ></path>
      </Wave>
      <WaveMobile
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="235"
        viewBox={"0 -165 1483 1"}
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M 0 140.25 L 61.792 162.216 C 123.583 184.594 247.167 227.906 370.75 217.284 C 494.333 206.25 617.917 140.25 741.5 134.784 C 865.083 128.906 988.667 184.594 1112.25 189.75 C 1235.833 194.906 1359.417 151.594 1421.208 129.216 L 1483 107.25 L 1483 371.25 L 0 371.25 Z"
          fill="#080808"
          strokeWidth="1.02"
          stroke="hsl(0, 0%, 10%)"
          strokeMiterlimit="10"
        ></path>
      </WaveMobile>
    </Wrapper>
  )
}

export default PageHeader

// Styles
const Wrapper = styled.div`
  height: 45rem;
  position: relative;
  overflow: hidden;

  @media (min-width: 1500px) {
    background-position-y: 20%;
    height: 46rem;
  }
`

const BackgroundMountainsDesktop = styled(motion.img)`
  position: absolute;
  top: 20%;
  width: 100vw;
  z-index: -1;

  @media (max-width: 768px) {
    display: none;
  }
`

const BackgroundMountainsMobile = styled(motion.img)`
  position: absolute;
  width: 100%;
  z-index: -1;
  top: 30%;

  @media (max-width: 768px) {
    top: 40%;
  }

  @media (max-width: 500px) {
    top: 62%;
  }

  @media (min-width: 768px) {
    display: none;
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
  height: 35%;

  @media (max-width: 1024px) {
    height: 65%;
  }
`

const Title = styled(motion.h1)`
  color: var(--primaryColor);
  text-align: center;
`

const Wave = styled.svg`
  position: absolute;
  height: 265px;
  bottom: 0;
  left: 0;
  pointer-events: none;
  z-index: 11;

  @media (max-width: 768px) {
    display: none;
  }
`

const WaveMobile = styled.svg`
  position: absolute;
  height: 265px;
  bottom: 0;
  left: 0;
  pointer-events: none;
  z-index: 11;

  @media (min-width: 768px) {
    display: none;
  }
`
