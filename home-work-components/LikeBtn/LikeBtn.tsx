import clsx from 'clsx';
import { Like } from '@/Icon';
import { LikeBtnProps } from './LikeBtn.props';
import styles from './LikeBtn.module.css';

export const LikeBtn = ({
  active,
  onClick,
  className,
  ...props
}: LikeBtnProps) => {
  const handleClick = async () => {
    onClick?.();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      {...props}
      className={clsx(styles.btn, className, {
        [styles.active]: active,
      })}>
      <Like />
    </button>
  );
};
