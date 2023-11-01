import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import styles from './Input.module.css';
import clsx from 'clsx';

export interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export const Input = ({ className, ...props }: Props) => {
  return <input className={clsx(className, styles.input)} {...props} />;
};
