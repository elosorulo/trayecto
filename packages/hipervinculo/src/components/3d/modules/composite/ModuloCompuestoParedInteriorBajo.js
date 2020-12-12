import React from 'react';
import EspacioInicialParedInteriorBajoNI from '../bubbles/espacioInicial/EspacioInicialParedInteriorBajoNI';
import EspacioInicialParedExteriorNI from '../bubbles/espacioInicial/EspacioInicialParedExteriorNI';
import EspacioInicialParedExteriorNS from '../bubbles/espacioInicial/EspacioInicialParedExteriorNS';
import EspacioInicialCuboG from '../bubbles/espacioInicial/EspacioInicialCuboG';
import PisoCompuesto from './common/PisoCompuesto';
import { useBox, useCompoundBody } from '@react-three/cannon';

const ModuloCompuestoParedInteriorBajo = (props) => {

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
                    args:[0.6, 2, 6],
                    position: [0.85, 0, 0]
                },
                {
                    type: "Box",
                    args:[2.7, 2.4, 6],
                    position: [1.8, 2, 0]
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

            <EspacioInicialParedExteriorNI position={[0, 0, 0]}/>
            <EspacioInicialParedExteriorNS position={[0, 2, 0]}/>
            <EspacioInicialParedInteriorBajoNI position={[2, 0, 0]}/>
            <EspacioInicialParedExteriorNI position={[0, 2, 0]}/>
            <EspacioInicialCuboG position={[2, 2, 0]}/>

            <EspacioInicialParedInteriorBajoNI position={[2, 0, 2]}/>
            <EspacioInicialParedExteriorNI position={[0, 0, 2]}/>
            <EspacioInicialParedExteriorNS position={[0, 2, 2]}/>
            <EspacioInicialCuboG position={[2, 2, 2]}/>
        </group>
    )
};

export default ModuloCompuestoParedInteriorBajo;
