import React from "react"
import { Canvas, useThree } from "react-three-fiber"
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
import * as THREE from 'three';

import ModuloCompuestoPuertaInteriorBajo from "./components/3d/modules/composite/ModuloCompuestoPuertaInteriorBajo"
import ModuloCompuestoParedInteriorBajo from "./components/3d/modules/composite/ModuloCompuestoParedInteriorBajo"
import ModuloCompuestoEsquinaCerradaInteriorBajo from "./components/3d/modules/composite/ModuloCompuestoEsquinaCerradaInteriorBajo";
import ModuloCompuestoTechoInteriorBajo from "./components/3d/modules/composite/ModuloCompuestoTechoInteriorBajo";
import ModuloCompuestoEsquinaAbiertaInteriorBajo from "./components/3d/modules/composite/ModuloCompuestoEsquinaAbiertaInteriorBajo";
import ModuloCompuestoEscalerasSuperiorIzquierda from "./components/3d/modules/composite/ModuloCompuestoEscalerasSuperiorIzquierda";
import ModuloCompuestoEscalerasInferiorDerecha from "./components/3d/modules/composite/ModuloCompuestoEscalerasInferiorDerecha";
import ModuloCompuestoEscalerasInferiorIzquierda from "./components/3d/modules/composite/ModuloCompuestoEscalerasInferiorIzquierda";
import ModuloCompuestoCaminitoEscaleras from "./components/3d/modules/composite/ModuloCompuestoCaminitoEscaleras"
import ModuloCompuestoConectorEscaleraInferior from "./components/3d/modules/composite/ModuloCompuestoConectorEscaleraInferior";
import ModuloCompuestoEscalerasSuperiorDerecha from "./components/3d/modules/composite/ModuloCompuestoEscalerasSuperiorDerecha";
 
import WaveModules from "./components/WaveModules";
 
const CharacterControls = (props) => {
    return (
      <>
        <Player />
        <PointerLockControls/>
      </>
    );
};

const NightSky = (props) => {
  return (<React.Suspense fallback={null}>
            <Environment background={true} files={['sky-1.png', 'sky-2.png', 'sky-3.png', 'sky-4.png', 'sky-5.png', 'sky-6.png']} path={'/'} />
          </React.Suspense>
  );
};

export default function App(props) {
  
  const soundsApi = useSoundsApi();

  return (
    <Canvas style={{height: "100vh", width: "100%"}} colorManagement shadowMap camera={{ fov: 90 }}>
        <Physics gravity={[0, -30, 0]}>
          <CharacterControls/>
          <Sky
            sunPosition={[0, 1, 0]} // Sun position normal (defaults to inclination and azimuth if not set)
            inclination={0} // Sun elevation angle from 0 to 1 (default=0)
            azimuth={0.25} // Sun rotation around the Y axis from 0 to 1 (default=0.25)
            {...props}
          />
          <SpotLightsProvider/>
          <AmbientLightProvider/>
          <PlanesProvider/>
          <Sequencer soundsApi={soundsApi}/>
          <WaveModules/>          
      </Physics>
    </Canvas>
  )
}
