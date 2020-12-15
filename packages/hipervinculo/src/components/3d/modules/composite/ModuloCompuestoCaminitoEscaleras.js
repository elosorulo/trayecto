import React from 'react';

import ModuloCuboG from '../bubbles/ModuloCuboG';
import { useCompoundBody } from '@react-three/cannon';

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
        <group ref={ref} {...props} dispose={null}>
            <ModuloCuboG position={[0, 0, -2]} currentBubble={props.currentBubble}/>
            <ModuloCuboG position={[0, 0, 0]} currentBubble={props.currentBubble}/>
            <ModuloCuboG position={[0, 0, 2]} currentBubble={props.currentBubble}/>
        </group>
    )
};

export default ModuloCompuestoCaminitoEscaleras;
