import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

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

const Header = () => (
  <Wrapper bg={bg}>
    <Container>
      <img src={logo} alt="logo" width={267} />
      <Menu>
        <MenuList>
          <MenuListItem>Tutorials</MenuListItem>
          <MenuListItem>Tips</MenuListItem>
          <MenuListItem>Contact</MenuListItem>
        </MenuList>
      </Menu>
      <TerminalWrapper
        terminal={terminal}
        animate={{ y: [400, 20], x: "-50%" }}
      >
        <TerminalContainer>
          <IconsList>
            <motion.img
              src={reactLogo}
              alt="react"
              width={75}
              animate={{ y: [400, 10] }}
              transition={{ delay: 0.3 }}
            />

            <motion.img
              src={graphqlLogo}
              alt="react"
              width={70}
              animate={{ y: [400, 10] }}
              transition={{ delay: 0.5 }}
            />
            <motion.img
              src={goLogo}
              alt="react"
              width={115}
              animate={{ y: [400, 10] }}
              transition={{ delay: 0.7 }}
            />
            <motion.img
              src={nodeLogo}
              alt="react"
              width={115}
              animate={{ y: [400, 10] }}
              transition={{ delay: 0.9 }}
            />
            <motion.img
              src={jsLogo}
              alt="react"
              width={75}
              animate={{ y: [400, 10] }}
              transition={{ delay: 1.1 }}
            />
            <motion.img
              src={tsLogo}
              alt="react"
              width={75}
              animate={{ y: [400, 10] }}
              transition={{ delay: 1.3 }}
            />
          </IconsList>
        </TerminalContainer>
      </TerminalWrapper>
    </Container>
    <img
      src={wave}
      style={{
        position: "absolute",
        bottom: -70,
        height: 300,
        left: 0,
        width: "100%",
      }}
      alt="wave"
    />
  </Wrapper>
)

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

const MenuListItem = styled.li`
  color: var(--menuColor);
  font-size: 1.6rem;
  margin-left: 4rem;
  font-weight: 500;
`

const TerminalWrapper = styled(motion.div)`
  background: ${props => `url(${props.terminal})`};
  background-size: cover;
  width: 90rem;
  height: 42rem;
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
`

const TerminalContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const IconsList = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 90%;
  height: 75%;
  margin: 0 auto;
`
