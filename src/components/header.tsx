import * as React from "react"
import { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import ReactTooltip from "react-tooltip"
import lottie from "lottie-web"
import { Link } from "gatsby"

import Navbar from "./navbar"

import animation from "../anim.json"

const Header = () => {
  const [toggleBrowser, setToggleBrowser] = useState(false)

  // const lottieRef = useRef()

  // useEffect(() => {
  //   const animObj = lottie.loadAnimation({
  //     container: lottieRef.current,
  //     renderer: "svg",
  //     loop: true,
  //     autoplay: false,
  //     animationData: animation,
  //   })

  //   return () => animObj.destroy()
  // }, [])

  const journalVariants = {
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
        stiffness: 20,
      },
    },
  }

  return (
    <Wrapper bg={"/bg2.png"}>
      <Container>
        <Navbar />
        <TerminalWrapper
          terminal={"/terminal.png"}
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
            variants={journalVariants}
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
              <Link to="/tutorials/react">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  style={{ cursor: "pointer" }}
                >
                  <motion.img
                    src={"/icons/react.png"}
                    alt="react"
                    width={75}
                    variants={itemVariants}
                    // animate={{
                    //   y: [200, 10],
                    //   opacity: [0, 1],
                    //   transition: { delay: 0.1 },
                    // }}
                    data-tip="React"
                  />
                </motion.div>
              </Link>
              <motion.img
                src={"/icons/graphql.png"}
                alt="react"
                width={70}
                // animate={{
                //   y: [200, 10],
                //   opacity: [0, 1],
                //   transition: { delay: 0.2 },
                // }}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                data-tip="GraphQL"
              />
              <motion.img
                src={"/icons/go.png"}
                alt="react"
                width={115}
                variants={itemVariants}
                // animate={{
                //   y: [200, 10],
                //   opacity: [0, 1],
                //   transition: { delay: 0.3 },
                // }}
                whileHover={{ scale: 1.1 }}
                data-tip="Go"
              />
              <motion.img
                src={"/icons/nodejs.png"}
                alt="react"
                width={115}
                variants={itemVariants}
                // animate={{
                //   y: [200, 10],
                //   opacity: [0, 1],
                //   transition: { delay: 0.4 },
                // }}
                whileHover={{ scale: 1.1 }}
                data-tip="NodeJS"
              />
              <motion.img
                src={"/icons/js.png"}
                alt="react"
                width={75}
                variants={itemVariants}
                // animate={{
                //   y: [200, 10],
                //   opacity: [0, 1],
                //   transition: { delay: 0.5 },
                // }}
                whileHover={{ scale: 1.1 }}
                data-tip="Javascript"
              />
              <motion.img
                src={"/icons/typescript.svg"}
                alt="react"
                width={75}
                variants={itemVariants}
                // animate={{
                //   y: [200, 10],
                //   opacity: [0, 1],
                //   transition: { delay: 0.6 },
                // }}
                whileHover={{ scale: 1.1 }}
                data-tip="Typescript"
              />
              <ReactTooltip />
            </IconsList>
          </TerminalContainer>
        </TerminalWrapper>
        <motion.div
          initial={{ opacity: 0, x: "-50%" }}
          animate={{ opacity: [0, 1] }}
          style={{ position: "absolute", top: "20px", left: "50%" }}
          transition={{ delay: 1 }}
        >
          {/* <div style={{ width: 400 }} ref={lottieRef} /> */}
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
  background: ${props => `url(${props.bg})`};
  background-size: cover;
  background-attachment: fixed;
  height: 65rem;
  position: relative;
  overflow: hidden;
`

const Container = styled.header`
  max-width: 80rem;
  margin: 0 auto;
`

const TerminalWrapper = styled(motion.div)`
  background: ${props => `url(${props.terminal})`};
  background-size: cover;
  width: 83rem;
  height: 45rem;
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
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
  height: 92%;
  margin: 0 auto;
`
