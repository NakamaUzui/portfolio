import { motion } from 'framer-motion';

const ProjectsHero = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden" style={{ marginTop: '80px', minHeight: 'calc(60vh - 80px)' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black-300/50 to-black z-0">
        <img 
          src="https://images.unsplash.com/photo-1614624532983-4ce03382d63d?q=80&w=2831&auto=format&fit=crop"
          alt="Projects Hero" 
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 text-center max-w-4xl mx-auto px-6 py-20"
      >
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 shadow-2xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
             Meine Projekte
          </h1>
          <p className="text-xl md:text-2xl text-white-600">
             Eine Sammlung meiner kreativen Arbeiten und technischen Expertise
          </p>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default ProjectsHero;
