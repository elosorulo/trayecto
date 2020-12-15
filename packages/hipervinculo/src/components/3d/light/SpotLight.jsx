import React, { useEffect } from 'react';
import { useFrame } from 'react-three-fiber';
import { Mesh } from 'three';
import { omit } from 'lodash';

const SHADOW_MAP_SIZE = 4096;

const SpotLight = (props) => {

    const lightTarget = new Mesh();
    
    const spotLightRef = React.useRef();

    useFrame(({clock}, delta) => {
        if(props.update) props.update(spotLightRef, clock, delta)
        const cam = spotLightRef.current.shadow.camera;
        cam.near = 1;
        cam.far = 2000;
        cam.left = -1500;
        cam.right = 1500;
        cam.top = 1500;
        cam.bottom = -1500;
    });

    return (
        <group>
            <primitive
                object={lightTarget}
                position={props.target}
            />
            <spotLight
                ref={spotLightRef}
                {...omit(props, "target")}
                shadow-bias={-0.00005}
                shadow-mapSize-width={SHADOW_MAP_SIZE}
                shadow-mapSize-height={SHADOW_MAP_SIZE}
                castShadow
                target={lightTarget}
            />
        </group>
    );
};

export default SpotLight;
