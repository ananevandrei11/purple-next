import clsx from 'clsx';
import styles from './SideBar.module.css';
import { SideBarProps } from './SideBar.props';
import { Menu } from '../Menu/Menu';
import Logo from '@/public/logo.svg';
import { Search } from '@/components';

export const SideBar = ({ className, ...props }: SideBarProps) => (
  <aside className={clsx(styles.sidebar, className)} {...props}>
    <Logo />
    <Search />
    <nav role="navigation" className={styles.nav}>
      <Menu />
    </nav>
  </aside>
);
