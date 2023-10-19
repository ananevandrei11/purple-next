import { GraduationHat, Cloud, Book, Goods } from '@/Icon';
import { FirstLevelMenuItem } from '@/interfaces/menu.interface';
import { TopLevelCategory } from '@/interfaces/page.interface';

export const firstLevelMenu: FirstLevelMenuItem[] = [
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
