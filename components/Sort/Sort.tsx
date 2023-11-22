import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Sort as SortIcon } from '@/Icon';
import styles from './Sort.module.css';
import clsx from 'clsx';

export enum SortEnum {
  Rating,
  Price,
}

export interface Props
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  sort: SortEnum;
  setSort: (sort: SortEnum) => void;
  className?: string;
}

const Sort = ({ setSort, sort }: Props) => {
  return (
    <div className={styles.group}>
      <button
        type="button"
        className={clsx(styles.btn, {
          [styles.active]: sort === SortEnum.Rating,
        })}
        onClick={() => setSort(SortEnum.Rating)}>
        <SortIcon className={styles.icon} />
        <span>По рейтингу</span>
      </button>
      <button
        type="button"
        className={clsx(styles.btn, {
          [styles.active]: sort === SortEnum.Price,
        })}
        onClick={() => setSort(SortEnum.Price)}>
        <SortIcon className={styles.icon} />
        <span>По цене</span>
      </button>
    </div>
  );
};

export default Sort;
