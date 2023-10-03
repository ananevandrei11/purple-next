import { FunctionComponent, PropsWithChildren } from 'react';
import { Header } from './Header/Header';

function Layout({ children }: PropsWithChildren<unknown>): JSX.Element {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
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
