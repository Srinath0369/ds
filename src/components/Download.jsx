import { motion } from 'framer-motion';
import { FaGooglePlay } from 'react-icons/fa';

const Download = () => {
  return (
    <section id="download" className="py-20 bg-surfaceContainerLow">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-primary/10 border-2 border-primary/30 rounded-3xl">
          <div className="bg-surface/50 backdrop-blur-sm rounded-3xl p-12 md:p-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-onSurface mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-onSurfaceVariant text-lg mb-8">
                  Download Device Specs and unlock complete insights into your Android device. Explore hardware specs, analyze apps with visual statistics, monitor sensors in real-time, and manage permissions - all in one beautiful Material You app.
                </p>

                <motion.a
                  href="https://play.google.com/store/apps/details?id=com.srinathx.devicestats"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-3 bg-inverseSurface text-inverseOnSurface px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-primary/50 transition-all duration-300"
                >
                  <FaGooglePlay size={28} />
                  <div className="text-left">
                    <div className="text-xs text-tertiary">GET IT ON</div>
                    <div className="text-lg font-bold">Google Play</div>
                  </div>
                </motion.a>

                <div className="mt-8 flex gap-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-2"
                  >
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold text-lg">✓</span>
                    </div>
                    <span className="text-onSurface font-medium">Free to Download</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-2"
                  >
                    <div className="w-10 h-10 bg-primaryContainer/30 rounded-full flex items-center justify-center">
                      <span className="text-primaryContainer font-bold text-lg">✓</span>
                    </div>
                    <span className="text-onSurface font-medium">No Ads</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-onSurface mb-6">Need Help?</h3>
                
                <motion.div
                  whileHover={{ x: 10 }}
                  className="bg-surfaceContainerLow rounded-2xl p-6 border border-outline hover:border-primary/50 transition-all duration-300"
                >
                  <p className="text-onSurface">
                    Use the in-app feedback form to get support, report bugs, or request features.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="bg-surfaceContainerLow rounded-2xl p-6 border border-outline hover:border-primaryContainer/50 transition-all duration-300"
                >
                  <p className="text-onSurface">
                    Check the About section in the app for FAQs and documentation.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
