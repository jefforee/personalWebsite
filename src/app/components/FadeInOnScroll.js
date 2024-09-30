import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const FadeInOnScroll = ({ children, classes, setStartTyping }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const handleScroll = () => {
    if (ref.current) {
      const { top } = ref.current.getBoundingClientRect();
      const isInView = top < window.innerHeight; // Check if the element is in view

      if (isInView) {
        setIsVisible(true); // Set visible when in view
        setStartTyping(true);
        window.removeEventListener('scroll', handleScroll); // Remove listener once visible
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup listener on unmount
    };
  }, []);


  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }} // Start hidden
      animate={{ opacity: isVisible ? 1 : 0 }} // Fade in when visible
      transition={{ duration: 0.5 }} // Duration of the fade-in
      className = {classes}

    >
      {children}
    </motion.div>
  );
};

export default FadeInOnScroll;
