import * as THREE from "three"
import React from "react"
import { useLoader } from "react-three-fiber"
import { usePlane } from "@react-three/cannon"
import grass from "./assets/grass.jpg"

export const Ground = (props) => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], args: [1000, 1000], ...props }))
  const texture = useLoader(THREE.TextureLoader, grass)
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping
  texture.repeat.set(240, 240)
  return (
    <mesh ref={ref} receiveShadow>
    </mesh>
  )
}
