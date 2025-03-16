import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AnimatedButton = ({ to, children, external }) => {
  const ButtonWrapper = external ? 'a' : Link;
  const buttonProps = external ? { href: to, target: "_blank", rel: "noopener" } : { to };

  return (
    <ButtonWrapper {...buttonProps}>
      <motion.div
        className="relative group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 opacity-70 blur-lg group-hover:opacity-100 transition-opacity" />
        <div className="relative px-8 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium 
                      overflow-hidden transition-all duration-300 ease-out
                      hover:shadow-lg hover:shadow-purple-500/25
                      group-hover:tracking-wider">
          <span className="relative z-10">{children}</span>
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </div>
      </motion.div>
    </ButtonWrapper>
  );
};

export default AnimatedButton;
