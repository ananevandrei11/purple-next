import Image from 'next/image';
import clsx from 'clsx';
import { intlFormatDistance } from 'date-fns';
import { CardProps } from './Card.props';
import styles from './Card.module.css';
import { HTag, Paragraph } from '@/components';
import Link from 'next/link';
import { ArrowRight, Like } from '@/Icon';
import { pluralize } from '@/utils/pluralize';

export const Card = ({
  img,
  theme,
  datePublish,
  like,
  title,
  text,
  readTime,
  readLink,
  readHref,
  className,
}: CardProps) => {
  const publish = intlFormatDistance(new Date(datePublish), new Date(), {
    unit: 'month',
    locale: 'ru',
    numeric: 'always',
  });
  const readTimeMinutes = pluralize(readTime, ['минута', 'минуты', 'минут']);

  return (
    <div className={clsx(styles.card, className)}>
      <Image
        src={img.src}
        placeholder="blur"
        blurDataURL={img?.blurDataURL}
        width={img?.width}
        height={img?.height}
        priority={false}
        alt={title}
        quality={75}
        objectFit="contain"
        objectPosition="center"
        className={styles.img}
      />
      <article>
        <div className={styles.info}>
          <p className={styles.infoTheme}>{theme}</p>
          <span>&bull;</span>
          <p>{publish}</p>
          <button type="button" className={styles.like}>
            <span>{like}</span>
            <Like className={styles.likeIcon} />
          </button>
        </div>
        <HTag tag="h3" className={styles.title}>
          {title}
        </HTag>
        <Paragraph size="small">{text}</Paragraph>
      </article>
      <div className={styles.read}>
        <p className={styles.readTime}>{readTimeMinutes}</p>
        <Link href={readHref} className={styles.readLink}>
          <span>{readLink}</span>
          <ArrowRight className={styles.readLinkIcon} />
        </Link>
      </div>
    </div>
  );
};
