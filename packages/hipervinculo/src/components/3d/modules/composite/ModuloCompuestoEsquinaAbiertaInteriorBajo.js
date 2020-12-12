import React from 'react';

import EspacioInicialEsquinaAperturaInteriorBajoNI from '../bubbles/espacioInicial/EspacioInicialEsquinaAperturaInteriorBajoNI';
import EspacioInicialEsquinaCierreExteriorNI from '../bubbles/espacioInicial/EspacioInicialEsquinaCierreExteriorNI';
import EspacioInicialEsquinaCierreExteriorNS from '../bubbles/espacioInicial/EspacioInicialEsquinaCierreExteriorNS';

import EspacioInicialParedInteriorBajoNI from '../bubbles/espacioInicial/EspacioInicialParedInteriorBajoNI';
import EspacioInicialParedExteriorNI from '../bubbles/espacioInicial/EspacioInicialParedExteriorNI';
import EspacioInicialParedExteriorNS from '../bubbles/espacioInicial/EspacioInicialParedExteriorNS';
import EspacioInicialCuboG from '../bubbles/espacioInicial/EspacioInicialCuboG';
import PisoCompuesto from './common/PisoCompuesto';
import { useBox, useCompoundBody } from '@react-three/cannon';

const ModuloCompuestoEsquinaAbiertaInteriorBajo = (props) => {

    const [ref, api] = useCompoundBody(() => (
        {
            ...props,
            shapes: [
                {
                    type: "Box",
                    args:[6, 2, 6],
                    position: [0, -2, 0]
                },
                {
                    type: "Box",
                    args:[2.7, 2.4, 6],
                    position: [1.8, 2, 0]
                },
                {
                    type: "Box",
                    args:[6, 2.4, 2.7],
                    position: [-2, 2, 1.8]
                },
                //Pared 1
                {
                    type: "Box",
                    args:[0.6, 2, 4],
                    position: [0.85, 0, -1]
                },
                //Pared 2
                {
                    type: "Box",
                    args:[4, 2, 0.6],
                    position: [-1, 0, 0.85]
                }
            ]
        }
    ));

    return (
        <group ref={ref} {...props} position={props.position} dispose={null}>
            {/**--- Piso ---*/}
            <PisoCompuesto position={[0, -2, 0]}/>
            
            <EspacioInicialParedExteriorNI position={[-2, 0, 0]} rotation={[0, 1.5 * Math.PI, 0]}/>
            <EspacioInicialParedExteriorNS position={[-2, 2, 0]} rotation={[0, 1.5 * Math.PI, 0]}/>
            
            <EspacioInicialParedInteriorBajoNI position={[-2, 0, 2]} rotation={[0, 1.5 * Math.PI, 0]}/>
            <EspacioInicialParedInteriorBajoNI position={[0, 0, 2]} rotation={[0, 1.5 * Math.PI, 0]}/>
            
            <EspacioInicialParedExteriorNI position={[0, 0, 0]} rotation={[0, 1.5 * Math.PI, 0]}/>
            <EspacioInicialParedExteriorNS position={[0, 2, 0]} rotation={[0, 1.5 * Math.PI, 0]}/>
            

            <EspacioInicialEsquinaCierreExteriorNI position={[0, 0, 0]} rotation={[0, 1.5 * Math.PI, 0]}/>
            <EspacioInicialEsquinaCierreExteriorNS position={[0, 2, 0]} rotation={[0, 1.5 * Math.PI, 0]}/>

            <EspacioInicialParedInteriorBajoNI position={[2, 0, -2]}/>
            <EspacioInicialParedInteriorBajoNI position={[2, 0, 0]} />
            <EspacioInicialParedExteriorNI position={[0, 0, -2]} />
            <EspacioInicialParedExteriorNS position={[0, 2, -2]} />
            <EspacioInicialEsquinaAperturaInteriorBajoNI position={[2, 0, 2]} rotation={[0, 0.5 * Math.PI, 0]}/>

            <EspacioInicialCuboG position={[2, 2, -2]}/>
            <EspacioInicialCuboG position={[2, 2, 0]}/>
            <EspacioInicialCuboG position={[2, 2, 2]}/>
            <EspacioInicialCuboG position={[2, 2, 2]}/>
            <EspacioInicialCuboG position={[0, 2, 2]}/>
            <EspacioInicialCuboG position={[-2, 2, 2]}/>
        </group>
    )
};

export default ModuloCompuestoEsquinaAbiertaInteriorBajo;
