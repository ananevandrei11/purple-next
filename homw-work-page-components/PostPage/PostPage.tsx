import Image from 'next/image';
import { PostItem } from '@/interfaces/home-work/post.interface';
import PreviewCard from '@/public/PreviewCard.jpg';
import styles from './PostPage.module.css';

interface Props {
  post: PostItem;
}

const PostPage = ({ post }: Props) => {
  const { body, title } = post;
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{title}</h1>

      <figure className={styles.figure}>
        <Image
          src={PreviewCard.src}
          placeholder="blur"
          blurDataURL={PreviewCard?.blurDataURL}
          sizes="100vw"
          width={PreviewCard?.width}
          height={PreviewCard?.height}
          priority={false}
          alt={title}
          quality={75}
          className={styles.img}
        />
      </figure>

      <article dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  );
};

export default PostPage;
