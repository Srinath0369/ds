import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiDownload } from 'react-icons/fi';
import Logo from '../Images/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/#features' },
    { name: 'Screenshots', href: '/#screenshots' },
    { name: 'Privacy', href: '/privacy' },
    { name: 'Download', href: '/#download' },
  ];

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('/#')) {
      const element = document.getElementById(href.substring(2));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-surfaceContainerLow/95 backdrop-blur-md shadow-lg shadow-primary/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <img src={Logo} alt="Device Specs Logo" className="h-10 w-auto" />
              <span className="text-onSurface font-bold text-xl">Device Specs</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              item.href === '/privacy' ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-onSurfaceVariant hover:text-onSurface transition-colors duration-200 font-medium"
                >
                  {item.name}
                </Link>
              ) : (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    if (location.pathname !== '/' && item.href.startsWith('/#')) {
                      return; // Let the link navigate normally
                    }
                    if (item.href.startsWith('/#')) {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }
                  }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-onSurfaceVariant hover:text-onSurface transition-colors duration-200 font-medium"
                  whileHover={{ scale: 1.1 }}
                >
                  {item.name}
                </motion.a>
              )
            ))}
          </nav>

          {/* CTA Button */}
          <motion.a
            href="#download"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center space-x-2 bg-primaryContainer text-onPrimary px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
          >
            <FiDownload />
            <span>Download</span>
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-onSurface p-2"
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surfaceContainerHighest rounded-lg my-4 overflow-hidden"
          >
            <nav className="flex flex-col space-y-4 p-6">
              {navItems.map((item) => (
                item.href === '/privacy' ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-onSurfaceVariant hover:text-onSurface transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      setIsMobileMenuOpen(false);
                      if (location.pathname !== '/' && item.href.startsWith('/#')) {
                        return; // Let the link navigate normally
                      }
                      if (item.href.startsWith('/#')) {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }
                    }}
                    className="text-onSurfaceVariant hover:text-onSurface transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </a>
                )
              ))}
              <a
                href="#download"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center space-x-2 bg-primaryContainer text-onPrimary px-6 py-3 rounded-full font-semibold"
              >
                <FiDownload />
                <span>Download</span>
              </a>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
