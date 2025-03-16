import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion'; // Add this import

import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

// EmailJS initialisieren
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

const Contact = () => {
  const formRef = useRef();

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_USERID,        // Korrigierte Variable
        import.meta.env.VITE_EMAILJS_TEMPLATEID,    // Korrigierte Variable
        {
          from_name: form.name,
          to_name: "Patrick",                       // Dein Name
          from_email: form.email,
          to_email: "patricky.web@gmail.com",    // Deine Email
          message: form.message,
        }
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: 'Thank you for your message 😃',
            type: 'success',
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: '',
              email: '',
              message: '',
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: 'danger',
          });
        },
      );
  };

  return (
    <div className="relative p-6 bg-black/20 backdrop-blur-sm rounded-2xl border border-white/10 w-full">
      <div className="fixed bottom-4 right-4 z-[9999]"> {/* Geänderte Position */}
        {alert.show && <Alert {...alert} />}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-blue-500/5"
      />

      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
          Sende mir eine Nachricht
        </h3>
        <p className="text-lg text-white-600 mt-3 mb-8">
          Ob Sie eine neue Website erstellen, Ihre bestehende Plattform verbessern oder ein einzigartiges Projekt zum Leben erwecken möchten - ich bin hier, um zu helfen.
        </p>

        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col space-y-7">
          <label className="space-y-3">
            <span className="field-label">Vollständiger Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="field-input"
              placeholder="z.B., Max Mustermann"
            />
          </label>

          <label className="space-y-3">
            <span className="field-label">E-Mail-Adresse</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="field-input"
              placeholder="z.B., max.mustermann@gmail.com"
            />
          </label>

          <label className="space-y-3">
            <span className="field-label">Ihre Nachricht</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="field-input"
              placeholder="Teilen Sie Ihre Gedanken oder Anfragen mit..."
            />
          </label>

          <button className="field-btn" type="submit" disabled={loading}>
            {loading ? 'Wird gesendet...' : 'Nachricht senden'}
            <img src="/assets/arrow-up.png" alt="Pfeil nach oben" className="field-btn_arrow" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;