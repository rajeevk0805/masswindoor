// components/AnimatedSection/AnimatedSection.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";



const AnimatedSection = ({
  children,
  initialScale = 0.9,
  finalScale = 1,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ scale: initialScale, opacity: 0 }}
      animate={{
        scale: isVisible ? finalScale : initialScale,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        type: "tween",
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
