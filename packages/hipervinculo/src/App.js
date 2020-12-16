import React from "react"
import { Canvas, useThree } from "react-three-fiber"
import { Sky, Stars,PointerLockControls, OrbitControls } from "@react-three/drei"
import { Physics, context } from "@react-three/cannon"
import { Ground } from "./Ground"
import { Player } from "./Player"
import { Cube, Cubes } from "./Cube"
import { Environment, useProgress, Html } from  '@react-three/drei';
import AmbientLightProvider from './components/providers/AmbientLightProvider';
import SpotLightsProvider from './components/providers/SpotLightsProvider';
import PlanesProvider from './components/providers/PlanesProvider';
import Sequencer from './components/Sequencer';
import Effects from './components/Effects';
import { useSoundsApi } from './components/Sound';
import './app.css';
import * as THREE from 'three';

 
import WaveModules from "./components/WaveModules";
import { DEEP_WEB_BUBBLE, LOBBY_BUBBLE, PIRACY_BUBBLE, CONTENT_BUBBLE, PORN_BUBBLE, INFORMATIVE_BUBBLE, SOCIAL_NETWORK_BUBBLE } from "./state/bubbles/bubblesConstants"
import styled from "styled-components"
import Stage from './components/3d/stages/Stage';
 
const CharacterControls = (props) => {
    return (
      <>
        <Player />
        <PointerLockControls/>
      </>
    );
};


const LoadingScreen = styled.div`
  z-index: 5000;
  font-size: 100;
`

const Loading = (props) => {
  
    console.log("loading");

    return (<LoadingScreen/>);
};

function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress()

  React.useEffect(() => console.log(progress), [progress])

  return <Html center>{progress} % loaded</Html>
}

export default function App(props) {
  
  const soundsApi = useSoundsApi();
  return (
    <Canvas style={{height: "100vh", width: "100%"}} colorManagement shadowMap camera={{ fov: 90 }}>
        <Physics gravity={[0, -30, 0]} allowSleep={false}>
          <React.Suspense fallback={<Loader/>}>
            <CharacterControls/>
            <Stage/>
            <WaveModules/>
          </React.Suspense>
          <SpotLightsProvider/>
          <AmbientLightProvider/>
          <PlanesProvider/>
          <Sequencer soundsApi={soundsApi}/>
      </Physics>
    </Canvas>
  )
}
