import React from 'react';
import ModuloCompuestoCaminitoEscaleras from "../3d/modules/composite/ModuloCompuestoCaminitoEscaleras";
import ModuloCompuestoConectorEscaleraInferior from "../3d/modules/composite/ModuloCompuestoConectorEscaleraInferior";
import ModuloCompuestoEscalerasInferiorIzquierda from "../3d/modules/composite/ModuloCompuestoEscalerasInferiorIzquierda";
import ModuloCompuestoEscalerasInferiorDerecha from "../3d/modules/composite/ModuloCompuestoEscalerasInferiorDerecha";
import ModuloCompuestoEscalerasSuperiorIzquierda from "../3d/modules/composite/ModuloCompuestoEscalerasSuperiorIzquierda";
import ModuloCompuestoEscalerasSuperiorDerecha from "../3d/modules/composite/ModuloCompuestoEscalerasSuperiorDerecha";

/**
 * Aire _
 * Escalera =
 * Conector Especial de Escalera #
 * Aire Interior @
 */


const CaminitoEscalerasTiles = {
    tiles: [
`\
___
_#_
___`
,`\
___
_#_
___`
,`\
___
_#_
___`
    ],
    params: { transforms: [], weight: 20},
    component: (props) => { return (<ModuloCompuestoCaminitoEscaleras {...props} /> )}
}


const CaminitoEscalerasTiles180 = {
    tiles: [
`\
___
___
___`
,`\
___
###
___`
,`\
___
___
___
`
    ],
    params: { transforms: [], weight: 20},
    component: (props) => { return (<ModuloCompuestoCaminitoEscaleras {...props} rotation={[0, 0.5 * Math.PI, 0]}/> )}
}

// Conector Escalera Inferior

const ConectorEscaleraInferiorTiles = {
    tiles: [
`\
___
___
___`
,`\
_#_
__=
___`
,`\
___
___
___`
    ],
    params: { transforms: [], weight: 20},
    component: (props) => { return (<ModuloCompuestoConectorEscaleraInferior {...props} /> )}
}


const ConectorEscaleraInferiorTiles90 = {
    tiles: [
`\
___
_=_
___`
,`\
_#_
___
___`
,`\
___
___
___
`
    ],
    params: { transforms: [], weight: 20},
    component: (props) => { return (<ModuloCompuestoConectorEscaleraInferior {...props} rotation={[0, 0.5 * Math.PI, 0]}/> )}
}

const ConectorEscaleraInferiorTiles180 = {
    tiles: [
`\
___
___
___`
,`\
_#_
=__
___`
,`\
___
___
___`
    ],
    params: { transforms: [], weight: 20},
    component: (props) => { return (<ModuloCompuestoConectorEscaleraInferior {...props} rotation={[0, Math.PI, 0]}/> )}
}

const ConectorEscaleraInferiorTiles270 = {
    tiles: [
`\
___
___
___`
,`\
_#_
___
___`
,`\
___
_=_
___`
    ],
    params: { transforms: [], weight: 20},
    component: (props) => { return (<ModuloCompuestoConectorEscaleraInferior {...props} rotation={[0, 1.5 * Math.PI, 0]}/> )}
}


// Escalera Inferior Izquierda

const EscalerasInferiorIzquierdaTiles = {
    tiles: [
`\
___
___
___`
,`\
___
_#_
_#_`
,`\
_#_
___
___`
    ],
    params: { transforms: [], weight: 20},
    component: (props) => { return (<ModuloCompuestoEscalerasInferiorIzquierda {...props} /> )}
}


const EscalerasInferiorIzquierdaTiles90 = {
    tiles: [
`\
___
___
___`
,`\
__#
_#_
_#_`
,`\
___
___
___
`
    ],
    params: { transforms: [], weight: 20},
    component: (props) => { return (<ModuloCompuestoEscalerasInferiorIzquierda {...props} rotation={[0, 0.5 * Math.PI, 0]}/> )}
}

const EscalerasInferiorIzquierdaTiles180 = {
    tiles: [
`\
_#_
___
___`
,`\
___
_#_
_#_`
,`\
___
___
___`
    ],
    params: { transforms: [], weight: 20},
    component: (props) => { return (<ModuloCompuestoEscalerasInferiorIzquierda {...props} rotation={[0, Math.PI, 0]}/> )}
}

const EscalerasInferiorIzquierdaTiles270 = {
    tiles: [
`\
___
___
___`
,`\
#__
_#_
_#_`
,`\
___
___
___`
    ],
    params: { transforms: [], weight: 20},
    component: (props) => { return (<ModuloCompuestoEscalerasInferiorIzquierda {...props} rotation={[0, 1.5 * Math.PI, 0]}/> )}
}



// Escalera Inferior Derecha

const EscalerasInferiorDerechaTiles = {
    tiles: [
`\
_#_
___
___`
,`\
___
_#_
_#_`
,`\
___
___
___`
    ],
    params: { transforms: [], weight: 20},
    component: (props) => { return (<ModuloCompuestoEscalerasInferiorDerecha {...props} /> )}
}


