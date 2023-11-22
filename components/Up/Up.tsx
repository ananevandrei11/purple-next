import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  useEffect,
} from 'react';
import styles from './Up.module.css';
import clsx from 'clsx';
import { useScrollY } from '@/hooks';
import { useAnimation } from 'framer-motion';
import { ButtonSmall } from '../ButtonSmall/ButtonSmall';

export interface UpProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export const Up = ({ className }: UpProps) => {
  const controls = useAnimation();
  const scrollY = useScrollY();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    console.log(scrollY / document.body.scrollHeight);
    controls.start({ opacity: scrollY / document.body.scrollHeight });
  }, [scrollY, controls]);

  return (
    <ButtonSmall
      appearance="primary"
      initial={{ opacity: 0 }}
      animate={controls}
      onClick={scrollToTop}
      className={clsx(styles.up, className)}
      type="button"
      variant="up"
    />
  );
};
