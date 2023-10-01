import { Noto_Sans_KR } from 'next/font/google';
import { Card } from '@/home-work-components';
import PreviewCard from '@/public/PreviewCard.jpg';
import { LikeBtn } from '@/home-work-components/LikeBtn/LikeBtn';
import { useState } from 'react';

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  preload: true,
});

export default function Home(): JSX.Element {
  const [activeLike, setActiveLike] = useState<boolean>(false);

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
    <main className={`${notoSansKR.className}`}>
      <div>
        <Card
          img={PreviewCard}
          theme="Front-end"
          datePublish="1 месяц назад"
          like="4"
          title="Как работать с CSS Grid"
          text={`Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы..`}
          readTime="3 минуты"
          readLink="Читать"
          readHref="/"
        />
      </div>
      <br />
      <hr />
      <br />
      <LikeBtn active={activeLike} onClick={handleLike} />
    </main>
  );
}
