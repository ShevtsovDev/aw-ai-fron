import { Button, Group, Input } from 'src/components/common'
import { Layout } from 'src/components/modules'
import styles from './Workspace.module.scss'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getSelectedSchema, setSelectedSchema } from 'src/store/slices/schemaSlice/schemaSlice'
import { useAppDispatch, useAppSelector } from 'src/store/store'
import Checkbox from 'src/components/common/Form/Checkbox/Checkbox'
import Textarea from 'src/components/common/Form/Textarea/Textarea'
import { generateService } from 'src/api/services/generateService/generateService'
import { fetchBalance, fetchStatistic } from 'src/store/slices/userSlice/userSlice'
import { HashLoader } from 'react-spinners'
import { toast } from 'react-toastify'
import { Divider } from 'antd'
import { schemaService } from 'src/api/services/schemaService/schemaService'
import { HistoryType, SchemaType, TemplateType } from 'src/components/modules/Templates/Template.types'
import cn from 'classnames'

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

  const copyToClipboard = async (text: string): Promise<void> => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text)
      toast('Текст скопирован в буфер обмена', {
        type: 'success'
      })
    } catch (err) {

    }
  }

  const compareClipboard = async (text: string): Promise<boolean> => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      return clipboardText === text;
    } catch (err) {
      return false;
    }
  }



  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.form}>
          {schema && (
            <form className={styles.nativeForm} onSubmit={onSubmit}>
              <Dataset />
              <Button>Отправить</Button>
              {loading && <div className={styles.loader}><HashLoader size={100} color="#36d7b7" /></div>}
            </form>
          )}
        </div>
        <div className={styles.workspace}>
          <div className={styles.result}>
            {text.description && (
              <Group title="Готовое описание:">
                <div className={styles.description} dangerouslySetInnerHTML={{ __html: text.description.replaceAll('\n', '<Br/>') }} contentEditable />
              </Group>
            )}
            {text.params && (
              <Group title="Характеристики:">
                <div className={styles.description} dangerouslySetInnerHTML={{ __html: text.params }} contentEditable />
              </Group>
            )}
            {text.keywords && (
              <Group title="Ключевые слова:">
                <div className={styles.description} dangerouslySetInnerHTML={{ __html: text.keywords }} contentEditable />
              </Group>
            )}
          </div>
          {(text.description || text.keywords || text.params) && <Divider />}
          <div className={styles.workspace_prev}>
            <div className={styles.workspace_prev_title}>Ваши предыдущие генерации</div>
            <div className={styles.workspace_prev_list}>
              {history?.map( i => {

                return (
                  <div onClick={() => copyToClipboard(i.responseText)} className={cn(styles.workspace_prev_list_item, { [styles.workspace_prev_list_item_copied]: i.responseText === copiedText})} dangerouslySetInnerHTML={{__html: i.responseText.replaceAll('\n', '<Br/>')}}>
                  </div>
                )
              })}
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
