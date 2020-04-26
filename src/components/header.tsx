import * as React from "react"
import * as THREE from "three"
import { useState, Suspense } from "react"
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "gatsby"

import Navbar from "./navbar"
import Buddy from "./buddy"
import { Canvas } from "react-three-fiber"
import Particles from "./particles"
import Stars from "./stars"

const Header = () => {
  const [toggleBrowser, setToggleBrowser] = useState(false)
  const [selected, setSelected] = useState(null)

  const techList = [
    {
      tech: "React",
      logo: "/icons/react.png",
      link: "/tutorials/react",
      width: 100,
    },
    {
      tech: "GraphQL",
      logo: "/icons/graphql.png",
      link: "/tutorials/graphql",
      width: 90,
    },
    {
      tech: "Golang",
      logo: "/icons/golang.png",
      link: "/tutorials/golang",
      width: 160,
    },
    {
      tech: "NodeJS",
      logo: "/icons/nodejs.png",
      link: "/tutorials/nodejs",
      width: 120,
    },
    {
      tech: "Javascript",
      logo: "/icons/javascript.png",
      link: "/tutorials/javascript",
      width: 90,
    },
    {
      tech: "Typescript",
      logo: "/icons/typescript.svg",
      link: "/tutorials/typescript",
      width: 90,
    },
  ]

  const terminalVariants = {
    hidden: {},
    show: {
      transition: {
        type: "spring",
        damping: 100,
        stiffness: 300,
        staggerChildren: 0.07,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 30,
      },
    },
  }

  return (
    <Wrapper>
      <React.Suspense fallback={null}>
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
          <Particles count={150} />
          <Stars count={1250} />
        </Canvas>
      </React.Suspense>
      <motion.img
        src={"/bg_front2.webp"}
        alt="background mountains"
        style={{
          position: "absolute",
          top: "20%",
          width: "100vw",
          zIndex: -1,
        }}
      />
      <Container>
        <Navbar />
        <TerminalWrapper
          terminal={"/terminal.webp"}
          initial={{ y: 400, x: "-50%" }}
          animate={{ y: toggleBrowser ? 310 : 10 }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
        >
          <button
            onClick={() => setToggleBrowser(prevState => !prevState)}
            style={{
              position: "absolute",
              left: 49,
              top: 15,
              height: 20,
              background: "transparent",
              color: "transparent",
              border: "none",
              zIndex: 3000,
              outline: "none",
              cursor: "pointer",
            }}
          >
            Click
          </button>
          <TerminalContainer
            variants={terminalVariants}
            initial="hidden"
            animate="show"
          >
            <motion.h3
              style={{
                fontSize: 16,
                position: "absolute",
                fontWeight: 500,
                fontFamily: "menlo",
                color: "lightgreen",
                left: "50%",
                letterSpacing: 5,
                top: 90,
                display: "flex",
                alignItems: "center",
              }}
              initial={{ opacity: 0, x: "-50%" }}
              animate={{ opacity: [0, 1], y: [20, 0] }}
              transition={{ delay: 0.4 }}
            >
              Start learning
              <motion.span
                animate={{ opacity: [0, 1] }}
                transition={{ yoyo: Infinity }}
                style={{
                  display: "inline-block",
                  fontSize: 28,
                  lineHeight: 1,
                  marginLeft: 1,
                }}
              >
                &#9646;
              </motion.span>
            </motion.h3>
            <IconsList>
              {techList.map(({ tech, logo, link, width }) => (
                <Link key={tech} to={link}>
                  <TechWrapper
                    whileHover={{ scale: [1, 1.04, 1.02], y: [0, -5] }}
                  >
                    <motion.img
                      src={logo}
                      alt="react"
                      width={width}
                      variants={itemVariants}
                      style={{ cursor: "pointer" }}
                      onMouseEnter={() => setSelected(tech)}
                      onMouseLeave={() => setSelected(null)}
                    />
                    {selected === tech && <TechTitle>{tech}</TechTitle>}
                  </TechWrapper>
                </Link>
              ))}
            </IconsList>
          </TerminalContainer>
        </TerminalWrapper>
        <motion.div
          initial={{ opacity: 0, x: "-50%" }}
          animate={{ opacity: [0, 1] }}
          style={{ position: "absolute", top: "20px", left: "50%" }}
          transition={{ delay: 1 }}
        >
          {toggleBrowser && (
            <motion.div>
              <Buddy toggleBrowser={toggleBrowser} />
            </motion.div>
          )}
        </motion.div>
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

export default Header

// Styles
const Wrapper = styled.div`
  height: 70rem;
  position: relative;
  overflow: hidden;
`

const Container = styled.header`
  max-width: 100rem;
  margin: 0 auto;
`

const TerminalWrapper = styled(motion.div)`
  background: ${props => `url(${props.terminal})`};
  background-size: cover;
  width: 100rem;
  height: 46rem;
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;

  @media (max-width: 1440px) {
    width: 90rem;
  }
`

const TerminalContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 2000;
`

const IconsList = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 95%;
  height: 100%;
  margin: 0 auto;
`

const TechWrapper = styled(motion.div)`
  display: grid;
  place-items: center;
  position: relative;
  will-change: transform;
`

const TechTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--primaryColor);
  position: absolute;
  bottom: -4.5rem;
`
