import React from "react"
import { Canvas } from "react-three-fiber"
import { Sky, PointerLockControls, OrbitControls } from "@react-three/drei"
import { Physics } from "@react-three/cannon"
import { Ground } from "./Ground"
import { Player } from "./Player"
import { Cube, Cubes } from "./Cube"
import { Environment } from  '@react-three/drei';
import AmbientLightProvider from './components/providers/AmbientLightProvider';
import SpotLightsProvider from './components/providers/SpotLightsProvider';
import PlanesProvider from './components/providers/PlanesProvider';
import Sequencer from './components/Sequencer';
import Effects from './components/Effects';
import { useSoundsApi } from './components/Sound';
import './app.css';
import EspacioInicialPuertaInteriorBajoNI from './components/3d/modules/EspacioInicialPuertaInteriorBajoNI';
import EspacioInicialEsquinaCierreInteriorBajoNI from './components/3d/modules/EspacioInicialEsquinaCierreInteriorBajoNI';
import ModuloCompuestoPuertaInteriorBajo from "./components/3d/modules/composite/ModuloCompuestoPuertaInteriorBajo"

const CharacterControls = (props) => {
    return (
      <>
        <Player />
        <PointerLockControls/>
      </>
    );
};

export default function App(props) {
  
  const soundsApi = useSoundsApi();

  return (
    <Canvas style={{height: "100vh", width: "100%"}} shadowMap gl={{ alpha: false }} camera={{ fov: 90 }}>
        <Physics gravity={[0, -30, 0]}>
          <CharacterControls/>
          <React.Suspense fallback={null}>
            <Environment background={true} files={['sky-1.png', 'sky-2.png', 'sky-3.png', 'sky-4.png', 'sky-5.png', 'sky-6.png']} path={'/'} />
          </React.Suspense>
          <SpotLightsProvider/>
          <AmbientLightProvider/>
          <PlanesProvider/>
          <Sequencer soundsApi={soundsApi}/>
          {[0, 1, 2, 3, 4].map(x => <ModuloCompuestoPuertaInteriorBajo key={x} position={[x * 6, 0, 0]}/>)}
          <Effects/>
      </Physics>
    </Canvas>
  )
}
