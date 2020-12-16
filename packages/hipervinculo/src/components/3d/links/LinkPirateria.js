/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef, useState, Suspense } from 'react'
import { useFrame } from 'react-three-fiber'
import { useGLTF } from '@react-three/drei/useGLTF'
import { PositionalAudio } from '@react-three/drei'

import { useAnimations } from '@react-three/drei/useAnimations'
import useLinkPosition from './useLinkPosition';
import LinkPosition from './LinkPosition';
import { PIRACY_BUBBLE } from '../../../state/bubbles/bubblesConstants'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/LinkPirateria.gltf')
  const { actions } = useAnimations(animations, group)

  React.useEffect(() => {
    Object.values(actions).map(x => x.play())
  }
  ,[]);


  return (
    <>
    <LinkPosition bubble={PIRACY_BUBBLE} position={props.position} globalPosition={props.globalPosition} globalRotation={props.globalRotation}/>
    <group ref={group} {...props} dispose={null}>
      <group position={[-5, -2.2, -9.5]}>
        <mesh name="Esfera" material={materials.Mat} geometry={nodes.Esfera.geometry} rotation={[0, -1.01, 0]} >
          <Suspense fallback={null}>
            <PositionalAudio loop url="/LinkPirateria.ogg"/>
          </Suspense>
        </mesh>
      </group>
    </group>
    </>
  )
}

useGLTF.preload('/LinkPirateria.gltf')
