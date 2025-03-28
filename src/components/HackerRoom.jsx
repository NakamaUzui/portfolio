/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 hacker-room-new.glb -T 
Files: hacker-room-new.glb [34.62MB] > /Users/hsuwinlat/Desktop/jsm pj/threejscc-portfolio/public/models/hacker-room-new-transformed.glb [2.56MB] (93%)
*/

import { useGLTF, useTexture } from '@react-three/drei';
import { Suspense, useMemo } from 'react';
import * as THREE from 'three';

export function HackerRoom(props) {
  const { nodes, materials } = useGLTF('/models/hacker-room.glb');

  // Texturen optimiert laden
  const [monitortxt, screenTxt] = useTexture([
    'textures/desk/monitor.png',
    'textures/desk/screen.png'
  ]);

  // Materialien optimieren
  const optimizedMaterials = useMemo(() => {
    monitortxt.minFilter = THREE.LinearFilter;
    screenTxt.minFilter = THREE.LinearFilter;
    
    return {
      screens: new THREE.MeshBasicMaterial({ map: screenTxt }),
      monitor: new THREE.MeshBasicMaterial({ map: monitortxt })
    };
  }, [monitortxt, screenTxt]);

  return (
    <Suspense fallback={null}>
      <group {...props} dispose={null}>
        <mesh 
          geometry={nodes.screen_screens_0.geometry} 
          material={optimizedMaterials.screens} 
        />
        <mesh geometry={nodes.screen_glass_glass_0.geometry} material={materials.glass} />
        <mesh geometry={nodes.table_table_mat_0_1.geometry} material={materials.table_mat} />
        <mesh geometry={nodes.table_table_mat_0_2.geometry} material={materials.computer_mat}>
          <meshMatcapMaterial map={monitortxt} />
        </mesh>
        <mesh geometry={nodes.table_table_mat_0_3.geometry} material={materials.server_mat} />
        <mesh geometry={nodes.table_table_mat_0_4.geometry} material={materials.vhsPlayer_mat} />
        <mesh geometry={nodes.table_table_mat_0_5.geometry} material={materials.stand_mat} />
        <mesh geometry={nodes.table_table_mat_0_6.geometry} material={materials.mat_mat} />
        <mesh geometry={nodes.table_table_mat_0_7.geometry} material={materials.arm_mat} />
        <mesh geometry={nodes.table_table_mat_0_8.geometry} material={materials.tv_mat}>
          <meshMatcapMaterial map={monitortxt} />
        </mesh>
        <mesh geometry={nodes.table_table_mat_0_9.geometry} material={materials.cables_mat} />
        <mesh geometry={nodes.table_table_mat_0_10.geometry} material={materials.props_mat} />
        <mesh geometry={nodes.table_table_mat_0_11.geometry} material={materials.ground_mat} />
        <mesh geometry={nodes.table_table_mat_0_12.geometry} material={materials.key_mat} />
      </group>
    </Suspense>
  );
}

// Preload optimieren
useGLTF.preload('/models/hacker-room.glb');
