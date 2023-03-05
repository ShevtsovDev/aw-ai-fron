import { InputHTMLAttributes } from 'react'
import { UseControllerProps } from 'react-hook-form'

export type CheckboxProps = UseControllerProps<any> & {
  label?: string;
};