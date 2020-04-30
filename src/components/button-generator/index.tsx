import * as React from "react"
import { useState, useRef, useLayoutEffect, useEffect } from "react"
import styled from "styled-components"
import * as Icon from "react-icons/fi"
import { motion, AnimatePresence } from "framer-motion"
import { useMedia } from "react-use-media"
import { Listbox, ListboxOption } from "@reach/listbox"
import "@reach/listbox/styles.css"

import Spacer from "../spacer"
import DarkMode from "../dark-mode"
import Counter from "./counter"
import ColorPicker from "./color-picker"
import Toggle from "./toggle"
import copyToClipboard from "./copy-to-clipboard"
import CodeBlock from "./code-block"

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

const ButtonGeneratorMain = () => {
  const [text, setText] = useState("Send")
  const [fontSize, setFontSize] = useState(16)
  const [borderRadius, setBorderRadius] = useState(5)
  const [horiPadding, setHoriPadding] = useState(35)
  const [vertPadding, setVertPadding] = useState(15)
  const [background, setBackground] = useState("#F44E3B")
  const [backgroundGradient1, setBackgroundGradient1] = useState(background)
  const [backgroundGradient2, setBackgroundGradient2] = useState("#BD11E0")
  const [textColor, setTextColor] = useState("#fff")
  const [dropShadow, setDropShadow] = useState(3)
  const [isBold, setIsBold] = useState(false)
  const [copied, setCopied] = useState(false)
  const [checkedIcon, setCheckedIcon] = useState(true)
  const [anim, setAnim] = useState(true)
  const [darkMode, setDarkMode] = useState(true)
  const [icon, setIcon] = useState(Icons.Send)
  const [backgroundType, setBackgroundType] = useState(BackgroundType.Fill)
  const [codeStyle, setCodeStyle] = useState(CodeStyles.InlineStyles)

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

  const handleCopyToClipboard = async value => {
    copyToClipboard(value)
    setCopied(true)
    await delay(1500)
    setCopied(false)
  }

  const iconPicker = () => {
    const style = { marginLeft: "0.3em" }
    switch (icon) {
      case Icons.User:
        return <Icon.FiUser style={style} />
      case Icons.Send:
        return <Icon.FiSend style={style} />
      case Icons.Check:
        return <Icon.FiCheckCircle style={style} />
      case Icons.ChevronRight:
        return <Icon.FiChevronRight style={style} />
      case Icons.Login:
        return <Icon.FiLogIn style={style} />
      case Icons.Logout:
        return <Icon.FiLogOut style={style} />
      case Icons.Mail:
        return <Icon.FiMail style={style} />
      case Icons.Download:
        return <Icon.FiDownload style={style} />
    }
  }

  return (
    <>
      <Wrapper>
        <TerminalWrapper>
          <ButtonWrapper darkMode={darkMode ? true : false}>
            <DarkModeWrapper>
              <DarkMode
                setToggle={() => setDarkMode(prevState => !prevState)}
              />
            </DarkModeWrapper>
            <Button
              whileHover={{ y: anim ? -1 : 0 }}
              whileTap={{ y: anim ? 1 : 0 }}
              style={{
                color: textColor,
                background:
                  backgroundType === BackgroundType.Fill
                    ? background
                    : `linear-gradient(${backgroundGradient1}, ${backgroundGradient2})`,
                padding: `${vertPadding}px ${horiPadding}px`,
                border,
                borderRadius,
                fontSize,
                fontWeight: isBold ? "600" : "400",
                boxShadow: `0 4px 20px rgba(0,0,0,${dropShadow / 10})`,
                cursor,
              }}
            >
              <span>{text}</span>
              {checkedIcon && iconPicker()}
            </Button>
          </ButtonWrapper>
          {isDesktop ? (
            <>
              <CodeStyleWrapper>
                <ListboxStyled
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
                </ListboxStyled>
              </CodeStyleWrapper>
              <CodeBlock
                value={
                  codeStyle === CodeStyles.InlineStyles ? value : valueStyled
                }
              />
            </>
          ) : null}
        </TerminalWrapper>
        <Sidebar>
          <SidebarContainer>
            <Title>Text</Title>
            <InputField value={text} onChange={e => setText(e.target.value)} />
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
              renderOptions={
                <ListboxStyled
                  defaultValue={BackgroundType.Fill}
                  onChange={value => setBackgroundType(value as BackgroundType)}
                  style={{ border: "none" }}
                >
                  <div>
                    <ListboxOptionStyled value={BackgroundType.Fill}>
                      Fill
                    </ListboxOptionStyled>
                    <ListboxOptionStyled value={BackgroundType.Gradient}>
                      Gradient
                    </ListboxOptionStyled>
                  </div>
                </ListboxStyled>
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
            <ColorPicker
              title="Text color"
              colorPicked={textColor}
              setColor={setTextColor}
              backgroundType={BackgroundType.Fill}
            />
            <Toggle
              title="Bold text"
              check={isBold}
              toggleCheck={() => setIsBold(prevState => !prevState)}
            />
            <Toggle
              renderOptions={
                <ListboxStyled
                  disabled={!checkedIcon}
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
                  <ListboxOptionStyled value={Icons.Login}>
                    Login
                  </ListboxOptionStyled>
                  <ListboxOptionStyled value={Icons.Logout}>
                    Logout
                  </ListboxOptionStyled>
                  <ListboxOptionStyled value={Icons.Mail}>
                    Mail
                  </ListboxOptionStyled>
                  <ListboxOptionStyled value={Icons.Download}>
                    Download
                  </ListboxOptionStyled>
                </ListboxStyled>
              }
              title="Icon"
              check={checkedIcon}
              toggleCheck={() => setCheckedIcon(prevState => !prevState)}
            />
            <Toggle
              title="Animation"
              check={anim}
              toggleCheck={() => setAnim(prevState => !prevState)}
            />

            <CopyButton
              copied={copied ? true : false}
              onClick={() => handleCopyToClipboard(value)}
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

export default ButtonGeneratorMain

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

const DarkModeWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
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

const ButtonWrapper = styled.div`
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
