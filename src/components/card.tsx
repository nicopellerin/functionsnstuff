import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { motion } from "framer-motion"

interface Props {
  title?: string
  image?: string
  link?: string
}

const Card: React.FC<Props> = ({
  title,
  image,
  link = "/tutorials/react/react",
}) => {
  return (
    <Link to={link}>
      <Wrapper
        image={image}
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
  padding: 2.5rem 3rem;
  border-radius: 20px;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Title = styled.h2`
  font-size: 2.4rem;
  color: var(--menuColor);
`

const Desc = styled.p`
  font-size: 1.6rem;
  color: var(--menuColor);
  padding: 0;
  margin: 0;
`
