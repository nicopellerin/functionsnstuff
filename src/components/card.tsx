import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { motion } from "framer-motion"

interface Props {
  title?: string
  image?: string
  link?: string
}

const Card: React.FC<Props> = ({ title, image, link }) => {
  const random = Math.ceil(Math.random() * 2)
  return (
    <Link to={link}>
      <Wrapper
        image={`/card${random}.png`}
        whileHover={{ scale: [1, 1.04, 1.02], y: [0, -5] }}
      >
        <Title>{title}</Title>
      </Wrapper>
    </Link>
  )
}

export default Card

// Styles
const Wrapper = styled(motion.div)`
  background: ${props => `url(${props.image})`};
  background-size: cover;
  box-shadow: 0 7px 20px rgba(0, 0, 0, 0.3);
  padding: 2.5rem 2.5rem;
  border-radius: 10px;
  height: 25rem;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 0;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  will-change: transform;
`

const Title = styled.h2`
  font-size: 2.6rem;
  color: var(--menuColor);
  max-width: 80%;
  margin: 0;
`

const Desc = styled.p`
  font-size: 1.6rem;
  color: var(--menuColor);
  padding: 0;
  margin: 0;
`
