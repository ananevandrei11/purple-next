import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  forwardRef,
} from 'react';
import clsx from 'clsx';
import styles from './Input.module.css';
import { FieldError } from 'react-hook-form';

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  error?: FieldError;
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ error, className, ...props }, ref) => (
    <div className={clsx(styles.field, className)}>
      <input ref={ref} {...props} className={styles.input} />
      {error && <p role="alert">{error.message}</p>}
    </div>
  )
);
