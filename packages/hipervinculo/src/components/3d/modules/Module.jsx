import React from 'react';
import { useStore } from '../../../state/store';
import waveTiles from '../../wavesTiles';

const Module = (props) => {
    return waveTiles[props.index].component(props)
};

export default Module;
