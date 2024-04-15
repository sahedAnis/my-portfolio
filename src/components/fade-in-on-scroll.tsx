"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

// Define the animation variants
const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

// Create a reusable component that applies the animation
const FadeInOnScroll = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      variants={fadeInVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

export default FadeInOnScroll;
  