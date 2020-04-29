import * as React from "react"
import { useState } from "react"
import styled from "styled-components"
import { motion, AnimateSharedLayout } from "framer-motion"
import { Link } from "gatsby"
import Logo from "./logo"

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
    title: "Tools",
    link: "/tools/react-button-generator",
  },
  {
    title: "Contact",
    link: "/contact",
  },
]

const Navbar = () => {
  const url = typeof window !== "undefined" ? window.location.href : null
  const paths = url ? url.split("/") : []
  const [show, setShow] = useState(null)

  return (
    <Wrapper>
      <Link to="/">
        <Logo width={260} />
      </Link>
      <Menu>
        <MenuList onMouseLeave={() => setShow(null)}>
          <AnimateSharedLayout>
            {menuItems.map(({ title, link }, i) => (
              <MenuListItem
                active={paths.includes(title.toLowerCase()) ? true : false}
                key={title}
                onMouseEnter={() => setShow(i)}
              >
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
  padding: 4.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1366px) {
    display: none;
  }
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

  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -10px;
    background: var(--menuColor);
    height: ${(props: { active: boolean }) => props.active && "2px"};
    width: 100%;
  }
`
