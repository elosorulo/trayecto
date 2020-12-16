/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/trayecto/EspacioPornoEsquinaCierreExteriorNS.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh material={materials['Mat.8']} geometry={nodes.Cubo22.geometry} rotation={[0, 0.5 * Math.PI, 0]} />
    </group>
  )
}

useGLTF.preload('/trayecto/EspacioPornoEsquinaCierreExteriorNS.gltf')