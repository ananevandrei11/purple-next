import { StaticImageData } from 'next/image';
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  img: StaticImageData;
  title: string;
  text: string | ReactNode;
  theme: string;
  datePublish: string;
  like: string;
  readTime: string;
  readLink: string;
  readHref: string;
  className?: string;
}
