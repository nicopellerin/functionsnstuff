import React from "react"
import styled from "styled-components"
import { Canvas } from "react-three-fiber"
import * as THREE from "three"

import Particles from "./particles"
import Stars from "./stars"

const Background = () => {
  const isMobile = (width = 1024) => {
    let mql =
      typeof window !== "undefined" &&
      window.matchMedia(`(max-width: ${width}px)`)
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        typeof window !== "undefined" && window.navigator.userAgent
      ) &&
      mql.matches
    ) {
      return true
    }
    return false
  }

  return (
    <>
      {isMobile() ? (
        <BackgroundSkyMobile>
          <BackgroundSky src={"/bg_mobile.png"} />
        </BackgroundSkyMobile>
      ) : (
        <Canvas
          concurrent
          camera={{
            fov: 10000,
            position: [0, 0, 30],
            near: 0.01,
            far: 10000,
          }}
          style={{
            position: "absolute",
            top: 0,
            width: "100%",
            maxHeight: "65rem",
            zIndex: -2,
          }}
          onCreated={({ gl }) => {
            gl.toneMapping = THREE.Uncharted2ToneMapping
            gl.setClearColor(new THREE.Color("#020207"))
          }}
        >
          >
          <React.Suspense fallback={null}>
            <Particles count={150} />
            <Stars count={1250} />
          </React.Suspense>
        </Canvas>
      )}
    </>
  )
}

export default Background

// Styles
const BackgroundSkyMobile = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: -2;
`

const BackgroundSky = styled.img`
  max-width: 100%;
  height: 50rem;
  object-fit: cover;
  object-position: center;
`
