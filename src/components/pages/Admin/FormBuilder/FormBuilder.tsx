import styles from './FormBuilder.module.scss'
import { Button, Form, FormInstance, Modal } from 'antd'
import { Layout } from 'src/components/modules'
import { useEffect, useRef, useState } from 'react'
import JsonEditor from 'react-json-editor-ui'
import 'react-json-editor-ui/dist/react-json-editor-ui.cjs.development.css'
import { Group, Input } from 'src/components/common'
import Checkbox from 'src/components/common/Form/Checkbox/Checkbox'
import Textarea from 'src/components/common/Form/Textarea/Textarea'
import { Control, useForm } from 'react-hook-form'
import { Input as AntInput, Select as AntSelect, InputNumber as AntInputNumber } from 'antd'
import { schemaService } from 'src/api/services/schemaService/schemaService'
import { SchemaType } from 'src/components/modules/Templates/Template.types'
import { useParams, useSearchParams } from 'react-router-dom'

enum ActionType {
  text, textarea, checkbox
}

const actionFields = [
  {
    id: 0,
    actionName: 'Однострочное текстовое поле',
    name: "",
    type: ActionType.text,
    group: "name",
    maxLength: 0,
    placeholder: ""
  },
  {
    id: 1,
    actionName: 'Многострочное текстовое поле текстовое поле',
    name: "",
    type: ActionType.textarea,
    group: "name",
    maxLength: 0,
    placeholder: ""
  },
]

const FormBuilder = () => {
  const { register, watch, getValues, handleSubmit, control, formState: { errors, isValid } } = useForm({ mode: 'onBlur' })

  const params = useParams()
  const schemaId = params.id

  const [groupModal, setGroupModal] = useState(false)
  const [fieldModal, setFieldModal] = useState(false)

  const [fields, setFields] = useState<any[]>([])
  const [groups, setGroups] = useState<any[]>([])

  const [schema, setSchema] = useState<SchemaType | null>(null)

  const groupFormRef = useRef<FormInstance>(null)
  const fieldFormRef = useRef<FormInstance>(null)

  useEffect(() => {
   if (schemaId) {
     schemaService.fetchSchemaById<{ schema: SchemaType}>(schemaId)
       .then(data => {
         setGroups(data.schema.fields.groups)
         setFields(data.schema.fields.fields)
         setSchema(data.schema)
       })
   }
  }, [])


  const openGroupModal = () => {
    setGroupModal(true)
  }

  const closeGroupModal = () => {
    setGroupModal(false)
  }

  const openFieldModal = () => {
    setFieldModal(true)
  }

  const closeFieldModal = () => {
    setFieldModal(false)
  }

  const createNewGroup = () => {
    if (groupFormRef.current) {
      const value = groupFormRef.current.getFieldsValue(true)
      setGroups(prev => [value, ...prev])
      groupFormRef.current.resetFields()
      closeGroupModal()
    }
  }

  const createNewField = () => {
    if (fieldFormRef.current) {
      const value = fieldFormRef.current.getFieldsValue(true)
      console.log(value)
      setFields(prev => [value, ...prev])
      fieldFormRef.current.resetFields()
      closeFieldModal()
    }
  }

  /*const Dataset = () => {
    const result =  fields.map(f => {
      console.log(f.type)
      if (f.type === ActionType.text) {
        return <Input control={control} name={f.name} placeholder={f.placeholder}  />
      }
      if (f.type === ActionType.checkbox) {
        return <Checkbox control={control} name={f.name} label={f.label} />
      }

      if (f.type === ActionType.textarea) {
        return <Textarea control={control}  name={f.name} placeholder={f.placeholder} />
      }
      return <>qwe</>
    })

    return <>{result}</>
  }*/

  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.actions}>
          <h4>Филды</h4>
          <Button onClick={openFieldModal}>Создать новое поле</Button>
          <h4>Группы</h4>
          <Button onClick={openGroupModal}>Создать новую группу</Button>
        </div>

        <div className={styles.result}>
          <div className={styles.result_form}>
            <Dataset groups={groups} fields={fields} control={control} />
          </div>
        </div>
      </div>
      <div className={styles.json}>
        {/*<pre contentEditable>{JSON.stringify(forms, null, 2)}</pre>*/}
      </div>
      <Modal closable={false} open={groupModal} onOk={createNewGroup} onCancel={closeGroupModal}>
       <Form ref={groupFormRef}>
         <Group>
           <Form.Item name='name' >
             <AntInput placeholder='Имя группы' />
           </Form.Item>
           <Form.Item name='title' >
             <AntInput placeholder='Заголовок'  />
           </Form.Item>
           <Form.Item name='subtitle' >
             <AntInput placeholder='Описание'  />
           </Form.Item>
           <Form.Item name='orientation' >
             <AntSelect
               placeholder='Направление'
               style={{ width: '100%' }}
               options={[
                 { value: 'column', label: 'В колонку' },
                 { value: 'row', label: 'В строку' },
               ]}
             />
           </Form.Item>
         </Group>
       </Form>
      </Modal>
      <Modal closable={false} open={fieldModal} onOk={createNewField} onCancel={closeFieldModal}>
        <Form ref={fieldFormRef}>
          <Group>
            <Form.Item name='name' >
              <AntInput placeholder='name' />
            </Form.Item>
            <Form.Item name='maxLength'>
              <AntInputNumber min={0} placeholder='Максимальная длинна' style={{width: '100%'}} />
            </Form.Item>
            <Form.Item name='placeholder' >
              <AntInput placeholder='Плейсхолдер'  />
            </Form.Item>
            <Form.Item name='label' >
              <AntInput placeholder='Лейбл'  />
            </Form.Item>
            <Form.Item name='type' >
              <AntSelect
                placeholder='Тип'
                style={{ width: '100%' }}
                options={[
                  { value: 'text', label: 'text' },
                  { value: 'textarea', label: 'textarea' },
                  { value: 'checkbox', label: 'checkbox' },
                ]}
              />
            </Form.Item>
            <Form.Item name='group' >
              <AntSelect
                placeholder='Группа'
                style={{ width: '100%' }}
                options={groups.map(g => ({value: g.name, label: g.title}))}
              />
            </Form.Item>
          </Group>
        </Form>
      </Modal>
    </Layout>
  )
}

export type DatasetType = {
  groups: {
    name: string,
    title: string,
    subtitle: string,
    orientation: string,
    col?: number
  }[]
  fields: {
    group: string
    name: string,
    placeholder: string,
    maxLength?: number,
    label?: string,
    type: 'text' | 'checkbox' | 'textarea'
  }[],
  control: Control
}

const Dataset = (props: DatasetType) => {
  const {groups, fields, control} = props
  const result = groups.map((g) => {
    return (
      <Group title={g.title} subtitle={g.subtitle} col={g.col} orientation={g.orientation as any}>
        {fields.filter((f) => f.group === g.name).map(f => {
          if (f.type === 'text') {
            return <Input control={control} name={f.name} placeholder={f.placeholder} rules={{maxLength: f.maxLength}} />
          }
          if (f.type === 'checkbox') {
            return <Checkbox name={f.name} control={control} label={f.label} />
          }

          if (f.type === 'textarea') {
            return <Textarea control={control} name={f.name} placeholder={f.placeholder} rules={{maxLength: f.maxLength}} />
          }
        })}
      </Group>
    )
  })
  return <>{result}</>
}

export default FormBuilder

