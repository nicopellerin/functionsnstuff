import * as React from "react"
import { useState, useEffect } from "react"
import styled from "styled-components"
import { motion, AnimatePresence, usePresence } from "framer-motion"

import cat from "./cat.jpg"

const useToggle = initialValue => {
  const [isToggled, setToggle] = useState(initialValue)

  const toggle = () => setToggle(prevState => !prevState)

  return [isToggled, toggle]
}

// Using the hook in a component
const Toggle = () => {
  const [isToggled, toggle] = useToggle(false)
  const [isPresent, safeToRemove] = usePresence()

  useEffect(() => {
    !isPresent && setTimeout(safeToRemove, 1000)
  }, [isPresent])

  return (
    <>
      <h4>Example</h4>
      <Wrapper>
        <Button type="button" onClick={toggle}>
          {isToggled ? "Hide cat" : "Show cat 😺"}
        </Button>
        <AnimatePresence>
          {isToggled && (
            <Cat
              key="cat"
              src={cat}
              alt="cat"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
            />
          )}
        </AnimatePresence>
      </Wrapper>
    </>
  )
}

export default Toggle

// Styles
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Button = styled.button`
  border: none;
  background: pink;
  padding: 0.8em 1.5em;
  border-radius: 5px;
  font-size: 1.8rem;
  font-weight: 500;
  cursor: pointer;
  width: 200px;
  height: 60px;
`
const Cat = styled(motion.img)`
  max-width: 100%;
  height: 300px;
  object-fit: cover;
  margin-top: 3rem;
  border-radius: 5px;
`
