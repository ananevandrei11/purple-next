import { HTag, Paragraph } from '@/components';
import { TopPageAdvantage } from '@/interfaces/page.interface';
import clsx from 'clsx';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './Advantages.module.css';
import Check from '@/public/check.svg';

export interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  advantages: TopPageAdvantage[];
  className?: string;
}

export const Advantages = ({
  advantages,
  className,
  ...props
}: Props) => (
  <section className={clsx(className, styles.root)} {...props}>
    <HTag tag="h2">Преимущества</HTag>
    {advantages.map((a) => (
      <article className={styles.item} key={a._id}>
        <span className={styles.icon}>
          <Check />
        </span>
        <HTag tag="h3" className={styles.title}>{a.title}</HTag>
        <span className={styles.border}></span>
        <Paragraph size="large">{a.description}</Paragraph>
      </article>
    ))}
  </section>
);
