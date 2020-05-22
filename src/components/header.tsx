import * as React from "react"
import { useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { Link } from "gatsby"

import Navbar from "./navbar"
import NavbarMobile from "./navbar-mobile"
import Buddy from "./buddy"

const Header = () => {
  const [toggleBrowser, setToggleBrowser] = useState(false)
  const [selected, setSelected] = useState("")

  const techList = [
    {
      tech: "React",
      logo: "/icons/react.png",
      logoWebp: "/icons/react.webp",
      link: "/tips/react",
      width: 100,
    },
    {
      tech: "GraphQL",
      logo: "/icons/graphql.png",
      logoWebp: "/icons/graphql.webp",
      link: "/tips/graphql",
      width: 90,
    },
    {
      tech: "Golang",
      logo: "/icons/golang.png",
      logoWebp: "/icons/golang.webp",
      link: "/tips/golang",
      width: 160,
    },
    {
      tech: "Node.js",
      logo: "/icons/nodejs.png",
      logoWebp: "/icons/nodejs.webp",
      link: "/tips/nodejs",
      width: 120,
    },
    {
      tech: "Javascript",
      logo: "/icons/javascript.png",
      logoWebp: "/icons/javascript.webp",
      link: "/tips/javascript",
      width: 90,
    },
    {
      tech: "Typescript",
      logo: "/icons/typescript.png",
      logoWebp: "/icons/typescript.webp",
      link: "/tips/typescript",
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
      <picture>
        <source srcSet="/bg_front_mobile.webp" type="image/webp" />
        <source srcSet="/bg_front_mobile.png" type="image/png" />
        <BackgroundMountainsMobile
          src={"/bg_front_mobile.png"}
          alt="background mountains"
        />
      </picture>
      <picture>
        <source srcSet="/bg_front2.webp" type="image/webp" />
        <source srcSet="/bg_front2.png" type="image/png" />
        <BackgroundMountainsDesktop
          src={"/bg_front2.png"}
          alt="background mountains"
        />
      </picture>
      <Container>
        <NavbarMobile />
        <Navbar />
        <TerminalWrapper
          terminal={"/terminal.webp"}
          initial={{ y: 200, x: "-50%" }}
          animate={{ y: toggleBrowser ? 310 : 10 }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 100,
            delay: 0.2,
          }}
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
              {techList.map(
                ({ tech, logo, logoWebp, link, width, component }) => (
                  <Link key={tech} to={link}>
                    <TechWrapper
                      whileHover={{ scale: [1, 1.04, 1.02], y: [0, -5] }}
                    >
                      <picture>
                        <source srcSet={logoWebp} type="image/webp" />
                        <source srcSet={logoWebp} type="image/png" />
                        <motion.img
                          src={logo}
                          alt={tech}
                          width={width}
                          variants={itemVariants}
                          style={{ cursor: "pointer" }}
                          onMouseEnter={() => setSelected(tech)}
                          onMouseLeave={() => setSelected("")}
                        />
                      </picture>
                      {selected === tech && <TechTitle>{tech}</TechTitle>}
                    </TechWrapper>
                  </Link>
                )
              )}
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

export default Header

// Styles
const Wrapper = styled.div`
  height: 70rem;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 40rem;
  }
`

const Container = styled.header`
  max-width: 100rem;
  margin: 0 auto;
`

const TerminalWrapper = styled(motion.div)`
  background: ${(props: { terminal: string }) => `url(${props.terminal})`};
  background-size: cover;
  width: 100rem;
  height: 46rem;
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;

  @media (max-width: 950px) {
    display: none;
  }

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

const BackgroundMountainsDesktop = styled(motion.img)`
  position: absolute;
  top: 20%;
  width: 100vw;
  z-index: -1;

  @media (max-width: 950px) {
    top: 40%;
  }

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
    top: 50%;
  }

  @media (max-width: 500px) {
    top: 62%;
  }

  @media (min-width: 768px) {
    display: none;
  }
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
