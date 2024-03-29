import styles from './History.module.scss'
import {
  Button,
  Col,
  Descriptions,
  Divider,
  Drawer,
  Input,
  InputNumber,
  InputRef,
  Row,
  Space,
  Table,
  TableColumnsType,
  TablePaginationConfig,
} from 'antd'
import { Layout } from 'src/components/modules'
import { useEffect, useRef, useState } from 'react'
import { adminService } from 'src/api/services/adminService/adminService'
import { HistoryType, UserType } from 'src/store/slices/adminSlise/adminSlise.types'
import { ColumnsType, ColumnType } from 'antd/es/table'
import dayjs from 'dayjs'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Meta } from 'src/types/system/meta'
import { FilterConfirmProps, FilterValue, SorterResult } from 'antd/es/table/interface'
import { SearchOutlined } from '@ant-design/icons'
import Highlighter from 'react-highlight-words'


interface TableParams {
  pagination?: TablePaginationConfig
  sortField?: string
  sortOrder?: string
  filters?: Record<string, FilterValue>
}

const pageSize = 20

const expandedRowRender = (data: any) => {
  const columns: TableColumnsType<HistoryType> = [
    {
      width: '5%',
      title: '',
      dataIndex: 'id',
      key: 'id',
      render: () => null,
    },
    {
      width: '8%',
      title: '',
      dataIndex: 'userId',
      key: 'userId',
      render: () => null,
    },
    {
      width: '8%',
      title: '',
      dataIndex: 'serviceId',
      key: 'serviceId',
      render: () => null,
    },
    {
      width: '25%',
      title: '',
      dataIndex: 'requestText',
      key: 'requestText',
      render: value => <div dangerouslySetInnerHTML={{ __html: value }} />,
    },
    {
      width: '25%',
      title: '',
      dataIndex: 'responseText',
      key: 'responseText',
      render: value => <div dangerouslySetInnerHTML={{ __html: value }} />,
    },
    {
      width: '20%',
      title: '',
      dataIndex: 'tokensSpent',
      key: 'tokensSpent',
      render: () => null,
    },
    {
      width: '15%',
      title: '',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: () => null,
    },
  ]

  return <Table dataSource={data} columns={columns} pagination={false} showHeader={false} />
}

