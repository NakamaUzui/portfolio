import { motion } from 'framer-motion';

const stats = [
  { number: '25+', label: 'Abgeschlossene Projekte' },
  { number: '15+', label: 'Zufriedene Kunden' },
  { number: '4+', label: 'Jahre Erfahrung' },
  { number: '100%', label: 'Erfolgsquote' }
];

const ProjectStats = () => {
  return (
    <section className="py-20 bg-black/20 backdrop-blur-sm">
      <div className="c-space">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                {stat.number}
              </h3>
              <p className="text-white-600 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectStats;
