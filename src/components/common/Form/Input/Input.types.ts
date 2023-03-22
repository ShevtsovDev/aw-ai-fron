import { InputHTMLAttributes } from 'react'
import { UseControllerProps } from 'react-hook-form'

export type InputProps = {
  label?: string
} & InputHTMLAttributes<HTMLInputElement> & UseControllerProps<any>