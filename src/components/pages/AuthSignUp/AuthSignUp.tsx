import styles from './AuthSignUp.module.scss'
import { useForm } from 'react-hook-form'
import { authService } from 'src/api/services/authService/authService'
import { Button, Group, Input } from 'src/components/common'
import { useAppDispatch } from 'src/store/store'
import { singUp } from 'src/store/slices/userSlice/userSlice'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { fetchSchemas } from 'src/store/slices/schemaSlice/schemaSlice'

type FormType = {
  email: string
  password: string
  name: string
}

const AuthSignUp = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [params, _] = useSearchParams()
  const { control, handleSubmit } = useForm<FormType>()
  const onSignUp = handleSubmit(data => {
    const ref = params.get('ref') ?? null
    dispatch(singUp({...data, ref}))
      .unwrap()
      .then(() => {
        dispatch(fetchSchemas())
        navigate('/')
      })
      .catch((e) => {
        toast(e.message, {
          type: 'error',
        })
      })
  })
  return (
    <div className={styles.wrapper}>
      <div className={styles.form}>
        <div className={styles.title}>
          Создание аккаунта
        </div>
        <form className={styles.nativeForm} onSubmit={onSignUp}>
          <Group title="Ваше имя">
            <Input control={control} name="name" />
          </Group>
          <Group title="Почта">
            <Input control={control} name="email" />
          </Group>
          <Group title="Пароль">
            <Input control={control} name="password" type="password" />
          </Group>
          <div className={styles.actions}>
            <Button type="submit">Зарегистрироваться</Button>
            <Button className={styles.back} type="button" onClick={() => navigate('/auth/sign-in')}>Вернуть к авторизации</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AuthSignUp
