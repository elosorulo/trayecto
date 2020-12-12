import React from 'react';
import { Ground } from '../../../../Ground';
import EspacioInicialEscaleraExteriorG from './espacioInicial/EspacioInicialEscaleraExteriorG';
import { useCompoundBody } from '@react-three/cannon';
const EscaleraExteriorG = (props) => {
    
    const [ref, api] = useCompoundBody(() => (
        {
            ...props,
            shapes: [
                // Escalones
                {
                    type: "Box",
                    args:[0, 0.25, 0],
                    position: [0, -0.75, 0]
                },
                // Escalones
                {
                    type: "Box",
                    args:[1.75, 0.25, 0],
                    position: [0.75, -0.5, 0]
                },
                // Escalones
                {
                    type: "Box",
                    args:[1.5, 0.25, 2],
                    position: [0.5, -0.25, 0]
                },
                // Escalones
                {
                    type: "Box",
                    args:[1.25, 0.25, 2],
                    position: [0.25, 0, 0]
                },
                // Escalones
                {
                    type: "Box",
                    args:[1, 0.25, 2],
                    position: [0, 0.25, 0]
                },
                // Escalones
                {
                    type: "Box",
                    args:[0.75, 0.25, 2],
                    position: [-0.25, 0.5, 0]
                },
                // Escalones
                {
                    type: "Box",
                    args:[0.5, 0.25, 2],
                    position: [-0.5, 0.75, 0]
                },
                // Escalones
                {
                    type: "Box",
                    args:[0.25, 0.25, 2],
                    position: [-0.75, 1, 0]
                }
            ]
        }
    ));

    return (
        <group ref={ref} {...props}>
            <EspacioInicialEscaleraExteriorG />
        </group>
        
    )
};

export default EscaleraExteriorG;
