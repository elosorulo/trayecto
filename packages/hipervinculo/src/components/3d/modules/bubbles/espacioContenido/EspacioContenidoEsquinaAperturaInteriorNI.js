/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'

export default React.memo((props) => {
  const group = useRef()
  const { nodes, materials } = useGLTF('/trayecto/EspacioContenidoEsquinaAperturaInteriorNI.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh material={materials.Mat} geometry={nodes.Cubo60.geometry} rotation={[0, Math.PI, 0]} />
    </group>
  )
})

useGLTF.preload('/trayecto/EspacioContenidoEsquinaAperturaInteriorNI.gltf')
