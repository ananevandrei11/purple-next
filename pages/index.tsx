import { useState } from 'react';
import { GetStaticProps } from 'next';
// import { Noto_Sans_KR } from 'next/font/google';
import axios from 'axios';
import { Button, HTag, Paragraph, Rating, Tag } from '@/components';
import Logo from '@/public/vercel.svg';
import { GraduationHat } from '@/Icon';
import { withLayout } from '@/layout/Layout';
import { MenuItem } from '@/interfaces/menu.interface';
import { API } from '@/helpers/api';

// https://github.com/vercel/next.js/issues/45080 - Error with fonts
// const notoSansKR = Noto_Sans_KR({
//   subsets: ['latin', 'cyrillic'],
//   weight: ['300', '400', '500', '600', '700'],
//   display: 'swap',
//   preload: true,
// });

function Home(): JSX.Element {
  const [rating, setRating] = useState(3);
  return (
    <div
    // className={`${notoSansKR.className}`}
    >
      <Rating rating={rating} isEditable setRating={setRating} />
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
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Necessitatibus facilis quae atque sunt reprehenderit
        consectetur rerum corporis. Numquam ex quo sed, laboriosam
        illum perspiciatis. Mollitia quia possimus accusamus earum
        voluptas. Nemo harum accusantium officia ab in dolorem dicta
        dignissimos! Odio illum vel minima eaque cumque laborum,
        nesciunt aperiam explicabo qui temporibus quos voluptates
        facilis, ad illo. Minus neque cupiditate cumque!
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
    </div>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    API.topPage.find,
    {
      firstCategory,
    }
  );

  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
