import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, PerspectiveCamera, Environment } from '@react-three/drei';
import { useEffect, useState, useRef } from 'react';
import * as THREE from 'three';

const ProjectCard = ({ position, rotation, project }) => {
  const meshRef = useRef();
  const textureLoader = new THREE.TextureLoader();
  
  const techLogos = [
    { 
      name: 'React',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
      bgColor: '#61DAFB'
    },
    { 
      name: 'Node.js',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png',
      bgColor: '#333333', // Dunklerer Hintergrund für besseren Kontrast
    },
    {
      name: 'TypeScript',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png',
      bgColor: '#3178C6'
    },
    {
      name: 'TailwindCSS',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png',
      bgColor: '#38BDF8'
    },
    {
      name: 'Three.js',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Three.js_Icon.svg/2048px-Three.js_Icon.svg.png', // Neue Three.js Logo URL
      bgColor: '#049EF4' // Helle Hintergrundfarbe für besseren Kontrast
    },
    {
      name: 'SQL',
      url: 'https://cdn4.iconfinder.com/data/icons/logos-3/181/MySQL-512.png',
      bgColor: '#00758F'
    }
  ];

  // Verwende das Logo basierend auf dem Index
  const texture = textureLoader.load(techLogos[project.index].url);
  
  // Optimiere Textur-Rendering
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = false;

  // Text Textur für den Namen erstellen
  const createTextTexture = (text) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = 256;
    canvas.height = 64;

    context.fillStyle = 'white';
    context.font = 'bold 32px Arial';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(text, canvas.width / 2, canvas.height / 2);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  };

  const nameTexture = createTextTexture(techLogos[project.index].name);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
    }
  });

  return (
    <Float floatIntensity={0.4} rotationIntensity={0.4} speed={1.5}>
      <group position={position} rotation={rotation} ref={meshRef}>
        {/* Frame mit Tech-spezifischer Farbe */}
        <mesh castShadow receiveShadow>
          <boxGeometry args={[2.2, 3.2, 0.2]} />
          <meshStandardMaterial 
            color={techLogos[project.index].bgColor}
            metalness={0.7} // Reduziert für bessere Sichtbarkeit
            roughness={0.3} // Angepasst für besseren Glanz
            envMapIntensity={1.5} // Erhöht für bessere Beleuchtung
          />
        </mesh>
        
        {/* Tech Logo mit angepasster Größe */}
        <mesh position={[0, 0.2, 0.12]}>
          <planeGeometry args={[1.8, 1.8]} /> {/* Quadratischere Form für Logos */}
          <meshBasicMaterial 
            map={texture} 
            transparent 
            opacity={1}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Name der Technologie mit Text */}
        <mesh position={[0, -1.2, 0.12]}>
          <planeGeometry args={[1.8, 0.4]} />
          <meshBasicMaterial 
            map={nameTexture}
            transparent
            opacity={1}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>
    </Float>
  );
};

const Scene = ({ projects, isMobile }) => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  // Erstelle 6 Projekt-Karten für die 6 Technologien
  const techProjects = Array.from({ length: 6 }, (_, index) => ({
    index,
    title: `Tech ${index + 1}`
  }));

  return (
    <group ref={groupRef}>
      {techProjects.map((project, index) => {
        const angle = (index / techProjects.length) * Math.PI * 2;
        const radius = isMobile ? 4 : 6;
        
        return (
          <ProjectCard
            key={project.title}
            project={project}
            position={[
              Math.sin(angle) * radius,
              0,
              Math.cos(angle) * radius
            ]}
            rotation={[0, -angle + Math.PI, 0]}
          />
        );
      })}
    </group>
  );
};

const ProjectGallery3D = ({ projects }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="h-[600px] w-full rounded-xl overflow-hidden bg-gradient-to-b from-black/50 to-black/90">
      <Canvas 
        shadows 
        dpr={[1, 2]} 
        camera={{ position: [0, 0, 10], fov: 45 }}
        gl={{ antialias: true }}
      >
        <color attach="background" args={['#000000']} />
        <fog attach="fog" args={['#000000', 8, 15]} />
        
        <ambientLight intensity={0.5} />
        <spotLight 
          position={[10, 10, 10]} 
          angle={0.15} 
          penumbra={1} 
          castShadow
          intensity={1}
        />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <Scene projects={projects} isMobile={isMobile} />
        
        <Environment preset="city" />
        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export default ProjectGallery3D;
