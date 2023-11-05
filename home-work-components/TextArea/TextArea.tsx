import { DetailedHTMLProps, TextareaHTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';
import styles from './TextArea.module.css';
import { FieldError } from 'react-hook-form';

interface Props
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  label?: string;
  error?: FieldError;
}

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ label, error, className, ...props }, ref) => (
    <div className={clsx(styles.field, className)}>
      {label && <label htmlFor={props.id}>{label}</label>}
      <textarea className={styles.textarea} ref={ref} {...props}></textarea>
      {error && <p>{error.message}</p>}
    </div>
  )
);
