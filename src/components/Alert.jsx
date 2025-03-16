import { motion } from 'framer-motion';

const Alert = ({ text, type }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className={`p-4 rounded-lg shadow-lg backdrop-blur-sm border ${
        type === 'success' ? 'bg-green-500/20 border-green-500/50' : 'bg-red-500/20 border-red-500/50'
      }`}
    >
      <p className="text-white text-sm font-medium">{text}</p>
    </motion.div>
  );
};

export default Alert;
