import { Layout } from 'src/components/modules'
import styles from './ChatList.module.scss'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { chatService } from 'src/api/services/chatService/chatService'
import { useAppDispatch, useAppSelector } from 'src/store/store'
import { getUser } from 'src/store/slices/userSlice/userSlice'
import { Divider } from 'antd'
import { fetchChats, fetchTemplates, getChats, getTemplates } from 'src/store/slices/chatSlise/chatSlise'
import { Chat } from 'src/store/slices/chatSlise/chatSliseSlise.types'
import dayjs from 'dayjs'

const ChatList = () => {
  const navigate = useNavigate()
  const user = useAppSelector(getUser)
  const dispatch = useAppDispatch()

  const chats = useAppSelector(getChats)
  const templates = useAppSelector(getTemplates)

  useEffect(() => {
    dispatch(fetchTemplates())
    dispatch(fetchChats())
  }, [])

  const goToChat = (uuid: string) => {
    navigate(`/chat/${uuid}`)
  }

  const createNewChat = (uuid: string) => {
    if (user.user?.id) {
      chatService.createChat<{chat: Chat}>({userId: user.user?.id, template: uuid})
        .then((data) => {
          navigate(`/chat/${data.chat.uuid}`)
        })
    }
  }

  return (
    <Layout>
      <div className={styles.chat}>
        <Divider>Создать новый чат</Divider>
        <div className={styles.chat_list}>
          {templates.map(chat => {
            return (
              <div onClick={() => createNewChat(chat.uuid)} className={styles.chat_item} key={chat.uuid}>
                <div className={styles.chat_item_content}>
                  <div className={styles.chat_item_name}>{chat.name}</div>
                  <div className={styles.chat_item_description}>{chat.description}</div>
                </div>
                <div className={styles.chat_item_image}>
                  <img src={chat.icon} alt='' />
                </div>
              </div>
            )
          })}
        </div>
        <Divider>Ваши чаты</Divider>
        <div className={styles.chat_list}>
          {chats.map(chat => {
            return (
              <div onClick={() => goToChat(chat.uuid)} className={styles.chat_item} key={chat.uuid}>
                <div className={styles.chat_item_content}>
                  <div className={styles.chat_item_name}>{chat.chatTemplate.name}</div>
                  <div className={styles.chat_item_description}>{dayjs(chat.createdAt).format('DD-MM-YYYY hh:mm')}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default ChatList