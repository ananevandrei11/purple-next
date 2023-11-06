import {
  DetailedHTMLProps,
  ForwardedRef,
  TextareaHTMLAttributes,
  forwardRef,
} from 'react';
import styles from './Textarea.module.css';
import clsx from 'clsx';
import { FieldError } from 'react-hook-form';

export interface Props
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  error?: FieldError;
}

export const Textarea = forwardRef(
  (
    { className, error, ...props }: Props,
    ref: ForwardedRef<HTMLTextAreaElement>
  ) => {
    return (
      <>
        <textarea
          ref={ref}
          className={clsx(className, styles.textarea)}
          {...props}
        />
        {error && <p>{error?.message}</p>}
      </>
    );
  }
);
