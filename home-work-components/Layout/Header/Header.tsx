import Link from 'next/link';
import clsx from 'clsx';
import styles from './Header.module.css';
import { HeaderProps } from './Header.props';
import { GitHub } from '@/Icon/svg/GitHub';

export const Header = ({ className, ...props }: HeaderProps) => (
  <header className={clsx(styles.header, className)} {...props}>
    <Link href="/home-work" className={styles.home}>
      My Blog
    </Link>
    <p className={styles.logo}>LOGO</p>
    <Link href="https://github.com" target="blank" className={styles.github}>
      <GitHub />
    </Link>
  </header>
);
