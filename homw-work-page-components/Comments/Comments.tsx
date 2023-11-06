import { HTag } from '@/components';
import { PostComments } from '@/interfaces/home-work/post.interface';
import styles from './Comments.module.css';
import { CommentItem } from '@/home-work-components';

interface Props {
  comments: PostComments[];
}

const Comments = ({ comments }: Props) => (
  <section>
    <HTag tag="h2" className={styles.title}>
      Comments
    </HTag>
    {comments.map((item) => (
      <CommentItem key={item.id} comment={item} />
    ))}
  </section>
);

export default Comments;
