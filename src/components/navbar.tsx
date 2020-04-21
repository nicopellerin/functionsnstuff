import * as React from "react"
import { useState } from "react"
import styled from "styled-components"
import { motion, AnimateSharedLayout } from "framer-motion"
import { Link } from "gatsby"

const menuItems = [
  {
    title: "Tutorials",
    link: "/tutorials",
  },
  {
    title: "Tips",
    link: "/tips",
  },
  {
    title: "Contact",
    link: "/contact",
  },
]

const Navbar = () => {
  const [show, setShow] = useState(null)

  return (
    <Wrapper>
      <Link to="/">
        <img src={"/logo.png"} alt="logo" width={285} />
      </Link>
      <Menu>
        <MenuList onMouseLeave={() => setShow(null)}>
          <AnimateSharedLayout>
            {menuItems.map(({ title, link }, i) => (
              <MenuListItem key={title} onMouseEnter={() => setShow(i)}>
                <Link to={link}>{title}</Link>
                {show === i && (
                  <motion.div
                    layoutId="menuItem"
                    style={{
                      position: "absolute",
                      left: 0,
                      bottom: -10,
                      background: "var(--menuColor)",
                      height: 2,
                      width: "100%",
                    }}
                  />
                )}
              </MenuListItem>
            ))}
          </AnimateSharedLayout>
        </MenuList>
      </Menu>
    </Wrapper>
  )
}

export default Navbar

// Styles
const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 4rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  font-size: 1.8rem;
  margin-left: 4rem;
  font-weight: 500;
  position: relative;
`
