import PreviewCard from '@/public/PreviewCard.jpg';
import { Card } from '../Card/Card';
import styles from './CarsGrid.module.css';

const CARDS = [
  {
    img: PreviewCard,
    theme: 'Front-end',
    datePublish: '1 месяц назад',
    like: '4',
    title: 'Как работать с CSS Grid',
    text: `Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы..`,
    readTime: '3 минуты',
    readLink: 'Читать',
    readHref: '/',
  },
  {
    img: PreviewCard,
    theme: 'Back-end',
    datePublish: '2 месяц назад',
    like: '155',
    title: 'Как работать с Node',
    text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus ducimus maiores autem iusto est sed?`,
    readTime: '153 минуты',
    readLink: 'Читать',
    readHref: '/',
  },
  {
    img: PreviewCard,
    theme: 'Design',
    datePublish: '8 месяцев назад',
    like: '5',
    title: 'Как работать с Figma',
    text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus ducimus maiores autem iusto est sed?`,
    readTime: '14 минут',
    readLink: 'Читать',
    readHref: '/',
  },
];

export default function CardsGrid(): JSX.Element {
  return (
    <div className={styles.grid}>
      {CARDS.map((c) => (
        <Card
          key={c.title}
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
