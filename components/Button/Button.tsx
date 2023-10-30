import clsx from 'clsx';
import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import { ArrowRight } from '@/Icon';

export const Button = ({
  appearance,
  arrow,
  children,
  className,
  ...props
}: ButtonProps) => (
  <button
    className={clsx(styles.button, styles[appearance], className)}
    {...props}>
    {arrow === 'left' && <ArrowRight />}
    {children}
    {arrow === 'right' && <ArrowRight />}
  </button>
);
