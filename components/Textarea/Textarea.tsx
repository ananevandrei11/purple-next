import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';
import styles from './Textarea.module.css';
import clsx from 'clsx';

export interface Props
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {}

export const Textarea = ({ className, ...props }: Props) => {
  return <textarea className={clsx(className, styles.textarea)} {...props} />;
};
