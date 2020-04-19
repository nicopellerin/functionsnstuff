import * as React from "react"
import * as THREE from "three"
import { Suspense, useRef } from "react"
import { Canvas, useRender, useThree } from "react-three-fiber"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

import Model from "../donut/Donut"

const Donut = () => {
  extend({ OrbitControls })

  const Controls = () => {
    const orbitRef = useRef(null)
    const { camera, gl } = useThree()

    useRender(() => {
      if (orbitRef.current) {
        orbitRef.current.update()
      }
    }, false)

    return (
      <orbitControls
        autoRotateSpeed={0.3}
        enableDamping
        dampingFactor={0.05}
        enableKeys
        minDistance={3}
        maxDistance={5.8}
        minPolarAngle={THREE.Math.degToRad(70)}
        maxPolarAngle={THREE.Math.degToRad(90)}
        minAzimuthAngle={THREE.Math.degToRad(-80)}
        maxAzimuthAngle={THREE.Math.degToRad(20)}
        args={[camera, gl.domElement]}
        ref={orbitRef}
        zoomEnabled={false}
      />
    )
  }

  return (
    <div id="demo-home" style={{ position: "absolute", right: 0 }}>
      <Canvas
        id="main-image"
        onCreated={({ gl }) => {
          gl.shadowMap.enabled = true
          gl.shadowMap.type = THREE.PCFSoftShadowMap
        }}
        camera={{ position: [0, 0, 5] }}
      >
        <pointLight
          direction={[0, 0, 0]}
          distance={20}
          intensity={0.8}
          color="white"
        />
        <ambientLight intensity={0.8} />
        <hemisphereLight intensity={0.2} />
        <spotLight
          castShadow
          position={[-15, 0, 50]}
          penumbra={0}
          intensity={1}
          lightColor="#fff"
        />
        <Model />
        <Controls />
      </Canvas>
    </div>
  )
}

export default Donut
