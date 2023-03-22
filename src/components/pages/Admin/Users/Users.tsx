import { Button, Input, InputRef, Space, Table, TablePaginationConfig, Tag } from 'antd'
import { Layout } from 'src/components/modules'
import { useEffect, useRef, useState } from 'react'
import { adminService } from 'src/api/services/adminService/adminService'
import { HistoryType, Role, UserType } from 'src/store/slices/adminSlise/adminSlise.types'
import { ColumnsType, ColumnType } from 'antd/es/table'
import dayjs from 'dayjs'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Meta } from 'src/types/system/meta'
import { FilterConfirmProps, FilterValue, SorterResult } from 'antd/es/table/interface'
import { SearchOutlined } from '@ant-design/icons'
import Highlighter from 'react-highlight-words'

const pageSize = 20

interface TableParams {
  pagination?: TablePaginationConfig
  sortField?: string
  sortOrder?: string
  filters?: Record<string, FilterValue>
}

const Users = () => {
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState<UserType[]>([])
  const [meta, setMeta] = useState<Meta>()
  const [searchText, setSearchText] = useState('')
  const [searchedColumn, setSearchedColumn] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    if (!loading) {
      fetchData()
    }
  }, [searchParams])

  const fetchData = () => {
    setLoading(true)
    adminService
      .fetchUsers<{ users: UserType[]; meta: Meta }>(
        searchParams.get('page') ?? '1',
        pageSize,
        searchParams.get('order'),
        searchParams.get('filter'),
      )
      .then(data => {
        setUsers(data.users)
        setMeta(data.meta)
      })
      .finally(() => {
        setLoading(false)
      })
  }
  const onChangePage = (page: number) => {
    setSearchParams(`page=${page}`, {})
  }
  const searchInput = useRef<InputRef>(null)
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
      <div style={{ padding: 8 }} onKeyDown={e => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
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
    onFilterDropdownOpenChange: visible => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100)
      }
    },
    render: text =>
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

  const columns: ColumnsType<UserType> = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      sorter: true,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      width: '8%',
      // @ts-ignore
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
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
      ...getColumnSearchProps('email'),
    },
    {
      width: '5%',
      title: 'Roles',
      dataIndex: 'Roles',
      key: 'roles',
      render: (value, data) => {
        return (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              alignItems: 'flex-start',
            }}
          >
            {value.map((i: Role) => {
              return <Tag color={i.name === 'user' ? 'blue' : 'warning'}>{i.name}</Tag>
            })}
          </div>
        )
      },
    },
    {
      title: 'Balance',
      dataIndex: 'Balance',
      key: 'Balance',
      render: row => row.amount,
    },
    {
      title: 'Created',
      dataIndex: 'createdAt',
      key: 'createdAt',
      sorter: true,
      render: value => {
        return dayjs(value).format('DD-MM-YYYY hh:mm:ss')
      },
    },
    {
      title: 'Updated',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      sorter: true,
      render: value => {
        return dayjs(value).format('DD-MM-YYYY hh:mm:ss')
      },
    },
  ]

  return (
    <Layout>
      <Table
        loading={loading}
        dataSource={users}
        columns={columns}
        pagination={{
          total: meta?.total,
          pageSize: pageSize,
          hideOnSinglePage: true,
          onChange: onChangePage,
        }}
        onChange={handleTableChange}
        sortDirections={['descend', 'ascend']}
      />
    </Layout>
  )
}

export default Users
