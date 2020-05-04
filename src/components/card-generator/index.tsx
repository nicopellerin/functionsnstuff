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

const delay = (duration: number) =>
  new Promise(resolve => setTimeout(resolve, duration))

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
  const [isHeadingBold, setIsHeadingBold] = useState(true)
  const [text, setText] = useState(
    "Tutorials & tips for React, Node.js and more!"
  )
  const [fontSize, setFontSize] = useState(16)
  const [imageSrc, setImageSrc] = useState("/slide3.jpg")
  const [imageFileName, setImageFileName] = useState("")
  const [imageZoom, setImageZoom] = useState(1)
  const [imageOpacity, setImageOpacity] = useState(1)
  const [imageDimensions, setImageDimensions] = useState({ h: 400, w: 650 })
  const [editImagePosition, setEditImagePosition] = useState(false)
  const [showShape, setShowShape] = useState(false)
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

  const imageRef = useRef() as React.MutableRefObject<HTMLImageElement>
  const inputFileRef = useRef() as React.MutableRefObject<HTMLInputElement>

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

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files![0]

    let img = new Image()
    img.src = URL.createObjectURL(file)
    img.onload = () => {
      setImageDimensions({ h: img.height, w: img.width })
    }
    setImageZoom(1)
    setImageSrc(img.src)
    setImageFileName(file.name)
  }

  useEffect(() => {
    document.addEventListener("keydown", e => {
      if (e.keyCode === 18) {
        setEditImagePosition(true)
      }
    })

    document.addEventListener("keyup", e => {
      if (e.keyCode === 18) {
        setEditImagePosition(false)
      }
    })

    return () => {
      document.removeEventListener("keydown", e => {
        if (e.keyCode === 18) {
          setEditImagePosition(true)
        }
      })

      document.removeEventListener("keyup", e => {
        if (e.keyCode === 18) {
          setEditImagePosition(false)
        }
      })
    }
  }, [])

  return (
    <>
      <Wrapper>
        <TerminalWrapper>
          <div
            style={{
              background: "#eef",
              padding: "50px 20px",
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
                maxWidth: "40rem",
                height: "25rem",
                margin: "0 auto",
                background: "#000",
                overflow: "hidden",
                boxShadow: `0 7px 20px rgba(0,0,0,${dropShadow / 10})`,
                willChange: "transform",
              }}
            >
              <motion.img
                draggable="false"
                ref={imageRef}
                drag={editImagePosition ? true : false}
                src={imageSrc}
                style={{
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  height:
                    imageDimensions.w > 800
                      ? 400 * imageZoom
                      : (imageDimensions.h / 1.5) * imageZoom,
                  width:
                    imageDimensions.w > 800
                      ? 600 * imageZoom
                      : (imageDimensions.w / 1.5) * imageZoom,
                  objectFit: "cover",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  opacity: imageOpacity,
                  cursor: editImagePosition ? "move" : "initial",
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
                    fontWeight: isHeadingBold ? 700 : 400,
                    width: "100%",
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
                    fontWeight: isBold ? 600 : 400,
                  }}
                >
                  {text}
                </p>
              </div>
              {showShape ? (
                <svg
                  viewBox={`0 0 100 ${heading.length >= 16 ? 40 : 18}`}
                  height="100%"
                  width="100%"
                  style={{ position: "absolute", pointerEvents: "none" }}
                >
                  <path
                    fill={background}
                    d="M0 60 V10 Q30 17 55 10 T100 13 V60z"
                    width="100%"
                    height="100%"
                    // stroke="#fff"
                  />
                </svg>
              ) : null}
            </motion.div>
          </div>
          <p
            style={{
              color: "#999",
              fontSize: "1.4rem",
              textAlign: "center",
              margin: "3rem auto 0 auto",
              maxWidth: "55rem",
            }}
          >
            Press Alt (Option key on Mac) + drag image to move it around to
            desired position. You can also zoom the image using `Image zoom`
            below :)
          </p>
          {/* <CodeStyleWrapper>
          
          </CodeStyleWrapper>
          {isDesktop ? (
            <CodeBlock
              value={
                codeStyle === CodeStyles.InlineStyles ? value : valueStyled
              }
            />
          ) : null} */}
        </TerminalWrapper>
        <SidebarWrapper>
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
                  value={`${headingFontSize}`}
                  inc={() => setHeadingFontSize(prevState => prevState + 1)}
                  dec={() => setHeadingFontSize(prevState => prevState - 1)}
                />
                <Toggle
                  title="Bold heading"
                  check={isHeadingBold}
                  toggleCheck={() => setIsHeadingBold(prevState => !prevState)}
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
                  value={`${fontSize}`}
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
            </SidebarContainer>
          </Sidebar>
          <Sidebar>
            <SidebarContainer>
              <InputGroup>
                <Title>Image</Title>
                <input
                  ref={inputFileRef}
                  type="file"
                  onChange={e => handleImageUpload(e)}
                  hidden
                />
                <InputFile onClick={() => inputFileRef.current.click()}>
                  <Icon.FiUpload style={{ marginRight: 5 }} /> Upload
                </InputFile>
                <Counter
                  title={"Image zoom"}
                  value={`${(imageZoom * 100).toFixed(0)}%`}
                  inc={() => setImageZoom(prevState => prevState + 0.05)}
                  dec={() => setImageZoom(prevState => prevState - 0.05)}
                />
                <Counter
                  title={"Image opacity"}
                  value={`${Math.abs((imageOpacity * 100).toFixed(0))}%`}
                  inc={() =>
                    imageOpacity < 1 &&
                    setImageOpacity(prevState => prevState + 0.05)
                  }
                  dec={() =>
                    imageOpacity >= 0 &&
                    setImageOpacity(prevState => prevState - 0.05)
                  }
                />
              </InputGroup>
              <InputGroup>
                <Toggle
                  title="Shape (SVG)"
                  check={showShape}
                  toggleCheck={() => setShowShape(prevState => !prevState)}
                />
                <ColorPicker
                  renderOptions={
                    <ListboxStyled
                      defaultValue={BackgroundType.Fill}
                      onChange={value =>
                        setBackgroundType(value as BackgroundType)
                      }
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
                  title="Shape color"
                  colorPicked={background}
                  setColor={setBackground}
                  colorPickedGradient1={backgroundGradient1}
                  setColorPickedGradient1={setBackgroundGradient1}
                  colorPickedGradient2={backgroundGradient2}
                  setColorPickedGradient2={setBackgroundGradient2}
                  backgroundType={backgroundType}
                />
                <Toggle
                  title="Shape border"
                  check={showShape}
                  toggleCheck={() => setShowShape(prevState => !prevState)}
                />
                <ColorPicker
                  renderOptions={
                    <ListboxStyled
                      defaultValue={BackgroundType.Fill}
                      onChange={value =>
                        setBackgroundType(value as BackgroundType)
                      }
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
                  title="Shape border color"
                  colorPicked={background}
                  setColor={setBackground}
                  colorPickedGradient1={backgroundGradient1}
                  setColorPickedGradient1={setBackgroundGradient1}
                  colorPickedGradient2={backgroundGradient2}
                  setColorPickedGradient2={setBackgroundGradient2}
                  backgroundType={backgroundType}
                />
              </InputGroup>
              <Counter
                title={"Border radius"}
                value={`${borderRadius}`}
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
                disabled={true}
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
                      <span>{"Copy JSX - Coming soon :)"}</span>
                    </CopyText>
                  )}
                </AnimatePresence>
              </CopyButton>
            </SidebarContainer>
          </Sidebar>
        </SidebarWrapper>
      </Wrapper>
      <Spacer />
    </>
  )
}

export default CardGeneratorMain

// Styles
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
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
    padding: 0;
  }
`

const SidebarWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
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
  display: flex;
  flex-direction: column;
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

const InputFile = styled.button`
  padding: 1em 1.5em;
  border: 1px solid #333;
  font-size: 1.4rem;
  font-weight: 500;
  border-radius: 5px;
  background: none;
  color: var(--primaryColor);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  outline: none;
  align-self: center;
  justify-self: center;
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

  &:disabled {
    pointer-events: none;
    opacity: 0.3;
  }
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
