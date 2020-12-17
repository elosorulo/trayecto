import React from 'react';
import ModuloPuertaInteriorBajoNI from '../bubbles/ModuloPuertaInteriorBajoNI';
import ModuloPuertaExteriorNI from '../bubbles/ModuloPuertaExteriorNI';
import ModuloPuertaExteriorNS from '../bubbles/ModuloPuertaExteriorNS';
import ModuloParedInteriorBajoNI from '../bubbles/ModuloParedInteriorBajoNI';
import ModuloParedExteriorNI from '../bubbles/ModuloParedExteriorNI';
import ModuloParedExteriorNS from '../bubbles/ModuloParedExteriorNS';
import ModuloCuboG from '../bubbles/ModuloCuboG';
import PisoCompuesto from './common/PisoCompuesto';
import { useBox, useCompoundBody } from '@react-three/cannon';
import LinkInicio from '../../links/LinkInicio';
import LinkDeepWeb from '../../links/LinkDeepWeb';
import LinkContenido from '../../links/LinkContenido';
import LinkPirateria from '../../links/LinkPirateria';
import LinkPorno from '../../links/LinkPorno';
import LinkRedesSociales from '../../links/LinkRedesSociales';
import LinkInformacion from '../../links/LinkInformacion';
import Link from '../../links/Link';

const ModuloCompuestoPuertaInteriorBajo = (props) => {

    const [ref, api] = useCompoundBody(() => (
        {
            ...props,
            shapes: [
                {
                    type: "Box",
                    args: [6, 2, 6],
                    position: [0, -2, 0]
                },
                {
                    type: "Box",
                    args: [0.6, 2, 2.2],
                    position: [0.85, 0, -2]
                },
                {
                    type: "Box",
                    args: [0.6, 2, 2.2],
                    position: [0.85, 0, 2]
                },
                {
                    type: "Box",
                    args: [2.7, 2.4, 6],
                    position: [1.8, 2, 0]
                }
            ]
        }
    ));

    return (
        <>
        <group ref={ref} {...props} dispose={null}>
            {/**--- Piso ---*/}
            <PisoCompuesto position={[0, -2, 0]} currentBubble={props.currentBubble}/>
            <ModuloParedExteriorNI position={[0, 0, -2]} currentBubble={props.currentBubble}/>
            <ModuloParedInteriorBajoNI position={[2, 0, -2]} currentBubble={props.currentBubble}/>
            <ModuloParedExteriorNS position={[0, 2, -2]} currentBubble={props.currentBubble}/>

            <ModuloCuboG position={[2, 2, -2]} currentBubble={props.currentBubble}/>

            <ModuloPuertaExteriorNI position={[0, 0, 0]} currentBubble={props.currentBubble}/>
            <ModuloPuertaExteriorNS position={[0, 2, 0]} currentBubble={props.currentBubble}/>
            <ModuloPuertaInteriorBajoNI position={[2, 0, 0]} currentBubble={props.currentBubble}/>
            <ModuloCuboG position={[2, 2, 0]} currentBubble={props.currentBubble}/>

            <ModuloParedInteriorBajoNI position={[2, 0, 2]} currentBubble={props.currentBubble}/>
            <ModuloParedExteriorNI position={[0, 0, 2]} currentBubble={props.currentBubble}/>
            <ModuloParedExteriorNS position={[0, 2, 2]} currentBubble={props.currentBubble}/>
            <ModuloCuboG position={[2, 2, 2]} currentBubble={props.currentBubble}/>

        </group>
        </>
    )
};

export default ModuloCompuestoPuertaInteriorBajo;
