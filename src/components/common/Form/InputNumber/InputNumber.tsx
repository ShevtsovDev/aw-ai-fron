import styles from './InputNumber.module.scss'
import { ChangeEventHandler, FC } from 'react'
import { useController } from 'react-hook-form'
import { InputProps } from './InputNumber.types'
import cn from 'classnames'

const InputNumber: FC<InputProps> = props => {
  const { control, name, rules, type } = props
  const {} = props
  const { field, fieldState } = useController({ control, name, rules })

  const handleChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
    field.onChange(+e.target.value.replace(/[^0-9]/g, ''))
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.input}>
        <input {...field} onChange={(e) => handleChange(e)} className={styles.nativeInput} {...props} type='text' />
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
export default InputNumber
