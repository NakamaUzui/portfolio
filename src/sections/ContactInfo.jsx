import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, ContactShadows, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';
import ContactGlobe from '../components/ContactGlobe';

const ContactInfo = () => {
  const contactItems = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1865/1865269.png",
      title: "Standort",
      content: "Wien, Österreich",
      bgColor: "bg-purple-500/10",
      hoverColor: "group-hover:bg-purple-500/20"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/552/552486.png",
      title: "E-Mail",
      content: "patricky.web@gmail.com",
      bgColor: "bg-blue-500/10",
      hoverColor: "group-hover:bg-blue-500/20",
      onClick: () => window.location.href = 'mailto:patricky.web@gmail.com'
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2784/2784459.png",
      title: "Verfügbarkeit",
      content: "Offen für neue Projekte",
      bgColor: "bg-green-500/10",
      hoverColor: "group-hover:bg-green-500/20"
    }
  ];

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Contact Info Cards */}
      <div className="space-y-4">
        {contactItems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`group p-6 rounded-xl border border-white/10 ${item.bgColor} backdrop-blur-sm 
                       transition-all duration-300 ${item.hoverColor} cursor-pointer`}
            onClick={item.onClick}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-white/10 p-2">
                <img src={item.icon} alt={item.title} className="w-full h-full" />
              </div>
              <div>
                <h3 className="text-white font-medium">{item.title}</h3>
                <p className="text-white-600">{item.content}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 3D Phone Model */}
      <div className="relative h-[400px] rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent" />
        <Canvas 
          shadows 
          camera={{ position: [0, 0, 5], fov: 45 }}
          dpr={[1, 2]} // Optimierte Pixeldichte
          performance={{ min: 0.5 }} // Performance Optimierung
        >
          <Suspense fallback={null}>
            <ContactGlobe />
            <Environment preset="city" />
            <ContactShadows
              opacity={0.3}
              scale={5}
              blur={1}
              far={5}
              resolution={128}
              color="#000000"
            />
            <OrbitControls 
              enableZoom={false} 
              autoRotate 
              autoRotateSpeed={0.5}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default ContactInfo;
