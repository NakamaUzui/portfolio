import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { preloadImages } from '../utils/imageLoader';

const LoadingScreen = ({ setIsLoading }) => {
  const [progress, setProgress] = useState(0);
  const [assetsLoaded, setAssetsLoaded] = useState(0);
  const totalAssets = 8; // Anzahl der zu ladenden Assets

  useEffect(() => {
    const loadAllAssets = async () => {
      // Wichtige Assets vorladen
      const criticalAssets = [
        '/assets/jsm-logo.png',
        '/assets/react.svg',
        '/assets/typescript.png',
        '/assets/tailwindcss.png'
      ];

      // 3D Modelle vorladen
      const models = [
        '/models/hacker-room.glb',
        '/models/computer.glb',
        '/models/cube.glb',
        '/models/react.glb'
      ];

      try {
        // Bilder laden
        await preloadImages(criticalAssets);
        setAssetsLoaded(prev => prev + criticalAssets.length);

        // 3D Modelle laden
        for (const model of models) {
          await useGLTF.preload(model);
          setAssetsLoaded(prev => prev + 1);
        }

        // Fortschritt berechnen
        const loadProgress = (assetsLoaded / totalAssets) * 100;
        setProgress(loadProgress);

        if (loadProgress >= 100) {
          setTimeout(() => setIsLoading(false), 500);
        }
      } catch (error) {
        console.error('Error loading assets:', error);
        setIsLoading(false); // Failsafe
      }
    };

    loadAllAssets();
  }, [assetsLoaded, setIsLoading]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <div className="w-full max-w-md p-8">
        <div className="text-center mb-8">
          <motion.h2 
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent mb-4"
          >
            Patrick
          </motion.h2>
          <p className="text-white-600">Lade dein Erlebnis...</p>
        </div>

        <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="absolute h-full bg-gradient-to-r from-purple-500 to-blue-500"
          />
        </div>
        
        <p className="text-white/60 text-center mt-4">{progress}%</p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen; 