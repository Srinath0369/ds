import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Screenshots from '../components/Screenshots';
import Download from '../components/Download';

const Home = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Device Specs - Complete Android Device Information & Hardware Monitor</title>
        <meta name="description" content="Get comprehensive Android device information with Device Specs. Monitor CPU, battery, sensors, camera specs, and more. Features Material You design, SDK analyzers, and permission inspector. Free download on Google Play Store." />
        <link rel="canonical" href="https://devicespecs.app/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MobileApplication",
            "name": "Device Specs",
            "applicationCategory": "UtilitiesApplication",
            "operatingSystem": "Android",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.5",
              "ratingCount": "10"
            },
            "description": "Complete Android device information and hardware monitoring app with Material You design. View detailed CPU, battery, display, camera, sensors, and system information.",
            "author": {
              "@type": "Person",
              "name": "Srinath"
            },
            "downloadUrl": "https://play.google.com/store/apps/details?id=com.srinathx.devicestats",
            "screenshot": "https://devicespecs.app/screenshots/home.png"
          })}
        </script>
      </Helmet>
      <Hero />
      <Features />
      <Screenshots />
      <Download />
    </>
  );
};

export default Home;
