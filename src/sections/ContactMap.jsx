import { motion } from 'framer-motion';

const ContactMap = () => {
  return (
    <section className="c-space my-20">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="relative h-[400px] rounded-2xl overflow-hidden"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d170129.55411843793!2d16.2121086!3d48.2206849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d079e5136ca9f%3A0xfdc2e58a51a25b46!2sVienna%2C%20Austria!5e0!3m2!1sen!2sat!4v1710558000000!5m2!1sen!2sat"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </motion.div>
    </section>
  );
};

export default ContactMap;
