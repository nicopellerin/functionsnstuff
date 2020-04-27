import * as React from "react"
import { useState, useRef } from "react"
import styled from "styled-components"
import Highlight, { defaultProps } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/dracula"

import {
  FiArrowUpCircle,
  FiArrowDownCircle,
  FiSend,
  FiCode,
  FiCopy,
  FiCheckCircle,
} from "react-icons/fi"
import { motion, AnimatePresence } from "framer-motion"
import { CompactPicker } from "react-color"
import Spacer from "./spacer"
import Checkbox from "./checkbox"

const delay = duration => new Promise(resolve => setTimeout(resolve, duration))

const ButtonGenerator = () => {
  const [text, setText] = useState("Send")
  const [fontSize, setFontSize] = useState(16)
  const [borderRadius, setBorderRadius] = useState(10)
  const [horiPadding, setHoriPadding] = useState(35)
  const [vertPadding, setVertPadding] = useState(15)
  const [background, setBackground] = useState("#F44E3B")
  const [textColor, setTextColor] = useState("#fff")
  const [dropShadow, setDropShadow] = useState(3)
  const [getCode, setGetCode] = useState(false)
  const [anim, setAnim] = useState(true)
  const [copied, setCopied] = useState(false)
  const [checkedIcon, setCheckedIcon] = useState(true)

  const border = "none"
  const fontWeight = 400
  const cursor = "pointer"

  const imports = `import * as React from 'react'\n`
  const animImports = `import {motion} from 'framer-motion'\n\n${
    anim ? "" : "\n"
  }`
  const iconImports = `import {FiSend} from 'react-icons/fi'\n${
    anim ? "" : "\n"
  }`

  const value = `${imports}${checkedIcon ? iconImports : ""}${
    anim ? animImports : ""
  }export const Button = () => (\n<${anim ? "motion." : ""}button ${
    anim ? "whileHover={{ y: -1 }}\n" : ""
  }${
    anim ? " whileTap={{ y: 1 }}\n " : ""
  }style={{ color: "${textColor}",\n background: "${background}",\n padding: "${vertPadding}px ${horiPadding}px",\n border: "${border}",\n borderRadius: "${borderRadius}px",\n fontSize: "${fontSize}px",\n fontWeight: "${fontWeight}",\n boxShadow: "0 4px 20px rgba(0,0,0,${dropShadow /
    10})",\n cursor: "${cursor}" }}>\n${text}\n${
    checkedIcon ? "<FiSend style={{ marginLeft: 5 }} />" : ""
  }\n</${anim ? "motion." : ""}button>\n)`

  const handleCopyToClipboard = async () => {
    const clipboard = window.navigator.clipboard
    await clipboard.writeText(value)
    setCopied(true)
    await delay(3000)
    setCopied(false)
  }

  return (
    <>
      <Wrapper>
        <div>
          <TerminalWrapper>
            <ButtonContainer>
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
                {checkedIcon && <FiSend style={{ marginLeft: 5 }} />}
              </Button>
            </ButtonContainer>

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
              <ColorPicker colorPicked={background} setColor={setBackground} />
              <ColorPicker
                title="Text color"
                colorPicked={textColor}
                setColor={setTextColor}
              />
              <Toggle
                title="Icon"
                toggleCheck={() => setCheckedIcon(prevState => !prevState)}
              />
              <Toggle
                title="Animation"
                toggleCheck={() => setAnim(prevState => !prevState)}
              />
            </div>
            <CopyButton onClick={handleCopyToClipboard}>
              <AnimatePresence>
                {copied ? (
                  <CopyText
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ color: "lightgreen" }}
                  >
                    <FiCheckCircle style={{ marginRight: 5 }} />
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

const Toggle = ({ title, toggleCheck }) => {
  const [checked, setChecked] = useState(true)
  const ref = useRef(null)

  const handleCheck = () => {
    setChecked(prevState => !prevState)
    toggleCheck()
  }

  return (
    <CounterWrapper>
      <Title>{title}</Title>
      <label htmlFor={title}>
        <input
          id={title}
          ref={ref}
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

const ColorPicker = ({
  title = "Background color",
  colorPicked = "red",
  setColor,
}) => {
  const [toggle, setToggle] = useState(false)

  const handleColorChange = color => {
    setColor(color.hex)
    setToggle(false)
  }

  return (
    <CounterWrapper>
      <Title>{title}</Title>
      <ColorDiv onClick={() => setToggle(true)} color={colorPicked} />
      {toggle && (
        <ColorPickerWrapper>
          <CompactPicker
            color={colorPicked}
            onChangeComplete={handleColorChange}
          />
        </ColorPickerWrapper>
      )}
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
`

const TerminalWrapper = styled.div`
  /* background: #0a0a0a; */
  width: 100%;
  padding: 3rem;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;

  border-radius: 20px;
  min-height: 52rem;

  position: relative;
`

const Sidebar = styled.aside`
  /* background: #0a0a0a; */
  border-radius: 10px;
  padding: 3rem 3rem;
  /* border: 1px solid #222; */
`

const ButtonContainer = styled.div`
  /* box-shadow: inset 4px 4px 20px rgba(0, 0, 0, 0.2); */
  background: #112;
  /* border: 1px solid #aaa; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15rem;
  border-radius: 10px;
  width: 40rem;
  margin: 0 auto;
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

const ColorPickerWrapper = styled.div`
  position: absolute;
  left: 95%;
`

const InputField = styled.input`
  border: 1px solid #111;
  color: ghostwhite;
  background: none;
  padding: 0.8em 0.8em;
  border-radius: 5px;
  font-size: 1.4rem;
  font-family: inherit;
  border: 1px solid #222;
  min-width: 253px;
  margin-bottom: 1.6rem;
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
  padding: 2rem 0;
  color: var(--primaryColor);
  max-width: 100%;
`

const CopyButton = styled(motion.button)`
  padding: 0.8em 2em;
  font-size: 1.6rem;
  font-weight: 500;
  border: 1px solid var(--primaryColor);
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
`

const CopyText = styled(motion.div)`
  display: flex;
  align-items: center;
`

const CopyToClipboardIcon = styled(FiCopy)`
  font-size: 2.2rem;
  padding: 5px;
`
