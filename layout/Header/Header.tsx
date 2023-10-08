import clsx from 'clsx';
import styles from './Header.module.css';
import { HeaderProps } from './Header.props';

export const Header = ({ ...props }: HeaderProps) => (
  <header className={clsx(styles.header)} {...props}>
    Header
  </header>
);
