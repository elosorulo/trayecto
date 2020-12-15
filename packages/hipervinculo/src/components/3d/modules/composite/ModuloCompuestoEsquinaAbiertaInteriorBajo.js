import React from 'react';

import ModuloEsquinaAperturaInteriorBajoNI from '../bubbles/ModuloEsquinaAperturaInteriorBajoNI';
import ModuloEsquinaCierreExteriorNI from '../bubbles/ModuloEsquinaCierreExteriorNI';
import ModuloEsquinaCierreExteriorNS from '../bubbles/ModuloEsquinaCierreExteriorNS';

import ModuloParedInteriorBajoNI from '../bubbles/ModuloParedInteriorBajoNI';
import ModuloParedExteriorNI from '../bubbles/ModuloParedExteriorNI';
import ModuloParedExteriorNS from '../bubbles/ModuloParedExteriorNS';
import ModuloCuboG from '../bubbles/ModuloCuboG';
import PisoCompuesto from './common/PisoCompuesto';
import { useBox, useCompoundBody } from '@react-three/cannon';

const ModuloCompuestoEsquinaAbiertaInteriorBajo = (props) => {

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
                    args:[2.7, 2.4, 6],
                    position: [1.8, 2, 0]
                },
                {
                    type: "Box",
                    args:[6, 2.4, 2.7],
                    position: [-2, 2, 1.8]
                },
                //Pared 1
                {
                    type: "Box",
                    args:[0.6, 2, 4],
                    position: [0.85, 0, -1]
                },
                //Pared 2
                {
                    type: "Box",
                    args:[4, 2, 0.6],
                    position: [-1, 0, 0.85]
                }
            ]
        }
    ));

    return (
        <group ref={ref} {...props} position={props.position} dispose={null}>
            {/**--- Piso ---*/}
            <PisoCompuesto position={[0, -2, 0]} currentBubble={props.currentBubble}/>
            
            <ModuloParedExteriorNI position={[-2, 0, 0]} rotation={[0, 1.5 * Math.PI, 0]} currentBubble={props.currentBubble}/>
            <ModuloParedExteriorNS position={[-2, 2, 0]} rotation={[0, 1.5 * Math.PI, 0]} currentBubble={props.currentBubble}/>
            
            <ModuloParedInteriorBajoNI position={[-2, 0, 2]} rotation={[0, 1.5 * Math.PI, 0]} currentBubble={props.currentBubble}/>
            <ModuloParedInteriorBajoNI position={[0, 0, 2]} rotation={[0, 1.5 * Math.PI, 0]} currentBubble={props.currentBubble}/>
            

            <ModuloEsquinaCierreExteriorNI position={[0, 0, 0]} rotation={[0, 1.5 * Math.PI, 0]} currentBubble={props.currentBubble}/>
            <ModuloEsquinaCierreExteriorNS position={[0, 2, 0]} rotation={[0, 1.5 * Math.PI, 0]} currentBubble={props.currentBubble}/>

            <ModuloParedInteriorBajoNI position={[2, 0, -2]} currentBubble={props.currentBubble}/>
            <ModuloParedInteriorBajoNI position={[2, 0, 0]}  currentBubble={props.currentBubble}/>
            <ModuloParedExteriorNI position={[0, 0, -2]}  currentBubble={props.currentBubble}/>
            <ModuloParedExteriorNS position={[0, 2, -2]}  currentBubble={props.currentBubble}/>
            <ModuloEsquinaAperturaInteriorBajoNI position={[2, 0, 2]} rotation={[0, 0.5 * Math.PI, 0]} currentBubble={props.currentBubble}/>

            <ModuloCuboG position={[2, 2, -2]} currentBubble={props.currentBubble}/>
            <ModuloCuboG position={[2, 2, 0]} currentBubble={props.currentBubble}/>
            <ModuloCuboG position={[2, 2, 2]} currentBubble={props.currentBubble}/>
            <ModuloCuboG position={[2, 2, 2]} currentBubble={props.currentBubble}/>
            <ModuloCuboG position={[0, 2, 2]} currentBubble={props.currentBubble}/>
            <ModuloCuboG position={[-2, 2, 2]} currentBubble={props.currentBubble}/>
        </group>
    )
};

export default ModuloCompuestoEsquinaAbiertaInteriorBajo;
