import styles from './InputSelect.module.scss'
import { FC, useState } from 'react'
import { useController } from 'react-hook-form'
import { InputProps } from './InputSelect.types'
import cn from 'classnames'
import Select, { SingleValue } from 'react-select'

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    borderRadius: 4,
    padding: '8px 20px',
    border: '1px solid var(--clr-gray-4)',
    borderColor: 'var(--clr-gray-4)',
    color: '#ffffff',
    backgroundColor: 'var(--clr-gray-1)',
    outline: 'none',
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    borderRadius: 4,
    outline: 'none',
    fontSize: '20px',
    color: state.isSelected ? 'white' : 'black',
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: 'var(--clr-gray-4)',
    fontSize: '20px',
  }),
  valueContainer: (provided: any) => ({
    ...provided,
    paddingLeft: 0,
  })
}

const InputSelect: FC<InputProps> = props => {
  const { control, name, rules, options } = props
  const { field, fieldState } = useController({ control, name, rules })
  const [value, setValue] = useState<SingleValue<{value: number, label: string}>>(null)
  const handleChange = (data:  SingleValue<{value: number, label: string}>) => {
    if (data && data?.value !== null) {
      setValue(data)
      field.onChange(data.value)
    }
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.input}>
        <Select value={value} styles={customStyles} options={options} onChange={(option) => handleChange(option)} />
      </div>
      {rules?.maxLength && rules.maxLength > 0 && (
        <div
          className={cn(styles.maxLength, {
            [styles.maxLength_limit]: field?.value?.length >= rules?.maxLength.toString(),
          })}
        >
          {field?.value?.length ?? 0} / {rules?.maxLength.toString()}
        </div>
      )}
    </div>
  )
}
export default InputSelect
