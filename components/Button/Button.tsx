import clsx from 'clsx';
import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import { ArrowRight } from '@/Icon';
import { motion, useMotionValue } from 'framer-motion';

export const Button = ({
  appearance,
  arrow,
  children,
  className,
  ...props
}: ButtonProps) => {
  const scale = useMotionValue(1);

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      style={{ scale }}
      className={clsx(styles.button, styles[appearance], className)}
      {...props}>
      {arrow === 'left' && <ArrowRight />}
      {children}
      {arrow === 'right' && <ArrowRight />}
    </motion.button>
  );
};
