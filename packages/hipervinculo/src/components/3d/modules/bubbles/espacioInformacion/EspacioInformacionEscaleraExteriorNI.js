/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'

export default React.memo((props) => {
  const group = useRef()
  const { nodes, materials } = useGLTF('/trayecto/EspacioInformacionEscaleraExteriorNI.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh material={materials.Mat} geometry={nodes.Escalera.geometry} rotation={[Math.PI, Math.PI, Math.PI]} />
    </group>
  )
})

useGLTF.preload('/trayecto/EspacioInformacionEscaleraExteriorNI.gltf')
