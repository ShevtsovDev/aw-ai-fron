import styles from './Button.module.scss'
import { FC } from 'react'
import { ButtonProps } from 'src/components/common/Form/Button/Button.types'
import cn from 'classnames'

const Button: FC<ButtonProps> = (props) => {
  const { className } = props
  return (
    <button {...props} className={cn(styles.button, className)} />
  )
}

export default Button