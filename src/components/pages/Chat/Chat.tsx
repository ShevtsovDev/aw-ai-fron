import styles from './Chat.module.scss'
import { useForm } from 'react-hook-form'
import { Button } from 'antd'
import { Layout } from 'src/components/modules'
import io from 'socket.io-client';
import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

const socket = io('http://localhost:4002')

const Chat = () => {

  const { control, register, handleSubmit } = useForm<{message: string}>({mode: 'onSubmit'})

  const onSubmit = handleSubmit((data) => {
    socket.emit('message', data.message)
  })

  useEffect(() => {
    socket.on('connect', () => {

    })
  }, [])

  useEffect(() => {
    socket.on('message', (data: {message: string}) => {
      console.log(data)
    })
  }, [])

  return (
   <Layout>
     <div className={styles.chat}>

       <div className={styles.messages}>

       </div>

       <div className={styles.actions}>
         <form onSubmit={onSubmit} className={styles.form}>
           <input className={styles.form_input} type='text' {...register('message', {required: 'Вы забыли написать сообщение'})} />
           <Button htmlType='submit'>Отправить</Button>
         </form>
       </div>


     </div>
   </Layout>
  )
}

export default Chat