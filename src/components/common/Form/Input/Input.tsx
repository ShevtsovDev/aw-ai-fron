import styles from './Input.module.scss'
import { FC } from 'react'
import { useController } from 'react-hook-form'
import { InputProps } from './Input.types'
import cn from 'classnames'

const Input: FC<InputProps> = props => {
  const { control, name, rules } = props
  const { field, fieldState } = useController({ control, name, rules })

  return (
    <div className={styles.wrapper}>
      <div className={styles.input}>
        <input {...field} className={styles.nativeInput} {...props} />
      </div>
      {rules?.maxLength && rules.maxLength > 0 && (
        <div className={cn(styles.maxLength, {
          [styles.maxLength_limit]: field?.value?.length >= rules?.maxLength.toString()
        })}>
          {field?.value?.length ?? 0} / {rules?.maxLength.toString()}
        </div>
      )}
    </div>
  )
}
export default Input
