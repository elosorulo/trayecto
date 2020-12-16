/*
auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'

export default React.memo((props) => {
  const group = useRef()
  const { nodes, materials } = useGLTF('/trayecto/EspacioInicialEscaleraExteriorG.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh material={materials['el que va']} geometry={nodes.Escalera15.geometry} userData={{ name: 'Escalera.15' }} />
    </group>
  )
})

useGLTF.preload('/trayecto/EspacioInicialEscaleraExteriorG.gltf')
