import clsx from 'clsx';
import styles from './Paragraph.module.css';
import { ParagraphProps } from './Paragraph.props';

export const Paragraph = ({ size, children, ...props }: ParagraphProps) => (
  <p className={clsx(styles.paragraph, styles[size])} {...props}>
    {children}
  </p>
);
