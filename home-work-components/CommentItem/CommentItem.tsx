import { DetailedHTMLProps, HTMLAttributes } from 'react';
import clsx from 'clsx';
import { Paragraph } from '@/components';
import { PostComments } from '@/interfaces/home-work/post.interface';
import styles from './CommentItem.module.css';

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  comment: PostComments;
}

export const CommentItem = ({ className, comment, ...props }: Props) => {
  const { body, email, name } = comment;
  return (
    <div className={clsx(styles.comment, className)} {...props}>
      <p className={styles.name}>{name}</p>
      <span className={styles.dot}>&bull;</span>
      <p className={styles.email}>{email}</p>
      <Paragraph size="medium" className={styles.text}>
        {body}
      </Paragraph>
    </div>
  );
};
