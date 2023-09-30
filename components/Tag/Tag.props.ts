import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface TagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size: 'medium' | 'small';
  color: 'ghost' | 'red' | 'grey' | 'green' | 'primary';
  href?: string;
  className?: string;
}
