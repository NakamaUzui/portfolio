import { Outlet } from 'react-router-dom';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import ScrollToTop from './ScrollToTop';

const Layout = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
