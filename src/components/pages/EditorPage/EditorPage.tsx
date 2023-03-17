import { Editor } from 'src/components/modules'
import styles from './EditorPage.module.scss'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDebounce } from 'src/hooks'
import { useAppDispatch, useAppSelector } from 'src/store/store'
import {
  createDoc,
  fetchDocByUUID,
  fetchDocs,
  getAllDocs,
  getDocsLoading,
  saveDoc,
} from 'src/store/slices/docsSlice/docsSlice'
import cn from 'classnames'
import { Plus } from 'src/components/common/Icon'

const EditorPage = () => {
  let { uuid } = useParams()

  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const loading = useAppSelector(getDocsLoading)

  const docs = useAppSelector(getAllDocs)

  useEffect(() => {
    dispatch(fetchDocs())
  }, [])

  const createNewDoc = () => {
    dispatch(createDoc({ content: '' }))
      .unwrap()
      .then(uuid => {
        navigate(`/editor/${uuid}`)
        dispatch(fetchDocs())
      })
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.aside}>
        <div onClick={createNewDoc} className={cn(styles.aside_item, styles.aside_item_new)}>
          Создать новый
          <Plus />
        </div>
        {docs.map(d => {
          if (loading) {
            return (
              <div
                className={cn(styles.aside_item, { [styles.aside_item_active]: d.uuid === uuid })}
              >
                <span>{d.name ?? d.uuid}</span>
              </div>
            )
          } else {
            return (
              <Link
                to={`/editor/${d.uuid}`}
                className={cn(styles.aside_item, { [styles.aside_item_active]: d.uuid === uuid })}
              >
                <span>{d.name ?? d.uuid}</span>
              </Link>
            )
          }
        })}
      </div>
      {uuid && <EditorBlock />}
    </div>
  )
}

export default EditorPage

const EditorBlock = () => {
  let { uuid } = useParams()

  const dispatch = useAppDispatch()
  const loading = useAppSelector(getDocsLoading)
  const [value, setValue] = useState('')
  const debouncedValue = useDebounce(value, 1000)

  useEffect(() => {
    if (uuid) {
      if (value) {
        dispatch(saveDoc({ content: value, uuid: uuid as string }))
      }
    }
  }, [debouncedValue])

  useEffect(() => {
    if (uuid) {
      dispatch(fetchDocByUUID({ uuid }))
        .unwrap()
        .then(data => {
          setValue(data.content)
        })
    }
  }, [uuid])

  return (
    <div className={styles.layout}>
      <div className={styles.docName}>Документ: {uuid}</div>

      <Editor disabled={loading} uuid={uuid} value={value} setValue={setValue} />
    </div>
  )
}
