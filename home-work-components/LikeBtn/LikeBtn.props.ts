import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface LikeBtnProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  active: boolean;
  onClick?: () => void;
  className?: string;
}
