import { motion, HTMLMotionProps } from 'framer-motion';

type ButtonProps = HTMLMotionProps<'button'> & {
  className?: string;
};

export const Button = ({ children, className = '', ...props }: ButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`px-6 py-3 rounded-lg font-semibold transition-colors ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}; 