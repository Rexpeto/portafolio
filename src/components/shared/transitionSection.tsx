"use client";
import { cn } from "@/libs";
import { motion } from "framer-motion";

const TransitionSection = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.2, ease: "easeOut", delay: 0.2 }}
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
      }}
      className={cn("section__container", className)}
    >
      {children}
    </motion.section>
  );
};

export default TransitionSection;
