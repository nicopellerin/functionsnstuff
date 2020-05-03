import * as React from "react"
import { useRef, useState } from "react"
import styled from "styled-components"

import Checkbox from "../checkbox"

interface Props {
  title: string
  check: boolean
  toggleCheck: () => void
  renderOptions?: React.ReactNode
}

const Toggle: React.FC<Props> = ({
  title,
  check,
  toggleCheck,
  renderOptions,
}) => {
  const [checked, setChecked] = useState(check)
  const inputRef = useRef(null)

  const handleCheck = () => {
    setChecked(prevState => !prevState)
    toggleCheck()
  }

  return (
    <Wrapper>
      <Title>{title}</Title>
      {renderOptions}
      <label htmlFor={title}>
        <input
          id={title}
          ref={inputRef}
          type="checkbox"
          checked={checked}
          onChange={handleCheck}
          hidden
        />
        <Checkbox checked={checked} />
      </label>
    </Wrapper>
  )
}

export default Toggle

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
