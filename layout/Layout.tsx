import { FunctionComponent, PropsWithChildren } from 'react';
import { SideBar } from './SideBar/SideBar';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import styles from './Layout.module.css';

function Layout({ children }: PropsWithChildren<unknown>): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <SideBar className={styles.sidebar} />
      <main className={styles.content}>{children}</main>
      <Footer className={styles.footer} />
    </div>
  );
}

export function withLayout<T extends Record<string, unknown>>(
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
