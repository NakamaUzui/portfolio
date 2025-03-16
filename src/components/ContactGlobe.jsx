import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

const ContactGlobe = () => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Phone Frame */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[2.2, 4, 0.2]} />
        <meshStandardMaterial
          color="#1a1a1a"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Phone Screen */}
      <mesh position={[0, 0, 0.11]}>
        <boxGeometry args={[2, 3.8, 0.01]} />
        <meshStandardMaterial
          color="#000000"
          metalness={1}
          roughness={0.1}
          emissive="#120123"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Contact Form Elements */}
      <group position={[0, 0.8, 0.12]}>
        {/* Form Title */}
        <Text 
          position={[0, 1, 0]}
          fontSize={0.2}
          color="#ffffff"
        >
          Contact Form
        </Text>

        {/* Form Fields */}
        {[
          { y: 0.5, text: "Name" },
          { y: 0, text: "Email" },
          { y: -0.5, text: "Message" }
        ].map((field, index) => (
          <group key={index} position={[0, field.y, 0]}>
            <mesh>
              <planeGeometry args={[1.6, 0.3]} />
              <meshBasicMaterial 
                color="#1e1e1e"
                transparent
                opacity={0.7}
              />
            </mesh>
            <Text
              position={[-0.7, 0.05, 0.01]}
              fontSize={0.1}
              color="#888888"
              anchorX="left"
            >
              {field.text}
            </Text>
          </group>
        ))}

        {/* Submit Button */}
        <group position={[0, -1, 0]}>
          <mesh>
            <boxGeometry args={[1, 0.3, 0.05]} />
            <meshStandardMaterial
              color="#6A0DAD"
              metalness={0.5}
              roughness={0.2}
              emissive="#4B0082"
              emissiveIntensity={0.3}
            />
          </mesh>
          <Text
            position={[0, 0, 0.03]}
            fontSize={0.12}
            color="#ffffff"
          >
            Send Message
          </Text>
        </group>
      </group>

      {/* Phone Camera */}
      <mesh position={[0, 1.8, 0.11]}>
        <cylinderGeometry args={[0.05, 0.05, 0.1, 16]} />
        <meshStandardMaterial color="#333333" />
      </mesh>

      {/* Lighting */}
      <pointLight
        position={[0, 0, 2]}
        intensity={0.5}
        color="#ffffff"
        distance={5}
      />
    </group>
  );
};

export default ContactGlobe;
