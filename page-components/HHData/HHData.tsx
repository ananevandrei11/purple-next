import { DetailedHTMLProps, HTMLAttributes } from 'react';
import clsx from 'clsx';
import { Card } from '@/components';
import { HhData } from '@/interfaces/page.interface';
import styles from './HHData.module.css';
import { StarCircle } from '@/Icon';
import { numberToStringDigit } from '@/utils/number';

export interface HHDataProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: HhData;
  className?: string;
}

export const HHData = ({ className, data }: HHDataProps) => {
  const juniorSalary = numberToStringDigit(data.juniorSalary);
  const middleSalary = numberToStringDigit(data.middleSalary);
  return (
    <section className={clsx(className, styles.hh)}>
      <Card className={styles.hhCount} color="white">
        <p className={styles.title}>Всего вакансий</p>
        <p className={styles.count}>{String(data.count)}</p>
      </Card>
      <Card className={styles.hhSalary} color="blue">
        <div className={styles.salaryItem}>
          <p className={styles.title}>Junior</p>
          <p className={styles.salary}>{juniorSalary} &#8381;</p>
          <div className={clsx(styles.rate, styles.junior)}>
            <StarCircle className={styles.filled} />
            <StarCircle />
            <StarCircle />
          </div>
        </div>
        <div className={styles.salaryDivider} />
        <div className={styles.salaryItem}>
          <p className={styles.title}>Middle</p>
          <p className={styles.salary}>{middleSalary} &#8381;</p>
          <div className={clsx(styles.rate, styles.middle)}>
            <StarCircle className={styles.filled} />
            <StarCircle className={styles.filled} />
            <StarCircle />
          </div>
        </div>
        <div className={styles.salaryDivider} />
        <div className={styles.salaryItem}>
          <p className={styles.title}>Senior</p>
          <p className={styles.salary}>{`${new Intl.NumberFormat('ru-RU', {
            style: 'currency',
            currency: 'RUB',
          }).format(data.seniorSalary)}`}</p>
          <div className={clsx(styles.rate, styles.senior)}>
            <StarCircle className={styles.filled} />
            <StarCircle className={styles.filled} />
            <StarCircle className={styles.filled} />
          </div>
        </div>
      </Card>
    </section>
  );
};
