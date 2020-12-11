import EspacioInicialParedInteriorBajoNI from '../3d/modules/EspacioInicialParedInteriorBajoNI';
import EspacioInicialPuertaInteriorBajoNI from '../3d/modules/EspacioInicialPuertaInteriorBajoNI';
import EspacioInicialEsquinaAperturaInteriorBajoNI from '../3d/modules/EspacioInicialEsquinaAperturaInteriorBajoNI';
import EspacioInicialEsquinaCierreInteriorBajoNI from '../3d/modules/EspacioInicialEsquinaCierreInteriorBajoNI';

import React from 'react';
/**
 * = Piso
 * ° Techo
 * _ Aire
 * X Pared Exerior NI
 * # Pared Exterior NS
 * % Pared Interior Alto NI
 * $ Pared Interior Alto NS
 * & Pared Interior Bajo NI
 * | Puerta NI
 * @ Puerta NS
 * ? Escalera
 */

// Place Holders

const CuboAireInteriorNI = {
    tiles: [
`\
===
___
°°°`
,`\
===
___
°°°`
,`\
===
___
°°°`
    ],
    params: { transforms: [], weight: 1},
    component: (props) => { return (<></> )}
}


// ParedInteriorBajoNI

const ParedInteriorBajoNITiles = 
{
    tiles: [
`\
===
X__
#°°`
,`\
===
X__
#°°`
,`\
===
X__
#°°`
],
    params: { transforms: [], weight: 20},
    component: (props) => { return (<EspacioInicialParedInteriorBajoNI position={props.position} /> )}
}

const ParedInteriorBajoNITiles90 = {
  tiles: [
`\
===
___
°°°`
,`\
===
___
°°°`
,`\
===
XXX
###`
    ],
    params: { transforms: [], weight: 20},
    component:(props) => { return ( <EspacioInicialParedInteriorBajoNI position={props.position} rotation={[0, 0.5 * Math.PI, 0]}/>) }
}

const ParedInteriorBajoNITiles180 = {
  tiles: [
`\
===
__X
°°#`
,`\
===
__X
°°#`
,`\
===
__X
°°#`
    ],
    params: { transforms: [], weight: 20},
    component:(props) => { return ( <EspacioInicialParedInteriorBajoNI position={props.position} rotation={[0, 1 * Math.PI, 0]}/>)}
}

const ParedInteriorBajoNITiles270 = {
    tiles: [
`\
===
XXX
###`
,`\
===
___
°°°`
,`\
===
___
°°°`
    ],
    params: { transforms: [], weight: 20},
    component: (props) => { return (<EspacioInicialParedInteriorBajoNI position={props.position} rotation={[0, 1.5 * Math.PI, 0]}/> )}
}



// ParedInteriorBajoNI

const PuertaInteriorBajoNITiles = 
{
    tiles: [
`\
===
X__
#°°`
,`\
===
|__
@°°`
,`\
===
X__
#°°`
],
    params: { transforms: [], weight: 2000},
    component: (props) => { return (<EspacioInicialPuertaInteriorBajoNI position={props.position} /> )}
}

const PuertaInteriorBajoNITiles90 = {
  tiles: [
`\
===
___
°°°`
,`\
===
___
°°°`
,`\
===
X|X
#@#`
    ],
    params: { transforms: [], weight: 50},
    component:(props) => { return ( <EspacioInicialPuertaInteriorBajoNI position={props.position} rotation={[0, 0.5 * Math.PI, 0]}/>) }
}

const PuertaInteriorBajoNITiles180 = {
  tiles: [
`\
===
__X
°°#`
,`\
===
__|
°°@`
,`\
===
__X
°°#`
    ],
    params: { transforms: [], weight: 50},
    component:(props) => { return ( <EspacioInicialPuertaInteriorBajoNI position={props.position} rotation={[0, 1 * Math.PI, 0]}/>)}
}

const PuertaInteriorBajoNITiles270 = {
    tiles: [
`\
===
X|X
#@#`
,`\
===
___
°°°`
,`\
===
___
°°°`
    ],
    params: { transforms: [], weight: 50},
    component: (props) => { return (<EspacioInicialPuertaInteriorBajoNI position={props.position} rotation={[0, 1.5 * Math.PI, 0]}/> )}
}


