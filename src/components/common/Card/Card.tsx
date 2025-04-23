import { HTMLAttributes, forwardRef } from 'react';
import { motion } from 'framer-motion';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined';
  hoverEffect?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, variant = 'default', hoverEffect = false, className = '', ...props }, ref) => {
    const baseClasses = 'rounded-lg transition-all duration-300';
    
    const variantClasses = {
      default: 'bg-white dark:bg-dark-lighter',
      elevated: 'bg-white dark:bg-dark-lighter shadow-lg hover:shadow-xl',
      outlined: 'border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-lighter',
    };

    const hoverClasses = hoverEffect ? 'hover:transform hover:scale-[1.02]' : '';

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${className}`}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = 'Card';

export default Card; 