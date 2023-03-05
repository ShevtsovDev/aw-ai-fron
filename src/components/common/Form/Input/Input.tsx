import styles from './Input.module.scss'
import { FC } from 'react'
import { useController } from 'react-hook-form'
import { InputProps } from './Input.types'

const Input: FC<InputProps> = (props) => {
  const { control, name, rules } = props
  const { field, fieldState } = useController({ control, name, rules });
  return (
    <div className={styles.input}>
      <input {...field} className={styles.nativeInput} {...props} />
    </div>
  )
}
export default Input
