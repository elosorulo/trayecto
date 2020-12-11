import EspacioInicialCuboG from '../components/3d/modules/EspacioInicialCuboG';

import React from 'react';
import exteriorTiles from './tiles/exteriorTiles';
import interiorBajoTiles from './tiles/interiorBajoTiles';

// Cubo

const CuboG = {
    tiles: [
`\
***
===
===`
,`\
***
===
===`
,`\
***
===
===`
    ],
    params: { transforms: [], weight: 1},
    component: (props) => { return (<EspacioInicialCuboG position={props.position} rotation={[0, 0, 0]}/> )}
}

const CuboTecho = {
    tiles: [
`\
°°°
°°°
___`
,`\
°°°
°°°
___`
,`\
°°°
°°°
___`
    ],
    params: { transforms: [], weight: 1},
    component: (props) => { return (<EspacioInicialCuboG position={props.position} rotation={[0, 0, 0]}/> )}
}


const CuboAire = {
    tiles: [
`\
===
___
___`
,`\
===
___
___`
,`\
===
___
___`
    ],
    params: { transforms: [], weight: 1},
    component: (props) => { return (<EspacioInicialCuboG position={props.position} rotation={[0, 0, 0]}/> )}
}

const Aire = {
    tiles: [
`\
___
___
___`
,`\
___
___
___`
,`\
___
___
___`
    ],
    params: { transforms: [], weight: 1},
    component: (props) => { return (<></>)}
}

const wavesTiles = [
    CuboG,
    CuboTecho,
    Aire,
    ...exteriorTiles,
    ...interiorBajoTiles
]

export default wavesTiles;
