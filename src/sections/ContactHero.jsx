import { motion } from 'framer-motion';

const ContactHero = () => {
  const scrollToForm = () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative flex items-center justify-center overflow-hidden" style={{ marginTop: '80px', minHeight: 'calc(60vh - 80px)' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black-300/50 to-black z-0">
        <img 
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
          alt="Contact Hero" 
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
            Kontaktiere Mich
          </h1>
          <p className="text-xl md:text-2xl text-white-600 mb-8">
            Hast du ein Projekt im Sinn? Lass uns darüber sprechen.
          </p>
          <motion.button
            onClick={scrollToForm}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg shadow-lg hover:shadow-purple-500/25"
          >
            Zum Kontaktformular
          </motion.button>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default ContactHero;
