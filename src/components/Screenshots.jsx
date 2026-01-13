import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import HomeScreen from '../Images/Home_screen.png';
import CPU from '../Images/cpu.png';
import Battery from '../Images/battery.png';
import Display from '../Images/display.png';
import Camera from '../Images/camera.png';
import Sensors from '../Images/sensors.png';
import Connectivity from '../Images/Connectivity.png';
import Temperature from '../Images/Temperature.png';
import Software from '../Images/software.png';
import System from '../Images/system.png';
import Permissions from '../Images/premissions.png';
import MaterialColor1 from '../Images/material_color1.png';
import MaterialColor2 from '../Images/material_color2.png';
import MaterialColor3 from '../Images/material_color3.png';
import Image8 from '../Images/Image (8).png';

const Screenshots = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const screenshots = [
    { id: 1, image: HomeScreen, title: 'Home Dashboard' },
    { id: 2, image: CPU, title: 'CPU Information' },
    { id: 3, image: Battery, title: 'Battery Stats' },
    { id: 4, image: Display, title: 'Display Details' },
    { id: 5, image: Camera, title: 'Camera Specs' },
    { id: 6, image: Sensors, title: 'Sensors Monitor' },
    { id: 7, image: Connectivity, title: 'Connectivity Info' },
    { id: 8, image: Temperature, title: 'Thermal Monitoring' },
    { id: 9, image: Software, title: 'Software Info' },
    { id: 10, image: System, title: 'System Details' },
    { id: 11, image: Permissions, title: 'Permission Inspector' },
    { id: 12, image: MaterialColor1, title: 'Material You Theme' },
    { id: 13, image: MaterialColor2, title: 'Dynamic Colors' },
    { id: 14, image: MaterialColor3, title: 'Dark Mode' },
    { id: 15, image: Image8, title: 'App Features' },
  ];

  const handlePrevious = () => {
    const currentIndex = screenshots.findIndex(s => s.id === selectedImage);
    const previousIndex = currentIndex > 0 ? currentIndex - 1 : screenshots.length - 1;
    setSelectedImage(screenshots[previousIndex].id);
  };

  const handleNext = () => {
    const currentIndex = screenshots.findIndex(s => s.id === selectedImage);
    const nextIndex = currentIndex < screenshots.length - 1 ? currentIndex + 1 : 0;
    setSelectedImage(screenshots[nextIndex].id);
  };

  const currentScreenshot = screenshots.find(s => s.id === selectedImage);

  return (
    <section id="screenshots" className="py-20 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-onSurface mb-4">
            App <span className="text-primary">Screenshots</span>
          </h2>
          <p className="text-onSurfaceVariant text-lg max-w-2xl mx-auto">
            Explore the beautiful Material You interface with dynamic theming and smooth animations
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={screenshot.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                onClick={() => setSelectedImage(screenshot.id)}
                className="flex-shrink-0 w-[280px] h-[607px] bg-surfaceVariant rounded-3xl p-3 shadow-2xl shadow-primary/10 border border-outline cursor-pointer"
              >
                <div className="w-full h-full bg-surfaceContainerLow rounded-2xl overflow-hidden">
                  <img 
                    src={screenshot.image} 
                    alt={screenshot.title}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <div className="text-center mt-4">
            <p className="text-tertiary text-sm">Scroll horizontally to see more →</p>
          </div>
        </div>

        {/* Image Preview Modal */}
        <AnimatePresence>
          {selectedImage && currentScreenshot && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-12 h-12 bg-surfaceVariant hover:bg-primary/20 rounded-full flex items-center justify-center text-onSurface hover:text-primary transition-colors z-10"
              >
                <FiX size={24} />
              </motion.button>

              {/* Previous Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevious();
                }}
                className="absolute left-4 w-12 h-12 bg-surfaceVariant hover:bg-primary/20 rounded-full flex items-center justify-center text-onSurface hover:text-primary transition-colors z-10"
              >
                <FiChevronLeft size={32} />
              </motion.button>

              {/* Image Container */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-md w-full"
              >
                <div className="bg-surfaceVariant rounded-3xl p-4 shadow-2xl">
                  <img
                    src={currentScreenshot.image}
                    alt={currentScreenshot.title}
                    className="w-full h-auto rounded-2xl"
                  />
                  <p className="text-onSurface text-center mt-4 font-semibold text-lg">
                    {currentScreenshot.title}
                  </p>
                </div>
              </motion.div>

              {/* Next Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-4 w-12 h-12 bg-surfaceVariant hover:bg-primary/20 rounded-full flex items-center justify-center text-onSurface hover:text-primary transition-colors z-10"
              >
                <FiChevronRight size={32} />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Screenshots;
