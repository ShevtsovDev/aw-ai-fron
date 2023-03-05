import styles from './Checkbox.module.scss'
import { FC } from 'react'
import { CheckboxProps } from 'src/components/common/Form/Checkbox/Checkbox.types'
import { useController } from 'react-hook-form'
import cn from 'classnames'
import { CheckIcon } from 'src/components/common/Icon'

const Checkbox: FC<CheckboxProps> = props => {
  const { control, name, rules, label } = props
  const { field, fieldState } = useController({ control, name, rules });

  return (
    <div className={styles.input}>
      <label className={cn(styles.label, {
        [styles.label_active]: field.value
      })}>
        <input type="checkbox" {...field} className={styles.nativeInput} />
        <div className={styles.icon}>{field.value && <CheckIcon />}</div>
        {label && <span className={styles.text}>{label}</span>}
      </label>
    </div>
  )
}
export default Checkbox
