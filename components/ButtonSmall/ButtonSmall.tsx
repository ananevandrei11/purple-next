import clsx from 'clsx';
import styles from './ButtonSmall.module.css';

import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ForwardedRef,
  forwardRef,
} from 'react';
import { motion } from 'framer-motion';

export interface ButtonSmallProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  appearance: 'primary' | 'white';
  variant: 'up' | 'close' | 'menu';
}

export const ButtonSmall = motion(
  forwardRef(
    (
      { appearance, variant, className, ...props }: ButtonSmallProps,
      ref: ForwardedRef<HTMLButtonElement>
    ) => (
      <button
        ref={ref}
        className={clsx(styles.button, styles[appearance], className)}
        {...props}>
        {variant === 'up' && 'Up'}
        {variant === 'close' && 'X'}
        {variant === 'menu' && <span>&#9776;</span>}
      </button>
    )
  )
);
