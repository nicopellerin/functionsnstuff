import React, { useRef } from "react"
import { useLoader } from "react-three-fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader"

export default function Model(props) {
  const group = useRef()
  const gltf = useLoader(GLTFLoader, "/donut.gltf", loader => {
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath("/draco-gltf/")
    loader.setDRACOLoader(dracoLoader)
  })

  return (
    <group ref={group} {...props}>
      <scene name="Scene">
        <object3D
          name="Light"
          position={[
            0.7455518245697021,
            -1.6043245792388916,
            -1.9138314723968506,
          ]}
          rotation={[
            1.8901259643076738,
            0.8805683470227423,
            -2.045215994363619,
          ]}
        />
        <object3D
          name="Camera"
          position={[
            0.43747326731681824,
            -0.34609198570251465,
            -0.16597914695739746,
          ]}
          rotation={[
            -1.7555076409991293,
            0.5841747775146151,
            -1.1760358590515276,
          ]}
        />
        <mesh name="Donut" position={[0, -0.04536676034331322, 0]}>
          <mesh name="Icing">
            <bufferGeometry attach="geometry" {...gltf.__$[4].geometry} />
            <meshStandardMaterial
              attach="material"
              {...gltf.__$[4].material}
              name="Material.002"
            />
          </mesh>
          <bufferGeometry attach="geometry" {...gltf.__$[3].geometry} />
          <meshStandardMaterial
            attach="material"
            {...gltf.__$[3].material}
            name="Material.003"
          />
        </mesh>
        <mesh
          name="Plane"
          position={[
            0.006081715691834688,
            -0.006351198069751263,
            0.006861649453639984,
          ]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[5].geometry} />
          <meshStandardMaterial
            attach="material"
            {...gltf.__$[5].material}
            name="Material.001"
          />
        </mesh>
      </scene>
    </group>
  )
}
