import React from 'react';

import EspacioInicialEscaleraExteriorG from '../bubbles/espacioInicial/EspacioInicialEscaleraExteriorG';
import EscaleraExteriorG from '../bubbles/EscaleraExteriorG';
import EspacioInicialCuboG from '../bubbles/espacioInicial/EspacioInicialCuboG';
import { useBox, useCompoundBody } from '@react-three/cannon';

const ModuloCompuestoEscaleras = (props) => {

    const [ref, api] = useCompoundBody(() => (
        {
            ...props,
            shapes: [
                
                {
                    type: "Box",
                    args:[2, 2, 4],
                    position: [0, 0, -1]
                },
                // Escalones
                {
                    type: "Box",
                    args:[2, 0.25, 2],
                    position: [2, -0.75, 0]
                },
                // Escalones
                {
                    type: "Box",
                    args:[1.75, 0.25, 2],
                    position: [1.75, -0.5, 0]
                },
                // Escalones
                {
                    type: "Box",
                    args:[1.5, 0.25, 2],
                    position: [1.5, -0.25, 0]
                },
                // Escalones
                {
                    type: "Box",
                    args:[1.25, 0.25, 2],
                    position: [1.25, 0, 0]
                },
                // Escalones
                {
                    type: "Box",
                    args:[1, 0.25, 2],
                    position: [1, 0.25, 0]
                },
                // Escalones
                {
                    type: "Box",
                    args:[0.75, 0.25, 2],
                    position: [0.75, 0.5, 0]
                },
                // Escalones
                {
                    type: "Box",
                    args:[0.5, 0.25, 2],
                    position: [0.5, 0.75, 0]
                },
                // Escalones
                {
                    type: "Box",
                    args:[0.25, 0.25, 2],
                    position: [0.25, 1, 0]
                }
            ]
        }
    ));

    return (
        <group ref={ref} {...props} position={props.position} dispose={null}>
            <EspacioInicialCuboG position={[2, -2, 0]}/>
            <EscaleraExteriorG position={[2, 0, 0]} rotation={[0, Math.PI, 0]}/>
            <EspacioInicialCuboG position={[0, 0, 0]}/>
            <EspacioInicialCuboG position={[0, 0, -2]}/>
        </group>
    )
};

export default ModuloCompuestoEscaleras;
