import PreviewCard from '@/public/PreviewCard.jpg';
import { Card } from '../Card/Card';
import styles from './CarsGrid.module.css';

const CARDS = [
  {
    id: 0,
    img: PreviewCard,
    theme: 'Front-end',
    datePublish: '2021-10-05T14:48:00.000Z',
    like: '4',
    title: 'Как работать с CSS Grid',
    text: `Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы..`,
    readTime: '31',
    readLink: 'Читать',
    readHref: '/',
  },
  {
    id: 1,
    img: PreviewCard,
    theme: 'Back-end',
    datePublish: '2023-10-01T14:48:00.000Z',
    like: '155',
    title: 'Как работать с Node',
    text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus ducimus maiores autem iusto est sed?`,
    readTime: '157',
    readLink: 'Читать',
    readHref: '/',
  },
  {
    id: 2,
    img: PreviewCard,
    theme: 'Design',
    datePublish: '2023-01-05T14:48:00.000Z',
    like: '5',
    title: 'Как работать с Figma',
    text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus ducimus maiores autem iusto est sed?`,
    readTime: '2',
    readLink: 'Читать',
    readHref: '/',
  },
];

export default function CardsGrid(): JSX.Element {
  return (
    <div className={styles.grid}>
      {CARDS.map((c) => (
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
