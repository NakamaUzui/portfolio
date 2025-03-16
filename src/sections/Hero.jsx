import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

import { calculateSizes } from '../constants/index.js';
import CanvasLoader from '../components/Loading.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import { HackerRoom } from '../components/HackerRoom.jsx';
import Button from '../components/Button.jsx';
import Cube from '../components/Cube.jsx';
import Rings from '../components/Rings.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import Target from '../components/Target.jsx';

const AnimatedText = ({ text, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
      className="text-center" // Text zentrieren
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: delay + index * 0.05,
            type: "spring",
            stiffness: 100
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  const scrollToTechStack = () => {
    const techStackSection = document.getElementById('tech-stack');
    if (techStackSection) {
      techStackSection.scrollIntoView({ 
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="w-full h-screen relative">
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none">
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-12 min-w-[600px] max-w-4xl mx-4">
          <div className="text-4xl md:text-6xl font-bold text-white mb-8 flex flex-col gap-4 text-center"> {/* Text zentrieren */}
            <AnimatedText text="Hallo, mein Name ist Patrick" />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="text-center" // Text zentrieren
            >
              Ich bin ein <span className="typewriter"></span>
            </motion.div>
          </div>
          <motion.p 
            className="text-lg md:text-xl text-white-600 text-center max-w-2xl mb-12 mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            spezialisiert auf moderne Webanwendungen
          </motion.p>
          <div className="pointer-events-auto flex justify-center">
            <motion.button 
              onClick={scrollToTechStack}
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium 
                      hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Lass uns zusammenarbeiten
            </motion.button>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 z-10">
        <Canvas>
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <HeroCamera isMobile={isMobile}>
              <HackerRoom 
                scale={sizes.deskScale} 
                position={sizes.deskPosition} 
                rotation={[0.1, -Math.PI, 0]} 
              />
            </HeroCamera>

            <group>
              <Cube position={sizes.cubePosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Rings position={sizes.ringPosition} />
              <Target position={sizes.targetPosition} />
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
            <OrbitControls 
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;