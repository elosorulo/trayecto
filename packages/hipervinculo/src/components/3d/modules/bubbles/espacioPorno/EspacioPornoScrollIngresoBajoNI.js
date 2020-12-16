/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'

export default React.memo((props) => {
  const group = useRef()
  const { nodes, materials } = useGLTF('/trayecto/EspacioPornoScrollIngresoBajoNI.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh material={materials['Mat.8']} geometry={nodes.Cubo30.geometry} rotation={[0, -1.55, 0]} />
    </group>
  )
})

useGLTF.preload('/trayecto/EspacioPornoScrollIngresoBajoNI.gltf')
