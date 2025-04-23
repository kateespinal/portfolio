import { motion, HTMLMotionProps } from 'framer-motion';

type CardProps = HTMLMotionProps<'div'> & {
  className?: string;
};

export const Card = ({ children, className = '', ...props }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-white dark:bg-dark-lighter rounded-lg shadow-lg p-6 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}; 