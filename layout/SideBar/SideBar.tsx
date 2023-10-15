import clsx from 'clsx';
import styles from './SideBar.module.css';
import { SideBarProps } from './SideBar.props';
import { Menu } from '../Menu/Menu';

export const SideBar = ({ ...props }: SideBarProps) => (
  <aside className={clsx(styles.sidebar)} {...props}>
    <Menu />
  </aside>
);
