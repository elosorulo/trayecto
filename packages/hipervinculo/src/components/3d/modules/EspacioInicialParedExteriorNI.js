/*
auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/EspacioInicialParedExteriorNI.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh material={materials['el que va']} geometry={nodes.Pared73.geometry} userData={{ name: 'Pared.73' }} />
    </group>
  )
}

useGLTF.preload('/EspacioInicialParedExteriorNI.gltf')
