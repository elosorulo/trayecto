import React from 'react';
import EspacioInicialEsquinaCierreInteriorBajoNI from '../bubbles/espacioInicial/EspacioInicialEsquinaCierreInteriorBajoNI';
import EspacioInicialEsquinaAperturaExteriorG from '../bubbles/espacioInicial/EspacioInicialEsquinaAperturaExteriorG';
import EspacioInicialParedExteriorNI from '../bubbles/espacioInicial/EspacioInicialParedExteriorNI';
import EspacioInicialParedExteriorNS from '../bubbles/espacioInicial/EspacioInicialParedExteriorNS';
import EspacioInicialCuboG from '../bubbles/espacioInicial/EspacioInicialCuboG';
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
                    args:[0.6, 2, 4],
                    position: [0.85, 0, 2.4]
                },
                {
                    type: "Box",
                    args:[2.7, 2.4, 4.4],
                    position: [1.8, 2, 2.4]
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
            <PisoCompuesto position={[0, -2, 0]}/>
            <EspacioInicialParedExteriorNI position={[2, 0, 0]} rotation={[0, 1.5 * Math.PI, 0]}/>
            <EspacioInicialParedExteriorNS position={[2, 2, 0]} rotation={[0, 1.5 * Math.PI, 0]}/>
            
            <EspacioInicialEsquinaAperturaExteriorG position={[0, 0, 0]} rotation={[0, 1.5 * Math.PI, 0]}/>
            <EspacioInicialEsquinaAperturaExteriorG position={[0, 2, 0]} rotation={[0, 1.5 * Math.PI, 0]}/>

            <EspacioInicialEsquinaCierreInteriorBajoNI position={[2, 0, 2]}/>
            
            <EspacioInicialParedExteriorNI position={[0, 0, 2]}/>
            <EspacioInicialParedExteriorNS position={[0, 2, 2]}/>
            
            <EspacioInicialCuboG position={[2, 2, 2]}/>
        </group>
    )
};

export default ModuloCompuestoEsquinaCerradaInteriorBajo;
