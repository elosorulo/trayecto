import React from 'react';

import ModuloCuboG from '../../bubbles/ModuloCuboG';

const PisoCompuesto = (props) => {
    return (
        <group {...props} dispose={null}>
            <ModuloCuboG position={[-2, 0, -2]} currentBubble={props.currentBubble}/>
            <ModuloCuboG position={[0, 0, -2]} currentBubble={props.currentBubble}/>
            <ModuloCuboG position={[2, 0, -2]} currentBubble={props.currentBubble}/>
            <ModuloCuboG position={[-2, 0, 0]} currentBubble={props.currentBubble}/>
            <ModuloCuboG position={[0, 0, 0]} currentBubble={props.currentBubble}/>
            <ModuloCuboG position={[2, 0, 0]} currentBubble={props.currentBubble}/>
            <ModuloCuboG position={[-2, 0, 2]} currentBubble={props.currentBubble}/>
            <ModuloCuboG position={[0, 0, 2]} currentBubble={props.currentBubble}/>
            <ModuloCuboG position={[2, 0, 2]} currentBubble={props.currentBubble}/>
        </group>
    );
};

export default PisoCompuesto;
