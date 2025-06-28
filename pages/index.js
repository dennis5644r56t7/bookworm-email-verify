import { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { useRouter } from 'next/router';
import emailVerifiedAnimation from '../public/email-verified.json';

export default function EmailVerified() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (countdown <= 0) {
      router.push('https://library-management-tamnet.netlify.app/');
      return;
    }

    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, router]);

  return (
    <div className="verification-container">
      <Head>
        <title>Email Verified | Bookworm Hub Admin</title>
      </Head>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="verification-card card"
      >
        <div className="animation-container">
          <Lottie
            animationData={emailVerifiedAnimation}
            loop={false}
            autoplay={true}
          />
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="heading"
        >
          <span className="gradient-text">Email Verified Successfully!</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="subheading"
        >
          Your email has been successfully verified. You can now enjoy full access to the Bookworm Hub Admin portal.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <a 
            href="https://library-management-tamnet.netlify.app/" 
            className="button button-primary"
          >
            Go to Dashboard
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="redirect-text"
        >
          You will be automatically redirected in <span className="countdown">{countdown}</span> seconds
        </motion.p>
      </motion.div>
    </div>
  );
} 