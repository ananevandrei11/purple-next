import Image from 'next/image';
import clsx from 'clsx';
import { CardTestProps } from './CardTest.props';
import styles from './CardTest.module.css';
import { HTag, Paragraph } from '@/components';
import Link from 'next/link';
import { ArrowRight, Like } from '@/Icon';

export const CardTest = ({
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
}: CardTestProps) => (
  <div className={clsx(styles.card, className)}>
    <figure className={styles.figure}>
      <Image
        src={img.src}
        placeholder="blur"
        blurDataURL={img?.blurDataURL}
        fill={true}
        priority={false}
        alt={title}
        quality={75}
        objectFit="contain"
        objectPosition="center"
      />
    </figure>
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
