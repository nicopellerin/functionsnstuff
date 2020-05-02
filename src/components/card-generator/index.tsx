import * as React from "react"
import { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import * as Icon from "react-icons/fi"
import { motion, AnimatePresence } from "framer-motion"
import { useMedia } from "react-use-media"
import { Listbox, ListboxOption } from "@reach/listbox"
import "@reach/listbox/styles.css"

import Spacer from "../spacer"
import Counter from "../generator-shared/counter"
import ColorPicker from "../generator-shared/color-picker"
import Toggle from "../generator-shared/toggle"
import copyToClipboard from "../generator-shared/copy-to-clipboard"
import CodeBlock from "../generator-shared/code-block"

const delay = duration => new Promise(resolve => setTimeout(resolve, duration))

enum Icons {
  User = "FiUser",
  Send = "FiSend",
  Check = "FiCheckCircle",
  ChevronRight = "FiChevronRight",
  Login = "FiLogIn",
  Logout = "FiLogOut",
  Mail = "FiMail",
  Download = "FiDownload",
}

enum CodeStyles {
  InlineStyles = "Inline styles",
  StyledComponents = "styled-components",
}

enum BackgroundType {
  Fill = "BackgroundFill",
  Gradient = "BackgroundGradient",
}

const CardGeneratorMain = () => {
  const [heading, setHeading] = useState("Welcome")
  const [headingFontSize, setHeadingFontSize] = useState(36)
  const [headingColor, setHeadingColor] = useState("#fff")

  const [text, setText] = useState(
    "Tutorials & tips for React, Node.js and more!"
  )
  const [fontSize, setFontSize] = useState(16)
  const [borderRadius, setBorderRadius] = useState(10)
  const [horiPadding, setHoriPadding] = useState(35)
  const [vertPadding, setVertPadding] = useState(15)
  const [background, setBackground] = useState("#0a0a0a")
  const [backgroundGradient1, setBackgroundGradient1] = useState(background)
  const [backgroundGradient2, setBackgroundGradient2] = useState("#BD11E0")
  const [textColor, setTextColor] = useState("#fff")
  const [dropShadow, setDropShadow] = useState(3)
  const [isBold, setIsBold] = useState(false)
  const [copied, setCopied] = useState(false)
  const [checkedIcon, setCheckedIcon] = useState(true)
  const [anim, setAnim] = useState(true)
  const [icon, setIcon] = useState(Icons.Send)
  const [backgroundType, setBackgroundType] = useState(BackgroundType.Fill)
  const [codeStyle, setCodeStyle] = useState(CodeStyles.InlineStyles)

  const imageRef = useRef(null)

  const isDesktop = useMedia({
    minWidth: 500,
  })

  useEffect(() => {
    setBackgroundGradient1(background)
  }, [background])

  const border = "none"
  const cursor = "pointer"

  const imports = `import * as React from 'react'\n`
  const animImports = `import {motion} from 'framer-motion'\n\n${
    anim ? "" : "\n"
  }`
  const styledImports = `import styled from 'styled-components'\n${
    checkedIcon || anim ? "" : "\n"
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
  }style={{ color: "${textColor}",\n background: "${
    backgroundType === BackgroundType.Fill
      ? background
      : `linear-gradient(${backgroundGradient1}, ${backgroundGradient2})`
  }",\n padding: "${vertPadding}px ${horiPadding}px",\n border: "${border}",\n borderRadius: "${borderRadius}px",\n fontSize: "${fontSize}px",\n fontWeight: "${
    isBold ? "600" : "400"
  }",\n boxShadow: "0 4px 20px rgba(0,0,0,${dropShadow /
    10})",\n cursor: "${cursor}" }}>\n${text}${
    checkedIcon ? `\n<${icon} style={{ marginLeft: "0.3em" }} />` : ""
  }\n</${anim ? "motion." : ""}button>\n)`

  const valueStyled = `${imports}${styledImports}${
    checkedIcon ? iconImports : ""
  }${anim ? animImports : ""}export const Button = () => (\n<ButtonStyled ${
    anim ? "whileHover={{ y: -1 }}\n" : ""
  }${anim ? " whileTap={{ y: 1 }}\n " : ""}>\n${text}${
    checkedIcon ? `\n<IconStyled />` : ""
  }\n</ButtonStyled>\n)\n\n// Styles\nconst ButtonStyled = styled${
    anim ? "(motion.button)" : ".button"
  }\`\n color: ${textColor};\n background: ${
    backgroundType === BackgroundType.Fill
      ? background
      : `linear-gradient(${backgroundGradient1}, ${backgroundGradient2})`
  };\n padding: ${vertPadding}px ${horiPadding}px;\n border: ${border};\n border-radius: ${borderRadius}px;\n font-size: ${fontSize}px;\n font-weight: ${
    isBold ? "600" : "400"
  };\n box-shadow: 0 4px 20px rgba(0,0,0,${dropShadow /
    10});\n cursor: ${cursor};\`\n\n${
    checkedIcon
      ? `const IconStyled = styled(${icon})\`\n margin-left: 0.3em;\``
      : ""
  }
  `

  const handleCopyToClipboard = async (value: string) => {
    copyToClipboard(value)
    setCopied(true)
    await delay(1500)
    setCopied(false)
  }

  return (
    <>
      <Wrapper>
        <TerminalWrapper>
          <div
            style={{
              background: "#eef",
              padding: "40px 20px",
              borderRadius: 10,
            }}
          >
            <motion.div
              whileHover={{
                scale: anim ? [1, 1.04, 1.02] : 1,
                y: anim ? [0, -5] : 0,
              }}
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "start",
                borderRadius: borderRadius,
                width: "40rem",
                height: "25rem",
                margin: "0 auto",
                background: "#000",
                overflow: "hidden",
                boxShadow: `0 7px 20px rgba(0,0,0,${dropShadow / 10})`,
                willChange: "transform",
                // cursor,
              }}
            >
              <motion.img
                ref={imageRef}
                drag
                src="/bg12.png"
                style={{
                  width: "150%",
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  height: "17rem",
                  objectFit: "cover",
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "2rem",
                  left: "2rem",
                  zIndex: 10,
                }}
              >
                <h2
                  style={{
                    color: headingColor,
                    marginBottom: 5,
                    fontSize: headingFontSize,
                    maxWidth: "calc(100% - 2rem)",
                  }}
                >
                  {heading}
                </h2>
                <p
                  style={{
                    margin: 0,
                    color: textColor,
                    fontFamily: "var(--systemFont)",
                    fontSize,
                  }}
                >
                  {text}
                </p>
              </div>
              <svg
                viewBox={`0 0 100 ${heading.length >= 16 ? 40 : 20}`}
                height="100%"
                width="100%"
                style={{ position: "absolute", pointerEvents: "none" }}
              >
                <path
                  fill={background}
                  d="M0 60 V10 Q30 17 55 10 T100 11 V60z"
                  width="100%"
                  height="100%"
                  // stroke="#fff"
                />
              </svg>
            </motion.div>
          </div>
          <CodeStyleWrapper>
            {/* <ListboxStyled
              defaultValue={CodeStyles.InlineStyles}
              onChange={value => setCodeStyle(value as CodeStyles)}
              style={{ border: "none" }}
            >
              <div>
                <ListboxOptionStyled value={CodeStyles.InlineStyles}>
                  {CodeStyles.InlineStyles}
                </ListboxOptionStyled>
                <ListboxOptionStyled value={CodeStyles.StyledComponents}>
                  {CodeStyles.StyledComponents}
                </ListboxOptionStyled>
              </div>
            </ListboxStyled> */}
          </CodeStyleWrapper>
          {isDesktop ? (
            <CodeBlock
              value={
                codeStyle === CodeStyles.InlineStyles ? value : valueStyled
              }
            />
          ) : null}
        </TerminalWrapper>
        <Sidebar>
          <SidebarContainer>
            <InputGroup>
              <Title>Heading</Title>
              <InputField
                value={heading}
                onChange={e => setHeading(e.target.value)}
              />
              <Counter
                title={"Font size"}
                value={headingFontSize}
                inc={() => setHeadingFontSize(prevState => prevState + 1)}
                dec={() => setHeadingFontSize(prevState => prevState - 1)}
              />
              <Toggle
                title="Bold text"
                check={isBold}
                toggleCheck={() => setIsBold(prevState => !prevState)}
              />
              <ColorPicker
                title="Heading color"
                colorPicked={headingColor}
                setColor={setHeadingColor}
                backgroundType={BackgroundType.Fill}
              />
            </InputGroup>
            <InputGroup>
              <Title>Text</Title>
              <InputField
                value={text}
                onChange={e => setText(e.target.value)}
              />
              <Counter
                title={"Font size"}
                value={fontSize}
                inc={() => setFontSize(prevState => prevState + 1)}
                dec={() => setFontSize(prevState => prevState - 1)}
              />
              <Toggle
                title="Bold text"
                check={isBold}
                toggleCheck={() => setIsBold(prevState => !prevState)}
              />
              <ColorPicker
                title="Text color"
                colorPicked={textColor}
                setColor={setTextColor}
                backgroundType={BackgroundType.Fill}
              />
            </InputGroup>
            <InputGroup>
              <Title>Image</Title>
              <InputField
                value={text}
                onChange={e => setText(e.target.value)}
              />
            </InputGroup>
            <ColorPicker
              renderOptions={
                null
                // <ListboxStyled
                //   defaultValue={BackgroundType.Fill}
                //   onChange={value => setBackgroundType(value as BackgroundType)}
                //   style={{ border: "none" }}
                // >
                //   <div>
                //     <ListboxOptionStyled value={BackgroundType.Fill}>
                //       Fill
                //     </ListboxOptionStyled>
                //     <ListboxOptionStyled value={BackgroundType.Gradient}>
                //       Gradient
                //     </ListboxOptionStyled>
                //   </div>
                // </ListboxStyled>
              }
              title="Background color"
              colorPicked={background}
              setColor={setBackground}
              colorPickedGradient1={backgroundGradient1}
              setColorPickedGradient1={setBackgroundGradient1}
              colorPickedGradient2={backgroundGradient2}
              setColorPickedGradient2={setBackgroundGradient2}
              backgroundType={backgroundType}
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
            <Toggle
              title="Animation"
              check={anim}
              toggleCheck={() => setAnim(prevState => !prevState)}
            />

            <CopyButton
              copied={copied ? true : false}
              onClick={() =>
                handleCopyToClipboard(
                  codeStyle === CodeStyles.InlineStyles ? value : valueStyled
                )
              }
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
          </SidebarContainer>
        </Sidebar>
      </Wrapper>
      <Spacer />
    </>
  )
}

export default CardGeneratorMain

// Styles
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(520px, 4fr) 1fr;
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

const CodeStyleWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 3rem;
`

const SidebarContainer = styled.div`
  width: 100%;
`

const CardWrapper = styled.div`
  background: #eff;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 40rem;
  margin: 0 auto;
  position: relative;
  padding: 2rem;

  @media (max-width: 500px) {
    width: 100%;
  }
`

const Card = styled.div`
  background: red;
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

const InputGroup = styled.div`
  padding-bottom: 1rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid var(--pink);
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
  margin-bottom: 0.5rem;

  @media (max-width: 500px) {
    width: 100%;
  }
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

  > [data-reach-listbox-popover] {
    background: red;
    outline: none;
  }
`

const ListboxOptionStyled = styled(ListboxOption)`
  font-size: 1.4rem;
  color: var(--textMenu);
  background: #112;
  padding: 1rem;
  cursor: pointer;
`
