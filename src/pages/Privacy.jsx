import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import PrivacyPolicy from '../components/PrivacyPolicy';

const Privacy = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Privacy Policy - Device Specs</title>
        <meta name="description" content="Privacy Policy for Device Specs Android app. Learn how we collect, use, and protect your device information. Transparent data practices with Firebase, AdMob, and Google Play Services." />
        <link rel="canonical" href="https://devicespecs.app/privacy-policy" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <PrivacyPolicy />
    </>
  );
};

export default Privacy;
