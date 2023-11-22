import {
  DetailedHTMLProps,
  ForwardedRef,
  HTMLAttributes,
  forwardRef,
} from 'react';
import clsx from 'clsx';
import styles from './Card.module.css';
import { motion } from 'framer-motion';

export interface CardProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  color?: 'white' | 'blue';
  className?: string;
}

export const Card = motion(
  forwardRef(
    (
      { color = 'white', className, children, ...props }: CardProps,
      ref: ForwardedRef<HTMLDivElement>
    ): JSX.Element => {
      return (
        <div
          ref={ref}
          className={clsx(styles.card, styles[color], className)}
          {...props}>
          {children}
        </div>
      );
    }
  )
);
