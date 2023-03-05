import styles from './Textarea.module.scss'
import { FC } from 'react'
import { useController } from 'react-hook-form'
import { TextareaProps } from 'src/components/common/Form/Textarea/Textarea.types'
import TextareaAutosize from 'react-textarea-autosize';


const Textarea: FC<TextareaProps> = props => {
  const { control, name, rules } = props
  const { field, fieldState } = useController({ control, name, rules })
  return (
    <div className={styles.input}>
      <TextareaAutosize {...field} minRows={6} className={styles.nativeInput} />
    </div>
  )
}
export default Textarea
