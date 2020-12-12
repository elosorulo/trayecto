import React from 'react';
import EspacioInicialCuboG from '../bubbles/espacioInicial/EspacioInicialCuboG';
import PisoCompuesto from './common/PisoCompuesto';
import { useBox, useCompoundBody } from '@react-three/cannon';
import EspacioInicialTechoInteriorBajoNS from '../bubbles/espacioInicial/EspacioInicialTechoInteriorBajoNI';

const ModuloCompuestoTechoInteriorBajo = (props) => {

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
                    args:[6, 2, 6],
                    position: [0, 2, 0]
                }
            ]
        }
    ));

    return (
        <group ref={ref} {...props} position={props.position} dispose={null}>
            {/**--- Piso ---*/}
            <PisoCompuesto position={[0, -2, 0]}/>
            <EspacioInicialTechoInteriorBajoNS position={[-2, 0, -2]}/>
            <EspacioInicialTechoInteriorBajoNS position={[-2, 0, 0]}/>
            <EspacioInicialTechoInteriorBajoNS position={[-2, 0, 2]}/>
            <EspacioInicialTechoInteriorBajoNS position={[0, 0, -2]}/>
            <EspacioInicialTechoInteriorBajoNS position={[0, 0, 0]}/>
            <EspacioInicialTechoInteriorBajoNS position={[0, 0, 2]}/>
            <EspacioInicialTechoInteriorBajoNS position={[2, 0, -2]}/>
            <EspacioInicialTechoInteriorBajoNS position={[2, 0, 0]}/>
            <EspacioInicialTechoInteriorBajoNS position={[2, 0, 2]}/>

            <EspacioInicialCuboG position={[-2, 2, -2]}/>
            <EspacioInicialCuboG position={[-2, 2, 0]}/>
            <EspacioInicialCuboG position={[-2, 2, 2]}/>
            <EspacioInicialCuboG position={[0, 2, -2]}/>
            <EspacioInicialCuboG position={[0, 2, 0]}/>
            <EspacioInicialCuboG position={[0, 2, 2]}/>
            <EspacioInicialCuboG position={[2, 2, -2]}/>
            <EspacioInicialCuboG position={[2, 2, 0]}/>
            <EspacioInicialCuboG position={[2, 2, 2]}/>
        </group>
    )
};

export default ModuloCompuestoTechoInteriorBajo;
