import { InputHTMLAttributes } from 'react'
import { UseControllerProps } from 'react-hook-form'

export type InputProps = {
  label?: string
  options: {value: number, label: string}[]
} & InputHTMLAttributes<HTMLInputElement> & UseControllerProps<any>