/*
auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/EspacioInicialPuertaExteriorNI.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        material={materials['el que va']}
        geometry={nodes.Puerta2.geometry}
        rotation={[Math.PI, 0, Math.PI]}
        userData={{ name: 'Puerta.2' }}
      />
    </group>
  )
}

useGLTF.preload('/EspacioInicialPuertaExteriorNI.gltf')
