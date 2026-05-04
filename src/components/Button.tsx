import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

type ButtonBaseProps = {
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  children: React.ReactNode;
  className?: string;
};

type ButtonAsButtonProps = ButtonBaseProps & HTMLMotionProps<"button"> & { href?: never };
type ButtonAsAnchorProps = ButtonBaseProps & HTMLMotionProps<"a"> & { href: string };

type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;

export const Button = ({ variant = 'primary', href, children, className, ...props }: ButtonProps) => {
  const baseStyle = "px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-accent hover:bg-[#a65917] text-white shadow-lg hover:shadow-accent/30",
    secondary: "bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm",
    outline: "border border-accent text-accent hover:bg-accent hover:text-white"
  };

  const combinedClassName = twMerge(baseStyle, variants[variant], className);

  if (href) {
    return (
      <motion.a 
        href={href} 
        className={combinedClassName}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...(props as HTMLMotionProps<"a">)}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button 
      className={combinedClassName} 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...(props as HTMLMotionProps<"button">)}
    >
      {children}
    </motion.button>
  );
};
