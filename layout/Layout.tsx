import {
  FunctionComponent,
  PropsWithChildren,
  useRef,
  useState,
} from 'react';
import { SideBar } from './SideBar/SideBar';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import styles from './Layout.module.css';
import {
  AppContextProvider,
  IAppContext,
} from '@/context/app.context';
import { Up } from '@/components';
import clsx from 'clsx';

function Layout({
  children,
}: PropsWithChildren<unknown>): JSX.Element {
  const [isSkipLinkShow, setSkipLinkShow] = useState<boolean>(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const skipContentAction = () => {
    setSkipLinkShow(false);
    bodyRef.current?.focus();
  };

  return (
    <div className={styles.wrapper}>
      <button
        onFocus={() => setSkipLinkShow(true)}
        onClick={skipContentAction}
        tabIndex={1}
        className={clsx(styles.skipLink, {
          [styles.skipLinkShow]: isSkipLinkShow,
        })}>
        Сразу к содержанию
      </button>
      <Header className={styles.header} />
      <SideBar className={styles.sidebar} />
      <main
        role="main"
        tabIndex={0}
        ref={bodyRef}
        className={styles.content}>
        {children}
      </main>
      <Footer className={styles.footer} />
      <Up className={styles.up} />
    </div>
  );
}

export function withLayout<
  T extends Record<string, unknown> & IAppContext
>(Component: FunctionComponent<T>) {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <AppContextProvider
        menu={props.menu}
        firstCategory={props.firstCategory}>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    );
  };
}
