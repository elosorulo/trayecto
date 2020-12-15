/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/EspacioRedSocialCuboG.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh material={materials.Mat} geometry={nodes['Modulo_de_apollo_escalera-piso143'].geometry} />
    </group>
  )
}

useGLTF.preload('/EspacioRedSocialCuboG.gltf')
