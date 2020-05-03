import * as React from "react"
import { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { motion } from "framer-motion"

interface Props {
  tech: string
  link: string
  width: number
  totalCount: number
  component: any
}

const TechCard: React.FC<Props> = ({
  tech,
  logo,
  link,
  width,
  totalCount,
  component,
}) => {
  const [selected, setSelected] = useState("")

  return (
    <Link to={link}>
      <Wrapper whileHover={{ scale: [1, 1.04, 1.02], y: [0, -5] }}>
        <motion.div
          onMouseEnter={() => setSelected(tech)}
          onMouseLeave={() => setSelected("")}
        >
          {component}
        </motion.div>
        {selected === tech ? (
          <Title>{tech}</Title>
        ) : (
          totalCount > 0 && <Count>{totalCount}</Count>
        )}
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
  height: 120px;
`

const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--primaryColor);
  position: absolute;
  bottom: -4rem;
`
const Logo = styled.img``

const Count = styled.span`
  font-size: 1.6rem;
  font-weight: 500;
  color: #999;
  position: absolute;
  bottom: -3rem;
  background: #112;
  padding: 1.2rem;
  border-radius: 100%;
  height: 1.5rem;
  width: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #333;
`
