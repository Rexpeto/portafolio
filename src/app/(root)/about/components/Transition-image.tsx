"use client";

import { motion } from "framer-motion";

const TransitionImage = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.2 }}
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
      }}
      className="flex justify-center relative w-full h-[200px] lg:h-[500px] rounded-xl mb-4"
    >
      {children}
    </motion.div>
  );
};

export default TransitionImage;
