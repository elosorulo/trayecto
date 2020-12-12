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

import ModuloCompuestoPuertaInteriorBajo from "./components/3d/modules/composite/ModuloCompuestoPuertaInteriorBajo"
import ModuloCompuestoParedInteriorBajo from "./components/3d/modules/composite/ModuloCompuestoParedInteriorBajo"
import ModuloCompuestoEsquinaCerradaInteriorBajo from "./components/3d/modules/composite/ModuloCompuestoEsquinaCerradaInteriorBajo";
import ModuloCompuestoTechoInteriorBajo from "./components/3d/modules/composite/ModuloCompuestoTechoInteriorBajo";
import ModuloCompuestoEsquinaAbiertaInteriorBajo from "./components/3d/modules/composite/ModuloCompuestoEsquinaAbiertaInteriorBajo";
const CharacterControls = (props) => {
    return (
      <>
        <Player />
        <PointerLockControls/>
      </>
    );
};

const RecorridoPrueba = () => {
  return (
    <>
      <ModuloCompuestoEsquinaCerradaInteriorBajo position={[0, 0, 0]}/>
      <ModuloCompuestoParedInteriorBajo position={[6, 0 ,0]} rotation={[0, Math.PI * 1.5, 0]}/>
      
      <ModuloCompuestoParedInteriorBajo position={[0, 0 ,6]}/>
      <ModuloCompuestoTechoInteriorBajo position={[6, 0, 6]}/>
      <ModuloCompuestoPuertaInteriorBajo position={[0, 0, 12]}/>
      <ModuloCompuestoTechoInteriorBajo position={[6, 0, 12]}/>
      <ModuloCompuestoEsquinaAbiertaInteriorBajo position={[12, 0, 0]} />
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
          <RecorridoPrueba/>
          <Effects/>
      </Physics>
    </Canvas>
  )
}
