import React from 'react';
import EspacioInicialPuertaInteriorBajoNI from '../EspacioInicialPuertaInteriorBajoNI';
import EspacioInicialPuertaExteriorNI from '../EspacioInicialPuertaExteriorNI';
import EspacioInicialPuertaExteriorNS from '../EspacioInicialPuertaExteriorNS';
import EspacioInicialParedInteriorBajoNI from '../EspacioInicialParedInteriorBajoNI';
import EspacioInicialParedExteriorNI from '../EspacioInicialParedExteriorNI';
import EspacioInicialParedExteriorNS from '../EspacioInicialParedExteriorNS';
import EspacioInicialCuboG from '../EspacioInicialCuboG';
import PisoCompuesto from './common/PisoCompuesto';
import { useBox, useCompoundBody } from '@react-three/cannon';

const ModuloCompuestoPuertaInteriorBajo = (props) => {

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
                    args:[0.6, 2, 2.6],
                    ...props,
                    position: [0.85, 0, -1.8]
                },
                {
                    type: "Box",
                    args:[0.6, 2, 2.6],
                    ...props,
                    position: [0.85, 0, 1.8]
                },
                {
                    type: "Box",
                    args:[4, 2.4, 6],
                    ...props,
                    position: [2, 2, 0]
                }
            ]
        }
    ));

    return (
        <group ref={ref} {...props} position={props.position} dispose={null}>
            {/**--- Piso ---*/}
            <PisoCompuesto position={[0, -2, 0]}/>
            <EspacioInicialParedExteriorNI position={[0, 0, -2]}/>
            <EspacioInicialParedInteriorBajoNI position={[2, 0, -2]}/>
            <EspacioInicialParedExteriorNS position={[0, 2, -2]}/>

            <EspacioInicialCuboG position={[2, 2, -2]}/>

            <EspacioInicialPuertaExteriorNI position={[0, 0, 0]}/>
            <EspacioInicialPuertaExteriorNS position={[0, 2, 0]}/>
            <EspacioInicialPuertaInteriorBajoNI position={[2, 0, 0]}/>
            <EspacioInicialParedExteriorNI position={[0, 2, 0]}/>
            <EspacioInicialCuboG position={[2, 2, 0]}/>

            <EspacioInicialParedInteriorBajoNI position={[2, 0, 2]}/>
            <EspacioInicialParedExteriorNI position={[0, 0, 2]}/>
            <EspacioInicialParedExteriorNS position={[0, 2, 2]}/>
            <EspacioInicialCuboG position={[2, 2, 2]}/>
        </group>
    )
};

export default ModuloCompuestoPuertaInteriorBajo;
