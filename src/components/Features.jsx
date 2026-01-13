import { motion } from 'framer-motion';
import { FiZap, FiShield, FiSmartphone, FiCloud, FiHeart, FiTrendingUp } from 'react-icons/fi';

const Features = () => {
  const features = [
    {
      icon: <FiZap size={32} />,
      title: 'Know Your Hardware Inside Out',
      description: 'Check out your CPU specs, see how much RAM you\'re actually using, find out your battery health, check screen resolution and refresh rate, and get all your camera details. It\'s like having your phone\'s spec sheet right there.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <FiShield size={32} />,
      title: 'Manage All Your Apps',
      description: 'See every app on your phone with easy search and filters. Check app versions, file sizes, where you got them from, what permissions they have, and even launch them or jump to settings. No more digging through menus.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <FiSmartphone size={32} />,
      title: 'Looks Actually Good',
      description: 'The app matches your wallpaper colors automatically (if you\'re on Android 12+). Plus it has a clean dark mode that won\'t burn your eyes at night, with smooth animations that just feel nice.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FiCloud size={32} />,
      title: 'Find Outdated Apps',
      description: 'Get visual charts showing which apps are running on old Android versions. Spot apps that might not work well on newer phones, see which ones are still in debug mode, and check where all your apps came from.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <FiHeart size={32} />,
      title: 'Play With Sensors',
      description: 'Access all the sensors in your phone - the gyroscope, accelerometer, light sensor, and everything else. Watch them update in real-time and see what data your phone is actually collecting.',
      color: 'from-red-500 to-rose-500'
    },
    {
      icon: <FiTrendingUp size={32} />,
      title: 'See Who\'s Watching',
      description: 'Visual breakdown of which apps are using what permissions. Find out which apps can access your camera, location, contacts, or microphone. Tap any permission to see exactly which apps have it.',
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
            What Makes It <span className="text-primary">Worth Using</span>
          </h2>
          <p className="text-onSurfaceVariant text-lg max-w-2xl mx-auto">
            Curious what's actually happening inside your phone? This app shows you everything - no tech degree required.
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
