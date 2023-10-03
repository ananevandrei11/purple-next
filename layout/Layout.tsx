import { FunctionComponent, PropsWithChildren } from 'react';
import { SideBar } from './SideBar/SideBar';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';

function Layout({ children }: PropsWithChildren<unknown>): JSX.Element {
  return (
    <>
      <Header />
      <main>
        <SideBar />
        <section>{children}</section>
      </main>
      <Footer />
    </>
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
