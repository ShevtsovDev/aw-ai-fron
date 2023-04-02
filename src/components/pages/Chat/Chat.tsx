import styles from './Chat.module.scss'
import { useForm } from 'react-hook-form'
import { Layout } from 'src/components/modules'
import io, { Socket } from 'socket.io-client'
import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import cn from 'classnames'
import { useOnceEffect } from 'src/hooks'
import TextareaAutosize from 'react-textarea-autosize'
import { Send } from 'src/components/common/Icon'
import { Typing } from 'src/components/common/Animations'

type Message = {
  role: 'user' | 'assistant' | 'system'
  content: string
}

const msgs: Message[] = [
  {
    role: 'user',
    content: 'Привет',
  },
  {
    role: 'assistant',
    content: 'И тебе привет!',
  },
]

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const { control, register, handleSubmit, resetField, watch } = useForm<{ message: string }>({
    mode: 'onSubmit',
  })
  const params = useParams()
  const socket = useRef<Socket<any>>(null)
  const [loading, setLoading] = useState(false)
  const messagesContainer = useRef<HTMLDivElement>(null)

  const sendCondition = !loading && watch('message')?.length > 0

  useOnceEffect(() => {
    // @ts-ignore
    socket.current = io('http://localhost:4002', {
      query: {
        chatId: params.uuid,
      },
    })

    socket.current.on(
      'messages',
      (data: { type: 'user' | 'assistant' | 'system'; text: string }[]) => {
        const msgs = data.map(msg => ({ role: msg.type, content: msg.text }))
        setMessages(prev => [...msgs, ...prev])
      },
    )

    socket.current.on('message', (data: { message: string }) => {
      setMessages(prev => [...prev, { role: 'assistant', content: data.message }])
      setLoading(false)
    })

    return () => {
      socket.current!.disconnect()
    }
  }, [])

  const onSubmit = handleSubmit(data => {
    setLoading(true)
    resetField('message')
    socket.current!.emit('message', data.message)
    resetField('message')
    setMessages(prev => [...prev, { role: 'user', content: data.message }])
  })

  const onPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.code === 'Enter') {
      if (sendCondition) {
        onSubmit()
      }
      event.preventDefault()
    }
  }

  useEffect(() => {
    messagesContainer!.current!.scrollTop = messagesContainer.current!.scrollHeight
  }, [messages])

  return (
    <Layout>
      <div className={styles.chat}>
        <div className={styles.messagesContainer}>
          <div ref={messagesContainer} className={styles.messages}>
            {messages.map(msg => {
              return (
                <div
                  className={cn(styles.message, {
                    [styles.user]: msg.role === 'user',
                    [styles.assistant]: msg.role === 'assistant',
                  })}
                  dangerouslySetInnerHTML={{ __html: msg.content.replaceAll('\n', '<Br/>') }}
                ></div>
              )
            })}
            {loading && (
              <div className={styles.typing}>
                <span>Собеседние набирает сообщение</span>
                <Typing />
              </div>
            )}
          </div>
        </div>

        <div className={styles.actions}>
          <form onSubmit={onSubmit} className={styles.form}>
            <div className={styles.field}>
              <TextareaAutosize
                onKeyDown={onPress}
                minRows={3}
                className={styles.form_input}
                {...register('message')}
              />
              <button type="submit" disabled={!sendCondition} className={styles.button}>
                <Send />
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default Chat
