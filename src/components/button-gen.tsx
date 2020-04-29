import * as React from "react"
import { useState, useRef } from "react"
import styled from "styled-components"
import Highlight, { defaultProps } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/dracula"
// import {
//   FiArrowUpCircle,
//   FiArrowDownCircle,
//   FiSend,
//   FiCopy,
//   FiCheckCircle,
// } from "react-icons/fi"
import * as Icon from "react-icons/fi"
import { motion, AnimatePresence } from "framer-motion"
import { CompactPicker } from "react-color"
import { useMedia } from "react-use-media"
import {
  Listbox,
  ListboxInput,
  ListboxButton,
  ListboxPopover,
  ListboxList,
  ListboxOption,
} from "@reach/listbox"
import "@reach/listbox/styles.css"

import Spacer from "./spacer"
import Checkbox from "./checkbox"
import DarkMode from "./dark-mode"

import useClickOutside from "../hooks/useClickOutside"

const delay = duration => new Promise(resolve => setTimeout(resolve, duration))

enum Icons {
  User = "FiUser",
  Send = "FiSend",
  Check = "FiCheckCircle",
  ChevronRight = "FiChevronRight",
}

const ButtonGenerator = () => {
  const [text, setText] = useState("Send")
  const [fontSize, setFontSize] = useState(16)
  const [borderRadius, setBorderRadius] = useState(5)
  const [horiPadding, setHoriPadding] = useState(35)
  const [vertPadding, setVertPadding] = useState(15)
  const [background, setBackground] = useState("#F44E3B")
  const [textColor, setTextColor] = useState("#fff")
  const [dropShadow, setDropShadow] = useState(3)
  const [copied, setCopied] = useState(false)
  const [checkedIcon, setCheckedIcon] = useState(true)
  const [anim, setAnim] = useState(true)
  const [darkMode, setDarkMode] = useState(true)
  const [icon, setIcon] = useState(Icons.Send)

  const isDesktop = useMedia({
    minWidth: 500,
  })

  const border = "none"
  const fontWeight = 400
  const cursor = "pointer"

  const imports = `import * as React from 'react'\n`
  const animImports = `import {motion} from 'framer-motion'\n\n${
    anim ? "" : "\n"
  }`
  const iconImports = `import {${icon}} from 'react-icons/fi'\n${
    anim ? "" : "\n"
  }`

  const value = `${imports}${checkedIcon ? iconImports : ""}${
    anim ? animImports : ""
  }export const Button = () => (\n<${anim ? "motion." : ""}button ${
    anim ? "whileHover={{ y: -1 }}\n" : ""
  }${
    anim ? " whileTap={{ y: 1 }}\n " : ""
  }style={{ color: "${textColor}",\n background: "${background}",\n padding: "${vertPadding}px ${horiPadding}px",\n border: "${border}",\n borderRadius: "${borderRadius}px",\n fontSize: "${fontSize}px",\n fontWeight: "${fontWeight}",\n boxShadow: "0 4px 20px rgba(0,0,0,${dropShadow /
    10})",\n cursor: "${cursor}" }}>\n${text}${
    checkedIcon ? "\n<FiSend style={{ marginLeft: 5 }} />" : ""
  }\n</${anim ? "motion." : ""}button>\n)`

  const handleCopyToClipboard = async () => {
    const clipboard = window.navigator.clipboard
    await clipboard.writeText(value)
    setCopied(true)
    await delay(1500)
    setCopied(false)
  }

  const iconPicker = () => {
    const style = { marginLeft: 5 }
    switch (icon) {
      case Icons.User:
        return <Icon.FiUser style={style} />
      case Icons.Send:
        return <Icon.FiSend style={style} />
      case Icons.Check:
        return <Icon.FiCheckCircle style={style} />
      case Icons.ChevronRight:
        return <Icon.FiChevronRight style={style} />
    }
  }

  return (
    <>
      <Wrapper>
        <div>
          <TerminalWrapper>
            <ButtonContainer darkMode={darkMode ? true : false}>
              <div style={{ position: "absolute", top: 10, right: 10 }}>
                <DarkMode
                  setToggle={() => setDarkMode(prevState => !prevState)}
                />
              </div>
              <Button
                whileHover={{ y: anim ? -1 : 0 }}
                whileTap={{ y: anim ? 1 : 0 }}
                style={{
                  color: textColor,
                  background,
                  padding: `${vertPadding}px ${horiPadding}px`,
                  border,
                  borderRadius,
                  fontSize,
                  fontWeight,
                  boxShadow: `0 4px 20px rgba(0,0,0,${dropShadow / 10})`,
                  cursor,
                }}
              >
                <span>{text}</span>
                {/* {checkedIcon && <Icon.FiSend style={{ marginLeft: 5 }} />} */}
                {checkedIcon && iconPicker("SEND")}
              </Button>
            </ButtonContainer>
            {isDesktop ? (
              <CodeOverlay>
                <CodeOverlayContainer>
                  <Highlight
                    {...defaultProps}
                    code={value}
                    language={"jsx"}
                    theme={theme}
                  >
                    {({
                      className,
                      style,
                      tokens,
                      getLineProps,
                      getTokenProps,
                    }) => (
                      <pre className="language-jsx2" style={style}>
                        {tokens.map((line, i) => (
                          <div {...getLineProps({ line, key: i })}>
                            {line.map((token, key) => (
                              <span {...getTokenProps({ token, key })} />
                            ))}
                          </div>
                        ))}
                      </pre>
                    )}
                  </Highlight>
                </CodeOverlayContainer>
              </CodeOverlay>
            ) : null}
          </TerminalWrapper>
        </div>
        <Sidebar>
          <div style={{ width: "100%" }}>
            <div>
              <Title>Text</Title>
              <InputField
                value={text}
                onChange={e => setText(e.target.value)}
              />
            </div>
            <div>
              <Counter
                title={"Font size"}
                value={fontSize}
                inc={() => setFontSize(prevState => prevState + 1)}
                dec={() => setFontSize(prevState => prevState - 1)}
              />
              <Counter
                title={"Horizontal padding"}
                value={horiPadding}
                inc={() => setHoriPadding(prevState => prevState + 1)}
                dec={() => setHoriPadding(prevState => prevState - 1)}
              />
              <Counter
                title={"Vertical padding"}
                value={vertPadding}
                inc={() => setVertPadding(prevState => prevState + 1)}
                dec={() => setVertPadding(prevState => prevState - 1)}
              />
              <Counter
                title={"Border radius"}
                value={borderRadius}
                inc={() => setBorderRadius(prevState => prevState + 1)}
                dec={() => setBorderRadius(prevState => prevState - 1)}
              />
              <Counter
                title={"Drop shadow"}
                value={`${dropShadow * 10}%`}
                inc={() =>
                  dropShadow < 10 &&
                  setDropShadow(prevState => Number(prevState) + 1)
                }
                dec={() =>
                  dropShadow > 0 &&
                  setDropShadow(prevState => Number(prevState) - 1)
                }
              />
              <ColorPicker
                title="Background color"
                colorPicked={background}
                setColor={setBackground}
              />
              <ColorPicker
                title="Text color"
                colorPicked={textColor}
                setColor={setTextColor}
              />
              <Toggle
                renderOptions={
                  <ListboxStyled
                    defaultValue={Icons.Send}
                    onChange={value => setIcon(value as Icons)}
                    style={{ border: "none" }}
                  >
                    <ListboxOptionStyled value={Icons.Send}>
                      Send
                    </ListboxOptionStyled>
                    <ListboxOptionStyled value={Icons.User}>
                      User
                    </ListboxOptionStyled>
                    <ListboxOptionStyled value={Icons.Check}>
                      Check
                    </ListboxOptionStyled>
                    <ListboxOptionStyled value={Icons.ChevronRight}>
                      ChevronRight
                    </ListboxOptionStyled>
                  </ListboxStyled>
                  // <select
                  //   disabled={!checkedIcon}
                  //   onChange={e => setIcon(e.target.value as Icons)}
                  // >
                  //   <option value={Icons.Send}>Send</option>
                  //   <option value={Icons.User}>User</option>
                  //   <option value={Icons.Check}>Check</option>
                  //   <option value={Icons.ChevronRight}>Chevron Right</option>
                  // </select>
                }
                title="Icon"
                toggleCheck={() => setCheckedIcon(prevState => !prevState)}
              />
              <Toggle
                title="Animation"
                toggleCheck={() => setAnim(prevState => !prevState)}
              />
            </div>
            <CopyButton
              copied={copied ? true : false}
              onClick={handleCopyToClipboard}
            >
              <AnimatePresence>
                {copied ? (
                  <CopyText
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ color: "lightgreen" }}
                  >
                    <Icon.FiCheckCircle style={{ marginRight: 5 }} />
                    <span>Copied to clipboard</span>
                  </CopyText>
                ) : (
                  <CopyText
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <CopyToClipboardIcon title="Copy to clipboard" />
                    <span>Copy JSX</span>
                  </CopyText>
                )}
              </AnimatePresence>
            </CopyButton>
          </div>
        </Sidebar>
      </Wrapper>
      <Spacer />
    </>
  )
}

