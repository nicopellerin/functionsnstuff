import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { motion } from "framer-motion"

interface Props {
  tech: string
  logo: string
  link: string
}

const TechCard: React.FC<Props> = ({ tech, logo, link }) => {
  return (
    <Link to={link}>
      <Wrapper whileHover={{ scale: [1, 1.04, 1.02], y: [0, -5] }}>
        <Logo src={logo} alt={tech} />
        <Title>{tech}</Title>
      </Wrapper>
    </Link>
  )
}

export default TechCard

// Styles
const Wrapper = styled(motion.div)`
  display: grid;
  place-items: center;
`

const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--primaryColor);
`
const Logo = styled.img`
  max-width: 90px;
  margin-bottom: 2rem;
`
