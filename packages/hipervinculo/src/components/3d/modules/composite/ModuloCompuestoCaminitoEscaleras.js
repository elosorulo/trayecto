import React from 'react';

import EspacioInicialEscaleraExteriorG from '../bubbles/espacioInicial/EspacioInicialEscaleraExteriorG';
import EspacioInicialCuboG from '../bubbles/espacioInicial/EspacioInicialCuboG';
import { useBox, useCompoundBody } from '@react-three/cannon';

const ModuloCompuestoCaminitoEscaleras = (props) => {

    const [ref, api] = useCompoundBody(() => (
        {
            ...props,
            shapes: [
                
                {
                    type: "Box",
                    args:[2, 2, 6],
                    position: [0, 0, 0]
                }
            ]
        }
    ));

    return (
        <group ref={ref} {...props} position={props.position} dispose={null}>
            <EspacioInicialCuboG position={[0, 0, -2]}/>
            <EspacioInicialCuboG position={[0, 0, 0]}/>
            <EspacioInicialCuboG position={[0, 0, 2]}/>
        </group>
    )
};

export default ModuloCompuestoCaminitoEscaleras;
