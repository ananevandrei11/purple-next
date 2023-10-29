import { useRouter } from 'next/router';
import Link from 'next/link';
import clsx from 'clsx';
import { useAppContext } from '@/context/app.context';
import { FirstLevelMenuItem, PageItem } from '@/interfaces/menu.interface';
import { firstLevelMenu } from '@/helpers/helpers';
import styles from './Menu.module.css';

export const Menu = () => {
  const { menu, firstCategory, setMenu } = useAppContext();
  const router = useRouter();

  const openSecondLevel = (secondCategory: string) => {
    setMenu?.(
      menu.map((m) => {
        if (m._id.secondCategory === secondCategory) {
          m.isOpened = !m.isOpened;
        }
        return m;
      })
    );
  };

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
        {menu.map((second) => {
          const rout = router.asPath.split('/')[2];
          if (second.pages.map((p) => p.alias).includes(rout)) {
            second.isOpened = true;
          }

          return (
            <li key={second._id.secondCategory} className={styles.secondLevel}>
              <button
                className={styles.secondLevelBtn}
                onClick={() => openSecondLevel(second._id.secondCategory)}
                type="button">
                {second._id.secondCategory}
              </button>
              <ul
                className={clsx(styles.thirdMenu, {
                  [styles.thirdMenuActive]: second?.isOpened,
                })}>
                {buildThirdLevel(second.pages, menuActive.route)}
              </ul>
            </li>
          );
        })}
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
              [styles.thirdLevelActive]:
                `/${route}/${third.alias}` === router.asPath,
            })}>
            <Link href={`/${route}/${third.alias}`}>{third.category}</Link>
          </li>
        ))}
      </>
    );
  };

  return <ul className={styles.menu}>{buildFirstLevel()}</ul>;
};
