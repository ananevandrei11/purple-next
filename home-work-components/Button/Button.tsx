import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import clsx from 'clsx';
import styles from './Button.module.css';

export interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  appearance: 'black';
}

export const Button = ({
  appearance,
  children,
  className,
  ...props
}: Props) => (
  <button
    className={clsx(styles.btn, styles[appearance], className)}
    {...props}>
    {children}
  </button>
);
