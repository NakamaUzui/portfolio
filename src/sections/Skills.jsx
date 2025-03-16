import { motion } from 'framer-motion';

const skills = [
  { name: 'React', icon: '/assets/react.svg', level: 90 },
  { name: 'Three.js', icon: 'https://canada1.discourse-cdn.com/flex035/uploads/threejs/optimized/2X/e/e4f86d2200d2d35c30f7b1494e96b9595ebc2751_2_1016x1024.png', level: 85 },
  { name: 'TypeScript', icon: '/assets/typescript.png', level: 80 },
  { name: 'Node.js', icon: 'https://static-00.iconduck.com/assets.00/node-js-icon-1817x2048-g8tzf91e.png', level: 85 },
  { name: 'TailwindCSS', icon: '/assets/tailwindcss.png', level: 90 },
  { name: 'SQL', icon: 'https://www.svgrepo.com/show/331760/sql-database-generic.svg', level: 85 }, // SQL hinzugefügt
];

const Skills = () => {
  return (
    <section className="c-space my-20" id="tech-stack">
      <h2 className="head-text mb-10">Tech Stack</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 25px rgba(138, 75, 175, 0.3)"
            }}
            transition={{ 
              duration: 0.3,
              type: "spring",
              stiffness: 300
            }}
            className="relative group overflow-hidden rounded-xl bg-gradient-to-br from-purple-500/10 via-black/30 to-blue-500/10 p-6 border border-white/10 backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-10">
              <motion.div 
                className="flex items-center gap-4 mb-4"
                whileHover={{ x: 10 }}
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 rounded-xl bg-white/10 p-2 backdrop-blur-sm"
                >
                  <img src={skill.icon} alt={skill.name} className="w-full h-full" />
                </motion.div>
                <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
              </motion.div>

              <div className="h-2 bg-black/40 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full rounded-full relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 animate-pulse" />
                </motion.div>
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-2 text-right text-white/60"
              >
                {skill.level}%
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
