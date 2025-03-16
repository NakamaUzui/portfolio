import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedButton from '../components/AnimatedButton';

const CTA = () => {
  return (
    <section className="c-space my-20">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl p-10 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
        Bist du bereit, Deine Ideen zum Leben zu erwecken?
        </h2>
        <p className="text-white-600 mb-8 max-w-2xl mx-auto">
            Lass uns zusammenarbeiten, um etwas Erstaunliches zu schaffen. Ob du eine Website, 
            eine Webanwendung oder ein digitales Erlebnis benötigst – ich helfe dir dabei, deine Vision in die Realität umzusetzen. 
        </p>
        <AnimatedButton to="/contact">Kontaktiere mich</AnimatedButton>
      </motion.div>
    </section>
  );
};

export default CTA;
