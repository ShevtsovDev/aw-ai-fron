import styles from './AuthSignUp.module.scss'
import { useForm } from 'react-hook-form'
import { authService } from 'src/api/services/authService/authService'
import { Button, Group, Input } from 'src/components/common'
import { useAppDispatch } from 'src/store/store'
import { sighUp } from 'src/store/slices/userSlice/userSlice'

type FormType = {
  email: string,
  password: string
  name: string
}

const AuthSignUp = () => {
  const dispatch = useAppDispatch()

  const { control, handleSubmit } = useForm<FormType>()
  const onSignUp = handleSubmit(data => {
    dispatch(sighUp(data))
  })
  return (
    <div className={styles.wrapper}>
      <div className={styles.form}>
        <form className={styles.nativeForm} onSubmit={onSignUp}>
          <Group title='Name:'>
            <Input control={control} name='name' />
          </Group>
          <Group title='Email:'>
            <Input control={control} name='email' />
          </Group>
          <Group title='Password'>
            <Input control={control} name='password'  type='password' />
          </Group>
          <div className={styles.actions}>
            <Button>Войти</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AuthSignUp