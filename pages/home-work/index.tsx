import { useEffect, useState } from 'react';
import { Noto_Sans_KR } from 'next/font/google';
import { GetStaticProps } from 'next/types';

import { CardsGrid, LikeBtn } from '@/home-work-components';
import { withLayoutHM } from '@/home-work-components/Layout/Layout';
import { PostItem } from '@/interfaces/home-work/post.interface';
import axios from 'axios';
import { useHMContext } from '@/context/home-work';

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  preload: true,
});

function HomeWork({ posts, github }: HomeWorkProps): JSX.Element {
  const [activeLike, setActiveLike] = useState<boolean>(false);
  const { setGitHub } = useHMContext();

  useEffect(() => {
    setGitHub?.(github);
  });

  const handleLike = async () => {
    try {
      const isLike = !activeLike;
      const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: isLike ? 'PATCH' : 'DELETE',
      });

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
    <div className={`${notoSansKR.className}`}>
      <CardsGrid cards={posts} />
      <LikeBtn active={activeLike} onClick={handleLike} />
      <div>{posts.length}</div>
    </div>
  );
}

export default withLayoutHM(HomeWork);

export const getStaticProps: GetStaticProps<HomeWorkProps> = async () => {
  const { data: posts, status } = await axios.get<PostItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN_HM + '/posts?_limit=10'
  );

  const gitHubLink = 'https://github.com/ananevandrei11';

  if (status >= 400) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      posts,
      github: gitHubLink,
    },
  };
};

interface HomeWorkProps extends Record<string, unknown> {
  posts: PostItem[];
  github: string;
}
