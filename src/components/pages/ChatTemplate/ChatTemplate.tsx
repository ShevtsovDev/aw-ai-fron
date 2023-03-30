import { Layout } from 'src/components/modules'
import styles from './ChatTemplate.module.scss'
import { useNavigate } from 'react-router-dom'

const chats = [
  {
    uuid: 'uuid_1',
    name: 'Психолог Константин',
  },
  {
    uuid: 'uuid_2',
    name: 'Маркетолог Елена',
  },
  {
    uuid: 'uuid_3',
    name: 'Ваш друг, Дима',
  },
]

const ChatTemplate = () => {

  const navigate = useNavigate()

  const goToChat = (uuid: string) => {
    navigate(`list`)
  }

  return (
   <Layout>
     <div className={styles.chat}>
       <div className={styles.chat_list}>
         {chats.map(chat => {
           return (
             <div onClick={() => goToChat(chat.uuid)} className={styles.chat_item} key={chat.uuid}>
               {chat.name}
             </div>
           )
         })}
       </div>
     </div>
   </Layout>
  )
}

export default ChatTemplate