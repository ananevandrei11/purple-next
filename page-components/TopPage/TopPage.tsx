import { TopLevelCategory, TopPageModel } from '@/interfaces/page.interface';
import { ProductModel } from '@/interfaces/product.interface';

export const TopPage = ({ page }: Props): JSX.Element => {
  return <pre>{JSON.stringify(page, null, 2)}</pre>;
};

interface Props {
  firstCategory: TopLevelCategory;
  page: TopPageModel;
  products: ProductModel[];
}
