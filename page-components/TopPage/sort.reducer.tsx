import { SortEnum } from '@/components/Sort/Sort';
import { ProductModel } from '@/interfaces/product.interface';

export type SortActions = {
  type: SortEnum | 'newState';
  products?: ProductModel[];
};

export interface SortReducerState {
  sort: SortEnum;
  products: ProductModel[];
}

export const sortReducer = (
  state: SortReducerState,
  action: SortActions
): SortReducerState => {
  switch (action.type) {
    case SortEnum.Rating:
      return {
        sort: SortEnum.Rating,
        products: state.products.sort((a, b) =>
          a.initialRating > b.initialRating ? -1 : 1
        ),
      };

    case SortEnum.Price:
      return {
        sort: SortEnum.Price,
        products: state.products.sort((a, b) => (a.price > b.price ? 1 : -1)),
      };

    case 'newState':
      return {
        sort: SortEnum.Rating,
        products: action.products ? action.products : state.products,
      };

    default:
      throw new Error('Sort is wrong');
  }
};
