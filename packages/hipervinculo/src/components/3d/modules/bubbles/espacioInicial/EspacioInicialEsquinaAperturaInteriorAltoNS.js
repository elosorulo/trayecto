/*
auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'

export default React.memo((props) => {
  const group = useRef()
  const { nodes, materials } = useGLTF('/trayecto/EspacioInicialEsquinaAperturaInteriorAltoNS.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        material={materials['el que va']}
        geometry={nodes.Objeto_Poligonal4.geometry}
        userData={{ name: 'Objeto Poligonal.4' }}
      />
    </group>
  )
})

useGLTF.preload('/trayecto/EspacioInicialEsquinaAperturaInteriorAltoNS.gltf')
