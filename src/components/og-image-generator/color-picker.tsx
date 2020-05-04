import * as React from "react"
import { useState } from "react"
import styled from "styled-components"
import { CompactPicker } from "react-color"
import { motion, AnimatePresence } from "framer-motion"

import useClickOutside from "../../hooks/useClickOutside"

interface ColorPickerProps {
  title: string
  colorPicked: string
  setColor: React.Dispatch<React.SetStateAction<string>>
  colorPickedGradient1?: string
  setColorPickedGradient1?: React.Dispatch<React.SetStateAction<string>>
  colorPickedGradient2?: string
  setColorPickedGradient2?: React.Dispatch<React.SetStateAction<string>>
  backgroundType?: BackgroundType
  renderOptions?: React.ReactNode
}

enum BackgroundType {
  Fill = "BackgroundFill",
  Gradient = "BackgroundGradient",
}

enum Gradients {
  Gradient1 = "gradient1",
  Gradient2 = "gradient2",
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  title,
  colorPicked,
  setColor,
  colorPickedGradient1,
  setColorPickedGradient1,
  colorPickedGradient2,
  setColorPickedGradient2,
  backgroundType,
  renderOptions,
}) => {
  const [toggle, setToggle] = useState(false)
  const [selectGradient, setSelectGradient] = useState<string | undefined>("")

  const colorNodeRef = useClickOutside(setToggle)

  const handleColorChange = (color: { hex: string }) => {
    if (backgroundType === BackgroundType.Fill) {
      setColor(color.hex)
      setToggle(false)
      return
    }

    if (setColorPickedGradient1 && setColorPickedGradient2) {
      selectGradient === Gradients.Gradient1
        ? setColorPickedGradient1(color.hex)
        : setColorPickedGradient2(color.hex)
      setToggle(false)
    }
  }

  const toggleColorPicker = (gradient?: string) => {
    setToggle(true)
    if (gradient) {
      setSelectGradient(gradient)
    }
  }

  return (
    <Wrapper ref={colorNodeRef}>
      <Title>{title}</Title>
      {renderOptions}
      {backgroundType === BackgroundType.Fill ? (
        <ColorDiv onClick={() => toggleColorPicker()} color={colorPicked} />
      ) : (
        <ColorDivWrapper>
          <ColorDiv
            name={Gradients.Gradient1}
            onClick={() => toggleColorPicker(Gradients.Gradient1)}
            color={colorPickedGradient1}
          />
          <ColorDiv
            name={Gradients.Gradient2}
            onClick={() => toggleColorPicker(Gradients.Gradient2)}
            color={colorPickedGradient2}
          />
        </ColorDivWrapper>
      )}
      <AnimatePresence exitBeforeEnter>
        {toggle && (
          <ColorPickerWrapper
            initial={{ x: 2 }}
            animate={{ x: 0 }}
            exit={{ opacity: 0, transition: { duration: 0 } }}
            transition={{ type: "spring", damping: 60 }}
          >
            <CompactPicker
              color={colorPicked}
              onChangeComplete={handleColorChange}
            />
          </ColorPickerWrapper>
        )}
      </AnimatePresence>
    </Wrapper>
  )
}

export default ColorPicker

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

const ColorDivWrapper = styled.div`
  display: flex;

  > :first-of-type {
    margin-right: 3px;
  }
`

const ColorDiv = styled.div`
  background: ${(props: { color: string }) => props.color};
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid #333;
`

const ColorPickerWrapper = styled(motion.div)`
  position: absolute;
  z-index: 200;
  left: 550px;

  &:after {
    content: "";
    position: absolute;
    left: -1.2rem;
    top: 50%;
    transform: translateY(-50%) rotate(90deg);
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid #fff;
  }

  @media (max-width: 500px) {
    left: 15%;

    &:after {
      display: none;
    }
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
