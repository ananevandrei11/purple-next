import clsx from 'clsx';
import { HTagProps } from './HTag.props';
import styles from './HTag.module.css';

export const HTag = ({
  tag,
  className,
  children,
  ...props
}: HTagProps): JSX.Element => {
  const Component = tag;
  return (
    <Component className={clsx(styles[tag], className)} {...props}>
      {children}
    </Component>
  );
};
