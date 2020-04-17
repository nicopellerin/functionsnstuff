import * as React from "react"
import { useState } from "react"
import styled from "styled-components"
import { motion, AnimateSharedLayout } from "framer-motion"
import { Link } from "gatsby"

import bg from "../images/hero.png"
import terminal from "../images/terminal.png"
import reactLogo from "../images/icons/react.png"
import graphqlLogo from "../images/icons/graphql.png"
import goLogo from "../images/icons/go.png"
import nodeLogo from "../images/icons/nodejs.png"
import jsLogo from "../images/icons/js.png"
import tsLogo from "../images/icons/typescript.svg"
import wave from "../images/wave.svg"

import cover from "../images/cover-react.jpg"

import { Navbar } from "./navbar"

interface Props {
  tech?: string
}

export const PageHeader: React.FC<Props> = ({ tech = "react" }) => {
  return (
    <Wrapper bg={cover}>
      <Container>
        <Navbar />
        <Heading>
          <motion.img
            animate={{ opacity: [0, 1], y: [170, 0] }}
            src={graphqlLogo}
            width={120}
          />
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

const Title = styled.h1`
  font-size: 4rem;
  color: ghostwhite;
`
