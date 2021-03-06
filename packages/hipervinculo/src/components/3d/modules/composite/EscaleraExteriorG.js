import React from 'react';
import { Ground } from '../../../../Ground';
import ModuloEscaleraExteriorG from '../bubbles/ModuloEscaleraExteriorG';
import { useCompoundBody } from '@react-three/cannon';

const EscaleraExteriorG = props => {
    
    const [stairRef] = useCompoundBody(() => (
        {
            position: props.absPosition ? props.absPosition : props.position,
            rotation: props.absRotation ? props.absRotation : props.rotation,
            shapes: [
                {
                    type: "Box",
                    args:[2, 0.25, 2],
                    position: [0, -0.875, 0],
                    rotation: [0, 0, 0]
                },
                {
                    type: "Box",
                    args:[1.75, 0.25, 2],
                    position: [0.125, -0.625, 0],
                    rotation: [0, 0, 0]
                },
                {
                    type: "Box",
                    args:[1.50, 0.25, 2],
                    position: [0.250, -0.375, 0],
                    rotation: [0, 0, 0]
                },
                {
                    type: "Box",
                    args:[1.25, 0.25, 2],
                    position: [0.375, -0.125, 0],
                    rotation: [0, 0, 0]
                },
                {
                    type: "Box",
                    args:[1, 0.25, 2],
                    position: [0.5, 0.125, 0],
                    rotation: [0, 0, 0]
                },
                {
                    type: "Box",
                    args:[0.75, 0.25, 2],
                    position: [0.625, 0.375, 0],
                    rotation: [0, 0, 0]
                },
                {
                    type: "Box",
                    args:[0.5, 0.25, 2],
                    position: [0.75, 0.625, 0],
                    rotation: [0, 0, 0]
                },
                {
                    type: "Box",
                    args:[0.25, 0.25, 2],
                    position: [0.875, 0.875, 0],
                    rotation: [0, 0, 0]
                }
            ]
        }
    ));

    return (
        <group position={props.position} rotation={props.rotation}>
            <ModuloEscaleraExteriorG currentBubble={props.currentBubble}/>   
        </group>
    )
};

export default EscaleraExteriorG;
