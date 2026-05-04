import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const Card = ({ children, className, delay = 0 }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className={twMerge(
        "bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg backdrop-blur-sm",
        "hover:border-accent/80 hover:shadow-[0_0_15px_rgba(195,108,30,0.5)] transition-all duration-300",
        className
      )}
    >
      {children}
    </motion.div>
  );
};
