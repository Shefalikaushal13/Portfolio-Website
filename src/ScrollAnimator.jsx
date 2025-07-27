import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ScrollAnimatedSection = ({ children }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.1, once: true }); // trigger once

  return (
  <motion.div
    ref={ref}
    initial={{ opacity: 0, y: 150 }}
    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 150 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
  className="my-12"
  >
  {children}
  </motion.div>
  );
};

export default ScrollAnimatedSection;

