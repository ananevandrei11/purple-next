import { Rating } from '@/components';
import { ReviewModel } from '@/interfaces/product.interface';
import clsx from 'clsx';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './Review.module.css';
import { Person } from '@/Icon/svg/Person';
import intlFormat from 'date-fns/intlFormat';

export interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  review: ReviewModel;
}

function reviewDate(date: string) {
  return intlFormat(
    new Date(date),
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    },
    {
      locale: 'ru-RU',
    }
  );
}

export const Review = ({ review, className }: Props) => {
  return (
    <div className={clsx(styles.review, className)}>
      <div className={styles.header}>
        <Person />
        <p>{review.name}:</p>
        <p>{review.title}</p>
        <p>{reviewDate(review.updatedAt as string)}</p>
        <Rating rating={review.rating} />
      </div>
      <p>{review.description}</p>
      <hr className={styles.divider} />
    </div>
  );
};
