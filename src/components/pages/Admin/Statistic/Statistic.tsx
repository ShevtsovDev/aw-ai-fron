import styles from './Statistic.module.scss'
import { Table } from 'antd'
import { Layout } from 'src/components/modules'
import { useEffect, useState } from 'react'
import { adminService } from 'src/api/services/adminService/adminService'
import { StatisticType, UserType } from 'src/store/slices/adminSlise/adminSlise.types'
import { ColumnsType } from 'antd/es/table'
import dayjs from 'dayjs'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Meta } from 'src/types/system/meta'
import { useAppSelector } from 'src/store/store'
import { getSchemas } from 'src/store/slices/schemaSlice/schemaSlice'
import { PieChart } from 'src/components/modules/Charts'


const column: ColumnsType<(StatisticType & ({title: string | undefined}))> = [
  {
    title: 'Шаблон',
    dataIndex: 'title',
    key: 'title'
  },
  {
    title: 'Переходов в шаблон',
    dataIndex: 'count',
    key: 'count'
  }
]

const Statistic = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<(StatisticType & ({title: string | undefined}))[]>([])
  const services = useAppSelector(getSchemas)

  useEffect(() => {
    if (!loading) {
      setLoading(true)
      adminService.fetchStatistic<{ counter: StatisticType[]}>()
        .then(response => {
          const data = response.counter.map(i => ({...i, count: +i.count, title: services.find(s => s.id === i.serviceId)?.title}))
          setData(data)
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }, [])



  return (
    <Layout>
      <div className={styles.wrapper}>
        <h2>Статистика по шаблонам за текущую неделю</h2>
        <div className={styles.block}>
          <Table dataSource={data} loading={loading} columns={column} pagination={false} />
          <div className={styles.block_pie}>
            <PieChart statistic={data} />
          </div>
        </div>

      </div>
    </Layout>
  )
}

export default Statistic