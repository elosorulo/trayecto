import React from 'react';
import ModuloParedInteriorBajoNI from '../bubbles/ModuloParedInteriorBajoNI';
import ModuloParedExteriorNI from '../bubbles/ModuloParedExteriorNI';
import ModuloParedExteriorNS from '../bubbles/ModuloParedExteriorNS';
import ModuloCuboG from '../bubbles/ModuloCuboG';
import PisoCompuesto from './common/PisoCompuesto';
import { useBox, useCompoundBody } from '@react-three/cannon';
import Link from '../../links/Link';

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
            <PisoCompuesto position={[0, -2, 0]} currentBubble={props.currentBubble}/>
            <ModuloParedExteriorNI position={[0, 0, -2]} currentBubble={props.currentBubble}/>
            <ModuloParedInteriorBajoNI position={[2, 0, -2]} currentBubble={props.currentBubble}/>
            <ModuloParedExteriorNS position={[0, 2, -2]} currentBubble={props.currentBubble}/>

            <ModuloCuboG position={[2, 2, -2]} currentBubble={props.currentBubble}/>

            <ModuloParedExteriorNI position={[0, 0, 0]} currentBubble={props.currentBubble}/>
            <ModuloParedExteriorNS position={[0, 2, 0]} currentBubble={props.currentBubble}/>
            <ModuloParedInteriorBajoNI position={[2, 0, 0]} currentBubble={props.currentBubble}/>
            <ModuloCuboG position={[2, 2, 0]} currentBubble={props.currentBubble}/>

            <ModuloParedInteriorBajoNI position={[2, 0, 2]} currentBubble={props.currentBubble}/>
            <ModuloParedExteriorNI position={[0, 0, 2]} currentBubble={props.currentBubble}/>
            <ModuloParedExteriorNS position={[0, 2, 2]} currentBubble={props.currentBubble}/>
            <ModuloCuboG position={[2, 2, 2]} currentBubble={props.currentBubble}/>
            
            <Link globalPosition={props.position} globalRotation={props.rotation} position={[-2, 0, 0]} currentBubble={props.currentBubble}/>
        </group>
    )
};

export default ModuloCompuestoParedInteriorBajo;
