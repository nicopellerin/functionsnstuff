import * as React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { wrap } from "@popmotion/popcorn"
import { images } from "./image-data"
import styled from "styled-components"

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
}

const Example = () => {
  const [[page, direction], setPage] = useState([0, 0])

  const imageIndex = wrap(0, images.length, page)

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }

  return (
    <Container>
      <AnimatePresence initial={false} custom={direction}>
        <ImageStyled
          alt="Slider"
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 200 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x)

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1)
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1)
            }
          }}
        />
      </AnimatePresence>
      <NextIcon onClick={() => paginate(1)}>{"‣"}</NextIcon>
      <PrevIcon onClick={() => paginate(-1)}>{"‣"}</PrevIcon>
    </Container>
  )
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity
}

export default Example

// Styles
const Container = styled.div`
  width: 100%;
  height: 50rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

const ImageStyled = styled(motion.img)`
  position: absolute;
  max-width: 100%;
`

const NextIcon = styled.div`
  top: calc(50% - 20px);
  position: absolute;
  background: white;
  border-radius: 30px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  z-index: 2;
  right: 10px;
`

const PrevIcon = styled.div`
  top: calc(50% - 20px);
  position: absolute;
  background: white;
  border-radius: 30px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  z-index: 2;
  left: 10px;
  transform: scale(-1);
`
