import { PropsWithChildren } from 'react';
import clsx from 'clsx';
import { HTagProps } from './HTag.props';
import styles from './HTag.module.css';

export const HTag = ({
  tag = 'h1',
  className,
  children,
}: PropsWithChildren<HTagProps>): JSX.Element => {
  const Component = tag;
  return (
    <Component className={clsx(styles.tag, styles[tag], className)}>
      {children}
    </Component>
  );
};
