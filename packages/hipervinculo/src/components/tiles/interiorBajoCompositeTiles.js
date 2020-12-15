import React from 'react';
import ModuloCompuestoEsquinaCerradaInteriorBajo from "../3d/modules/composite/ModuloCompuestoEsquinaCerradaInteriorBajo";
import ModuloCompuestoEsquinaAbiertaInteriorBajo from "../3d/modules/composite/ModuloCompuestoEsquinaAbiertaInteriorBajo";
import ModuloCompuestoPuertaInteriorBajo from "../3d/modules/composite/ModuloCompuestoPuertaInteriorBajo";
import ModuloCompuestoParedInteriorBajo from "../3d/modules/composite/ModuloCompuestoParedInteriorBajo";
import ModuloCompuestoTechoInteriorBajo from "../3d/modules/composite/ModuloCompuestoTechoInteriorBajo";

/**
 * Aire _
 * Escalera #
 * Conector Especial de Escalera =
 * Aire Interior @
 */

// Esquina Cerrada

const EsquinaCerradaInteriorBajoTiles = {
    tiles: [
`\
___
___
___`
,`\
___
_XX
___`
,`\
___
_X@
___`
    ],
    params: { transforms: [], weight: 20},
    component: (props) => { return (<ModuloCompuestoEsquinaCerradaInteriorBajo {...props} /> )}
}


const EsquinaCerradaInteriorBajoTiles90 = {
    tiles: [
`\
___
_X@
___`
,`\
___
_XX
___`
,`\
___
___
___
`
    ],
    params: { transforms: [], weight: 20},
    component: (props) => { return (<ModuloCompuestoEsquinaCerradaInteriorBajo {...props} rotation={[0, 0.5 * Math.PI, 0]}/> )}
}

const EsquinaCerradaInteriorBajoTiles180 = {
    tiles: [
`\
___
@X_
___`
,`\
___
XX_
___`
,`\
___
___
___`
    ],
    params: { transforms: [], weight: 20},
    component: (props) => { return (<ModuloCompuestoEsquinaCerradaInteriorBajo {...props} rotation={[0, Math.PI, 0]}/> )}
}

const EsquinaCerradaInteriorBajoTiles270 = {
    tiles: [
`\
___
___
___`
,`\
___
XX_
___`
,`\
___
@X_
___`
    ],
    params: { transforms: [], weight: 20},
    component: (props) => { return (<ModuloCompuestoEsquinaCerradaInteriorBajo {...props} rotation={[0, 1.5 * Math.PI, 0]}/> )}
}

// Esquina Abierta

const EsquinaAbiertaInteriorBajoTiles = {
    tiles: [
`\
___
_X@
___`
,
`\
___
XX@
___`
,`\
___
@@@
___`
    ],
    params: { transforms: [], weight: 20},
    component: (props) => { return (<ModuloCompuestoEsquinaAbiertaInteriorBajo {...props} /> )}
}


const EsquinaAbiertaInteriorBajoTiles90 = {
    tiles: [
`\
___
@@@
___`
,`\
___
XX@
___`
,`\
___
_X@
___`
    ],
    params: { transforms: [], weight: 20},
    component: (props) => { return (<ModuloCompuestoEsquinaAbiertaInteriorBajo {...props} rotation={[0, 0.5 * Math.PI, 0]}/> )}
}

const EsquinaAbiertaInteriorBajoTiles180 = {
    tiles: [
`\
___
@@@
___`
,`\
___
@XX
___`
,`\
___
@X_
___`
    ],
    params: { transforms: [], weight: 20},
    component: (props) => { return (<ModuloCompuestoEsquinaAbiertaInteriorBajo {...props} rotation={[0, Math.PI, 0]}/> )}
}

const EsquinaAbiertaInteriorBajoTiles270 = {
    tiles: [
`\
___
@X_
___`
,`\
___
@XX
___`
,`\
___
@@@
___`
    ],
    params: { transforms: [], weight: 20},
    component: (props) => { return (<ModuloCompuestoEsquinaAbiertaInteriorBajo {...props} rotation={[0, 1.5 * Math.PI, 0]}/> )}
}

