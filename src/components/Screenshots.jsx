import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
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
  const [currentIndex, setCurrentIndex] = useState(0);
  
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
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : screenshots.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < screenshots.length - 1 ? prev + 1 : 0));
  };

  const getVisibleScreenshots = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + screenshots.length) % screenshots.length;
      visible.push({ ...screenshots[index], offset: i });
    }
    return visible;
  };

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

        {/* Carousel with Center Focus */}
        <div className="relative py-12">
          <div className="flex items-center justify-center gap-4 h-[500px] md:h-[700px]">
            {getVisibleScreenshots().map((screenshot) => {
              const scale = screenshot.offset === 0 ? 1 : 0.7;
              const opacity = screenshot.offset === 0 ? 1 : 0.3;
              const baseZIndex = 3 - Math.abs(screenshot.offset);
              const zIndex = screenshot.offset === 0 ? 10 : baseZIndex;
              const translateX = screenshot.offset * 340;
              
              // Hide side images on mobile
              const isSideImage = screenshot.offset !== 0;
              const hiddenOnMobile = isSideImage ? 'hidden md:block' : '';

              return (
                <motion.div
                  key={screenshot.id}
                  initial={false}
                  animate={{
                    scale,
                    opacity,
                    x: translateX,
                  }}
                  transition={{ 
                    duration: 0.5, 
                    ease: "easeInOut",
                    scale: { duration: 0.5 },
                    opacity: { duration: 0.5 },
                    x: { duration: 0.5 }
                  }}
                  onClick={() => {
                    if (screenshot.offset < 0) {
                      handlePrevious();
                    } else if (screenshot.offset > 0) {
                      handleNext();
                    }
                  }}
                  className={`absolute w-[250px] md:w-[300px] h-[542px] md:h-[650px] bg-surfaceVariant rounded-[1.75rem] p-1 shadow-2xl shadow-primary/20 border-2 border-outline ${screenshot.offset !== 0 ? 'cursor-pointer' : ''} transition-[z-index] duration-500 ${hiddenOnMobile}`}
                  style={{ zIndex }}
                >
                  <div className="w-full h-full bg-surfaceContainerLow rounded-[1.5rem] overflow-hidden relative">
                    <img 
                      src={screenshot.image} 
                      alt={screenshot.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 left-2 right-2 md:left-4 md:right-4 -translate-y-1/2 flex items-center justify-between pointer-events-none z-20">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrevious}
              className="w-10 h-10 md:w-14 md:h-14 bg-surfaceVariant hover:bg-primary/20 rounded-full flex items-center justify-center text-onSurface hover:text-primary transition-colors shadow-lg pointer-events-auto"
            >
              <FiChevronLeft size={24} className="md:hidden" />
              <FiChevronLeft size={32} className="hidden md:block" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="w-10 h-10 md:w-14 md:h-14 bg-surfaceVariant hover:bg-primary/20 rounded-full flex items-center justify-center text-onSurface hover:text-primary transition-colors shadow-lg pointer-events-auto"
            >
              <FiChevronRight size={24} className="md:hidden" />
              <FiChevronRight size={32} className="hidden md:block" />
            </motion.button>
          </div>

          {/* Current Screenshot Title */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-8 px-4"
          >
            <h3 className="text-xl md:text-2xl font-bold text-onSurface">{screenshots[currentIndex].title}</h3>
          </motion.div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-1.5 md:gap-2 mt-6 px-4 overflow-x-auto">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 md:h-2 rounded-full transition-all duration-300 flex-shrink-0 ${
                  index === currentIndex 
                    ? 'w-6 md:w-8 bg-primary' 
                    : 'w-1.5 md:w-2 bg-onSurfaceVariant/30 hover:bg-onSurfaceVariant/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
