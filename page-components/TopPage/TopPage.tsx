import { HTag, Input, Tag, Textarea } from '@/components';
import {
  TopLevelCategory,
  TopPageModel,
} from '@/interfaces/page.interface';
import { ProductModel } from '@/interfaces/product.interface';
import styles from './TopPage.module.css';
import { HHData } from '..';
import { Advantages } from '../Advatages/Advantages';
import Sort, { SortEnum } from '@/components/Sort/Sort';
import { useEffect, useReducer } from 'react';
import { sortReducer } from './sort.reducer';
import Product from '../Product/Product';

export const TopPage = ({ page, products }: Props): JSX.Element => {
  const { title } = page;
  const [{ products: sortProducts, sort }, dispatchSort] = useReducer(
    sortReducer,
    {
      products,
      sort: SortEnum.Rating,
    }
  );
  const setSort = (sort: SortEnum) => {
    dispatchSort({ type: sort });
  };

  useEffect(() => {
    dispatchSort({ type: 'newState', products });
  }, [products]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <HTag tag="h1">{title}</HTag>
        {sortProducts && (
          <Tag color="grey" size="medium">
            {sortProducts.length}
          </Tag>
        )}
        <Sort sort={sort} setSort={setSort} />
      </div>

      {sortProducts &&
        sortProducts.map((p) => (
          <Product layout key={p._id} product={p} />
        ))}

      {page.hh && (
        <section className={styles.hh}>
          <div className={styles.hhTitle}>
            <HTag tag="h2">Вакансии - {page.category}</HTag>
            <Tag color="red" size="medium">
              HH.ru
            </Tag>
          </div>
          <HHData data={page.hh} />
        </section>
      )}

      <Input />
      <Textarea />

      {page?.advantages && page?.advantages.length > 0 && (
        <Advantages advantages={page.advantages} />
      )}

      {page.seoText && (
        <article
          className={styles.seoText}
          dangerouslySetInnerHTML={{ __html: page.seoText }}
        />
      )}

      {page.tags && page.tags.length > 0 && (
        <section className={styles.skills}>
          <HTag tag="h2">Получаемые навыки</HTag>
          <div className={styles.skillsTag}>
            {page.tags.map((t) => (
              <Tag key={t} color="primary" size="small">
                {t}
              </Tag>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

interface Props {
  firstCategory: TopLevelCategory;
  page: TopPageModel;
  products: ProductModel[];
}
