import { useEffect, useState, KeyboardEvent } from 'react';
import clsx from 'clsx';
import { Star } from '@/Icon';
import styles from './Rating.module.css';
import { RatingProps } from './Rating.props';

export const Rating = ({
  isEditable = false,
  rating,
  setRating,
  className,
  ...props
}: RatingProps) => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  const changeDisplay = (i: number) => {
    if (!isEditable) {
      return;
    }
    constructRating(i);
  };

  const onChangeRating = (i: number) => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(i);
  };

  const onKeyChangeRating = (e: KeyboardEvent<HTMLElement>, i: number) => {
    if (e.code !== 'Space') {
      return;
    }
    onChangeRating(i);
  };

  const constructRating = (currentRating: number) => {
    const updatedRatingArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <span
          className={styles.star}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onChangeRating(i + 1)}
          tabIndex={isEditable ? 0 : -1}
          onKeyDown={(e: KeyboardEvent<HTMLElement>) =>
            onKeyChangeRating(e, i + 1)
          }>
          <Star
            className={clsx({
              [styles.fill]: i < currentRating,
              [styles.pure]: i >= currentRating,
              [styles.editable]: isEditable,
            })}
          />
        </span>
      );
    });
    setRatingArray(updatedRatingArray);
  };

  useEffect(() => {
    constructRating(rating);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rating]);

  return (
    <div className={clsx(styles.rating, className)} {...props}>
      {ratingArray.map((r: JSX.Element, i: number) => (
        <span key={i} className={styles.wrapper}>
          {r}
        </span>
      ))}
    </div>
  );
};
