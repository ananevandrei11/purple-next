import { ProductModel } from '@/interfaces/product.interface';
import clsx from 'clsx';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './Product.module.css';
import { Button, HTag, Paragraph, Rating, Tag } from '@/components';
import { numberToStringDigit } from '@/utils/number';
import Image from 'next/image';
import Link from 'next/link';
import { pluralize } from '@/utils/pluralize';

export interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: ProductModel;
  className?: string;
}

const Product = ({ product, className }: Props) => {
  const img = product?.image?.startsWith('http')
    ? product?.image
    : `${process.env.NEXT_PUBLIC_DOMAIN}${product?.image}`;
  return (
    <section className={clsx(className, styles.card)}>
      <div className={styles.header}>
        <figure className={styles.logo}>
          <Image
            src={img || ''}
            alt=""
            width={70}
            height={70}
            layout="responsive"
          />
        </figure>
        <div className={styles.title}>
          <HTag tag="h2">{product?.title}</HTag>
          <div>
            {product?.categories?.map((c) => (
              <Tag color="ghost" size="small" key={c}>
                {c}
              </Tag>
            ))}
          </div>
        </div>
        <div className={styles.price}>
          {product?.price && (
            <>
              <div>
                {numberToStringDigit(product?.price)} &#8381;
                <Tag size="small" color="green">
                  {numberToStringDigit(product?.price - product?.oldPrice)}{' '}
                  &#8381;
                </Tag>
              </div>
              <span>цена</span>
            </>
          )}
        </div>
        <div className={styles.credit}>
          {product?.credit && (
            <>
              {numberToStringDigit(product?.credit)} &#8381;/мес.
              <span>в кредит</span>
            </>
          )}
        </div>
        <div className={styles.rating}>
          <Rating rating={Math.round(product?.initialRating)} />
          <span>
            {pluralize(product?.reviewCount, ['oтзыв', 'отзыва', 'отзывов'])}
          </span>
        </div>
      </div>
      <hr className={styles.divider} />
      <Paragraph size="medium">{product?.description}</Paragraph>
      <div className={styles.characteristics}>
        <div>
          {product?.characteristics?.map((ch) => (
            <div key={ch.name} className={styles.characteristicsItem}>
              <span>{ch.name}</span>
              <span className={styles.characteristicsDivider} />
              <span>{ch.value}</span>
            </div>
          ))}
        </div>
        <span />
        <div>
          {product?.advantages && (
            <div className={styles.advantages}>
              <h6>Преимущества</h6>
              <Paragraph size="small">{product.advantages}</Paragraph>
            </div>
          )}
          {product?.disAdvantages && (
            <div className={styles.disAdvantages}>
              <h6>Недостатки</h6>
              <Paragraph size="small">{product.disAdvantages}</Paragraph>
            </div>
          )}
        </div>
      </div>
      <hr className={styles.divider} />
      <div>
        {product?.link && (
          <Button appearance="primary">
            <Link href={product?.link} target="blank">
              Узнать подробнее
            </Link>
          </Button>
        )}
        <Button appearance="ghost" arrow="right">
          Читать отзывы
        </Button>
      </div>
    </section>
  );
};

export default Product;
