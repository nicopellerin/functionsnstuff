import * as React from "react"
import { useRef, useEffect } from "react"
import styled from "styled-components"
import { Canvas, useFrame, useThree } from "react-three-fiber"
import * as THREE from "three"
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer"
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass"
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js"

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

  const Effects = React.memo(({ children }) => {
    const { gl, camera, size } = useThree()
    const composer = useRef()
    const scene = useRef()

    useEffect(() => {
      composer.current = new EffectComposer(gl)

      composer.current.addPass(new RenderPass(scene.current, camera))

      const bloomPass = new UnrealBloomPass(
        new THREE.Vector2(size.width, size.height),
        1.5,
        0.5,
        0.85
      )

      gl.toneMappingExposure = 0.9

      bloomPass.threshold = 0.1
      bloomPass.strength = 4
      bloomPass.radius = 0.75

      composer.current.addPass(bloomPass)
    }, [])

    useFrame(() => composer.current.render(), 1)
    return <scene ref={scene}>{children}</scene>
  })

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
            <Effects>
              <Particles count={150} />
              <Stars count={800} />
              <fog attach="fog" args={["#ff88aa", 8, 1]} />
            </Effects>
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
