/*
auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'

export default React.memo((props) => {
  const group = useRef()
  const { nodes, materials } = useGLTF('/trayecto/EspacioInicialEsquinaCierreExteriorNI.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        material={materials['el que va']}
        geometry={nodes.Pared_esquina13.geometry}
        userData={{ name: 'Pared esquina.13' }}
      />
    </group>
  )
})

useGLTF.preload('/trayecto/EspacioInicialEsquinaCierreExteriorNI.gltf')
