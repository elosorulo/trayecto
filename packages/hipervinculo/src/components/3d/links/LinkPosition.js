import React from 'react';
import * as THREE from 'three'
import { useEffect } from 'react'
import { characterStoreApi, useStore } from '../../../state/store'
import { v4 as uuidv4 } from 'uuid';

var geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
var mesh = new THREE.Mesh(geometry, material)
var group= new THREE.Group();

const getRelativeStairPosition = (globalPosition, globalRotation) => (stairPosition) => {
    var targetPosition = new THREE.Vector3(); // create once an reuse it
    
    group.add(mesh);
    mesh.position.set(stairPosition[0], stairPosition[1], stairPosition[2]);
    mesh.updateMatrixWorld();
    group.position.set(globalPosition[0], globalPosition[1], globalPosition[2]);
    group.rotation.set(globalRotation[0], globalRotation[1], globalRotation[2]);
    group.updateMatrixWorld();
    mesh.getWorldPosition(targetPosition)
    
    return [targetPosition.x, targetPosition.y, targetPosition.z];
};

const bubbleListener = (pos, bubble, setCurrentBubble) => ([characterPosition]) => {
    if(pos !== undefined && characterPosition !== undefined) {

        const deltaXZ = 0.5;
        const deltaY = 0.5;
        
        if((Math.abs(pos[0] - characterPosition[0])) < deltaXZ && (Math.abs(pos[1] - characterPosition[1])) < deltaY && Math.abs(pos[2] - characterPosition[2]) < deltaXZ){
            setCurrentBubble(bubble)
        }
    }
};

const LinkPosition = (props) => {
    
    const setCurrentBubble = useStore(state => state.setCurrentBubble);

    useEffect(() => {
      
      const pos = getRelativeStairPosition(props.globalPosition, props.globalRotation || [0, 0, 0])(props.position);
        
      const unsub = characterStoreApi.subscribe(bubbleListener(pos, props.bubble, setCurrentBubble), state => [state.characterPosition])
      return () => unsub()
    }, []);
    return (<></>);
};

export default LinkPosition;
