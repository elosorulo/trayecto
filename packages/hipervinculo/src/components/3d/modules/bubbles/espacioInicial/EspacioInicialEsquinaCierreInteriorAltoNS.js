/*
auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'

export default React.memo((props) => {
  const group = useRef()
  const { nodes, materials } = useGLTF('/trayecto/EspacioInicialEsquinaCierreInteriorAltoNS.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        material={materials['el que va']}
        geometry={nodes.pared_interior_esquina_alta_n2.geometry}
        rotation={[0, 1.55, 0]}
        userData={{ name: 'pared interior esquina alta n2' }}
      />
    </group>
  )
})

useGLTF.preload('/trayecto/EspacioInicialEsquinaCierreInteriorAltoNS.gltf')
