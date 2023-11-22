import { HTag } from '@/components';
import { withLayout } from '@/layout/Layout';

export function Page500(): JSX.Element {
  return <HTag tag="h1">500 Error</HTag>;
}

export default withLayout(Page500);
