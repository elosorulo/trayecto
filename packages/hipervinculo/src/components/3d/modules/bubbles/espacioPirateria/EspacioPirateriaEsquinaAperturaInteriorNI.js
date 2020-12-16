/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'

export default React.memo((props) => {
  const group = useRef()
  const { nodes, materials } = useGLTF('/trayecto/EspacioPirateriaEsquinaAperturaInteriorNI.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh material={materials.Mat} geometry={nodes.Cubo27.geometry} position={[0, 0, 0]} rotation={[0, 1.5 * Math.PI, 0]} />
    </group>
  )
})

useGLTF.preload('/trayecto/EspacioPirateriaEsquinaAperturaInteriorNI.gltf')
