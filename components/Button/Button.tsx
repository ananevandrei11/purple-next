import clsx from 'clsx';
import styles from './Button.module.css';
import { ButtonProps } from './Button.props';

export const Button = ({
  appearance,
  children,
  className,
  ...props
}: ButtonProps) => (
  <button
    className={clsx(styles.button, styles[appearance], className)}
    {...props}>
    {children}
  </button>
);
