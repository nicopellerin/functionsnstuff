import * as React from "react"
import styled from "styled-components"
import { FiArrowDownCircle, FiArrowUpCircle } from "react-icons/fi"
import { motion } from "framer-motion"

interface Props {
  title: string
  value: string
  inc: () => void
  dec: () => void
}

const Counter: React.FC<Props> = ({ title, value, inc, dec }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Container>
        <IconWrapper
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={dec}
        >
          <FiArrowDownCircle color="var(--primaryColor)" size={20} />
        </IconWrapper>
        <Text>{value}</Text>
        <IconWrapper
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={inc}
        >
          <FiArrowUpCircle color="var(--primaryColor)" size={20} />
        </IconWrapper>
      </Container>
    </Wrapper>
  )
}

export default Counter

// Styles
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0rem;
  position: relative;

  &:not(:last-of-type) {
    border-bottom: 1px solid #222;
  }
`

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  justify-items: center;
  grid-gap: 0.5rem;
  width: auto;
`

const IconWrapper = styled(motion.div)`
  cursor: pointer;
  will-change: transform;
`

const Title = styled.h4`
  margin: 0;
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
  color: var(--menuColor);
  margin-right: 1rem;
  margin-bottom: 0;
  white-space: nowrap;
  user-select: none;
  font-family: var(--systemFont);
`

const Text = styled.span`
  font-size: 1.6rem;
  color: var(--primaryColor);
  user-select: none;
`
