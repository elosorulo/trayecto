/*
auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/1.gltf')
  return (
    <group ref={group} {...props}>
      <mesh material={materials['Mat.1']} geometry={nodes['Esquina_baranda_P-giros'].geometry}>
        <mesh material={materials.Mat} geometry={nodes.Encastres13.geometry} position={[-118.07, 0, 140]} />
        <mesh
          material={materials.Mat}
          geometry={nodes.Encastres2.geometry}
          position={[140, 0, 140]}
          rotation={[0, 1.55, 0]}
        />
        <mesh
          material={materials.Mat}
          geometry={nodes['Encastres.13_1'].geometry}
          position={[-140, 0, -140]}
          rotation={[0, 1.55, 0]}
        />
        <mesh
          material={materials.Mat}
          geometry={nodes.Baranda10.geometry}
          position={[-140, 0, 0]}
          rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            material={materials['Mat.2']}
            geometry={nodes.Microfono.geometry}
            position={[0, 65.62, -93.94]}
            rotation={[1.57, 0, Math.PI]}>
            <mesh material={materials['Mat.2']} geometry={nodes.Microfono_3.geometry} position={[0, -93.94, 0]}>
              <mesh
                material={materials['Mat.3']}
                geometry={nodes.Microfono_9.geometry}
                position={[0, 0, -61.07]}
                rotation={[-1.57, 0, 0]}
              />
            </mesh>
            <mesh material={materials['Mat.2']} geometry={nodes.Microfono1.geometry} position={[0, -177.51, 0]}>
              <mesh
                material={materials['Mat.3']}
                geometry={nodes.Microfono_10.geometry}
                position={[0, -5.19, -61.07]}
                rotation={[-1.57, 0, 0]}
              />
            </mesh>
            <mesh
              material={materials['Mat.3']}
              geometry={nodes.Microfono_4.geometry}
              position={[0, -5.19, -61.07]}
              rotation={[-1.57, 0, 0]}
            />
          </mesh>
        </mesh>
        <mesh
          material={materials.Mat}
          geometry={nodes.Baranda3.geometry}
          position={[0, 0, -140]}
          rotation={[0, 1.55, 0]}>
          <mesh
            material={materials['Mat.2']}
            geometry={nodes.Microfono_1.geometry}
            position={[0, 65.62, -93.94]}
            rotation={[1.57, 0, Math.PI]}>
            <mesh material={materials['Mat.2']} geometry={nodes.Microfono_5.geometry} position={[0, -93.94, 0]}>
              <mesh
                material={materials['Mat.3']}
                geometry={nodes.Microfono_11.geometry}
                position={[0, 0, -61.07]}
                rotation={[-1.57, 0, 0]}
              />
            </mesh>
            <mesh material={materials['Mat.2']} geometry={nodes['Microfono.1_1'].geometry} position={[0, -177.51, 0]}>
              <mesh
                material={materials['Mat.3']}
                geometry={nodes.Microfono_12.geometry}
                position={[0, -5.19, -61.07]}
                rotation={[-1.57, 0, 0]}
              />
            </mesh>
            <mesh
              material={materials['Mat.3']}
              geometry={nodes.Microfono_6.geometry}
              position={[0, -5.19, -61.07]}
              rotation={[-1.57, 0, 0]}
            />
          </mesh>
        </mesh>
        <mesh material={materials.Mat} geometry={nodes.Baranda2.geometry} position={[140, 0, 0]}>
          <mesh
            material={materials['Mat.2']}
            geometry={nodes.Microfono_2.geometry}
            position={[0, 65.62, -93.94]}
            rotation={[1.57, 0, Math.PI]}>
            <mesh material={materials['Mat.2']} geometry={nodes.Microfono_7.geometry} position={[0, -93.94, 0]}>
              <mesh
                material={materials['Mat.3']}
                geometry={nodes.Microfono_13.geometry}
                position={[0, 0, -61.07]}
                rotation={[-1.57, 0, 0]}
              />
            </mesh>
            <mesh material={materials['Mat.2']} geometry={nodes['Microfono.1_2'].geometry} position={[0, -177.51, 0]}>
              <mesh
                material={materials['Mat.3']}
                geometry={nodes.Microfono_14.geometry}
                position={[0, -5.19, -61.07]}
                rotation={[-1.57, 0, 0]}
              />
            </mesh>
            <mesh
              material={materials['Mat.3']}
              geometry={nodes.Microfono_8.geometry}
              position={[0, -5.19, -61.07]}
              rotation={[-1.57, 0, 0]}
            />
          </mesh>
        </mesh>
        <mesh material={materials.Mat} geometry={nodes['Encastres.2_1'].geometry} position={[140, 0, -140]} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/1.gltf')
