import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { useMemo } from 'react';
import * as THREE from 'three';

const ContactGlobe = () => {
  const groupRef = useRef();

  // Optimierte Materialien
  const materials = useMemo(() => ({
    phone: new THREE.MeshStandardMaterial({
      color: '#1a1a1a',
      metalness: 0.8,
      roughness: 0.2,
      // Reduzierte Texturqualität für bessere Performance
      envMapIntensity: 0.5
    }),
    screen: new THREE.MeshBasicMaterial({
      color: '#000000',
      transparent: true,
      opacity: 0.9
    }),
    camera: new THREE.MeshStandardMaterial({
      color: '#333333',
      metalness: 0.5,
      roughness: 0.5
    })
  }), []);

  // Aktualisierte Geometrien mit abgerundeten Kanten
  const geometries = useMemo(() => {
    // Erstellen einer abgerundeten Box für das Telefon
    const roundedRectShape = new THREE.Shape();
    const width = 2.2;
    const height = 4;
    const radius = 0.3; // Radius für die abgerundeten Ecken

    roundedRectShape.moveTo(-width/2 + radius, -height/2);
    roundedRectShape.lineTo(width/2 - radius, -height/2);
    roundedRectShape.quadraticCurveTo(width/2, -height/2, width/2, -height/2 + radius);
    roundedRectShape.lineTo(width/2, height/2 - radius);
    roundedRectShape.quadraticCurveTo(width/2, height/2, width/2 - radius, height/2);
    roundedRectShape.lineTo(-width/2 + radius, height/2);
    roundedRectShape.quadraticCurveTo(-width/2, height/2, -width/2, height/2 - radius);
    roundedRectShape.lineTo(-width/2, -height/2 + radius);
    roundedRectShape.quadraticCurveTo(-width/2, -height/2, -width/2 + radius, -height/2);

    const extrudeSettings = {
      steps: 1,
      depth: 0.2,
      bevelEnabled: true,
      bevelThickness: 0.05,
      bevelSize: 0.05,
      bevelSegments: 3
    };

    return {
      phone: new THREE.ExtrudeGeometry(roundedRectShape, extrudeSettings),
      screen: new THREE.PlaneGeometry(2, 3.8, 1, 1),
      camera: new THREE.CylinderGeometry(0.05, 0.05, 0.1, 16)
    };
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      // Sanftere Animation mit reduzierter Frequenz
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Phone Frame */}
      <mesh 
        geometry={geometries.phone}
        material={materials.phone}
        castShadow 
        receiveShadow
        position={[0, 0, -0.1]}
      />

      {/* Screen mit Formular-Design */}
      <group position={[0, 0, 0.1]}>
        {/* Bildschirm-Hintergrund */}
        <mesh>
          <planeGeometry args={[2, 3.8]} />
          <meshBasicMaterial color="#000000" transparent opacity={0.9} />
        </mesh>

        {/* Formular Header */}
        <Text
          position={[0, 1.6, 0.1]}
          fontSize={0.2}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          renderOrder={2}
          depthTest={false}
        >
          Kontaktformular
        </Text>

        {/* Formular Felder */}
        <group position={[0, 0.8, 0.1]}>
          {/* Name Feld */}
          <mesh position={[0, 0, 0]}>
            <planeGeometry args={[1.8, 0.3]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.1} />
          </mesh>
          <Text
            position={[-0.8, 0, 0.01]}
            fontSize={0.12}
            color="#888888"
            anchorX="left"
            anchorY="middle"
            renderOrder={2}
            depthTest={false}
          >
            Name
          </Text>
        </group>

        {/* Email Feld */}
        <group position={[0, 0.3, 0.1]}>
          <mesh position={[0, 0, 0]}>
            <planeGeometry args={[1.8, 0.3]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.1} />
          </mesh>
          <Text
            position={[-0.8, 0, 0.01]}
            fontSize={0.12}
            color="#888888"
            anchorX="left"
            anchorY="middle"
            renderOrder={2}
            depthTest={false}
          >
            E-Mail
          </Text>
        </group>

        {/* Nachricht Feld */}
        <group position={[0, -0.4, 0.1]}>
          <mesh position={[0, 0, 0]}>
            <planeGeometry args={[1.8, 0.8]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.1} />
          </mesh>
          <Text
            position={[-0.8, 0.3, 0.01]}
            fontSize={0.12}
            color="#888888"
            anchorX="left"
            anchorY="middle"
            renderOrder={2}
            depthTest={false}
          >
            Nachricht
          </Text>
        </group>

        {/* Submit Button */}
        <group position={[0, -1.2, 0.1]}>
          <mesh position={[0, 0, 0]}>
            <planeGeometry args={[1.8, 0.4]} />
            <meshBasicMaterial color="#6366f1" />
          </mesh>
          <Text
            position={[0, 0, 0.01]}
            fontSize={0.15}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
            renderOrder={2}
            depthTest={false}
          >
            Senden
          </Text>
        </group>
      </group>

      {/* Phone Camera */}
      <mesh 
        position={[0, 1.8, 0.1]}
        geometry={geometries.camera}
        material={materials.camera}
      />

      {/* Verbesserte Beleuchtung */}
      <pointLight
        position={[0, 0, 2]}
        intensity={0.5}
        distance={5}
        decay={2}
      />

      {/* Zusätzliches Licht für bessere Textlesbarkeit */}
      <directionalLight 
        position={[0, 0, 5]} 
        intensity={0.5} 
      />
    </group>
  );
};

export default ContactGlobe;
