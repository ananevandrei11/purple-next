import Link from 'next/link';
import clsx from 'clsx';
import { format } from 'date-fns';
import styles from './Footer.module.css';
import { FooterProps } from './Footer.props';

export const Footer = ({ className, ...props }: FooterProps) => (
  <footer className={clsx(styles.footer, className)} {...props}>
    <p>OwlTop &copy; 2020 - {format(new Date(), 'yyyy')} Все права защищены</p>
    <Link href="/home-work" target="_blank" className={styles.link}>
      Пользовательское соглашение
    </Link>
    <Link href="/home-work" target="_blank" className={styles.link}>
      Политика конфиденциальности
    </Link>
  </footer>
);
