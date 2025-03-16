import ContactHero from '../sections/ContactHero';
import ContactForm from '../sections/Contact';
import ContactInfo from '../sections/ContactInfo';
import ContactMap from '../sections/ContactMap';
import BookingCalendar from '../components/BookingCalendar';

const Contact = () => {
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
