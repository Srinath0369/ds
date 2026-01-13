import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiHeart, FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';
import Logo from '../Images/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surfaceContainerHighest border-t border-outline">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={Logo} alt="Device Specs Logo" className="h-10 w-auto" />
              <span className="text-onSurface font-bold text-xl">Device Specs</span>
            </div>
            <p className="text-onSurfaceVariant text-sm">
              Your comprehensive Android device information companion with Material You design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-onSurface font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/#home" className="text-onSurfaceVariant hover:text-onSurface transition-colors">Home</a></li>
              <li><a href="/#features" className="text-onSurfaceVariant hover:text-onSurface transition-colors">Features</a></li>
              <li><a href="/#screenshots" className="text-onSurfaceVariant hover:text-onSurface transition-colors">Screenshots</a></li>
              <li><a href="/#download" className="text-onSurfaceVariant hover:text-onSurface transition-colors">Download</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-onSurface font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="text-onSurfaceVariant hover:text-onSurface transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-onSurface font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="w-10 h-10 bg-surfaceVariant hover:bg-primary rounded-full flex items-center justify-center text-onSurfaceVariant hover:text-onPrimary transition-all duration-300"
              >
                <FiTwitter size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="w-10 h-10 bg-surfaceVariant hover:bg-primaryContainer rounded-full flex items-center justify-center text-onSurfaceVariant hover:text-onPrimary transition-all duration-300"
              >
                <FiGithub size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="w-10 h-10 bg-surfaceVariant hover:bg-inversePrimary rounded-full flex items-center justify-center text-onSurfaceVariant hover:text-inverseSurface transition-all duration-300"
              >
                <FiLinkedin size={20} />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-outline pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-onSurfaceVariant text-sm mb-4 md:mb-0">
              © {currentYear} Device Specs. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-onSurfaceVariant text-sm">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <FiHeart className="text-red-500" fill="currentColor" />
              </motion.div>
              <span>by Srinath</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
