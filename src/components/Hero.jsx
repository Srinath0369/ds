import { motion } from 'framer-motion';
import { FiDownload, FiStar, FiUsers } from 'react-icons/fi';
import { FaGooglePlay } from 'react-icons/fa';
import AppPreview from '../Images/Home_screen.png';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-primaryContainer/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block bg-surfaceContainerLow border border-primary/30 rounded-full px-4 py-2 mb-6"
            >
              <span className="text-primary text-sm font-semibold">Now Available on Play Store</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-onSurface mb-6 leading-tight"
            >
              Device
              <span className="text-primary"> Specs</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-onSurfaceVariant text-lg md:text-xl mb-8 max-w-xl"
            >
              A comprehensive Android app providing detailed hardware specs, app analysis, and sensor monitoring. Features CPU details, battery stats, display info, complete app management with SDK analyzers, permission inspector, and beautiful Material You design that adapts to your wallpaper.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8"
            >
              <motion.a
                href="https://play.google.com/store/apps/details?id=com.srinathx.devicestats"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center space-x-2 bg-primaryContainer text-onPrimary px-8 py-4 rounded-full font-semibold text-lg shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300"
              >
                <FaGooglePlay size={24} />
                <span>Get it on Play Store</span>
              </motion.a>

              <motion.a
                href="#features"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center space-x-2 bg-surfaceVariant backdrop-blur-sm text-onSurface px-8 py-4 rounded-full font-semibold text-lg border border-outline hover:bg-surfaceContainerLow transition-all duration-300"
              >
                <span>Learn More</span>
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-8 justify-center md:justify-start"
            >
              <div className="text-center">
                <div className="flex items-center space-x-1 text-yellow-400 mb-1">
                  <FiStar fill="currentColor" />
                  <span className="text-onSurface font-bold text-2xl">4.5</span>
                </div>
                <p className="text-onSurfaceVariant text-sm">Rating</p>
              </div>
              <div className="text-center">
                <div className="flex items-center space-x-1 mb-1">
                  <FiUsers className="text-primary" />
                  <span className="text-onSurface font-bold text-2xl">500+</span>
                </div>
                <p className="text-onSurfaceVariant text-sm">Downloads</p>
              </div>
              <div className="text-center">
                <div className="flex items-center space-x-1 mb-1">
                  <FiDownload className="text-primaryContainer" />
                  <span className="text-onSurface font-bold text-2xl">10+</span>
                </div>
                <p className="text-onSurfaceVariant text-sm">Reviews</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              {/* Phone Frame */}
              <div className="relative w-[300px] h-[650px] bg-surfaceVariant rounded-[3rem] p-3 shadow-2xl shadow-primary/20 border-4 border-outline">
                <div className="w-full h-full bg-surfaceContainerLow rounded-[2.5rem] overflow-hidden relative">
                  {/* Screen Content */}
                  <img 
                    src={AppPreview} 
                    alt="Device Specs App Preview"
                    className="w-full h-full object-cover rounded-[2rem]"
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 bg-primaryContainer text-onPrimary px-4 py-2 rounded-full shadow-lg"
              >
                <span className="text-sm font-semibold">New</span>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-4 -left-4 bg-primary text-onPrimary px-4 py-2 rounded-full shadow-lg"
              >
                <span className="text-sm font-semibold">Free</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