// Toggle
interface ToggleProps {
  title: string
  toggleCheck: () => void
  renderOptions?: React.ReactNode
}

const Toggle: React.FC<ToggleProps> = ({
  title,
  toggleCheck,
  renderOptions,
}) => {
  const [checked, setChecked] = useState(true)
  const inputRef = useRef(null)

  const handleCheck = () => {
    setChecked(prevState => !prevState)
    toggleCheck()
  }

  return (
    <CounterWrapper>
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
    </CounterWrapper>
  )
}

// ColorPicker
interface ColorPickerProps {
  title: string
  colorPicked: string
  setColor: React.Dispatch<React.SetStateAction<string>>
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  title = "Background color",
  colorPicked = "red",
  setColor,
}) => {
  const [toggle, setToggle] = useState(false)
  const colorNodeRef = useClickOutside(setToggle)

  const handleColorChange = color => {
    setColor(color.hex)
    setToggle(false)
  }

  return (
    <CounterWrapper ref={colorNodeRef}>
      <Title>{title}</Title>
      <ColorDiv onClick={() => setToggle(true)} color={colorPicked} />
      <AnimatePresence exitBeforeEnter>
        {toggle && (
          <ColorPickerWrapper
            initial={{ x: 5 }}
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
    </CounterWrapper>
  )
}

const Counter = ({ title, value, inc, dec }) => {
  return (
    <CounterWrapper>
      <Title>{title}</Title>
      <Container>
        <IconWrapper
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={dec}
        >
          <Icon.FiArrowDownCircle color="var(--primaryColor)" size={20} />
        </IconWrapper>
        <Text>{value}</Text>
        <IconWrapper
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={inc}
        >
          <Icon.FiArrowUpCircle color="var(--primaryColor)" size={20} />
        </IconWrapper>
      </Container>
    </CounterWrapper>
  )
}

export default ButtonGenerator

// Styles
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-gap: 2rem;
  border-radius: 20px;
  position: relative;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

const TerminalWrapper = styled.div`
  width: 100%;
  padding: 3rem;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  position: relative;

  @media (max-width: 500px) {
    padding: 0 2rem;
  }
`

const Sidebar = styled.aside`
  border-radius: 10px;
  padding: 3rem 3rem;

  @media (max-width: 500px) {
    padding: 3rem 1rem;
  }
`

const ButtonContainer = styled.div`
  background: ${(props: { darkMode: boolean }) =>
    props.darkMode ? "#112" : "#eff"};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15rem;
  border-radius: 10px;
  width: 40rem;
  margin: 0 auto;
  position: relative;

  @media (max-width: 500px) {
    width: 100%;
  }
`

const Button = styled(motion.button)`
  width: min-content;
  white-space: nowrap;
  outline: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 400;
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

const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0rem;

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

const ColorDiv = styled.div`
  background: ${(props: { color: string }) => props.color};
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  cursor: pointer;
`

const ColorPickerWrapper = styled(motion.div)`
  position: absolute;
  left: 100%;

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
`

const InputField = styled.input`
  border: 1px solid #111;
  color: var(--primaryColor);
  background: none;
  padding: 0.8em 0.8em;
  border-radius: 5px;
  font-size: 1.6rem;
  font-family: inherit;
  border: 1px solid #222;
  min-width: 253px;
  margin-top: 5px;
  margin-bottom: 1.6rem;

  @media (max-width: 500px) {
    width: 100%;
  }
`

const CodeOverlay = styled.div`
  width: 100%;
  height: 100%;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CodeOverlayContainer = styled.div`
  font-family: "menlo", monospace;
  font-weight: 400;
  background: #0a0a0a;
  font-size: 1.3rem;
  line-height: 1.6em;
  border-radius: 10px;
  white-space: pre-wrap;
  padding: 0.5rem 0;
  color: var(--primaryColor);
  max-width: 100%;
`

const CopyButton = styled(motion.button)`
  padding: 0.8em 2em;
  font-size: 1.6rem;
  font-weight: 500;
  border: ${(props: { copied: boolean }) =>
    props.copied ? "1px solid lightgreen" : "1px solid var(--primaryColor)"};
  border-radius: 5px;
  background: none;
  color: var(--primaryColor);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  margin-top: 2rem;
  outline: none;
  height: 5rem;
`

const CopyText = styled(motion.div)`
  display: flex;
  align-items: center;
`

const CopyToClipboardIcon = styled(Icon.FiCopy)`
  font-size: 2.2rem;
  padding: 5px;
`

const ListboxStyled = styled(Listbox)`
  [data-reach-listbox-button] {
    border: none;
    font-size: 1.4rem;
    color: var(--primaryColor);
  }
`

const ListboxOptionStyled = styled(ListboxOption)`
  font-size: 1.4rem;
  color: #333;
  padding: 1rem;
`
