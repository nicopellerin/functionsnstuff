import * as React from "react"
import { useState, useContext } from "react"
import styled from "styled-components"
import {
  FaBars,
  FaHome,
  FaRegSmile,
  FaNewspaper,
  FaPlusCircle,
  FaSignOutAlt,
} from "react-icons/fa"
import { AnimatePresence, motion } from "framer-motion"
import { Link } from "gatsby"

const NavbarMobile = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false)

  return (
    <div style={{ position: "relative" }}>
      <Wrapper>
        <MenuBar onClick={() => setToggleDropdown(prevState => !prevState)}>
          <Menu
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h
0PSIyMCI+PHBhdGggZD0iTTEgMmExIDEgMCAwMTEtMWgyMGExIDEgMCAwMTEgMXYxYTEgMSAwID
AxLTEgMUgyYTEgMSAwIDAxLTEtMXpNMSA3YTEgMSAwIDAxMS0xaDE1YTEgMSAwIDAxMSAxdjFhM
SAxIDAgMDEtMSAxSDJhMSAxIDAgMDEtMS0xek0xIDEyYTEgMSAwIDAxMS0xaDE4YTEgMSAwIDAx
MSAxdjFhMSAxIDAgMDEtMSAxSDJhMSAxIDAgMDEtMS0xek0xIDE3YTEgMSAwIDAxMS0xaDExYTE
gMSAwIDAxMSAxdjFhMSAxIDAgMDEtMSAxSDJhMSAxIDAgMDEtMS0xeiIgZmlsbD0iIzMzMyIvPj
wvc3ZnPg== "
            alt="menu"
          />
        </MenuBar>
        <Link to="/">
          <img src="/logo.png" width={175} alt="logo" />
        </Link>
        <div></div>
      </Wrapper>
      <AnimatePresence>
        {toggleDropdown && (
          <NavbarMobileDropdown setToggleDropdown={setToggleDropdown} />
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

const NavbarMobileDropdown = ({ setToggleDropdown }) => {
  return (
    <Dropdown
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
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
  background: #000;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  padding: 1.8rem 2rem;
  display: grid;
  grid-template-columns: 45px 1fr 45px;
  justify-items: center;
  align-items: center;
  z-index: 1000;

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

const Menu = styled.img`
  cursor: pointer;
`

const Dropdown = styled(motion.div)`
  position: absolute;
  background: #000;
  top: 68px;
  width: 100%;
  padding: 3rem 2rem 4.5rem 2rem;
  z-index: 999;
  min-height: 100%;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  /* border-top: 1px solid var(--primaryColor); */
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
  color: ghostwhite;
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
  background: rgba(0, 0, 0, 0.57);
  backdrop-filter: blur(5px);
  z-index: 998;
`
