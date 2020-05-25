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
  const imageName = image?.split(".")[0]
  const mobileImage = `${imageName}.png`

  return (
    <Link to={link}>
      <Wrapper whileHover={{ scale: [1, 1.04, 1.02], y: [0, -5] }}>
        <Content>
          <Title>{title}</Title>
          <TechLogo
            src={`https://images.weserv.nl/?url=${encodeURI(
              `https://functionsnstuff.netlify.app/icons/${tech}.png`
            )}&w=100`}
            alt={tech}
          />
        </Content>
        <Picture>
          <source srcSet={image} type="image/webp" />
          <source srcSet={mobileImage} type="image/png" />
          <CardImage src={mobileImage} alt={tech} />
        </Picture>
      </Wrapper>
    </Link>
  )
}

export default Card

// Styles
const Wrapper = styled(motion.div)`
  background: ${(props: { image: string }) => `url(${props.image})`};
  background-size: cover;
  box-shadow: 0 7px 20px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  height: 25rem;
  max-width: 500px;
  min-width: 340px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 0;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  will-change: transform;
  position: relative;

  @media (max-width: 339px) {
    max-width: 300px;
  }
`

const Content = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  padding: 2.5rem 2.5rem;
`

const Picture = styled.picture`
  width: 100%;
  height: 25rem;
  position: absolute;
`

const CardImage = styled.img`
  width: 100%;
  height: 25rem;
  object-fit: cover;
  position: absolute;
  border-radius: 10px;
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
