/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef, useState, useEffect, Suspense } from 'react'
import { useFrame } from 'react-three-fiber'
import { useGLTF } from '@react-three/drei/useGLTF'

import { useAnimations } from '@react-three/drei/useAnimations'
import { PositionalAudio } from '@react-three/drei'
import { useStore } from '../../../state/store'
import useLinkPosition from './useLinkPosition';
import LinkPosition from './LinkPosition';
import { CONTENT_BUBBLE } from '../../../state/bubbles/bubblesConstants'

export default React.memo((props) => {
  const group = useRef()

  const { nodes, materials, animations } = useGLTF('/trayecto/LinkContenido.gltf')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    Object.values(actions).map(x => x.play())
  }
  ,[]);

  return (
    <>
    <LinkPosition bubble={CONTENT_BUBBLE} position={props.position} globalPosition={props.globalPosition} globalRotation={props.globalRotation}/>
    <group ref={group} {...props} dispose={null}>
      <group position={[-3, -2.4, -7.8]}>
          <mesh name="Cubo140" material={materials.Mat} geometry={nodes.Cubo140.geometry} rotation={[0, 0.48, 0]} >
            <Suspense fallback={null}>
              <PositionalAudio loop url="/trayecto/LinkContenido.ogg" distance={0.3} />
            </Suspense>
          </mesh>
      </group>
    </group>
    </>
  )
})

useGLTF.preload('/trayecto/LinkContenido.gltf')
