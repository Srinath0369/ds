import { motion } from 'framer-motion';
import { FiZap, FiShield, FiSmartphone, FiCloud, FiHeart, FiTrendingUp } from 'react-icons/fi';

const Features = () => {
  const features = [
    {
      icon: <FiZap size={32} />,
      title: 'Complete Hardware Analysis',
      description: 'Deep dive into CPU architecture, core count, clock speeds, RAM usage, storage breakdown, battery health, temperature, voltage, display resolution, refresh rate, and camera specifications.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <FiShield size={32} />,
      title: 'Advanced App Management',
      description: 'Browse all installed apps with search and filters. View detailed info including version, size, install source, permissions, activities, services, receivers, and providers. Launch apps or open settings directly.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <FiSmartphone size={32} />,
      title: 'Material You Design',
      description: 'Dynamic theming that extracts colors from your wallpaper (Android 12+). True AMOLED dark mode, smooth animations, and modern Material Design 3 components throughout.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FiCloud size={32} />,
      title: 'SDK & Signature Analyzers',
      description: 'Visual pie charts showing minimum and target SDK distribution. Identify outdated apps, check compatibility, detect debug vs release builds, and track app installation sources with detailed statistics.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <FiHeart size={32} />,
      title: 'Real-Time Sensor Monitor',
      description: 'Access all device sensors including accelerometer, gyroscope, magnetometer, light, pressure, temperature, proximity, and more. View real-time data with technical details and specifications.',
      color: 'from-red-500 to-rose-500'
    },
    {
      icon: <FiTrendingUp size={32} />,
      title: 'Privacy & Permission Inspector',
      description: 'Visual breakdown of 30+ permissions across all apps. See which apps access camera, location, contacts, storage, microphone, and more. Tap any permission to view the complete app list with grant status.',
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="features" className="py-20 bg-surfaceContainerLow">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-onSurface mb-4">
            Powerful <span className="text-primary">Features</span>
          </h2>
          <p className="text-onSurfaceVariant text-lg max-w-2xl mx-auto">
            Everything you need to know about your Android device in one comprehensive app
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-surface rounded-2xl p-8 border border-outline hover:border-primary/50 transition-all duration-300 group"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-primaryContainer rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300"
              >
                <div className="text-onPrimary">{feature.icon}</div>
              </motion.div>
              
              <h3 className="text-xl font-bold text-onSurface mb-3">{feature.title}</h3>
              <p className="text-onSurfaceVariant leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
