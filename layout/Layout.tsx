import { FunctionComponent, PropsWithChildren } from 'react';
import { SideBar } from './SideBar/SideBar';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import styles from './Layout.module.css';
import { AppContextProvider, IAppContext } from '@/context/app.context';

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

export function withLayout<T extends Record<string, unknown> & IAppContext>(
  Component: FunctionComponent<T>
) {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    );
  };
}