// Puerta

const PuertaInteriorBajoTiles = {
    tiles: [
`\
___
_X@
___`
,`\
___
=X@
___`
,`\
___
_x@
___`
    ],
    params: { transforms: [], weight: 100},
    component: (props) => { return (<ModuloCompuestoPuertaInteriorBajo {...props} /> )}
}


const PuertaInteriorBajoTiles90 = {
    tiles: [
`\
___
@@@
___`
,`\
___
XXX
___`
,`\
___
_=_
___`
    ],
    params: { transforms: [], weight: 100},
    component: (props) => { return (<ModuloCompuestoPuertaInteriorBajo {...props} rotation={[0, 0.5 * Math.PI, 0]}/> )}
}

const PuertaInteriorBajoTiles180 = {
    tiles: [
`\
___
@X_
___`
,`\
___
@X=
___`
,`\
___
@X_
___`
    ],
    params: { transforms: [], weight: 100},
    component: (props) => { return (<ModuloCompuestoPuertaInteriorBajo {...props} rotation={[0, Math.PI, 0]}/> )}
}

const PuertaInteriorBajoTiles270 = {
    tiles: [
`\
___
_=_
___`
,`\
___
XXX
___`
,`\
___
@@@
___`
    ],
    params: { transforms: [], weight: 100},
    component: (props) => { return (<ModuloCompuestoPuertaInteriorBajo {...props} rotation={[0, 1.5 * Math.PI, 0]}/> )}
}



// Puerta

const ParedInteriorBajoTiles = {
    tiles: [
`\
___
_X@
___`
,`\
___
_X@
___`
,`\
___
_x@
___`
],
    params: { transforms: [], weight: 20},
    component: (props) => { return (<ModuloCompuestoParedInteriorBajo {...props} /> )}
}


const ParedInteriorBajoTiles90 = {
    tiles: [
`\
___
@@@
___`
,`\
___
XXX
___`
,`\
___
___
___`
],
    params: { transforms: [], weight: 20},
    component: (props) => { return (<ModuloCompuestoParedInteriorBajo {...props} rotation={[0, 0.5 * Math.PI, 0]}/> )}
}

const ParedInteriorBajoTiles180 = {
    tiles: [
`\
___
@X_
___`
,`\
___
@X_
___`
,`\
___
@X_
___`
],
    params: { transforms: [], weight: 20},
    component: (props) => { return (<ModuloCompuestoParedInteriorBajo {...props} rotation={[0, Math.PI, 0]}/> )}
}

const ParedInteriorBajoTiles270 = {
    tiles: [`\
___
___
___`,
`\
___
XXX
___`
,`\
___
@@@
___`
],
    params: { transforms: [], weight: 20},
    component: (props) => { return (<ModuloCompuestoParedInteriorBajo {...props} rotation={[0, 1.5 * Math.PI, 0]}/> )}
}


const TechoInteriorBajoTiles = {
    tiles: [
`\
___
@@@
___`
,`\
___
@@@
___`
,`\
___
@@@
___`
    ],
    params: { transforms: [], weight: 20},
    component: (props) => { return (<ModuloCompuestoTechoInteriorBajo {...props} rotation={[0, 1.5 * Math.PI, 0]}/> )}
}

const tiles = [
    EsquinaCerradaInteriorBajoTiles,
    EsquinaCerradaInteriorBajoTiles90,
    EsquinaCerradaInteriorBajoTiles180,
    EsquinaCerradaInteriorBajoTiles270,
    EsquinaAbiertaInteriorBajoTiles,
    EsquinaAbiertaInteriorBajoTiles90,
    EsquinaAbiertaInteriorBajoTiles180,
    EsquinaAbiertaInteriorBajoTiles270,
    PuertaInteriorBajoTiles,
    PuertaInteriorBajoTiles90,
    PuertaInteriorBajoTiles180,
    PuertaInteriorBajoTiles270,
    ParedInteriorBajoTiles,
    ParedInteriorBajoTiles90,
    ParedInteriorBajoTiles180,
    ParedInteriorBajoTiles270,
    TechoInteriorBajoTiles
]

export default tiles;

