import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
} from 'next';
import axios from 'axios';
import { withLayout } from '@/layout/Layout';
import { MenuItem } from '@/interfaces/menu.interface';
import {
  TopLevelCategory,
  TopPageModel,
} from '@/interfaces/page.interface';
import { ParsedUrlQuery } from 'querystring';
import { ProductModel } from '@/interfaces/product.interface';
import { firstLevelMenu } from '@/helpers/helpers';
import { TopPage } from '@/page-components';
import { API } from '@/helpers/api';
import Head from 'next/head';

function Alias({
  products,
  firstCategory,
  page,
}: AliasProps): JSX.Element {
  return (
    <>
      <Head>
        <title>{page?.metaTitle}</title>
        <meta name="description" content={page?.metaDescription} />
        <meta property="og:title" content={page?.metaTitle} />
        <meta
          property="og:description"
          content={page?.metaDescription}
        />
        <meta property="og:type" content="article" />
      </Head>
      <TopPage
        page={page}
        firstCategory={firstCategory}
        products={products}
      />
    </>
  );
}

export default withLayout(Alias);

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: string[] = [];
  for (const m of firstLevelMenu) {
    const { data: menu } = await axios.post<MenuItem[]>(
      API.topPage.find,
      {
        firstCategory: m.id,
      }
    );
    paths = paths.concat(
      menu.flatMap((s) =>
        s.pages.map((p) => `/${m.route}/${p.alias}`)
      )
    );
  }

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<AliasProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }
  const { alias, type } = params;
  const firstCategoryItem = firstLevelMenu.find(
    (m) => m.route === type
  );
  if (!firstCategoryItem) {
    return {
      notFound: true,
    };
  }

  try {
    const { data: menu } = await axios.post<MenuItem[]>(
      API.topPage.find,
      {
        firstCategory: firstCategoryItem.id,
      }
    );

    if (!menu || menu?.length === 0) {
      throw new Error('menu');
    }

    const { data: page } = await axios.get<TopPageModel>(
      API.topPage.byAlias + alias
    );

    if (!page) {
      throw new Error('products');
    }

    const { data: products } = await axios.post<ProductModel[]>(
      API.product.find,
      {
        category: page.category,
        limit: 10,
      }
    );

    if (!products) {
      throw new Error('products');
    }

    return {
      props: {
        menu,
        firstCategory: firstCategoryItem.id,
        page,
        products,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

interface AliasProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
  page: TopPageModel;
  products: ProductModel[];
}
