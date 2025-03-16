import { motion } from 'framer-motion';

const expertise = [
  {
    id: 1,
    title: 'Frontend Entwicklung',
    description: 'Spezialisiert auf moderne React.js Anwendungen mit TypeScript, Next.js und TailwindCSS. Erfahrung in der Entwicklung responsiver und performanter Benutzeroberflächen.',
    icon: 'https://cdn-icons-png.flaticon.com/512/1183/1183672.png',
    color: 'from-purple-500/20 to-blue-500/20'
  },
  {
    id: 2,
    title: '3D Web Development',
    description: 'Experte für Three.js und React Three Fiber. Entwicklung immersiver 3D-Erlebnisse und interaktiver Webanimationen für einzigartige Benutzererfahrungen.',
    icon: 'https://cdn-icons-png.flaticon.com/512/1372/1372760.png',
    color: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    id: 3,
    title: 'Backend Integration',
    description: 'Erfahrung mit Node.js, Express und verschiedenen Datenbanksystemen. Entwicklung skalierbarer API-Lösungen und Server-Architekturen.',
    icon: 'https://cdn-icons-png.flaticon.com/512/8099/8099087.png',
    color: 'from-green-500/20 to-emerald-500/20'
  },
  {
    id: 4,
    title: 'UI/UX Design',
    description: 'Gestaltung benutzerfreundlicher Interfaces mit Fokus auf Accessibility und modernes Design. Verwendung von Figma für Prototyping und Designsysteme.',
    icon: 'https://cdn-icons-png.flaticon.com/512/681/681662.png',
    color: 'from-pink-500/20 to-rose-500/20'
  }
];

const Clients = () => {
  return (
    <section className="c-space my-20">
      <h3 className="head-text mb-8">Meine Kenntnisse & Expertise</h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        {expertise.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative group h-[200px]" // Feste Höhe hinzugefügt
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity`} />
            
            <div className="relative bg-black-300/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 h-full flex flex-col"> {/* Flex und h-full hinzugefügt */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-white/10 p-2 flex-shrink-0"> {/* flex-shrink-0 hinzugefügt */}
                  <img src={item.icon} alt={item.title} className="w-full h-full" />
                </div>
                <h4 className="text-xl font-semibold text-white">{item.title}</h4>
              </div>
              
              <p className="text-white-600 leading-relaxed flex-grow"> {/* flex-grow hinzugefügt */}
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Clients;