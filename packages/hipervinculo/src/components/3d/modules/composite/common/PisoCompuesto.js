import React from 'react';

import EspacioInicialCuboG from '../../EspacioInicialCuboG';

const PisoCompuesto = (props) => {
    return (
        <group {...props} dispose={null}>
            <EspacioInicialCuboG position={[-2, 0, -2]}/>
            <EspacioInicialCuboG position={[0, 0, -2]}/>
            <EspacioInicialCuboG position={[2, 0, -2]}/>
            <EspacioInicialCuboG position={[-2, 0, 0]}/>
            <EspacioInicialCuboG position={[0, 0, 0]}/>
            <EspacioInicialCuboG position={[2, 0, 0]}/>
            <EspacioInicialCuboG position={[-2, 0, 2]}/>
            <EspacioInicialCuboG position={[0, 0, 2]}/>
            <EspacioInicialCuboG position={[2, 0, 2]}/>
        </group>
    );
};

export default PisoCompuesto;
