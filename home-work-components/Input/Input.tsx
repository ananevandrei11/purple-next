import { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';
import styles from './Input.module.css';
import { FieldError } from 'react-hook-form';

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  error?: FieldError;
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, error, className, ...props }, ref) => (
    <div className={clsx(styles.field, className)}>
      {label && <label htmlFor={props.id}>{label}</label>}
      <input ref={ref} {...props} className={styles.input} />
      {error && <p>{error.message}</p>}
    </div>
  )
);
