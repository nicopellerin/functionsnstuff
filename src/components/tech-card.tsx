import * as React from "react"
import { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { motion } from "framer-motion"

interface Props {
  tech: string
  logo: string
  link: string
  width: number
}

const TechCard: React.FC<Props> = ({ tech, logo, link, width }) => {
  const [selected, setSelected] = useState("")
  return (
    <Link to={link}>
      <Wrapper whileHover={{ scale: [1, 1.04, 1.02], y: [0, -5] }}>
        <Logo
          src={logo}
          alt={tech}
          width={width}
          onMouseEnter={() => setSelected(tech)}
          onMouseLeave={() => setSelected(null)}
        />
        {selected === tech && <Title>{tech}</Title>}
      </Wrapper>
    </Link>
  )
}

export default TechCard

// Styles
const Wrapper = styled(motion.div)`
  display: grid;
  place-items: center;
  position: relative;
  will-change: transform;
`

const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--primaryColor);
  position: absolute;
  bottom: -4.5rem;
`
const Logo = styled.img``
