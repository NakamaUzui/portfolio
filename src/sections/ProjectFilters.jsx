import { motion } from 'framer-motion';

const techStack = [
  {
    category: "Frontend",
    techs: [
      { name: "React.js", level: "95%" },
      { name: "TypeScript", level: "90%" },
      { name: "Next.js", level: "85%" },
      { name: "TailwindCSS", level: "90%" }
    ],
    color: "from-purple-500/20 to-blue-500/20"
  },
  {
    category: "3D & Animation",
    techs: [
      { name: "Three.js", level: "85%" },
      { name: "React Three Fiber", level: "85%" },
      { name: "Framer Motion", level: "90%" },
      { name: "GSAP", level: "80%" }
    ],
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    category: "Backend",
    techs: [
      { name: "Node.js", level: "85%" },
      { name: "Express", level: "85%" },
      { name: "SQL", level: "80%" },
      { name: "MongoDB", level: "80%" }
    ],
    color: "from-green-500/20 to-emerald-500/20"
  }
];

const ProjectFilters = () => {
  return (
    <div className="relative py-12">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-black/0 to-blue-500/10 blur-3xl" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-3 gap-6"
      >
        {techStack.map((stack, index) => (
          <motion.div
            key={stack.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-white/10"
          >
            <h3 className="text-xl font-bold text-white mb-4">{stack.category}</h3>
            <div className="space-y-4">
              {stack.techs.map((tech) => (
                <div key={tech.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-white">{tech.name}</span>
                    <span className="text-white/60">{tech.level}</span>
                  </div>
                  <div className="h-1.5 bg-black/40 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: tech.level }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className={`h-full bg-gradient-to-r ${stack.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectFilters;
