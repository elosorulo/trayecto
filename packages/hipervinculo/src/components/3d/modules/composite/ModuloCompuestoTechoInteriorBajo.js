import React from 'react';
import ModuloCuboG from '../bubbles/ModuloCuboG';
import PisoCompuesto from './common/PisoCompuesto';
import { useBox, useCompoundBody } from '@react-three/cannon';
import ModuloTechoInteriorBajoNS from '../bubbles/ModuloTechoInteriorBajoNI';
import Link from '../../links/Link';

const ModuloCompuestoTechoInteriorBajo = (props) => {

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
                    args:[6, 2, 6],
                    position: [0, 2, 0]
                }
            ]
        }
    ));

    return (
        <group ref={ref} {...props} position={props.position} dispose={null}>
            {/**--- Piso ---*/}
            <PisoCompuesto position={[0, -2, 0]} currentBubble={props.currentBubble}/>
            <ModuloTechoInteriorBajoNS position={[-2, 0, -2]} currentBubble={props.currentBubble}/>
            <ModuloTechoInteriorBajoNS position={[-2, 0, 0]} currentBubble={props.currentBubble}/>
            <ModuloTechoInteriorBajoNS position={[-2, 0, 2]} currentBubble={props.currentBubble}/>
            <ModuloTechoInteriorBajoNS position={[0, 0, -2]} currentBubble={props.currentBubble}/>
            <ModuloTechoInteriorBajoNS position={[0, 0, 0]} currentBubble={props.currentBubble}/>
            <ModuloTechoInteriorBajoNS position={[0, 0, 2]} currentBubble={props.currentBubble}/>
            <ModuloTechoInteriorBajoNS position={[2, 0, -2]} currentBubble={props.currentBubble}/>
            <ModuloTechoInteriorBajoNS position={[2, 0, 0]} currentBubble={props.currentBubble}/>
            <ModuloTechoInteriorBajoNS position={[2, 0, 2]} currentBubble={props.currentBubble}/>

            <ModuloCuboG position={[-2, 2, -2]} currentBubble={props.currentBubble}/>
            <ModuloCuboG position={[-2, 2, 0]} currentBubble={props.currentBubble}/>
            <ModuloCuboG position={[-2, 2, 2]} currentBubble={props.currentBubble}/>
            <ModuloCuboG position={[0, 2, -2]} currentBubble={props.currentBubble}/>
            <ModuloCuboG position={[0, 2, 0]} currentBubble={props.currentBubble}/>
            <ModuloCuboG position={[0, 2, 2]} currentBubble={props.currentBubble}/>
            <ModuloCuboG position={[2, 2, -2]} currentBubble={props.currentBubble}/>
            <ModuloCuboG position={[2, 2, 0]} currentBubble={props.currentBubble}/>
            <ModuloCuboG position={[2, 2, 2]} currentBubble={props.currentBubble}/>
            <Link globalPosition={props.position} globalRotation={props.rotation} position={[0, 0, 0]} currentBubble={props.currentBubble}/>
        </group>
    )
};

export default ModuloCompuestoTechoInteriorBajo;
