import * as React from "react"
import { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import * as Icon from "react-icons/fi"
import { motion } from "framer-motion"
import { useImmer } from "use-immer"
import { saveAs } from "file-saver"

import Counter from "../generator-shared/counter"
import ColorPicker from "./color-picker"
import Toggle from "../generator-shared/toggle"

enum BackgroundType {
  Fill = "BackgroundFill",
  Gradient = "BackgroundGradient",
}

const OgImageGenerator = () => {
  const [backgroundColor, setBackgroundColor] = useState("#112")
  const [heading, setHeading] = useState("Welcome")
  const [headingFontSize, setHeadingFontSize] = useState(90)
  const [headingColor, setHeadingColor] = useState("#fff")
  const [isHeadingBold, setIsHeadingBold] = useState(true)
  const [text, setText] = useState(
    "Tutorials & tips for React, Go, Node.js, Gatsby and more!"
  )
  const [fontSize, setFontSize] = useState(24)
  const [textColor, setTextColor] = useState("#fff")
  const [isBold, setIsBold] = useState(false)
  const [imageList, setImageList] = useImmer([
    { name: "bg10.png", src: "/bg10.png", height: 500, width: 1000, zIndex: 0 },
  ])
  const [shiftPressed, setShiftPressed] = useState(false)

  let html2canvas: any
  useEffect(() => {
    html2canvas = require("html2canvas")
  }, [])

  const imageUploadRef = useRef()
  const ogImageRef = useRef()

  const removeImage = ({ src }) => {
    const newImageList = imageList.filter(image => image.src !== src)
    setImageList(() => newImageList)
  }

  const addImage = e => {
    const file = e.currentTarget.files![0]

    const img = new Image()
    img.src = URL.createObjectURL(file)

    let height = 0
    let width = 0

    img.onload = () => {
      height = img.height
      width = img.width

      const newImage = {
        name: file.name,
        src: img.src,
        width,
        height,
        zIndex: imageList.length,
      }
      setImageList(draft => [...draft, newImage])
    }
  }

  const reduceImageSize = ({ src }) => {
    const img = imageList.findIndex(image => image.src === src)
    setImageList(draft => {
      draft[img].width -= 50
    })
  }

  const increaseImageSize = ({ src }) => {
    const img = imageList.findIndex(image => image.src === src)
    setImageList(draft => {
      draft[img].width += 50
    })
  }

  const handleMoveUp = ({ src }) => {
    const img = imageList.findIndex(image => image.src === src)
    setImageList(draft => {
      ;[draft[img], draft[img - 1]] = [draft[img - 1], draft[img]]
    })
  }

  const handleMoveDown = ({ src }) => {
    const img = imageList.findIndex(image => image.src === src)
    setImageList(draft => {
      ;[draft[img], draft[img + 1]] = [draft[img + 1], draft[img]]
    })
  }

  const downloadOgImage = async () => {
    html2canvas(ogImageRef.current, {
      scale: 2,
      scrollX: -7.5,
      scrollY: -window.scrollY,
      useCORS: true,
    }).then(canvas => {
      const data = canvas.toDataURL("image/png")
      const src = encodeURI(data)
      const filename = `og-image-${new Date().getTime()}`
      saveAs(src, filename)
    })
  }

  useEffect(() => {
    document.addEventListener("keydown", e => {
      if (e.keyCode === 16) {
        setShiftPressed(true)
      }
    })

    document.addEventListener("keyup", e => {
      if (e.keyCode === 16) {
        setShiftPressed(false)
      }
    })

    return () => {
      document.removeEventListener("keydown", e => {
        if (e.keyCode === 16) {
          setShiftPressed(true)
        }
      })

      document.removeEventListener("keyup", e => {
        if (e.keyCode === 16) {
          setShiftPressed(false)
        }
      })
    }
  }, [])

  return (
    <Wrapper>
      <OgImageWrapper>
        <OgImage ref={ogImageRef} id="og-image" style={{ backgroundColor }}>
          <motion.h1
            id="heading"
            drag={shiftPressed ? "y" : true}
            dragMomentum={false}
            style={{
              position: "relative",
              zIndex: 2,
              margin: 0,
              fontSize: headingFontSize,
              cursor: "move",
              color: headingColor,
              fontWeight: isHeadingBold ? 700 : 400,
              justifySelf: "center",
            }}
          >
            {heading}
          </motion.h1>
          <motion.p
            id="tagline"
            drag={shiftPressed ? "y" : true}
            dragMomentum={false}
            style={{
              position: "relative",
              zIndex: 2,
              fontSize,
              fontFamily: "var(--systemFont)",
              cursor: "move",
              color: textColor,
              fontWeight: isBold ? 700 : 400,
              justifySelf: "center",
            }}
          >
            {text}
          </motion.p>
          {imageList.map(({ name, src, width }, i) => (
            <motion.img
              key={src}
              drag={shiftPressed ? "y" : true}
              dragMomentum={false}
              src={src}
              alt={name}
              style={{
                width: width,
                position: "absolute",
                zIndex: i,
                cursor: "move",
              }}
            />
          ))}
        </OgImage>
      </OgImageWrapper>
      <DownloadButtonWrapper>
        <DownloadButton
          onClick={downloadOgImage}
          whileHover={{ y: -1 }}
          whileTap={{ y: 1 }}
        >
          Download og:image <Icon.FiDownload style={{ marginLeft: 10 }} />
        </DownloadButton>
      </DownloadButtonWrapper>
      <p
        style={{
          color: "#999",
          fontSize: "1.4rem",
          textAlign: "center",
          margin: "4rem auto 2rem auto",
          maxWidth: "55rem",
        }}
      >
        Hold down shift while dragging to move in a straight line
      </p>
      <SidebarWrapper>
        <Sidebar>
          <SidebarContainer>
            <div>
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
                <Title>Tagline</Title>
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
              <InputGroup>
                <Title>Background</Title>
                <ColorPicker
                  title="Background color"
                  colorPicked={backgroundColor}
                  setColor={setBackgroundColor}
                  backgroundType={BackgroundType.Fill}
                />
              </InputGroup>
            </div>
            <div>
              <Title>Images</Title>
              <ImageListWrapper>
                {imageList.map(({ name, src }, i) => (
                  <ImageItemWrapper key={src}>
                    <div>
                      <img
                        src={src}
                        alt={name}
                        width={50}
                        style={{
                          marginRight: 15,
                          border: "1px solid #333",
                          height: 50,
                          objectFit: "cover",
                          borderRadius: "100%",
                        }}
                      />
                    </div>
                    <div>
                      <ButtonIcon
                        whileHover={{ scale: 1.1 }}
                        onClick={() => increaseImageSize({ src })}
                        style={{ marginRight: 5 }}
                      >
                        <Icon.FiPlusCircle
                          size={24}
                          color="var(--primaryColor)"
                        />
                      </ButtonIcon>
                      <ButtonIcon
                        whileHover={{ scale: 1.1 }}
                        onClick={() => reduceImageSize({ src })}
                        style={{ marginRight: 5 }}
                      >
                        <Icon.FiMinusCircle
                          size={24}
                          color="var(--primaryColor)"
                        />
                      </ButtonIcon>
                      <ButtonIcon
                        whileHover={{ scale: 1.1 }}
                        onClick={() => removeImage({ src })}
                      >
                        <Icon.FiX size={24} color="red" />
                      </ButtonIcon>
                    </div>
                    <div>
                      <ButtonIcon
                        disabled={true}
                        // disabled={i - 1 < 0}
                        onClick={() => handleMoveUp({ src })}
                      >
                        <Icon.FiChevronUp
                          size={24}
                          color="var(--primaryColor)"
                        />
                      </ButtonIcon>
                      <ButtonIcon
                        disabled={true}
                        // disabled={i + 1 === imageList.length}
                        onClick={() => handleMoveDown({ src })}
                      >
                        <Icon.FiChevronDown
                          size={24}
                          color="var(--primaryColor)"
                        />
                      </ButtonIcon>
                    </div>
                  </ImageItemWrapper>
                ))}
              </ImageListWrapper>
              <Button onClick={() => imageUploadRef.current.click()}>
                <Icon.FiPlusCircle style={{ marginRight: 5 }} />
                Add image
              </Button>
              <input
                ref={imageUploadRef}
                type="file"
                onChange={addImage}
                hidden
              />
            </div>
          </SidebarContainer>
        </Sidebar>
      </SidebarWrapper>
    </Wrapper>
  )
}

export default OgImageGenerator

// Styles
const Wrapper = styled.div`
  position: relative;
`

const OgImageWrapper = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  @media (max-width: 500px) {
    padding: 0;
  }
`

const OgImage = styled.div`
  width: 1000px;
  height: 500px;
  background: #112;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`

const SidebarWrapper = styled.div``

const Sidebar = styled.aside`
  border-radius: 10px;
  padding: 3rem 3rem;
  width: 100%;

  @media (max-width: 500px) {
    padding: 3rem 1rem;
  }
`

const SidebarContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 6rem;
`

const Button = styled(motion.button)`
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
  outline: none;
  height: 5rem;
  margin-top: 1rem;

  &:disabled {
    pointer-events: none;
    opacity: 0.3;
  }
`

const DownloadButtonWrapper = styled.div`
  margin: 3rem 0;
  display: flex;
  justify-content: center;
`

const DownloadButton = styled(Button)`
  width: auto;
  will-change: transform;
`

const InputGroup = styled.div`
  padding-bottom: 1rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;

  &:not(:last-of-type) {
    border-bottom: 2px solid #222;
  }
`

const InputField = styled.input`
  border: 1px solid #111;
  color: var(--primaryColor);
  background: none;
  padding: 1em 0.8em;
  border-radius: 5px;
  font-size: 1.6rem;
  font-family: inherit;
  border: 1px solid #222;
  min-width: 253px;
  height: 5rem;

  @media (max-width: 500px) {
    width: 100%;
  }
`

const ImageListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  & > * {
    margin-bottom: 1.5rem;
  }
`

const ImageItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #333;
  padding-bottom: 1.5rem;
  width: 100%;
`

const ButtonIcon = styled(motion.button)`
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  padding: 0.2rem;

  &:disabled {
    pointer-events: none;
    opacity: 0.3;
  }
`

const Title = styled.h4`
  margin: 0;
  font-size: 1.6rem;
  color: var(--pink);
  margin-right: 1rem;
  margin-bottom: 1rem;
  white-space: nowrap;
  user-select: none;
  font-family: var(--systemFont);
`
