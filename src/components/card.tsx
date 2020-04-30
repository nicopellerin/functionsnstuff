import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { motion } from "framer-motion"

interface Props {
  title: string
  image: string
  link: string
  tech?: string
}

const Card: React.FC<Props> = ({ title, image, tech, link }) => {
  const isMobile =
    typeof window !== "undefined"
      ? /iPhone|iPad|iPod|Android/i.test(window.navigator.userAgent)
      : null

  const imageName = image?.split(".")[0]
  const mobileImage = `${imageName}.png`

  return (
    <Link to={link}>
      <Wrapper
        image={isMobile ? mobileImage : image}
        whileHover={{ scale: [1, 1.04, 1.02], y: [0, -5] }}
      >
        <Title>{title}</Title>
        <TechLogo
          src={`https://images.weserv.nl/?url=${encodeURI(
            `https://functionsnstuff.netlify.app/icons/${tech}.png`
          )}&w=100`}
          alt={tech}
        />
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
  position: relative;
`

const Title = styled.h2`
  font-size: 2.6rem;
  color: var(--menuColor);
  max-width: 80%;
  margin: 0;
`

const TechLogo = styled.img`
  max-width: 50px;
  position: absolute;
  right: 2rem;
  bottom: 2rem;
`
