import React from 'react';
import { useStore } from '../state/store';
import Module from './3d/modules/Module';
import map1 from './maps/map1.json';
import map2 from './maps/map2.json';
import map3 from './maps/map3.json';
import map4 from './maps/map4.json';
import map5 from './maps/map5.json';
import map6 from './maps/map6.json';
import map7 from './maps/map7.json';
import map8 from './maps/map8.json';
import map9 from './maps/map9.json';
import map10 from './maps/map10.json';
import map11 from './maps/map11.json';

const keyToPosition = key => {
    const k = key.split(",").map(position => parseInt(position))
    return [k[2] * 6, k[1] * 6, k[0] * 6]
}

const maps = [
    map1,
    map2,
    map3,
    map4,
    map5,
    map6,
    map7,
    map8,
    map9,
    map10,
    map11
]

const WaveModules = () => {

    const waves = maps[Math.floor(Math.random() * maps.length)];

    const [currentBubble] = useStore(state => [
        state.currentBubble
    ]);

    const ref = React.useRef();

    React.useEffect(() => {
        console.log(ref.current);
    },[ref])

    return (
        <group ref={ref}>
            {Object.keys(waves).map(waveKey => 
                <React.Suspense fallback={null}>
                    <Module currentBubble={currentBubble} position={keyToPosition(waveKey)} index={parseInt(waves[waveKey])}/>
                </React.Suspense>)}
        </group>
    );
};

export default WaveModules;
