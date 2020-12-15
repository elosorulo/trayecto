/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/EspacioPornoColumnaInteriorBajoNI.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh material={materials['Mat.8']} geometry={nodes.Cubo44.geometry} />
    </group>
  )
}

useGLTF.preload('/EspacioPornoColumnaInteriorBajoNI.gltf')
