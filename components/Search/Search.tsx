import {
  DetailedHTMLProps,
  FormEvent,
  HTMLAttributes,
  useState,
} from 'react';
import { Button, Input } from '..';
import clsx from 'clsx';
import styles from './Search.module.css';
import { SearchIcon } from '@/Icon';
import { useRouter } from 'next/router';

interface Props
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

export const Search = ({ className }: Props) => {
  const router = useRouter();
  const [search, setSearch] = useState<string>('');

  const goToSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push({
      pathname: '/search',
      query: {
        q: search,
      },
    });
  };

  return (
    <form
      role="search"
      onSubmit={goToSearch}
      className={clsx(className, styles.search)}>
      <Input
        placeholder="Поиск..."
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={styles.input}
      />
      <Button
        appearance="primary"
        type="submit"
        aria-label="Search"
        className={styles.button}>
        <SearchIcon />
      </Button>
    </form>
  );
};
