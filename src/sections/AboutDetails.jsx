import { motion } from 'framer-motion';
import Globe from 'react-globe.gl';
import { useRef, useEffect } from 'react';
import AnimatedButton from '../components/AnimatedButton';

const AboutDetails = () => {
  const globeRef = useRef();

  const VIENNA_COORDS = {
    lat: 48.2082,
    lng: 16.3738,
    text: 'Vienna, Austria',
    color: '#ffffff',
    size: 1.2
  };

  useEffect(() => {
    // Wait for globe to be initialized
    if (globeRef.current) {
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 0.5;
    }
  }, []);

  const focusOnVienna = () => {
    if (globeRef.current) {
      globeRef.current.pointOfView({
        lat: VIENNA_COORDS.lat,
        lng: VIENNA_COORDS.lng,
        altitude: 1.5
      }, 1000);
    }
  };

  return (
    <section className="py-20 c-space">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white mb-6">Wer bin ich?</h2>
          <div className="space-y-4 text-white-600">
            <p>
                Als erfahrener Full-Stack-Entwickler mit über 4 Jahren in der Branche kombiniere ich tiefgreifendes technisches 
                Fachwissen mit kreativer Problemlösungsfähigkeit, um herausragende digitale Lösungen zu realisieren. .
            </p>
            <p>
                Ich bin spezialisiert auf React, Three.js und Node.js und entwickle fesselnde Web-Erlebnisse, 
                die Ästhetik mit Funktionalität vereinen. Zudem besitze ich eine ausgeprägte Affinität zu 
                Datenbanken, was es mir ermöglicht, robuste und effiziente Backend-Lösungen zu implementieren. 
            </p>
            <p>
                Mein Ansatz konzentriert sich darauf, sauberen und wartungsfreundlichen Code zu schreiben, 
                während ich stets mit neuen Technologien und Best Practices auf dem neuesten Stand bleibe.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative h-[400px] w-full rounded-lg overflow-hidden bg-black/20 backdrop-blur-sm border border-white/10"
        >
          <Globe
            ref={globeRef}
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
            backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
            width={580}
            height={400}
            backgroundColor="rgba(0,0,0,0.1)"
            atmosphereColor="#4444ff"
            atmosphereAltitude={0.1}
            labelsData={[VIENNA_COORDS]}
            labelLat={d => d.lat}
            labelLng={d => d.lng}
            labelText={d => d.text}
            labelSize={d => d.size}
            labelColor={d => d.color}
            labelDotRadius={0.3}
            labelAltitude={0.01}
          />
          <div className="absolute bottom-6 w-full flex justify-center">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(139, 92, 246, 0.3)' }}
              onClick={focusOnVienna}
              className="bg-purple-500/20 backdrop-blur-sm
                       text-white px-6 py-2.5 rounded-full 
                       flex items-center gap-2 
                       border border-purple-500/30
                       shadow-lg shadow-purple-500/10
                       transition-all duration-300
                       hover:border-purple-500/50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Find me in Vienna</span>
            </motion.button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-20 text-center"
      >
        <h2 className="text-3xl font-bold text-white mb-8">Lass uns etwas Großartiges erschaffen</h2>
        <p className="text-white-600 max-w-2xl mx-auto mb-8">
            Ich bin immer offen für neue Projekte, kreative Ideen oder die Möglichkeit, Teil deiner Vision zu sein.
        </p>
        <AnimatedButton to="mailto:patricky.web@gmail.com" external>
            Kontaktiere mich
        </AnimatedButton>
      </motion.div>
    </section>
  );
};

export default AboutDetails;
