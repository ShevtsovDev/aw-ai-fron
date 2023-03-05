import styles from './AuthSignIn.module.scss'
import { Layout } from 'src/components/modules'
import { Button, Group, Input } from 'src/components/common'
import { useForm } from 'react-hook-form'
import { authService } from 'src/api/services/authService/authService'
import { sighIn, sighUp } from 'src/store/slices/userSlice/userSlice'
import { useAppDispatch } from 'src/store/store'
import { useNavigate } from 'react-router-dom'
import { fetchSchemas } from 'src/store/slices/schemaSlice/schemaSlice'

type FormType = {
  email: string,
  password: string
}

const AuthSignIn = () => {
  const dispatch = useAppDispatch()
  const { control, handleSubmit } = useForm<FormType>()
  const navigate = useNavigate()
  const onSignIn = handleSubmit(data => {
    dispatch(sighIn(data))
      .unwrap()
      .then(() => {
        dispatch(fetchSchemas())
        navigate('/')
      })
  })
  return (
    <div className={styles.wrapper}>
      <div className={styles.form}>
        <form className={styles.nativeForm} onSubmit={onSignIn}>
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

export default AuthSignIn