import * as THREE from "three"
import React, { Suspense, useEffect, useRef, useState } from "react"
import { useSphere } from "@react-three/cannon"
import { useThree, useFrame } from "react-three-fiber"
import { useStore, characterStoreApi } from './state/store';
import * as BUBBLES from './state/bubbles/bubblesConstants';
import { PositionalAudio } from '@react-three/drei';


const SPEED = 5
const keys = { KeyW: "forward", KeyS: "backward", KeyA: "left", KeyD: "right", Space: "jump" }
const moveFieldByKey = (key) => keys[key]
const direction = new THREE.Vector3()
const frontVector = new THREE.Vector3()
const sideVector = new THREE.Vector3()

const usePlayerControls = () => {
  const [movement, setMovement] = useState({ forward: false, backward: false, left: false, right: false, jump: false })
  useEffect(() => {
    const handleKeyDown = (e) => setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: true }))
    const handleKeyUp = (e) => setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: false }))
    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("keyup", handleKeyUp)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("keyup", handleKeyUp)
    }
  }, [])
  return movement
}

const delta = 0.2;

const soundPrefix = "/trayecto/";

const soundFileExtension = ".ogg";

const currentAmbientAudio = {

  [BUBBLES.CONTENT_BUBBLE]: "AmbienteContenido",
  
  [BUBBLES.DEEP_WEB_BUBBLE]: "AmbienteDeepWeb",
  
  [BUBBLES.PIRACY_BUBBLE]: "AmbientePirateria",
  
  [BUBBLES.PORN_BUBBLE]: "AmbientePorno",
  
  [BUBBLES.INFORMATIVE_BUBBLE]: "AmbienteInformacion",
  
  [BUBBLES.LOBBY_BUBBLE]: "AmbienteInicial",
  
  [BUBBLES.SOCIAL_NETWORK_BUBBLE]: "AmbienteRedes"
};

const initialPosition = [0, 40, 0]

const levelsMixer = (currentBubble, level) => {
  switch(currentBubble) {
    case BUBBLES.CONTENT_BUBBLE:
      return level * 1.5;
  
    case BUBBLES.DEEP_WEB_BUBBLE:
      return level * 1.7;

    case BUBBLES.PIRACY_BUBBLE:
      return level * 1.3;

    case BUBBLES.PORN_BUBBLE:
      return level * 1.9;

    case BUBBLES.INFORMATIVE_BUBBLE:
      return level * 1.4;

    case BUBBLES.LOBBY_BUBBLE:
      return level * 1.4;

    case BUBBLES.SOCIAL_NETWORK_BUBBLE:
      return level * 1.7;
  }
}

export const Player = (props) => {

  const [loading, setLoading] = useState(true);

  const [position, setPosition] = useState(initialPosition);
  
  const [ currentBubble ] = useStore(state => [state.currentBubble]);

  useEffect(() => {
    api.position.set(initialPosition[0], initialPosition[1], initialPosition[2])
  }, [currentBubble])

  const [ref, api] = useSphere(() => ({ mass: 1, type: "Dynamic", position: position, args: 0.6, ...props }))
  const { forward, backward, left, right, jump } = usePlayerControls()
  const { camera } = useThree()
  const velocity = useRef([0, 0, 0])
  useEffect(() => {
    api.velocity.subscribe((v) => (velocity.current = v))
    api.position.subscribe(p => characterStoreApi.getState().setCharacterPosition(p));
  }, [])
  
  useFrame(() => {    
    if(loading && (ref.current.position.y < (position[1] - delta))) {
      setLoading(false)
    }
    if(ref.current.position.y <= -30) {
      api.position.set(initialPosition[0], initialPosition[1], initialPosition[2])
    }
    camera.position.copy(ref.current.position)
    frontVector.set(0, 0, Number(backward) - Number(forward))
    sideVector.set(Number(left) - Number(right), 0, 0)
    direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(SPEED).applyEuler(camera.rotation)
    api.velocity.set(direction.x, velocity.current[1], direction.z)
    if (jump && Math.abs(velocity.current[1].toFixed(2)) < 0.05) api.velocity.set(velocity.current[0], 10, velocity.current[2])
  })
  return (
    <group ref={ref}>
      <mesh position={[0, 1.15, 0]}>
        <Suspense fallback={null}>
          <PositionalAudio loop url={soundPrefix + currentAmbientAudio[currentBubble] + soundFileExtension} distance={levelsMixer(currentBubble, 0.25)} />
        </Suspense>
      </mesh>
      <mesh scale={[0.5, 0.5, 0.5]}>
      </mesh>
    </group>
  )
}
