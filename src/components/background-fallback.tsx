import * as React from "react"

const BackgroundFallback = () => {
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 0,
          width: "100%",
          maxHeight: "65rem",
          zIndex: -2,
        }}
      ></div>
    </>
  )
}

export default BackgroundFallback
