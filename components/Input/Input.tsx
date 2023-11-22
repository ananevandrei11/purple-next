import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  forwardRef,
} from 'react';
import styles from './Input.module.css';
import clsx from 'clsx';
import { FieldError } from 'react-hook-form';

export interface IProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  error?: FieldError;
}

export const Input = forwardRef<HTMLInputElement, IProps>(
  ({ className, ...props }, ref) => {
    return (
      <div>
        <input
          ref={ref}
          className={clsx(className, styles.input)}
          {...props}
        />
        {props.error && <p role="alert">{props.error.message}</p>}
      </div>
    );
  }
);
