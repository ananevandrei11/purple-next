import { useState } from 'react';
import Image from 'next/image';
import { PostComments, PostItem } from '@/interfaces/home-work/post.interface';
import PreviewCard from '@/public/PreviewCard.jpg';
import styles from './PostPage.module.css';
import { LikeBtn } from '@/home-work-components';
import { HTag } from '@/components';
import Comments from '../Comments/Comments';

interface Props {
  post: PostItem;
  comments: PostComments[];
}

const PostPage = ({ post, comments }: Props) => {
  const { body, title, id } = post;
  const [activeLike, setActiveLike] = useState<boolean>(false);

  const handleLike = async () => {
    try {
      const isLike = !activeLike;
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          method: isLike ? 'PATCH' : 'DELETE',
        }
      );

      if (!res.ok) {
        const text = await res.text();
        throw Error(text);
      }

      setActiveLike(isLike);
      return isLike;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.wrapper}>
      <HTag tag="h1" className={styles.title}>
        {title}
      </HTag>

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

      <article
        dangerouslySetInnerHTML={{ __html: body }}
        className={styles.article}
      />

      <div className={styles.like}>
        <span>Понравилось? Жми</span>
        <LikeBtn active={activeLike} onClick={handleLike} />
      </div>

      {comments && comments.length > 0 && <Comments comments={comments} />}
    </div>
  );
};

export default PostPage;
