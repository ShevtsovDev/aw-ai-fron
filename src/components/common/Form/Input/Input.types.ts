import { InputHTMLAttributes } from 'react'
import { UseControllerProps } from 'react-hook-form'

export type InputProps = {

} & InputHTMLAttributes<HTMLInputElement> & UseControllerProps<any>