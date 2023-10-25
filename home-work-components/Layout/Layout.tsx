import { FunctionComponent, PropsWithChildren } from 'react';
import { Header } from './Header/Header';
import styles from './Layout.module.css';
import { HWContextProvider, IHWContext } from '@/context/home-work';

function Layout({ children }: PropsWithChildren<unknown>): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <main className={styles.content}>{children}</main>
    </div>
  );
}

export function withLayoutHM<T extends Record<string, unknown> & IHWContext>(
  Component: FunctionComponent<T>
) {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <HWContextProvider github={props.github}>
        <Layout>
          <Component {...props} />
        </Layout>
      </HWContextProvider>
    );
  };
}
