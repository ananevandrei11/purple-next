import { DetailedHTMLProps, HTMLAttributes } from 'react';
import clsx from 'clsx';
import styles from './Card.module.css';

export interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  color?: 'white' | 'blue';
  className?: string;
}

export const Card = ({
  color = 'white',
  className,
  children,
  ...props
}: CardProps): JSX.Element => {
  return (
    <div className={clsx(styles.card, styles[color], className)} {...props}>
      {children}
    </div>
  );
};
