import { Canvas } from '@react-three/fiber';
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
    <div className="relative p-6 bg-black/20 backdrop-blur-sm rounded-2xl border border-white/10">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-blue-500/5"
      />
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column - Contact Info */}
        <div className="flex-1 space-y-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              Lass uns verbinden
            </h2>
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-sm text-white/60 italic bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm"
            >
              Lass uns etwas Großartiges erschaffen
            </motion.span>
          </div>

          {contactItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={item.onClick}
              className="flex items-center gap-4 hover:bg-white/5 p-4 rounded-lg transition-all group cursor-pointer"
            >
              <div className={`p-3 rounded-lg ${item.bgColor} ${item.hoverColor} transition-all`}>
                <img src={item.icon} alt={item.title} className="w-5 h-5 invert" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-white-600">{item.content}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Column - 3D Globe */}
        <div className="flex-1 h-[300px] relative">
          <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent" />
          <Canvas shadows camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
            <ContactGlobe />
            <Environment preset="city" />
            <ContactShadows
              opacity={0.5}
              scale={10}
              blur={2}
              far={10}
              resolution={256}
              color="#000000"
            />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
