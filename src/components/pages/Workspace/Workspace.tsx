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
import { fetchBalance } from 'src/store/slices/userSlice/userSlice'

type Form = {
  product_name: string
  short_description: string
  need_params: boolean
  need_seo: boolean
}

type ParamType = 'ozon' | 'wildberries' | 'amazon' | 'telegram'

const Workspace = () => {
  const { register, watch, getValues, handleSubmit, control } = useForm<Form>({ mode: 'onBlur' })

  const dispatch = useAppDispatch()
  const [params, _] = useSearchParams()

  const schemaId = params.get('schema')
  const type = params.get('type') as ParamType

  const schema = useAppSelector(getSelectedSchema)

  useEffect(() => {
    if (schemaId) {
      dispatch(setSelectedSchema({ id: +schemaId }))
    }
  }, [schemaId])

  const [text, setText] = useState<{ description: string; keywords?: string; params?: string }>({
    keywords: '',
    params: '',
    description: '',
  })

  const onSubmit = handleSubmit(data => {
    console.log(data)
    if (type === 'ozon') {
      generateService.generateOzon(data).then(response => {
        setText(response.data)
        dispatch(fetchBalance())
      })
    }

    if (type === 'wildberries') {
      generateService.generateWb(data).then(response => {
        setText(response.data)
        dispatch(fetchBalance())
      })
    }

    if (type === 'amazon') {
      generateService.generateAmazon(data).then(response => {
        setText(response.data)
        dispatch(fetchBalance())
      })
    }

    if (type === 'telegram') {
      // @ts-ignore
      generateService.generateTelegramPost(data).then(response => {
        setText({description: response.data.post})
      })
    }

  })
  console.log(schema?.schema)
  const Dataset = schema?.schema[0].fields.groups.map((g) => {
    return (
      <Group title={g.title} subtitle={g.subtitle} col={g.col} orientation={g.orientation as any}>
        {schema?.schema[0].fields.fields.filter((f) => f.group === g.name).map(f => {
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

  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.form}>
          <form className={styles.nativeForm} onSubmit={onSubmit}>
            {Dataset}
            <Button>Отправить</Button>
          </form>
        </div>
        <div className={styles.result}>
          {text.description && (
            <Group title="Готовое описание:">
              <div className={styles.description} dangerouslySetInnerHTML={{ __html: text.description }} contentEditable />
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
      </div>
      {/*<Editor />*/}
    </Layout>
  )
}

export default Workspace