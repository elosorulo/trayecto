/*
auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'

export default React.memo((props) => {
  const group = useRef()
  const { nodes, materials } = useGLTF('/trayecto/EspacioInicialPuertaInteriorBajoNI.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        material={materials['el que va']}
        geometry={nodes.Puerta_interior_.geometry}
        rotation={[0, 1.55, 0]}
        userData={{ name: 'Puerta interior ' }}
      />
    </group>
  )
})

useGLTF.preload('/trayecto/EspacioInicialPuertaInteriorBajoNI.gltf')