import { Button, Group, Input } from 'src/components/common'
import { Layout } from 'src/components/modules'
import styles from './Workspace.module.scss'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { getSelectedSchema, setSelectedSchema } from 'src/store/slices/schemaSlice/schemaSlice'
import { useAppDispatch, useAppSelector } from 'src/store/store'
import Checkbox from 'src/components/common/Form/Checkbox/Checkbox'
import Textarea from 'src/components/common/Form/Textarea/Textarea'
import { generateService } from 'src/api/services/generateService/generateService'
import { fetchBalance, fetchStatistic } from 'src/store/slices/userSlice/userSlice'
import { HashLoader } from 'react-spinners'
import { toast } from 'react-toastify'
import { Divider, Modal, Tooltip } from 'antd'
import { schemaService } from 'src/api/services/schemaService/schemaService'
import { HistoryType, SchemaType, TemplateType } from 'src/components/modules/Templates/Template.types'
import cn from 'classnames'
import { Copy, Dislike, Edit, Like, Question } from 'src/components/common/Icon'
import { evaluationService } from 'src/api/services/evaluationService/evaluationService'
import { copyToClipboard } from 'src/utils/helpers/copyToClipboard'
import { getAllDocs } from 'src/store/slices/docsSlice/docsSlice'
import { docsService } from 'src/api/services/docsService/docsService'
import { Paths } from 'src/utils/paths/paths'

type Form = {
  product_name: string
  short_description: string
  need_params: boolean
  need_seo: boolean
}

type ParamType = 'ozon' | 'wb' | 'amazon' | 'telegram' | 'rewrite' | 'post' | 'tiktok'

