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
      <NextIcon onClick={() => paginate(1)}>
        <svg
          layoutId="techItem"
          xmlns="http://www.w3.org/2000/svg"
          width="5.641"
          height="10"
        >
          <path
            d="M 0.246 5.395 C 0.006 5.155 0.006 4.766 0.246 4.526 L 4.592 0.18 C 4.832 -0.06 5.221 -0.06 5.461 0.18 L 5.461 0.18 C 5.701 0.42 5.701 0.809 5.461 1.049 L 1.115 5.395 C 0.875 5.635 0.486 5.635 0.246 5.395 Z M 0.18 4.605 C 0.42 4.365 0.809 4.365 1.049 4.605 L 5.395 8.951 C 5.635 9.191 5.635 9.58 5.395 9.82 L 5.395 9.82 C 5.155 10.06 4.766 10.06 4.526 9.82 L 0.18 5.474 C -0.06 5.234 -0.06 4.845 0.18 4.605 Z"
            transform="rotate(180 2.82 5)"
            fill="ghostwhite"
          ></path>
        </svg>
      </NextIcon>
      <PrevIcon onClick={() => paginate(-1)}>
        <svg
          layoutId="techItem"
          xmlns="http://www.w3.org/2000/svg"
          width="5.641"
          height="10"
        >
          <path
            d="M 0.246 5.395 C 0.006 5.155 0.006 4.766 0.246 4.526 L 4.592 0.18 C 4.832 -0.06 5.221 -0.06 5.461 0.18 L 5.461 0.18 C 5.701 0.42 5.701 0.809 5.461 1.049 L 1.115 5.395 C 0.875 5.635 0.486 5.635 0.246 5.395 Z M 0.18 4.605 C 0.42 4.365 0.809 4.365 1.049 4.605 L 5.395 8.951 C 5.635 9.191 5.635 9.58 5.395 9.82 L 5.395 9.82 C 5.155 10.06 4.766 10.06 4.526 9.82 L 0.18 5.474 C -0.06 5.234 -0.06 4.845 0.18 4.605 Z"
            transform="rotate(180 2.82 5)"
            fill="ghostwhite"
          ></path>
        </svg>
      </PrevIcon>
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
  background: rgba(0, 0, 0, 0.8);
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
  background: rgba(0, 0, 0, 0.8);
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
  transform: rotate(-180deg);
`