const History = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<HistoryType[]>([])
  const [meta, setMeta] = useState<Meta>()

  const [searchParams, setSearchParams] = useSearchParams()

  const fetchData = () => {
    setLoading(true)
    adminService
      .fetchHistory<{ statistic: HistoryType[]; meta: Meta }>(
        searchParams.get('page') ?? '1',
        pageSize,
        searchParams.get('order'),
        searchParams.get('filter'),
      )
      .then(data => {
        setData(data.statistic)
        setMeta(data.meta)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    if (!loading) {
      fetchData()
    }
  }, [searchParams])

  const handleTableChange: any = (
    paginationConfig: TablePaginationConfig,
    filters: Record<string, FilterValue>,
    sorter: SorterResult<UserType>,
  ) => {
    const newParams = new URLSearchParams(searchParams)
    if (sorter.field && sorter.order) {
      newParams.set('order', JSON.stringify([[sorter.field], [sorter.order]]))
    }
    newParams.set('page', paginationConfig.current?.toString() ?? '1')

    setSearchParams(newParams)
  }

  const [searchText, setSearchText] = useState('')
  const [searchedColumn, setSearchedColumn] = useState('')
  const searchInput = useRef<InputRef>(null)

  const [drawerUserState, setDrawerUserState] = useState(false)
  const [drawerServiceState, setDrawerServiceState] = useState(false)
  const [drawerInfoState, setDrawerInfoState] = useState<HistoryType | null>(null)

  const handleSearch = (
    selectedKeys: string[],
    confirm: (param?: FilterConfirmProps) => void,
    dataIndex: string,
  ) => {
    confirm()
    const newParams = new URLSearchParams(searchParams)
    if (selectedKeys[0] && dataIndex) {
      newParams.set('filter', JSON.stringify([[dataIndex], [selectedKeys[0]]]))
    }
    setSearchParams(newParams)

  }

  const handleReset = (clearFilters: () => void) => {
    clearFilters()
    const newParams = new URLSearchParams(searchParams)
    newParams.delete('filter')
    setSearchParams(newParams)
    setSearchText('')
  }

  const getColumnSearchProps = (dataIndex: string): ColumnType<HistoryType> => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type='primary'
            onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
            icon={<SearchOutlined />}
            size='small'
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size='small'
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100)
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  })

  const columns: TableColumnsType<HistoryType> = [
    {
      width: '5%',
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      sorter: true,
    },
    {
      width: '8%',
      title: 'User ID',
      dataIndex: 'UserId',
      key: 'UserId',
      filters: [
        {
          text: 'Joe',
          value: 'Joe',
        },
        {
          text: 'Category 1',
          value: 'Category 1',
        },
        {
          text: 'Category 2',
          value: 'Category 2',
        },
      ],
      ...getColumnSearchProps('UserId'),
      render: (row, data) => {
        const onClick = () => {
          setDrawerInfoState(data)
          setDrawerUserState(true)
        }
        return (
          <>
            <Button type='link' onClick={onClick}>{row}</Button>
          </>
        )
      },
    },
    {
      width: '8%',
      title: 'Service ID',
      dataIndex: 'serviceId',
      key: 'serviceId',
      render: (row, data) => {
        const onClick = () => {
          setDrawerInfoState(data)
          setDrawerServiceState(true)
        }
        return (
          <>
            <Button type='link' onClick={onClick}>{row}</Button>
          </>
        )
      },
    },
    {
      width: '25%',
      title: 'Request Text',
      dataIndex: 'requestText',
      key: 'requestText',
      render: value => <div className={styles.text} dangerouslySetInnerHTML={{ __html: value }} />,
    },
    {
      width: '25%',
      title: 'Response Text',
      dataIndex: 'responseText',
      key: 'responseText',
      render: value => <div className={styles.text} dangerouslySetInnerHTML={{ __html: value }} />,
    },
    {
      width: '20%',
      title: 'Spent Tokens',
      dataIndex: 'tokensSpent',
      key: 'tokensSpent',
      sorter: true,
    },
    {
      width: '15%',
      title: 'Created',
      dataIndex: 'createdAt',
      key: 'createdAt',
      sorter: true,
      render: (value) => {
        return dayjs(value).format('DD-MM-YYYY hh:mm:ss')
      },
    },
  ]

  return (
    <>
      <Layout>
        <Table
          rowKey={'id'}
          loading={loading}
          dataSource={data}
          columns={columns}
          pagination={{
            total: meta?.total,
            pageSize: pageSize,
            hideOnSinglePage: true,
            showSizeChanger: false,
            current: searchParams.get('page') ? +searchParams.get('page')! : 1,
          }}
          expandable={{
            expandedRowRender: row => expandedRowRender([row]),
            defaultExpandedRowKeys: ['0'],
          }}
          onChange={handleTableChange}
          sortDirections={['descend', 'ascend']}
        />
        {drawerInfoState && (
          <>
            <Drawer
              title='User Info'
              placement='right'
              closable={false}
              onClose={() => setDrawerUserState(false)}
              open={drawerUserState}
              className={styles.drawer}
            >
              <Descriptions title='Personal' column={1}>
                <Descriptions.Item label='Name'>{drawerInfoState?.User.name}</Descriptions.Item>
                <Descriptions.Item label='Email'>{drawerInfoState?.User.email}</Descriptions.Item>
                <Descriptions.Item
                  label='Created Date'>{dayjs(drawerInfoState.User.createdAt).format('DD-MM-YYYY hh:mm')}</Descriptions.Item>
              </Descriptions>
            </Drawer>
            <Drawer
              title='Basic Drawer'
              placement='right'
              closable={false}
              onClose={() => setDrawerServiceState(false)}
              open={drawerServiceState}
            >
              <Descriptions title='Service' column={1}>
                <Descriptions.Item label='Id'>{drawerInfoState?.Service.id}</Descriptions.Item>
                <Descriptions.Item label='Title'>{drawerInfoState?.Service.title}</Descriptions.Item>
                <Descriptions.Item label='Subtitle'>{drawerInfoState.Service.subtitle}</Descriptions.Item>
              </Descriptions>
            </Drawer>
          </>
        )}

      </Layout>
    </>
  )
}

export default History


interface DescriptionItemProps {
  title: string;
  content: React.ReactNode;
}

const DescriptionItem = ({ title, content }: DescriptionItemProps) => (
  <div className={styles.item}>
    <p className={styles.item_title}>{title}:</p>
    {content}
  </div>
)
