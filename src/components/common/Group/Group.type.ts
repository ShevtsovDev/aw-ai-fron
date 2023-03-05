import { ReactNode } from 'react'

export type GroupProps = {
  children: ReactNode;
  orientation?: 'row' | 'column' | 'columns';
  numColumns?: number;
  col?: number;
  title?: string;
  subtitle?: string;
}