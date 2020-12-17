import React from 'react';
import ModuloEsquinaCierreInteriorBajoNI from '../bubbles/ModuloEsquinaCierreInteriorBajoNI';
import ModuloEsquinaAperturaExteriorG from '../bubbles/ModuloEsquinaAperturaExteriorG';
import ModuloParedExteriorNI from '../bubbles/ModuloParedExteriorNI';
import ModuloParedExteriorNS from '../bubbles/ModuloParedExteriorNS';
import ModuloCuboG from '../bubbles/ModuloCuboG';
import PisoCompuesto from './common/PisoCompuesto';
import { useBox, useCompoundBody } from '@react-three/cannon';

const ModuloCompuestoEsquinaCerradaInteriorBajo = (props) => {

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
                    args:[0.6, 2, 2],
                    position: [0.85, 0, 2]
                },
                {
                    type: "Box",
                    args:[2.7, 2.4, 2],
                    position: [1.8, 2, 2]
                },
                {
                    type: "Box",
                    args:[2.6, 4, 0.6],
                    position: [1.7, 0, 0.8]
                },
                //Esquinas internas
                {
                    type: "Box",
                    args:[2, 2, 0.3],
                    position: [2, 0, 1.6]
                },
                {
                    type: "Box",
                    args:[0.3, 2, 2],
                    position: [1.6, 0, 2]
                }
            ]
        }
    ));

    return (
        <group ref={ref} {...props} position={props.position} dispose={null}>
            {/**--- Piso ---*/}
            <PisoCompuesto position={[0, -2, 0]} currentBubble={props.currentBubble}/>
            <ModuloParedExteriorNI position={[2, 0, 0]} rotation={[0, 1.5 * Math.PI, 0]} currentBubble={props.currentBubble}/>
            <ModuloParedExteriorNS position={[2, 2, 0]} rotation={[0, 1.5 * Math.PI, 0]} currentBubble={props.currentBubble}/>
            
            <ModuloEsquinaAperturaExteriorG position={[0, 0, 0]} rotation={[0, 1.5 * Math.PI, 0]} currentBubble={props.currentBubble}/>
            <ModuloEsquinaAperturaExteriorG position={[0, 2, 0]} rotation={[0, 1.5 * Math.PI, 0]} currentBubble={props.currentBubble}/>

            <ModuloEsquinaCierreInteriorBajoNI position={[2, 0, 2]} currentBubble={props.currentBubble}/>
            
            <ModuloParedExteriorNI position={[0, 0, 2]} currentBubble={props.currentBubble}/>
            <ModuloParedExteriorNS position={[0, 2, 2]} currentBubble={props.currentBubble}/>
            
            <ModuloCuboG position={[2, 2, 2]} currentBubble={props.currentBubble}/>
        </group>
    )
};

export default ModuloCompuestoEsquinaCerradaInteriorBajo;
