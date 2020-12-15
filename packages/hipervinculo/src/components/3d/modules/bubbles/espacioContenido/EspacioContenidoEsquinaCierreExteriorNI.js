/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/EspacioContenidoEsquinaCierreExteriorNI.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh material={materials.Mat} geometry={nodes.Cubo1.geometry} rotation={[Math.PI, 0, Math.PI]} />
    </group>
  )
}

useGLTF.preload('/EspacioContenidoEsquinaCierreExteriorNI.gltf')
