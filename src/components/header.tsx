import * as React from "react"
import { useState } from "react"
import styled from "styled-components"
import { motion, AnimateSharedLayout } from "framer-motion"
import { Link } from "gatsby"
import ReactTooltip from "react-tooltip"
import Lottie from "react-lottie"

import bg from "../images/hero.png"
import terminal from "../images/terminal.png"
import logo from "../images/logo.png"
import reactLogo from "../images/icons/react.png"
import graphqlLogo from "../images/icons/graphql.png"
import goLogo from "../images/icons/go.png"
import nodeLogo from "../images/icons/nodejs.png"
import jsLogo from "../images/icons/js.png"
import tsLogo from "../images/icons/typescript.svg"
import wave from "../images/wave.svg"

import anim from "../anim-funny.json"

const menuItems = [
  {
    title: "Tutorials",
    link: "/",
  },
  {
    title: "Tips",
    link: "/",
  },
  {
    title: "Contact",
    link: "/",
  },
]

const Header = () => {
  const [show, setShow] = useState(null)
  const [toggleBrowser, setToggleBrowser] = useState(false)

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: anim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  return (
    <Wrapper bg={bg}>
      <Container>
        <img src={logo} alt="logo" width={267} />
        <Menu>
          <MenuList onMouseLeave={() => setShow(null)}>
            <AnimateSharedLayout>
              {menuItems.map(({ title, link }, i) => (
                <>
                  <MenuListItem key={title} onMouseEnter={() => setShow(i)}>
                    <Link to={link}>{title}</Link>
                    {show === i && (
                      <motion.div
                        layoutId="menuItem"
                        style={{
                          position: "absolute",
                          left: 0,
                          bottom: -5,
                          background: "var(--menuColor)",
                          height: 2,
                          width: "100%",
                        }}
                      />
                    )}
                  </MenuListItem>
                </>
              ))}
            </AnimateSharedLayout>
          </MenuList>
        </Menu>
        <TerminalWrapper
          terminal={terminal}
          initial={{ y: 400, x: "-50%" }}
          animate={{ y: toggleBrowser ? 300 : 20 }}
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
              border: "none",
              zIndex: 3000,
              outline: "none",
              cursor: "pointer",
            }}
          ></button>
          <TerminalContainer>
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
              <motion.div
                whileHover={{ scale: 1.1 }}
                style={{ cursor: "pointer" }}
              >
                <motion.img
                  src={reactLogo}
                  alt="react"
                  width={75}
                  animate={{
                    y: [200, 10],
                    opacity: [0, 1],
                    transition: { delay: 0.1 },
                  }}
                  data-tip="React"
                />
              </motion.div>
              <motion.img
                src={graphqlLogo}
                alt="react"
                width={70}
                animate={{
                  y: [200, 10],
                  opacity: [0, 1],
                  transition: { delay: 0.2 },
                }}
                whileHover={{ scale: 1.1 }}
                data-tip="GraphQL"
              />
              <motion.img
                src={goLogo}
                alt="react"
                width={115}
                animate={{
                  y: [200, 10],
                  opacity: [0, 1],
                  transition: { delay: 0.3 },
                }}
                whileHover={{ scale: 1.1 }}
                data-tip="Go"
              />
              <motion.img
                src={nodeLogo}
                alt="react"
                width={115}
                animate={{
                  y: [200, 10],
                  opacity: [0, 1],
                  transition: { delay: 0.4 },
                }}
                whileHover={{ scale: 1.1 }}
                data-tip="NodeJS"
              />
              <motion.img
                src={jsLogo}
                alt="react"
                width={75}
                animate={{
                  y: [200, 10],
                  opacity: [0, 1],
                  transition: { delay: 0.5 },
                }}
                whileHover={{ scale: 1.1 }}
                data-tip="Javascript"
              />
              <motion.img
                src={tsLogo}
                alt="react"
                width={75}
                animate={{
                  y: [200, 10],
                  opacity: [0, 1],
                  transition: { delay: 0.6 },
                }}
                whileHover={{ scale: 1.1 }}
                data-tip="Typescript"
              />
              <ReactTooltip />
            </IconsList>
          </TerminalContainer>
        </TerminalWrapper>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1] }}
          style={{ position: "absolute", top: "20%", left: "38%" }}
          transition={{ delay: 1 }}
        >
          <Lottie
            options={defaultOptions}
            height={350}
            width={350}
            isPaused={!toggleBrowser}
          />
        </motion.div>
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

export default Header

// Styles
const Wrapper = styled.div`
  background: ${props => `url(${props.bg})`};
  background-size: cover;
  height: 62rem;
  position: relative;
  overflow: hidden;
`

const Container = styled.header`
  max-width: 80rem;
  margin: 0 auto;
  padding: 4rem 0;
  display: flex;
  justify-content: space-between;
`

const Menu = styled.nav`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`

const MenuList = styled.ul`
  display: flex;
  list-style: none;
`

const MenuListItem = styled(motion.li)`
  color: var(--menuColor);
  font-size: 1.6rem;
  margin-left: 4rem;
  font-weight: 500;
  position: relative;
`

const TerminalWrapper = styled(motion.div)`
  background: ${props => `url(${props.terminal})`};
  background-size: cover;
  width: 83rem;
  height: 44rem;
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
`

const TerminalContainer = styled.div`
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
  height: 92%;
  margin: 0 auto;
`