// EsquinaAperturaInteriorBajoNI

const EsquinaAperturaInteriorBajoNITiles = 
{
    tiles: [
`\
===
__X
°°#`
,`\
===
___
°°°`
,`\
===
___
°°°`
],
    params: { transforms: [], weight: 20},
    component: (props) => { return (<EspacioInicialEsquinaAperturaInteriorBajoNI position={props.position} /> )}
}

const EsquinaAperturaInteriorBajoNITiles90 = {
  tiles: [
`\
===
X__
#°°`
,`\
===
___
°°°`
,`\
===
___
°°°`
    ],
    params: { transforms: [], weight: 20},
    component:(props) => { return ( <EspacioInicialEsquinaAperturaInteriorBajoNI position={props.position} rotation={[0, 0.5 * Math.PI, 0]}/>) }
}

const EsquinaAperturaInteriorBajoNITiles180 = {
  tiles: [
`\
===
___
°°°`
,`\
===
___
°°°`
,`\
===
X__
#°°`
    ],
    params: { transforms: [], weight: 20},
    component:(props) => { return ( <EspacioInicialEsquinaAperturaInteriorBajoNI position={props.position} rotation={[0, 1 * Math.PI, 0]}/>)}
}

const EsquinaAperturaInteriorBajoNITiles270 = {
    tiles: [
`\
===
___
°°°`
,`\
===
___
°°°`
,`\
===
__X
°°#`
    ],
    params: { transforms: [], weight: 20},
    component: (props) => { return (<EspacioInicialEsquinaAperturaInteriorBajoNI position={props.position} rotation={[0, 1.5 * Math.PI, 0]}/> )}
}

// EsquinaCierreInteriorBajoNI

const EsquinaCierreInteriorBajoNITiles = 
{
    tiles: [
`\
===
XXX
###`
,`\
===
X__
#°°`
,`\
===
X__
#°°`
],
    params: { transforms: [], weight: 20},
    component: (props) => { return (<EspacioInicialEsquinaCierreInteriorBajoNI position={props.position} /> )}
}

const EsquinaCierreInteriorBajoNITiles90 = {
  tiles: [
`\
===
X__
#°°`
,`\
===
X__
#°°`
,`\
===
XXX
###`
    ],
    params: { transforms: [], weight: 20},
    component:(props) => { return ( <EspacioInicialEsquinaCierreInteriorBajoNI position={props.position} rotation={[0, 0.5 * Math.PI, 0]}/>) }
}

const EsquinaCierreInteriorBajoNITiles180 = {
  tiles: [
`\
===
__X
°°#`
,`\
===
__X
°°#`
,`\
===
XXX
###`
    ],
    params: { transforms: [], weight: 20},
    component:(props) => { return ( <EspacioInicialEsquinaCierreInteriorBajoNI position={props.position} rotation={[0, 1 * Math.PI, 0]}/>)}
}

const EsquinaCierreInteriorBajoNITiles270 = {
    tiles: [
`\
===
XXX
###`
,`\
===
__X
°°#`
,`\
===
__X
°°#`
    ],
    params: { transforms: [], weight: 20},
    component: (props) => { return (<EspacioInicialEsquinaCierreInteriorBajoNI position={props.position} rotation={[0, 1.5 * Math.PI, 0]}/> )}
}

const interiorBajoTiles = [
    CuboAireInteriorNI,
    ParedInteriorBajoNITiles,
    ParedInteriorBajoNITiles90,
    ParedInteriorBajoNITiles180,
    ParedInteriorBajoNITiles270,
    PuertaInteriorBajoNITiles,
    PuertaInteriorBajoNITiles90,
    PuertaInteriorBajoNITiles180,
    PuertaInteriorBajoNITiles270,
    EsquinaAperturaInteriorBajoNITiles,
    EsquinaAperturaInteriorBajoNITiles90,
    EsquinaAperturaInteriorBajoNITiles180,
    EsquinaCierreInteriorBajoNITiles,
    EsquinaCierreInteriorBajoNITiles90,
    EsquinaCierreInteriorBajoNITiles270
];

export default interiorBajoTiles;
