/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'

export default React.memo((props) => {
  const group = useRef()
  const { nodes, materials } = useGLTF('/trayecto/EspacioInformacionEsquinaCierreInteriorAltoNS.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh material={materials.Mat} geometry={nodes.Cubo35.geometry} />
    </group>
  )
})

useGLTF.preload('/trayecto/EspacioInformacionEsquinaCierreInteriorAltoNS.gltf')
