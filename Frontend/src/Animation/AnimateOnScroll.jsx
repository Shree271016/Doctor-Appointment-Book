/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const AnimateOnScroll = ({ children, delay = 0, yOffset = 80, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnScroll;