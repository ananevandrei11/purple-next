import { useContext } from 'react';
import { AppContext } from '@/context/app.context';
import { FirstLevelMenuItem, PageItem } from '@/interfaces/menu.interface';
import { Book, Cloud, Goods, GraduationHat } from '@/Icon';
import { TopLevelCategory } from '@/interfaces/page.interface';
import styles from './Menu.module.css';
import Link from 'next/link';
import clsx from 'clsx';

const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: 'course',
    name: 'Курсы',
    icon: <GraduationHat />,
    id: TopLevelCategory.Courses,
  },
  {
    route: 'services',
    name: 'Сервисы',
    icon: <Cloud />,
    id: TopLevelCategory.Services,
  },
  {
    route: 'books',
    name: 'Книги',
    icon: <Book />,
    id: TopLevelCategory.Books,
  },
  {
    route: 'products',
    name: 'Продукты',
    icon: <Goods />,
    id: TopLevelCategory.Products,
  },
];

export const Menu = () => {
  const { menu, firstCategory } = useContext(AppContext);

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((first) => (
          <li key={first.id}>
            <Link
              href={`/${first.route}`}
              className={clsx(styles.firstLevel, {
                [styles.firstLevelActive]: first.id === firstCategory,
              })}>
              <span className={styles.firstLevelIcon}>{first.icon}</span>
              <span>{first.name}</span>
            </Link>
            {first.id === firstCategory && buildSecondLevel(first)}
          </li>
        ))}
      </>
    );
  };

  const buildSecondLevel = (menuActive: FirstLevelMenuItem) => {
    return (
      <ul className={styles.secondMenu}>
        {menu.map((second) => (
          <li key={second._id.secondCategory} className={styles.secondLevel}>
            <button className={styles.secondLevelBtn} type="button">
              {second._id.secondCategory}
            </button>
            <ul
              className={clsx(styles.thirdMenu, {
                [styles.thirdMenuActive]: second?.isOpened,
              })}>
              {buildThirdLevel(second.pages, menuActive.route)}
            </ul>
          </li>
        ))}
      </ul>
    );
  };
  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return (
      <>
        {pages.map((third) => (
          <li
            key={third._id}
            className={clsx(styles.thirdLevel, {
              [styles.thirdLevelActive]: true,
            })}>
            <Link href={`/${route}/${third.alias}`}>{third.category}</Link>
          </li>
        ))}
      </>
    );
  };

  return <ul className={styles.menu}>{buildFirstLevel()}</ul>;
};
