/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'

export default React.memo((props) => {
  const group = useRef()
  const { nodes, materials } = useGLTF('/trayecto/EspacioPornoEsquinaCierreExteriorNI.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh material={materials['Mat.8']} geometry={nodes.Cubo56.geometry} rotation={[0, 1 * Math.PI, 0]} />
    </group>
  )
})

useGLTF.preload('/trayecto/EspacioPornoEsquinaCierreExteriorNI.gltf')
