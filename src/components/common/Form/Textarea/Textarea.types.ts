import { TextareaHTMLAttributes } from 'react'
import { UseControllerProps } from 'react-hook-form'

export type TextareaProps = {} & TextareaHTMLAttributes<HTMLTextAreaElement> &
  UseControllerProps<any>