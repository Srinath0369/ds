import { motion } from 'framer-motion';
import { FiShield, FiLock, FiEye, FiServer, FiMail } from 'react-icons/fi';

const PrivacyPolicy = () => {
  return (
    <section id="privacy" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="flex items-center justify-center mb-4">
            <FiShield className="text-primary" size={48} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-onSurface mb-4">Privacy Policy</h1>
          <p className="text-onSurfaceVariant text-lg">Last Updated: January 13, 2026</p>
        </motion.div>

        <div className="space-y-8 text-onSurfaceVariant">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-surfaceContainerLow rounded-2xl p-8 border border-outline"
          >
            <h2 className="text-2xl font-bold text-onSurface mb-4">Introduction</h2>
            <p className="leading-relaxed">
              This Privacy Policy describes how Device Specs ("we", "our", or "the app") collects, uses, and protects your information when you use our mobile application. We are committed to protecting your privacy and ensuring transparency about our data practices.
            </p>
          </motion.div>

          {/* Information We Collect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-surfaceContainerLow rounded-2xl p-8 border border-outline"
          >
            <div className="flex items-center mb-4">
              <FiEye className="text-primary mr-3" size={28} />
              <h2 className="text-2xl font-bold text-onSurface">Information We Collect</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-onSurface mb-3">1. Device Information (Locally Processed)</h3>
                <p className="mb-3">The app reads and displays the following device information <strong className="text-primary">locally on your device only</strong>:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Hardware Information:</strong> CPU model, core count, architecture, RAM capacity, storage capacity</li>
                  <li><strong>Battery Information:</strong> Battery level, health status, temperature, voltage, charging status</li>
                  <li><strong>Display Information:</strong> Screen resolution, density, refresh rate, size</li>
                  <li><strong>Sensor Information:</strong> List of available sensors (accelerometer, gyroscope, etc.)</li>
                  <li><strong>Camera Information:</strong> Camera specifications and capabilities</li>
                  <li><strong>System Information:</strong> Android version, build number, kernel version, security patch level</li>
                  <li><strong>Network Information:</strong> Network type, WiFi status, connection state (no browsing history)</li>
                  <li><strong>Installed Applications:</strong> List of installed apps, package names, versions, permissions, SDK levels, install sources</li>
                </ul>
                <div className="mt-4 bg-primary/10 border border-primary/30 rounded-lg p-4">
                  <p className="text-primary font-semibold">
                    Important: This device information is only displayed within the app and is not transmitted to any servers except as described below.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-onSurface mb-3">2. Data We Collect and Transmit</h3>
                
                <div className="space-y-4 ml-4">
                  <div>
                    <h4 className="font-semibold text-onSurface mb-2">a) Unknown SoC (System-on-Chip) Models</h4>
                    <p className="mb-2">When the app encounters a processor model not in our database, we automatically collect and send:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                      <li>SoC model name</li>
                      <li>Device brand, model, and manufacturer</li>
                      <li>Android version and SDK level</li>
                      <li>CPU architecture (ABI)</li>
                      <li>Hardware identifier</li>
                      <li>Timestamp of the log</li>
                    </ul>
                    <p className="mt-2 text-sm"><strong>Purpose:</strong> To expand our processor database and provide accurate information for future users.</p>
                    <p className="text-sm"><strong>Storage:</strong> Firebase Firestore (unknown_socs collection)</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-onSurface mb-2">b) User Feedback</h4>
                    <p className="mb-2">When you submit feedback through the in-app form:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                      <li>Feedback is sent via your <strong>email app</strong> (not collected by us directly)</li>
                      <li>Your email, name (optional), and message are included in the email</li>
                      <li>Device information is automatically appended</li>
                      <li>Email is sent to: esnsrinath@gmail.com</li>
                    </ul>
                    <p className="mt-2 text-sm"><strong>Note:</strong> We only receive feedback if you actually send the email. No data is transmitted until you press "Send" in your email app.</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-onSurface mb-2">c) Analytics Data</h4>
                    <p className="mb-2">We use <strong>Firebase Analytics</strong> to understand how users interact with the app:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                      <li>App opens and screen views</li>
                      <li>Feature usage statistics</li>
                      <li>Session duration</li>
                      <li>Device type and Android version (anonymized)</li>
                      <li>General location (country/region level only)</li>
                    </ul>
                    <p className="mt-2 text-sm text-primary font-semibold">Data is anonymized and cannot be used to identify individual users.</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-onSurface mb-2">d) Crash Reports</h4>
                    <p className="mb-2">We use <strong>Firebase Crashlytics</strong> to detect and fix app crashes:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                      <li>Crash stack traces</li>
                      <li>Device model and OS version</li>
                      <li>App version and build number</li>
                      <li>Memory usage at time of crash</li>
                      <li>Anonymous installation UUID</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-onSurface mb-2">e) Advertising Data</h4>
                    <p className="mb-2">We use <strong>Google AdMob</strong> to display advertisements:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                      <li>AdMob may collect device advertising ID</li>
                      <li>IP address (for ad targeting)</li>
                      <li>Device information (model, OS version)</li>
                      <li>App usage data for ad personalization</li>
                    </ul>
                    <p className="mt-2 text-sm"><strong>Control:</strong> You can purchase the ad-free premium version or opt out through device settings.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* How We Use Your Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-surfaceContainerLow rounded-2xl p-8 border border-outline"
          >
            <div className="flex items-center mb-4">
              <FiServer className="text-primary mr-3" size={28} />
              <h2 className="text-2xl font-bold text-onSurface">How We Use Your Information</h2>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-onSurface mb-2">Local Device Data</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Displayed within the app for your information</li>
                  <li className="text-primary font-semibold">Never sold or shared with third parties</li>
                  <li className="text-primary font-semibold">Never uploaded to our servers (except SoC model as described)</li>
                  <li>Stays on your device only</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-onSurface mb-2">Collected Data</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Unknown SoC logs:</strong> Improve processor database (Firebase)</li>
                  <li><strong>Feedback:</strong> Sent via your email app to developer</li>
                  <li><strong>Analytics:</strong> Understand usage patterns, improve features (Firebase)</li>
                  <li><strong>Crash reports:</strong> Fix bugs and stability issues (Firebase)</li>
                  <li><strong>Ad data:</strong> Display relevant advertisements (via AdMob)</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Data Storage and Security */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-surfaceContainerLow rounded-2xl p-8 border border-outline"
          >
            <div className="flex items-center mb-4">
              <FiLock className="text-primary mr-3" size={28} />
              <h2 className="text-2xl font-bold text-onSurface">Data Storage and Security</h2>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-onSurface mb-2">Firebase Services</h3>
                <p>We use Google Firebase for backend services:</p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Firebase Firestore: Unknown SoC logs only</li>
                  <li>Firebase Analytics: Usage statistics</li>
                  <li>Firebase Crashlytics: Crash reporting</li>
                </ul>
                <p className="mt-2 text-sm">All Firebase data is encrypted in transit (HTTPS/TLS) and at rest.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-onSurface mb-2">Data Retention</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Analytics: Retained for 14 months by Firebase</li>
                  <li>Crash reports: Retained for 90 days by Firebase</li>
                  <li>Feedback emails: Stored in developer's email inbox</li>
                  <li>Unknown SoC logs: Retained indefinitely for database maintenance</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-onSurface mb-2">Security Measures</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Network communication uses HTTPS encryption</li>
                  <li>No passwords or sensitive personal data collected</li>
                  <li>Anonymous identifiers used where possible</li>
                  <li>Regular security updates and patches</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Third-Party Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-surfaceContainerLow rounded-2xl p-8 border border-outline"
          >
            <h2 className="text-2xl font-bold text-onSurface mb-4">Third-Party Services</h2>
            <p className="mb-4">We use the following third-party services, each with their own privacy policies:</p>
            <div className="space-y-3">
              <div className="bg-surfaceVariant rounded-lg p-4">
                <h3 className="font-semibold text-onSurface">Google Firebase</h3>
                <p className="text-sm mt-1">Analytics, Crashlytics, Firestore</p>
                <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Privacy Policy →
                </a>
              </div>
              <div className="bg-surfaceVariant rounded-lg p-4">
                <h3 className="font-semibold text-onSurface">Google AdMob</h3>
                <p className="text-sm mt-1">Advertising</p>
                <a href="https://support.google.com/admob/answer/6128543" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Privacy Policy →
                </a>
              </div>
              <div className="bg-surfaceVariant rounded-lg p-4">
                <h3 className="font-semibold text-onSurface">Google Play Services</h3>
                <p className="text-sm mt-1">In-app purchases</p>
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  Privacy Policy →
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-surfaceContainerLow rounded-2xl p-8 border border-outline"
          >
            <div className="flex items-center mb-4">
              <FiMail className="text-primary mr-3" size={28} />
              <h2 className="text-2xl font-bold text-onSurface">Contact Us</h2>
            </div>
            <p className="mb-4">If you have questions, concerns, or requests regarding this Privacy Policy or your data:</p>
            <div className="space-y-2">
              <p><strong>Email:</strong> esnsrinath@gmail.com</p>
              <p><strong>Developer:</strong> Srinath</p>
              <p><strong>App Name:</strong> Device Specs</p>
              <p><strong>Package Name:</strong> com.srinathx.devicestats</p>
            </div>
            <p className="mt-4 text-sm">We will respond to privacy inquiries within 30 days.</p>
          </motion.div>

          <div className="text-center text-sm text-tertiary pt-8">
            <p>This privacy policy is effective as of January 13, 2026 and applies to all versions of Device Specs going forward.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
