import { Button, HTag, Paragraph, Tag } from '@/components';
import { Noto_Sans_KR } from 'next/font/google';
import Logo from '@/public/vercel.svg';
import { GraduationHat } from '@/Icon';
import { CardTest } from '@/blocks';
import PreviewCard from '@/public/PreviewCard.jpg';

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  preload: true,
});

export default function Home(): JSX.Element {
  return (
    <main className={`${notoSansKR.className}`}>
      <div>
        <CardTest
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
      <HTag tag="h1">Someone Text</HTag>
      <Button type="button" appearance="primary">
        Button
      </Button>
      <Button type="button" appearance="ghost">
        Button
      </Button>
      <Logo />
      <GraduationHat />
      <Paragraph size="large">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus
        facilis quae atque sunt reprehenderit consectetur rerum corporis.
        Numquam ex quo sed, laboriosam illum perspiciatis. Mollitia quia
        possimus accusamus earum voluptas. Nemo harum accusantium officia ab in
        dolorem dicta dignissimos! Odio illum vel minima eaque cumque laborum,
        nesciunt aperiam explicabo qui temporibus quos voluptates facilis, ad
        illo. Minus neque cupiditate cumque!
      </Paragraph>
      <Tag color="red" size="medium">
        Red
      </Tag>
      <Tag color="primary" size="medium">
        Default
      </Tag>
      <Tag size="small" color="green" href="/">
        Default
      </Tag>
    </main>
  );
}
