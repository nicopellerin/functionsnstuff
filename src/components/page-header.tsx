import * as React from "react"
import * as THREE from "three"
import { useRef, useState, useLayoutEffect } from "react"
import { Canvas } from "react-three-fiber"
import styled from "styled-components"
import {
  motion,
  useViewportScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion"
import { Link } from "gatsby"
import { useMedia } from "react-use-media"

import Navbar from "./navbar"
import NavbarMobile from "./navbar-mobile"
import BuddyHeader from "./buddy-header"
import Stars from "./stars"
import Particles from "./particles"

interface Props {
  tech?: string
  title?: string
  randomTip?: boolean
}

const PageHeader: React.FC<Props> = ({ tech, title, randomTip }) => {
  const isMobile =
    typeof window !== "undefined"
      ? /iPhone|iPad|iPod|Android/i.test(window.navigator.userAgent)
      : null

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
    <Wrapper ref={ref}>
      {isMobile ? (
        <div
          style={{ position: "absolute", top: 0, width: "100%", zIndex: -2 }}
        >
          <img src={"/bg_back.png"} />
        </div>
      ) : (
        <Canvas
          concurrent
          camera={{ fov: 10000, position: [0, 0, 30], near: 0.01, far: 10000 }}
          style={{ position: "absolute", top: 0, width: "100%", zIndex: -2 }}
          onCreated={({ gl }) => {
            gl.toneMapping = THREE.Uncharted2ToneMapping
            gl.setClearColor(new THREE.Color("#020207"))
          }}
        >
          >
          <React.Suspense fallback={null}>
            <Particles count={150} />
            <Stars count={1250} />
          </React.Suspense>
        </Canvas>
      )}
      {isMobile ? (
        <BackgroundMountainsMobile
          src={"/bg_front2.webp"}
          alt="background mountains"
        />
      ) : (
        <motion.img
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
      )}
      <Container>
        {isMobile ? <NavbarMobile /> : <Navbar />}
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
  height: 42rem;
  position: relative;
  overflow: hidden;

  @media (min-width: 1500px) {
    background-position-y: 20%;
    height: 46rem;
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

  @media (max-width: 1024px) {
    height: 65%;
  }
`

const Title = styled(motion.h1)`
  color: var(--primaryColor);
  text-align: center;
`
