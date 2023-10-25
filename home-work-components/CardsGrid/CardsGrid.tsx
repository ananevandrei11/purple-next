import { useMemo } from 'react';
import PreviewCard from '@/public/PreviewCard.jpg';
import { PostItem } from '@/interfaces/home-work/post.interface';
import styles from './CarsGrid.module.css';
import { Card } from '../Card/Card';

const cardsMock = [
  {
    id: 2021,
    img: PreviewCard,
    theme: 'Front-end',
    datePublish: '2021-10-05T14:48:00.000Z',
    like: '4',
    title: 'Как работать с CSS Grid',
    text: `Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы..`,
    readTime: '31',
    readLink: 'Читать',
    readHref: '/home-work',
  },
  {
    id: 2022,
    img: PreviewCard,
    theme: 'Back-end',
    datePublish: '2023-10-01T14:48:00.000Z',
    like: '155',
    title: 'Как работать с Node',
    text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus ducimus maiores autem iusto est sed?`,
    readTime: '157',
    readLink: 'Читать',
    readHref: '/home-work',
  },
  {
    id: 2023,
    img: PreviewCard,
    theme: 'Design',
    datePublish: '2023-01-05T14:48:00.000Z',
    like: '5',
    title: 'Как работать с Figma',
    text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus ducimus maiores autem iusto est sed?`,
    readTime: '2',
    readLink: 'Читать',
    readHref: '/home-work',
  },
];

const cardMock = {
  img: PreviewCard,
  theme: 'Design',
  datePublish: '2023-01-05T14:48:00.000Z',
  like: '5',
  readTime: '2',
  readLink: 'Читать',
};

export default function CardsGrid({ cards }: Props): JSX.Element {
  const cardsUpdate = useMemo(() => {
    const a = cards.map((c) => ({
      ...c,
      ...cardMock,
      readHref: `/home-work/post/${c.id}`,
      text: c.body,
    }));
    return cardsMock.concat(a);
  }, [cards]);

  return (
    <div className={styles.grid}>
      {cardsUpdate.map((c) => (
        <Card
          key={c.id}
          img={c.img}
          theme={c.theme}
          datePublish={c.datePublish}
          like={c.like}
          title={c.title}
          text={c.text}
          readTime={c.readTime}
          readLink={c.readLink}
          readHref={c.readHref}
        />
      ))}
    </div>
  );
}

interface Props extends Record<string, unknown> {
  cards: PostItem[];
}
