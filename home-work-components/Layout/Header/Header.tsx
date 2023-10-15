import Link from 'next/link';
import clsx from 'clsx';
import styles from './Header.module.css';
import { HeaderProps } from './Header.props';
import { GitHub } from '@/Icon/svg/GitHub';
import { useContext } from 'react';
import { HWContext } from '@/context/home-work.context';

export const Header = ({ className, ...props }: HeaderProps) => {
  const { github } = useContext(HWContext);

  return (
    <header className={clsx(styles.header, className)} {...props}>
      <Link href="/home-work" className={styles.home}>
        My Blog
      </Link>
      <p className={styles.logo}>LOGO</p>
      <Link href={github} target="blank" className={styles.github}>
        <GitHub />
      </Link>
    </header>
  );
};
