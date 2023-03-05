import styles from './Templates.module.scss'
import { Layout, TemplateCard } from 'src/components/modules'
import { useAppSelector } from 'src/store/store'
import { getSchemas } from 'src/store/slices/schemaSlice/schemaSlice'

const Templates = () => {
  const schemas = useAppSelector(getSchemas)

  return (
    <Layout>
      <div className={styles.list}>
        {schemas.map(template => (
          <TemplateCard key={template.id} template={template} />
        ))}
      </div>
    </Layout>
  )
}

export default Templates


