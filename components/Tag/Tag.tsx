import clsx from 'clsx';
import { TagProps } from './Tag.props';
import styles from './Tag.module.css';

export const Tag = ({
  size,
  color,
  className,
  children,
  href,
  ...props
}: TagProps): JSX.Element => (
  <div
    className={clsx(styles.tag, styles[size], styles[color], className)}
    {...props}>
    {href ? <a href={href}>{children}</a> : children}
  </div>
);
