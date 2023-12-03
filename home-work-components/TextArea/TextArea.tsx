import {
  DetailedHTMLProps,
  TextareaHTMLAttributes,
  forwardRef,
} from 'react';
import clsx from 'clsx';
import styles from './TextArea.module.css';
import { FieldError } from 'react-hook-form';

interface Props
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  error?: FieldError;
}

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ error, className, ...props }, ref) => (
    <div className={clsx(styles.field, className)}>
      <textarea
        className={styles.textarea}
        ref={ref}
        {...props}></textarea>
      {error && <p role="alert">{error.message}</p>}
    </div>
  )
);