const Workspace = () => {
  const { register, watch, getValues, handleSubmit, control } = useForm<Form>({ mode: 'onBlur' })

  const dispatch = useAppDispatch()
  const [params, _] = useSearchParams()
  const [schema, setSchema] = useState<SchemaType | null>(null)
  const [history, setHistory] = useState<HistoryType[]>()
  const [copiedText, setCopiedText] = useState<string>()

  const schemaId = params.get('schema')
  const type = params.get('type') as ParamType


  useEffect(() => {
    if (schemaId) {
      schemaService.fetchSchemaById<{ schema: SchemaType}>(schemaId)
        .then(data => {
          setSchema(data.schema)
        })
      schemaService.fetchHistory<{ history: HistoryType[]}>(schemaId)
        .then(data => {
          setHistory(data.history)
        })
    }
  }, [])

  const [loading, setLoading] = useState(false)
  const [text, setText] = useState<{ description: string; keywords?: string; params?: string }>({
    keywords: '',
    params: '',
    description: '',
  })

  const onSubmit = handleSubmit(async data => {
    setLoading(true)

    const firstStep = () => {
      toast('Не переживайте, ваш текст все еще генерируется')
    }

    const secondStep = () => {
      toast('Да, некоторые текста генерируются довольно долго')
    }

    const thirdStep = () => {
      toast('Уже даже может показаться, что что-то не так...Но наберитесь терпения')
    }

    const fourStep = () => {
      toast('Мы почти уверены, что текст в работе, но если вам кажется, что что-то не так - попробуйте обновить страницу')
    }

    const first = setTimeout(() => {
      firstStep()
    }, 6000)

    const second = setTimeout(() => {
      secondStep()
    }, 20000)

    const third = setTimeout(() => {
      thirdStep()
    }, 42000)

    const four = setTimeout(() => {
      fourStep()
    }, 90000)

    if (type === 'ozon') {
      await generateService.generateOzon({ data, serviceId: schemaId}).then(response => {
        setText(response.data)
        dispatch(fetchBalance())
      })
        .catch((e) => {
          if (e.message.includes('баланс')) {
            toast(e.message, {
              type: 'error'
            })
          } else {
            toast('Что-то пошло не так. Может попробуете еще раз?', {
              type: 'error'
            })
          }
          clearTimeout(first)
          clearTimeout(second)
          clearTimeout(third)
          clearTimeout(four)
          setLoading(false)
        })
        .finally(() => {
          dispatch(fetchStatistic())
          setLoading(false)
        })
    }

    if (type === 'wb') {
      await generateService.generateWb({ data, serviceId: schemaId}).then(response => {
        setText(response.data)
        dispatch(fetchBalance())
      })
        .catch((e) => {
          if (e.message.includes('баланс')) {
            toast(e.message, {
              type: 'error'
            })
          } else {
            toast('Что-то пошло не так. Может попробуете еще раз?', {
              type: 'error'
            })
          }
          clearTimeout(first)
          clearTimeout(second)
          clearTimeout(third)
          clearTimeout(four)
          setLoading(false)
        })
        .finally(() => {
          dispatch(fetchStatistic())
          setLoading(false)
        })
    }

    if (type === 'amazon') {
     await generateService.generateAmazon({ data, serviceId: schemaId}).then(response => {
        setText(response.data)
        dispatch(fetchBalance())
      })
        .catch((e) => {
          if (e.message.includes('баланс')) {
            toast(e.message, {
              type: 'error'
            })
          } else {
            toast('Что-то пошло не так. Может попробуете еще раз?', {
              type: 'error'
            })
          }
          clearTimeout(first)
          clearTimeout(second)
          clearTimeout(third)
          clearTimeout(four)
          setLoading(false)
        })
        .finally(() => {
          dispatch(fetchStatistic())
          setLoading(false)
        })
    }

    if (type === 'telegram') {
      // @ts-ignore
      await generateService.generateTelegramPost({ data, serviceId: schemaId}).then(response => {
        setText({description: response.data.post})
      })
        .catch((e) => {
          if (e.message.includes('баланс')) {
            toast(e.message, {
              type: 'error'
            })
          } else {
            toast('Что-то пошло не так. Может попробуете еще раз?', {
              type: 'error'
            })
          }
          clearTimeout(first)
          clearTimeout(second)
          clearTimeout(third)
          clearTimeout(four)
          setLoading(false)
        })
        .finally(() => {
          dispatch(fetchStatistic())
          setLoading(false)
        })
    }

    if (type === 'rewrite') {
      // @ts-ignore
     await generateService.generateRewriteText({ data, serviceId: schemaId}).then(response => {
        setText({description: response.text})
      })
        .catch((e) => {
          if (e.message.includes('баланс')) {
            toast(e.message, {
              type: 'error'
            })
          } else {
            toast('Что-то пошло не так. Может попробуете еще раз?', {
              type: 'error'
            })
          }
          clearTimeout(first)
          clearTimeout(second)
          clearTimeout(third)
          clearTimeout(four)
          setLoading(false)
        })
        .finally(() => {
          dispatch(fetchStatistic())
          setLoading(false)
        })
    }

    if (type === 'post') {
      // @ts-ignore
      generateService.generatePostText({ data, serviceId: schemaId}).then(response => {
        setTimeout(() => {
          setText({description: response.text})
        }, 400)
      })
        .catch((e) => {
          if (e.message.includes('баланс')) {
            toast(e.message, {
              type: 'error'
            })
          } else {
            toast('Что-то пошло не так. Может попробуете еще раз?', {
              type: 'error'
            })
          }
          clearTimeout(first)
          clearTimeout(second)
          clearTimeout(third)
          clearTimeout(four)
          setLoading(false)
        })
        .finally(() => {
          dispatch(fetchStatistic())
          setLoading(false)
          if (schemaId) {
            schemaService.fetchHistory<{ history: HistoryType[]}>(schemaId)
              .then(data => {
                setHistory(data.history)
              })
          }
        })
    }

    if (type === 'tiktok') {
      // @ts-ignore
      await generateService.generateTikTokTitle({ data, serviceId: schemaId}).then(response => {
        setText({description: response.title})
      })
        .catch((e) => {
          if (e.message.includes('баланс')) {
            toast(e.message, {
              type: 'error'
            })
          } else {
            toast('Что-то пошло не так. Может попробуете еще раз?', {
              type: 'error'
            })
          }
          clearTimeout(first)
          clearTimeout(second)
          clearTimeout(third)
          clearTimeout(four)
          setLoading(false)
        })
        .finally(() => {
          dispatch(fetchStatistic())
          setLoading(false)
        })
    }

    clearTimeout(first)
    clearTimeout(second)
    clearTimeout(third)
    clearTimeout(four)
    if (schemaId) {
      schemaService.fetchHistory<{ history: HistoryType[]}>(schemaId)
        .then(data => {
          setHistory(data.history)
        })
    }
  })

  const Dataset = () => {
    if (schema) {
      const result = schema.fields.groups.map((g) => {
        return (
          <Group title={g.title} subtitle={g.subtitle} col={g.col} orientation={g.orientation as any}>
            {schema.fields.fields.filter((f) => f.group === g.name).map(f => {
              if (f.type === 'text') {
                return <Input control={control} name={f.name} placeholder={f.placeholder} />
              }
              if (f.type === 'checkbox') {
                return <Checkbox name={f.name} control={control} label={f.label} />
              }

              if (f.type === 'textarea') {
                return <Textarea control={control} name={f.name} placeholder={f.placeholder} />
              }
            })}
          </Group>
        )
      })
      return <>{result}</>
    } else {
      return <>qwe</>
    }
  }


  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.form}>
          {schema && (
            <form className={styles.nativeForm} onSubmit={onSubmit}>
              <Dataset />
              <Divider />
              <div className={styles.actions}>
                <Button>Отправить</Button>
                <Tooltip title={<Prompt />} color={'var(--clr-primary)'} overlayInnerStyle={{padding: '20px 10px'}} >
                  <div className={styles.question}>
                    Прочтите перед генерацией
                    <Question />
                  </div>
                </Tooltip>
              </div>
              {loading && <div className={styles.loader}><HashLoader size={100} color="#36d7b7" /></div>}
            </form>
          )}
        </div>
        <div className={styles.workspace}>
          <div className={styles.workspace_prev}>
            <div className={styles.workspace_prev_list}>
              {history?.map( i => <HistoryItem id={i.id} responseText={i.responseText} dislikeStatus={i.dislike} likeStatus={i.like} />)}
            </div>
            {history?.length === 0 && (
              <div className={styles.workspace_prev_empty}>
                Вы еще не сгенерировали ничего в этой категории. Может пора это исправить?
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Workspace

const Prompt = () => {
  return (
    <div className={styles.prompt}>
      <p className={styles.prompt_title}>Важное замечание:</p>
      <p>
        Проведя аналитику, мы пришли к выводу, что текста, генерируемые My Copy, в большинстве случаев лучше, чем в других сервисах.
      </p>
      <p>
        Мы уже сейчас используем обученные языковые модели, а параллельно продолжаем обучать новые
      </p>
    </div>
  )
}


type HistoryItemTypes = {
  id: number,
  responseText: string,
  dislikeStatus: boolean,
  likeStatus: boolean,
}

const HistoryItem = (props: HistoryItemTypes) => {
  const { responseText, id, likeStatus, dislikeStatus } = props
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [like, setLike] = useState(likeStatus)
  const [dislike, setDislike] = useState(dislikeStatus)
  const navigate = useNavigate()
  const docs = useAppSelector(getAllDocs)

  const onLike = () => {
    setDislike(false)
    setLike(prev => !prev)
    evaluationService.like(id)
  }

  const onDislike = () => {
    setLike(false)
    setDislike(prev => !prev)
    evaluationService.dislike(id)
  }

  const onCopy = () => {
    copyToClipboard(responseText)
  }

  const handleOk = () => {
    console.log('qwe')
  }

  const handleOpen = () => {
    setIsModalOpen(true)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const handleAddToDoc = (uuid: string) => {
    docsService.addToExistenceDoc(responseText, uuid)
      .then(() => {
        navigate(`${Paths.Editor}/${uuid}`)
      })
  }

  const handleAddToNewDoc = () => {
    docsService.createDoc(responseText)
      .then(data => {
        navigate(`${Paths.Editor}/${data.uuid}`)
      })
  }


  return (
    <div>
      <div /*onClick={() => copyToClipboard(i.responseText)}*/ className={cn(styles.workspace_prev_list_item)}>
        <div className={styles.workspace_prev_list_item_text} dangerouslySetInnerHTML={{__html: responseText.replaceAll('\n', '<Br/>')}}/>
        <div className={styles.action}>
          <div className={cn(styles.action_btn, styles.action_btn_like, {[styles.action_btn_like_active]: like})} onClick={onLike}>
            <Like />
          </div>
          <div className={cn(styles.action_btn, styles.action_btn_dislike, {[styles.action_btn_dislike_active]: dislike})} onClick={onDislike}>
            <Dislike />
          </div>
          <div className={cn(styles.action_btn, styles.action_btn_default)} onClick={onCopy} >
            <Copy />
          </div>
          <Tooltip title='Изменить'>
            <div className={cn(styles.action_btn, styles.action_btn_default)} onClick={handleOpen} >
              <Edit />
            </div>
          </Tooltip>
        </div>
      </div>
      <Modal footer={false} maskStyle={{backgroundColor: 'rgba(0, 0, 0, 0.9)'}} width={'40%'} title="В хотите создать новый документ или добавить текст в существующтй?" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div className={styles.docs_list}>
          <div className={styles.docs_list_item} onClick={handleAddToNewDoc}>Создать новый</div>
          {docs.map(d => {
            return (
              <div key={d.uuid} onClick={() => handleAddToDoc(d.uuid)} className={styles.docs_list_item}>{d.name ?? d.uuid}</div>
            )
          })}
        </div>
      </Modal>
    </div>
  )
}
