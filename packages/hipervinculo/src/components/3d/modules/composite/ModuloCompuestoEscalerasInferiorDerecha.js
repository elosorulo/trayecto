import React from 'react';

import ModuloEscaleraExteriorG from '../bubbles/ModuloEscaleraExteriorG';
import EscaleraExteriorG from './EscaleraExteriorG';
import ModuloCuboG from '../bubbles/ModuloCuboG';
import { useBox, useCompoundBody } from '@react-three/cannon';

import * as THREE from 'three';


var geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
var mesh = new THREE.Mesh(geometry, material)
var group= new THREE.Group();

const getRelativeStairPosition = (globalPosition, globalRotation) => (stairPosition, stairRotation) => {

    var targetPosition = new THREE.Vector3(); // create once an reuse it
    var targetRotation = new THREE.Quaternion();
    var eulerRotation = new THREE.Euler();
    
    group.add(mesh);
    mesh.position.set(stairPosition[0], stairPosition[1], stairPosition[2]);
    mesh.rotation.set(stairRotation[0], stairRotation[1], stairRotation[2]);
    group.position.set(globalPosition[0], globalPosition[1], globalPosition[2]);
    group.rotation.set(globalRotation[0], globalRotation[1], globalRotation[2]);
    group.updateMatrixWorld();
    mesh.getWorldPosition(targetPosition)
    mesh.getWorldQuaternion(targetRotation)
    eulerRotation.setFromQuaternion(targetRotation);
    
    return {
        position: [targetPosition.x, targetPosition.y, targetPosition.z],
        rotation: [eulerRotation.x, eulerRotation.y, eulerRotation.z]
    };
};

const ModuloCompuestoEscaleras = (props) => {

    const stairPosition = [0, 2, -2]
    const stairRotation = [0, 1.5 * Math.PI, 0]
    const stairCoordinates = getRelativeStairPosition(props.position ? props.position : [0, 0, 0], props.rotation ? props.rotation : [0, 0, 0])(stairPosition, stairRotation)
    
    const [ref, api] = useCompoundBody(() => (
        {
            ...props,
            shapes: [
                
                {
                    type: "Box",
                    args:[4, 2, 2],
                    position: [1, 2, 0]
                },
                {
                    type: "Box",
                    args:[2, 2, 2],
                    position: [0, 0, -2]
                }
            ]
        }
    ));

    return (
        <>
            <group ref={ref} {...props} position={props.position} dispose={null}>
                <EscaleraExteriorG
                    position={stairPosition}
                    rotation={stairRotation}
                    absPosition={stairCoordinates.position}
                    absRotation={stairCoordinates.rotation}
                    currentBubble={props.currentBubble}
                />
                <ModuloCuboG position={[2, 2, 0]} currentBubble={props.currentBubble}/>
                <ModuloCuboG position={[0, 2, 0]} currentBubble={props.currentBubble}/>
                <ModuloCuboG position={[0, 0, -2]} currentBubble={props.currentBubble}/>
            </group>
        </>
    )
};

export default ModuloCompuestoEscaleras;