const EscalerasInferiorDerechaTiles90 = {
    tiles: [
`\
___
___
___`
,`\
#__
_#_
_#_`
,`\
___
___
___
`
    ],
    params: { transforms: [], weight: 20},
    component: (props) => { return (<ModuloCompuestoEscalerasInferiorDerecha {...props} rotation={[0, 0.5 * Math.PI, 0]}/> )}
}

const EscalerasInferiorDerechaTiles180 = {
    tiles: [
`\
___
___
___`
,`\
___
_#_
_#_`
,`\
_#_
___
___`
    ],
    params: { transforms: [], weight: 20},
    component: (props) => { return (<ModuloCompuestoEscalerasInferiorDerecha {...props} rotation={[0, Math.PI, 0]}/> )}
}

const EscalerasInferiorDerechaTiles270 = {
    tiles: [
`\
___
___
___`
,`\
__#
_#_
_#_`
,`\
___
___
___`
    ],
    params: { transforms: [], weight: 20},
    component: (props) => { return (<ModuloCompuestoEscalerasInferiorDerecha {...props} rotation={[0, 1.5 * Math.PI, 0]}/> )}
}



// Escalera Superior Izquierda

const EscalerasSuperiorIzquierdaTiles = {
    tiles: [
`\
___
___
___`
,`\
___
_#=
___`
,`\
___
_#_
___`
    ],
    params: { transforms: [], weight: 20},
    component: (props) => { return (<ModuloCompuestoEscalerasSuperiorIzquierda {...props} /> )}
}


const EscalerasSuperiorIzquierdaTiles90 = {
    tiles: [
`\
___
_=_
___`
,`\
___
_##
___`
,`\
___
___
___
`
    ],
    params: { transforms: [], weight: 20},
    component: (props) => { return (<ModuloCompuestoEscalerasSuperiorIzquierda {...props} rotation={[0, 0.5 * Math.PI, 0]}/> )}
}

const EscalerasSuperiorIzquierdaTiles180 = {
    tiles: [
`\
___
_#_
___`
,`\
___
=#_
___`
,`\
___
___
___`
    ],
    params: { transforms: [], weight: 20},
    component: (props) => { return (<ModuloCompuestoEscalerasSuperiorIzquierda {...props} rotation={[0, Math.PI, 0]}/> )}
}

const EscalerasSuperiorIzquierdaTiles270 = {
    tiles: [
`\
___
___
___`
,`\
___
##_
___`
,`\
___
_=_
___`
    ],
    params: { transforms: [], weight: 20},
    component: (props) => { return (<ModuloCompuestoEscalerasSuperiorIzquierda {...props} rotation={[0, 1.5 * Math.PI, 0]}/> )}
}



// Escalera Superior Derecha

const EscalerasSuperiorDerechaTiles = {
    tiles: [
`\
___
_#_
___`
,`\
___
_#=
___`
,`\
___
___
___`
    ],
    params: { transforms: [], weight: 20},
    component: (props) => { return (<ModuloCompuestoEscalerasSuperiorDerecha {...props} /> )}
}


const EscalerasSuperiorDerechaTiles90 = {
    tiles: [
`\
___
_=_
___`
,`\
___
##_
___`
,`\
___
___
___
`
    ],
    params: { transforms: [], weight: 20},
    component: (props) => { return (<ModuloCompuestoEscalerasSuperiorDerecha {...props} rotation={[0, 0.5 * Math.PI, 0]}/> )}
}

const EscalerasSuperiorDerechaTiles180 = {
    tiles: [
`\
___
___
___`
,`\
___
=#_
_#_`
,`\
___
___
___`
    ],
    params: { transforms: [], weight: 20},
    component: (props) => { return (<ModuloCompuestoEscalerasSuperiorDerecha {...props} rotation={[0, Math.PI, 0]}/> )}
}

const EscalerasSuperiorDerechaTiles270 = {
    tiles: [
`\
___
___
___`
,`\
___
_##
___`
,`\
___
_=_
___`
    ],
    params: { transforms: [], weight: 20},
    component: (props) => { return (<ModuloCompuestoEscalerasSuperiorDerecha {...props} rotation={[0, 1.5 * Math.PI, 0]}/> )}
}

const tiles = [
    CaminitoEscalerasTiles,
    CaminitoEscalerasTiles180,
    ConectorEscaleraInferiorTiles,
    ConectorEscaleraInferiorTiles90,
    ConectorEscaleraInferiorTiles180,
    ConectorEscaleraInferiorTiles270,
    EscalerasInferiorDerechaTiles,
    EscalerasInferiorDerechaTiles90,
    EscalerasInferiorDerechaTiles180,
    EscalerasInferiorDerechaTiles270,
    EscalerasInferiorIzquierdaTiles,
    EscalerasInferiorIzquierdaTiles90,
    EscalerasInferiorIzquierdaTiles180,
    EscalerasInferiorIzquierdaTiles270,
    EscalerasSuperiorIzquierdaTiles,
    EscalerasSuperiorIzquierdaTiles90,
    EscalerasSuperiorIzquierdaTiles180,
    EscalerasSuperiorIzquierdaTiles270,
    EscalerasSuperiorDerechaTiles,
    EscalerasSuperiorDerechaTiles90,
    EscalerasSuperiorDerechaTiles180,
    EscalerasSuperiorDerechaTiles270
]

export default tiles;

