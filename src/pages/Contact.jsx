import ContactHero from '../sections/ContactHero';
import ContactForm from '../sections/Contact';
import ContactInfo from '../sections/ContactInfo';
import ContactMap from '../sections/ContactMap';
import BookingCalendar from '../components/BookingCalendar';
import { useEffect } from 'react';

const Contact = () => {
  // Nach dem Laden der Seite zum Formular scrollen, wenn die URL einen Hash enthält
  useEffect(() => {
    if (window.location.href.includes('/contact')) {
      const contactForm = document.getElementById('contact-form');
      contactForm?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <>
      <ContactHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Container für einheitliche Breite */}
        <div className="flex flex-col gap-8 mt-10">
          <ContactInfo />
          <BookingCalendar /> {/* Neue Komponente hinzugefügt */}
          <ContactForm />
        </div>
        <ContactMap />
      </div>
    </>
  );
};

export default Contact;
