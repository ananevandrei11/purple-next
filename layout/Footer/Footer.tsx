import clsx from 'clsx';
import styles from './Footer.module.css';
import { FooterProps } from './Footer.props';

export const Footer = ({ ...props }: FooterProps) => (
  <footer className={clsx(styles.footer)} {...props}>
    Footer
  </footer>
);
