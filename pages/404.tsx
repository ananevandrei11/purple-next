import { HTag } from '@/components';
import { withLayout } from '@/layout/Layout';

export function Page404(): JSX.Element {
  return <HTag tag="h1">404 Error. Page not found</HTag>;
}

export default withLayout(Page404);
