import * as React from "react"
import { useState } from "react"
import styled from "styled-components"
import { AnimatePresence, motion } from "framer-motion"
import { Link } from "gatsby"

import { logoBase, donutBase } from "../../utils/base64-images"

const NavbarMobile = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false)

  return (
    <div style={{ position: "relative" }}>
      <Wrapper toggled={toggleDropdown ? true : false}>
        <MenuBar onClick={() => setToggleDropdown(prevState => !prevState)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20">
            <path
              d="M 1 2 C 1 1.448 1.448 1 2 1 L 22 1 C 22.552 1 23 1.448 23 2 L 23 3 C 23 3.552 22.552 4 22 4 L 2 4 C 1.448 4 1 3.552 1 3 Z"
              fill="#FFE5FB"
            ></path>
            <path
              d="M 1 7 C 1 6.448 1.448 6 2 6 L 17 6 C 17.552 6 18 6.448 18 7 L 18 8 C 18 8.552 17.552 9 17 9 L 2 9 C 1.448 9 1 8.552 1 8 Z"
              fill="#FFE5FB"
            ></path>
            <path
              d="M 1 12 C 1 11.448 1.448 11 2 11 L 20 11 C 20.552 11 21 11.448 21 12 L 21 13 C 21 13.552 20.552 14 20 14 L 2 14 C 1.448 14 1 13.552 1 13 Z"
              fill="#FFE5FB"
            ></path>
            <path
              d="M 1 17 C 1 16.448 1.448 16 2 16 L 13 16 C 13.552 16 14 16.448 14 17 L 14 18 C 14 18.552 13.552 19 13 19 L 2 19 C 1.448 19 1 18.552 1 18 Z"
              fill="#FFE5FB"
            ></path>
          </svg>
        </MenuBar>
        <Link to="/">
          <img src={logoBase} width={180} alt="logo" />
        </Link>
        <img src={donutBase} alt="donut" width={35} />
      </Wrapper>
      <AnimatePresence>
        {toggleDropdown && (
          <NavbarMobileDropdown
            toggleDropdown={toggleDropdown}
            setToggleDropdown={setToggleDropdown}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {toggleDropdown && (
          <Overlay
            onClick={() => setToggleDropdown(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 200,
            }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

const NavbarMobileDropdown = ({ setToggleDropdown, toggleDropdown }) => {
  return (
    <Dropdown
      toggled={toggleDropdown ? true : false}
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-102%" }}
      transition={{ type: "spring", damping: 50, stiffness: 200 }}
    >
      <nav>
        <AnimatePresence>
          <DropdownList
            initial={{ y: -500 }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
          >
            <Link to="/tutorials">
              <DropdownListItem
                onClick={() => setToggleDropdown(prevState => !prevState)}
              >
                Tutorials
              </DropdownListItem>
            </Link>
            <Link to="/tips">
              <DropdownListItem
                onClick={() => setToggleDropdown(prevState => !prevState)}
              >
                Tips
              </DropdownListItem>
            </Link>
            <Link to="/tools/react-button-generator">
              <DropdownListItem
                onClick={() => setToggleDropdown(prevState => !prevState)}
              >
                Tools
              </DropdownListItem>
            </Link>
            <Link to="/contact">
              <DropdownListItem
                onClick={() => setToggleDropdown(prevState => !prevState)}
              >
                Contact
              </DropdownListItem>
            </Link>
          </DropdownList>
        </AnimatePresence>
      </nav>
    </Dropdown>
  )
}

export default NavbarMobile

// Styles
const Wrapper = styled.div`
  background: #020207;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  padding: 1.8rem 2rem;
  display: grid;
  grid-template-columns: 45px 1fr 45px;
  justify-items: center;
  align-items: center;
  z-index: 1000;
  height: 65px;
  transition: 0.3s;
  border-bottom: ${(props: { toggled: boolean }) =>
    props.toggled ? "2px solid #112" : "2px solid transparent"};

  @media (min-width: 501px) {
    grid-template-columns: 145px 1fr 145px;
  }

  @media (min-width: 1367px) {
    display: none;
  }
`

const MenuBar = styled.div`
  @media (min-width: 501px) {
    justify-self: start;
    padding-left: 1rem;
  }
`

const Dropdown = styled(motion.div)`
  position: absolute;
  background: #000;
  top: 68px;
  width: 100%;
  padding: 1.5rem 2rem 2.5rem 2rem;
  z-index: 999;
  min-height: 100%;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5);
  /* border-bottom: ${(props: { toggled: boolean }) =>
    props.toggled ? "2px solid #112" : "2px solid transparent"}; */
`

const DropdownList = styled(motion.ul)`
  margin: 0;
  padding: 0;
  list-style: none;
`

const DropdownListItem = styled(motion.li)`
  font-size: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--menuColor);
  box-shadow: 0 14px 20px -20px rgba(0, 0, 0, 0.1);
  padding: 2.5rem;
  width: 30rem;
  margin: 0rem auto;
`

const Overlay = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
  z-index: 998;
`
