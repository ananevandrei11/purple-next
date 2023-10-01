import Image from 'next/image';
import clsx from 'clsx';
import { CardProps } from './Card.props';
import styles from './Card.module.css';
import { HTag, Paragraph } from '@/components';
import Link from 'next/link';
import { ArrowRight, Like } from '@/Icon';

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
}: CardProps) => (
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
        <p>{datePublish}</p>
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
      <p className={styles.readTime}>{readTime}</p>
      <Link href={readHref} className={styles.readLink}>
        <span>{readLink}</span>
        <ArrowRight className={styles.readLinkIcon} />
      </Link>
    </div>
  </div>
);
