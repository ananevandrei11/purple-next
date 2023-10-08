import { FunctionComponent, PropsWithChildren } from 'react';
import { Header } from './Header/Header';
import styles from './Layout.module.css';

function Layout({ children }: PropsWithChildren<unknown>): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <main className={styles.content}>{children}</main>
    </div>
  );
}

export function withLayoutHM<T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
}
