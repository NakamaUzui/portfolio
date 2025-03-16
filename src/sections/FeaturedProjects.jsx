import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { myProjects } from '../constants/index.js';  // Import hinzugefügt
import AnimatedButton from '../components/AnimatedButton';

const FeaturedProjects = () => {
  const featured = myProjects.slice(0, 2); // Nur die ersten 2 Projekte anzeigen

  return (
    <section className="c-space my-20">
      <h2 className="head-text mb-10">Projekte</h2>
      <div className="grid lg:grid-cols-2 gap-8">
        {featured.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-black-300 rounded-lg overflow-hidden">
            <div className="relative h-64">
              <img 
                src={project.spotlight} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black-300 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
              <p className="text-white-600 mb-4">{project.desc}</p>
              <div className="flex gap-4">
                {project.tags.slice(0, 3).map((tag) => (
                  <img key={tag.id} src={tag.path} alt={tag.name} className="w-8 h-8" />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-10">
        <AnimatedButton to="/projects">Alle Projekte anzeigen</AnimatedButton>
      </div>
    </section>
  );
};

export default FeaturedProjects;
