import clsx from 'clsx';
import styles from './Header.module.css';
import { HeaderProps } from './Header.props';
import Logo from '@/public/logo.svg';
import { ButtonSmall } from '@/components';
import { motion } from 'framer-motion';
import { SideBar } from '../SideBar/SideBar';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export const Header = ({ className, ...props }: HeaderProps) => {
  const router = useRouter();
  const [isOpened, setOpened] = useState<boolean>(false);
  const variants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        stiffness: 20,
      },
    },
    closed: {
      opacity: 0,
      x: '100%',
    },
  };

  useEffect(() => {
    setOpened(false);
  }, [router]);

  return (
    <header className={clsx(styles.header, className)} {...props}>
      <Logo />
      <ButtonSmall
        appearance="white"
        variant="menu"
        onClick={() => setOpened(true)}
      />
      <motion.div
        animate={isOpened ? 'opened' : 'closed'}
        variants={variants}
        initial={'closed'}
        className={styles.menu}>
        <SideBar />
        <ButtonSmall
          onClick={() => setOpened(false)}
          className={styles.close}
          appearance="white"
          variant="close"
        />
      </motion.div>
    </header>
  );
};
