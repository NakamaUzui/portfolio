import { motion } from 'framer-motion';
import { useEffect } from 'react';

const BookingCalendar = () => {
  useEffect(() => {
    // Calendly Widget nach dem Mounting initialisieren
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup beim Unmounting
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="relative p-6 bg-black/20 backdrop-blur-sm rounded-2xl border border-white/10 w-full mb-8">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-blue-500/5"
      />
      
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
          Beratungstermin buchen
        </h3>
        <p className="text-lg text-white-600 mb-8">
          Buche einen kostenlosen 30-minütigen Beratungstermin, um dein Projekt zu besprechen.
        </p>
        
        <div 
          className="rounded-xl overflow-hidden bg-black/30"
          style={{ 
            minHeight: '700px'
          }}
        >
          {/* Calendly Inline Widget */}
          <iframe
            src="https://calendly.com/patrickn2788/30min"
            width="100%"
            height="700"
            frameBorder="0"
            title="Wähle einen Beratungstermin"
            className="calendly-inline-widget"
          />
        </div>
      </div>
    </div>
  );
};

export default BookingCalendar;
