import EspacioInicialEsquinaAperturaExteriorG from '../3d/modules/EspacioInicialEsquinaAperturaExteriorG';
import EspacioInicialEsquinaCierreExteriorNI from '../3d/modules/EspacioInicialEsquinaCierreExteriorNI';
import EspacioInicialEsquinaCierreExteriorNS from '../3d/modules/EspacioInicialEsquinaCierreExteriorNS';
import EspacioInicialParedExteriorNS from '../3d/modules/EspacioInicialParedExteriorNS';
import EspacioInicialParedExteriorNI from '../3d/modules/EspacioInicialParedExteriorNI';
import EspacioInicialPuertaExteriorNS from '../3d/modules/EspacioInicialPuertaExteriorNS';
import EspacioInicialPuertaExteriorNI from '../3d/modules/EspacioInicialPuertaExteriorNI';
import CuboG from '../3d/modules/EspacioInicialCuboG';

import React from 'react';

/**
 * = Piso
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

const PlaceHolderExteriorNI = {
    tiles: [
`\
===
XXX
###`
,`\
===
X_X
#_#`
,`\
===
XXX
###`
    ],
    params: { transforms: [], weight: 1},
    component: (props) => { return (<></>)}
}

const PlaceHolderExteriorNS = {
    tiles: [
`\
###
###
###`
,`\
#_#
#_#
#_#`
,`\
###
###
###`
    ],
    params: { transforms: [], weight: 1},
    component: (props) => { return (<></>)}
}

// EsquinaAperturaExteriorNI

const EsquinaAperturaExteriorNITiles = 
{
    tiles: [
`\
===
__X
__#`
,`\
===
___
___`
,`\
===
___
___`
],
    params: { transforms: [], weight: 2},
    component: (props) => { return (<EspacioInicialEsquinaAperturaExteriorG position={props.position} /> )}
}

const EsquinaAperturaExteriorNITiles90 = {
  tiles: [
`\
===
X__
#__`
,`\
===
___
___`
,`\
===
___
___`
    ],
    params: { transforms: [], weight: 2},
    component:(props) => { return ( <EspacioInicialEsquinaAperturaExteriorG position={props.position} rotation={[0, 0.5 * Math.PI, 0]}/>) }
}

const EsquinaAperturaExteriorNITiles180 = {
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
X__
#__`
    ],
    params: { transforms: [], weight: 2},
    component:(props) => { return ( <EspacioInicialEsquinaAperturaExteriorG position={props.position} rotation={[0, 1 * Math.PI, 0]}/>)}
}

const EsquinaAperturaExteriorNITiles270 = {
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
__X
__#`
    ],
    params: { transforms: [], weight: 2},
    component: (props) => { return (<EspacioInicialEsquinaAperturaExteriorG position={props.position} rotation={[0, 1.5 * Math.PI, 0]}/> )}
}


// EsquinaAperturaExteriorNS

/**
 * = Piso
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

const EsquinaAperturaExteriorNSTiles = 
{
    tiles: [
`\
__#
__#
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
    params: { transforms: [], weight: 2},
    component: (props) => { return (<EspacioInicialEsquinaAperturaExteriorG position={props.position} /> )}
}

const EsquinaAperturaExteriorNSTiles90 = {
  tiles: [
`\
#__
#__
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
    params: { transforms: [], weight: 2},
    component:(props) => { return ( <EspacioInicialEsquinaAperturaExteriorG position={props.position} rotation={[0, 0.5 * Math.PI, 0]}/>) }
}

const EsquinaAperturaExteriorNSTiles180 = {
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
#__
#__
___`
    ],
    params: { transforms: [], weight: 2},
    component:(props) => { return ( <EspacioInicialEsquinaAperturaExteriorG position={props.position} rotation={[0, 1 * Math.PI, 0]}/>)}
}

const EsquinaAperturaExteriorNSTiles270 = {
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
__#
__#
___`
    ],
    params: { transforms: [], weight: 2},
    component: (props) => { return (<EspacioInicialEsquinaAperturaExteriorG position={props.position} rotation={[0, 1.5 * Math.PI, 0]}/> )}
}

// EsquinaCierreExteriorNI

/**
 * = Piso
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

const EsquinaCierreExteriorNITiles = 
{
    tiles: [
`\
===
XXX
###`
,`\
===
__X
__#`
,`\
===
__X
__#`
],
    params: { transforms: [], weight: 2},
    component: (props) => { return (<EspacioInicialEsquinaCierreExteriorNI position={props.position} /> )}
}

const EsquinaCierreExteriorNITiles90 = {
  tiles: [
`\
===
XXX
###`
,`\
===
X__
#__`
,`\
===
X__
#__`
    ],
    params: { transforms: [], weight: 2},
    component:(props) => { return ( <EspacioInicialEsquinaCierreExteriorNI position={props.position} rotation={[0, 0.5 * Math.PI, 0]}/>) }
}

const EsquinaCierreExteriorNITiles180 = {
  tiles: [
`\
===
X__
#__`
,`\
===
X__
#__`
,`\
===
XXX
###`
    ],
    params: { transforms: [], weight: 2},
    component:(props) => { return ( <EspacioInicialEsquinaCierreExteriorNI position={props.position} rotation={[0, 1 * Math.PI, 0]}/>)}
}

const EsquinaCierreExteriorNITiles270 = {
    tiles: [
`\
===
__X
__#`
,`\
===
__X
__#`
,`\
===
XXX
###`
    ],
    params: { transforms: [], weight: 2},
    component: (props) => { return (<EspacioInicialEsquinaCierreExteriorNI position={props.position} rotation={[0, 1.5 * Math.PI, 0]}/> )}
}


// EsquinaCierreExteriorNS

/**
 * = Piso
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

const EsquinaCierreExteriorNSTiles = 
{
    tiles: [
`\
###
###
___`
,`\
__#
__#
___`
,`\
__#
__#
___`
],
    params: { transforms: [], weight: 2},
    component: (props) => { return (<EspacioInicialEsquinaCierreExteriorNS position={props.position} /> )}
}

const EsquinaCierreExteriorNSTiles90 = {
  tiles: [
`\
###
###
___`
,`\
#__
#__
___`
,`\
#__
#__
___`
    ],
    params: { transforms: [], weight: 2},
    component:(props) => { return ( <EspacioInicialEsquinaCierreExteriorNS position={props.position} rotation={[0, 0.5 * Math.PI, 0]}/>) }
}

const EsquinaCierreExteriorNSTiles180 = {
  tiles: [
`\
#__
#__
___`
,`\
#__
#__
___`
,`\
###
###
___`
    ],
    params: { transforms: [], weight: 2},
    component:(props) => { return ( <EspacioInicialEsquinaCierreExteriorNS position={props.position} rotation={[0, 1 * Math.PI, 0]}/>)}
}

const EsquinaCierreExteriorNSTiles270 = {
    tiles: [
`\
__#
__#
___`
,`\
__#
__#
___`
,`\
###
###
___`
    ],
    params: { transforms: [], weight: 2},
    component: (props) => { return (<EspacioInicialEsquinaCierreExteriorNS position={props.position} rotation={[0, 1.5 * Math.PI, 0]}/> )}
}


// ParedExteriorNI

/**
 * = Piso
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

const ParedExteriorNITiles = 
{
    tiles: [
`\
===
__X
__#`
,`\
===
__X
__#`
,`\
===
__X
__#`
],
    params: { transforms: [], weight: 2},
    component: (props) => { return (<EspacioInicialParedExteriorNI position={props.position} /> )}
}

const ParedExteriorNITiles90 = {
  tiles: [
`\
===
XXX
###`
,`\
===
___
___`
,`\
===
___
___`
    ],
    params: { transforms: [], weight: 2},
    component:(props) => { return ( <EspacioInicialParedExteriorNI position={props.position} rotation={[0, 0.5 * Math.PI, 0]}/>) }
}

const ParedExteriorNITiles180 = {
  tiles: [
`\
===
X__
#__`
,`\
===
X__
#__`
,`\
===
X__
#__`
    ],
    params: { transforms: [], weight: 2},
    component:(props) => { return ( <EspacioInicialParedExteriorNI position={props.position} rotation={[0, 1 * Math.PI, 0]}/>)}
}

const ParedExteriorNITiles270 = {
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
XXX
###`
    ],
    params: { transforms: [], weight: 2},
    component: (props) => { return (<EspacioInicialParedExteriorNI position={props.position} rotation={[0, 1.5 * Math.PI, 0]}/> )}
}


// ParedExteriorNS

/**
 * = Piso
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

const ParedExteriorNSTiles = 
{
    tiles: [
`\
__#
__#
___`
,`\
__#
__#
___`
,`\
__#
__#
___`
],
    params: { transforms: [], weight: 2},
    component: (props) => { return (<EspacioInicialParedExteriorNS position={props.position} /> )}
}

const ParedExteriorNSTiles90 = {
  tiles: [
`\
###
###
###`
,`\
___
___
___`
,`\
___
___
___`
    ],
    params: { transforms: [], weight: 2},
    component:(props) => { return ( <EspacioInicialParedExteriorNS position={props.position} rotation={[0, 0.5 * Math.PI, 0]}/>) }
}

const ParedExteriorNSTiles180 = {
  tiles: [
`\
#__
#__
___`
,`\
#__
#__
___`
,`\
#__
#__
___`
    ],
    params: { transforms: [], weight: 2},
    component:(props) => { return ( <EspacioInicialParedExteriorNS position={props.position} rotation={[0, 1 * Math.PI, 0]}/>)}
}

const ParedExteriorNSTiles270 = {
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
###
###
###`
    ],
    params: { transforms: [], weight: 2},
    component: (props) => { return (<EspacioInicialParedExteriorNS position={props.position} rotation={[0, 1.5 * Math.PI, 0]}/> )}
}

// ParedExteriorNI

/**
 * = Piso
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

const PuertaExteriorNITiles = 
{
    tiles: [
`\
===
__X
__#`
,`\
===
__|
__@`
,`\
===
__X
__#`
],
    params: { transforms: [], weight: 2},
    component: (props) => { return (<EspacioInicialPuertaExteriorNI position={props.position} /> )}
}

const PuertaExteriorNITiles90 = {
  tiles: [
`\
===
X|X
#@#`
,`\
===
___
___`
,`\
===
___
___`
    ],
    params: { transforms: [], weight: 2},
    component:(props) => { return ( <EspacioInicialPuertaExteriorNI position={props.position} rotation={[0, 0.5 * Math.PI, 0]}/>) }
}

const PuertaExteriorNITiles180 = {
  tiles: [
`\
===
X__
#__`
,`\
===
|__
@__`
,`\
===
X__
#__`
    ],
    params: { transforms: [], weight: 2},
    component:(props) => { return ( <EspacioInicialPuertaExteriorNI position={props.position} rotation={[0, 1 * Math.PI, 0]}/>)}
}

const PuertaExteriorNITiles270 = {
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
X|X
#@#`
    ],
    params: { transforms: [], weight: 2},
    component: (props) => { return (<EspacioInicialPuertaExteriorNI position={props.position} rotation={[0, 1.5 * Math.PI, 0]}/> )}
}


// ParedExteriorNS

/**
 * = Piso
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

const PuertaExteriorNSTiles = 
{
    tiles: [
`\
__#
__#
___`
,`\
__@
__@
___`
,`\
__#
__#
___`
],
    params: { transforms: [], weight: 2},
    component: (props) => { return (<EspacioInicialPuertaExteriorNS position={props.position} /> )}
}

const PuertaExteriorNSTiles90 = {
  tiles: [
`\
#@#
#@#
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
    params: { transforms: [], weight: 2},
    component:(props) => { return ( <EspacioInicialPuertaExteriorNS position={props.position} rotation={[0, 0.5 * Math.PI, 0]}/>) }
}

const PuertaExteriorNSTiles180 = {
  tiles: [
`\
#__
#__
___`
,`\
@__
@__
___`
,`\
#__
#__
___`
    ],
    params: { transforms: [], weight: 2},
    component:(props) => { return ( <EspacioInicialPuertaExteriorNS position={props.position} rotation={[0, 1 * Math.PI, 0]}/>)}
}

const PuertaExteriorNSTiles270 = {
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
#@#
#@#
___`
    ],
    params: { transforms: [], weight: 2},
    component: (props) => { return (<EspacioInicialPuertaExteriorNS position={props.position} rotation={[0, 1.5 * Math.PI, 0]}/> )}
}

// CuboPuertaExteriorNS

/**
 * = Piso
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

const CuboPuertaExteriorNSTiles = 
{
    tiles: [
`\
#==
#==
#__`
,`\
@==
@==
@__`
,`\
#==
#==
___`
],
    params: { transforms: [], weight: 2},
    component: (props) => { return (<CuboG position={props.position} /> )}
}

const CuboPuertaExteriorNSTiles90 = {
  tiles: [
`\
#@#
#@#
___`
,`\
===
===
___`
,`\
===
===
___`
    ],
    params: { transforms: [], weight: 2},
    component:(props) => { return ( <CuboG position={props.position} rotation={[0, 0.5 * Math.PI, 0]}/>) }
}

const CuboPuertaExteriorNSTiles180 = {
  tiles: [
`\
==#
==#
___`
,`\
==@
==@
___`
,`\
==#
==#
___`
    ],
    params: { transforms: [], weight: 2},
    component:(props) => { return ( <CuboG position={props.position} rotation={[0, 1 * Math.PI, 0]}/>)}
}

const CuboPuertaExteriorNSTiles270 = {
    tiles: [
`\
===
===
___`
,`\
===
===
___`
,`\
#@#
#@#
___`
    ],
    params: { transforms: [], weight: 2},
    component: (props) => { return (<CuboG position={props.position} rotation={[0, 1.5 * Math.PI, 0]}/> )}
}


// CuboParedExteriorNS

/**
 * = Piso
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

const CuboParedExteriorNSTiles = 
{
    tiles: [
`\
#==
#==
___`
,`\
#==
#==
___`
,`\
#==
#==
___`
],
    params: { transforms: [], weight: 2},
    component: (props) => { return (<CuboG position={props.position} /> )}
}

const CuboParedExteriorNSTiles90 = {
  tiles: [
`\
###
###
###`
,`\
===
===
___`
,`\
===
===
___`
    ],
    params: { transforms: [], weight: 2},
    component:(props) => { return ( <CuboG position={props.position} rotation={[0, 0.5 * Math.PI, 0]}/>) }
}

const CuboParedExteriorNSTiles180 = {
  tiles: [
`\
==#
==#
___`
,`\
==#
==#
___`
,`\
==#
==#
___`
    ],
    params: { transforms: [], weight: 2},
    component:(props) => { return ( <CuboG position={props.position} rotation={[0, 1 * Math.PI, 0]}/>)}
}

const CuboParedExteriorNSTiles270 = {
    tiles: [
`\
===
===
___`
,`\
===
===
___`
,`\
###
###
___`
    ],
    params: { transforms: [], weight: 2},
    component: (props) => { return (<CuboG position={props.position} rotation={[0, 1.5 * Math.PI, 0]}/> )}
}


// CuboParedEsquinaExteriorNS

/**
 * = Piso
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

const CuboParedEsquinaExteriorNSTiles = 
{
    tiles: [
`\
###
###
___`
,`\
#°°
#°°
___`
,`\
#°°
#°°
___`
],
    params: { transforms: [], weight: 2},
    component: (props) => { return (<CuboG position={props.position} /> )}
}

const CuboParedEsquinaExteriorNSTiles90 = {
  tiles: [
`\
###
###
___`
,`\
°°#
°°#
___`
,`\
°°#
°°#
___`
    ],
    params: { transforms: [], weight: 2},
    component:(props) => { return ( <CuboG position={props.position} rotation={[0, 0.5 * Math.PI, 0]}/>) }
}

const CuboParedEsquinaExteriorNSTiles180 = {
  tiles: [
`\
°°#
°°#
___`
,`\
°°#
°°#
___`
,`\
###
###
___`
    ],
    params: { transforms: [], weight: 2},
    component:(props) => { return ( <CuboG position={props.position} rotation={[0, 1 * Math.PI, 0]}/>)}
}

const CuboParedEsquinaExteriorNSTiles270 = {
    tiles: [
`\
#°°
#°°
___`
,`\
#°°
#°°
___`
,`\
###
###
___`
    ],
    params: { transforms: [], weight: 2},
    component: (props) => { return (<CuboG position={props.position} rotation={[0, 1.5 * Math.PI, 0]}/> )}
}

const exteriorTiles = [
    PlaceHolderExteriorNI,
    PlaceHolderExteriorNS,
    EsquinaAperturaExteriorNITiles,
    EsquinaAperturaExteriorNITiles90,
    EsquinaAperturaExteriorNITiles180,
    EsquinaAperturaExteriorNSTiles,
    EsquinaAperturaExteriorNSTiles90,
    EsquinaAperturaExteriorNSTiles180,
    EsquinaCierreExteriorNITiles,
    EsquinaCierreExteriorNITiles90,
    EsquinaCierreExteriorNITiles270,
    EsquinaCierreExteriorNSTiles,
    EsquinaCierreExteriorNSTiles90,
    EsquinaCierreExteriorNSTiles270,
    ParedExteriorNITiles,
    ParedExteriorNITiles90,
    ParedExteriorNITiles180,
    ParedExteriorNITiles270,
    ParedExteriorNSTiles,
    ParedExteriorNSTiles90,
    ParedExteriorNSTiles180,
    ParedExteriorNSTiles270,
    PuertaExteriorNITiles,
    PuertaExteriorNITiles90,
    PuertaExteriorNITiles180,
    PuertaExteriorNITiles270,
    PuertaExteriorNSTiles,
    PuertaExteriorNSTiles90,
    PuertaExteriorNSTiles180,
    PuertaExteriorNSTiles270,
    CuboParedEsquinaExteriorNSTiles,
    CuboParedEsquinaExteriorNSTiles90,
    CuboParedEsquinaExteriorNSTiles180,
    CuboParedEsquinaExteriorNSTiles270,
    CuboPuertaExteriorNSTiles,
    CuboPuertaExteriorNSTiles90,
    CuboPuertaExteriorNSTiles180,
    CuboPuertaExteriorNSTiles270,
    CuboParedExteriorNSTiles,
    CuboParedExteriorNSTiles90,
    CuboParedExteriorNSTiles180,
    CuboParedExteriorNSTiles270
]

export default exteriorTiles;

