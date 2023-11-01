import { HTag, Paragraph } from '@/components';
import { PostComments } from '@/interfaces/home-work/post.interface';
import styles from './Comments.module.css';

interface Props {
  comments: PostComments[];
}

const Comments = ({ comments }: Props) => (
  <section>
    <HTag tag="h2" className={styles.title}>
      Comments
    </HTag>
    {comments.map(({ id, name, email, body }) => (
      <div key={id} className={styles.comment}>
        <p className={styles.name}>{name}</p>
        <span className={styles.dot}>&bull;</span>
        <p className={styles.email}>{email}</p>
        <Paragraph size="medium" className={styles.text}>{body}</Paragraph>
      </div>
    ))}
  </section>
);

export default Comments;
