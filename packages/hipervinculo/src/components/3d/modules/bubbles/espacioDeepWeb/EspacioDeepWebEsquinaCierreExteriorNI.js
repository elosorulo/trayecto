/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/trayecto/EspacioDeepWebEsquinaCierreExteriorNI.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh material={materials['Mat.9']} geometry={nodes.Cubo22.geometry} position={[0, 0, 0]} rotation={[Math.PI, 1.5 * Math.PI, Math.PI]} />
    </group>
  )
}

useGLTF.preload('/trayecto/EspacioDeepWebEsquinaCierreExteriorNI.gltf')