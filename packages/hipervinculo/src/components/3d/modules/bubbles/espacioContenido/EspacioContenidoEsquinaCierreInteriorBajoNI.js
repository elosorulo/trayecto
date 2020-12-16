/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'

export default React.memo((props) => {
  const group = useRef()
  const { nodes, materials } = useGLTF('/trayecto/EspacioContenidoEsquinaCierreInteriorBajoNI.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh material={materials.Mat} geometry={nodes.Cubo4.geometry} rotation={[0, 0, 0]} />
    </group>
  )
})

useGLTF.preload('/trayecto/EspacioContenidoEsquinaCierreInteriorBajoNI.gltf')
