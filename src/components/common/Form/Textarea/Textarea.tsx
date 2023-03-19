import styles from './Textarea.module.scss'
import { FC } from 'react'
import { useController } from 'react-hook-form'
import { TextareaProps } from 'src/components/common/Form/Textarea/Textarea.types'
import TextareaAutosize from 'react-textarea-autosize';
import cn from 'classnames'


const Textarea: FC<TextareaProps> = props => {
  const { control, name, rules } = props
  const { field, fieldState } = useController({ control, name, rules })
  console.log('rules?.maxLength: ', rules?.maxLength)
  return (
    <div className={styles.wrapper}>
      <div className={styles.input}>
        <TextareaAutosize {...field} minRows={4} maxRows={10} className={styles.nativeInput} />
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
export default Textarea
