import styles from './Users.module.scss'
import { Table, TablePaginationConfig, Tag } from 'antd'
import { Layout } from 'src/components/modules'
import { useEffect, useState } from 'react'
import { adminService } from 'src/api/services/adminService/adminService'
import { Role, UserType } from 'src/store/slices/adminSlise/adminSlise.types'
import { ColumnsType } from 'antd/es/table'
import dayjs from 'dayjs'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Meta } from 'src/types/system/meta'
import { FilterValue, SorterResult } from 'antd/es/table/interface'

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

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
    title: 'Email',
    dataIndex: 'email',
    key: 'email'
  },
  {
    width: '5%',
    title: 'Roles',
    dataIndex: 'Roles',
    key: 'roles',
    render: (value, data) => {
      return <div style={{display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-start'}}>
        {value.map((i: Role) => {
          return (
            <Tag color={i.name === 'user' ? 'blue' : 'warning'}>
              {i.name}
            </Tag>
          )
        })}
      </div>
    }
  },
  {
    title: 'Created',
    dataIndex: 'createdAt',
    key: 'createdAt',
    sorter: true,
    render: (value) => {
      return dayjs(value).format('DD-MM-YYYY hh:mm:ss')
    }
  },
  {
    title: 'Updated',
    dataIndex: 'updatedAt',
    key: 'updatedAt',
    sorter: true,
    render: (value) => {
      return dayjs(value).format('DD-MM-YYYY hh:mm:ss')
    }
  },
];

const pageSize = 20

interface TableParams {
  pagination?: TablePaginationConfig;
  sortField?: string;
  sortOrder?: string;
  filters?: Record<string, FilterValue>;
}

const Users = () => {
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState<UserType[]>([])
  const [meta, setMeta] = useState<Meta>()

  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()

  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  useEffect(() => {
    if (!loading) {
      setLoading(true)
      adminService.fetchUsers<{ users: UserType[], meta: Meta}>(searchParams.get('page') ?? '1', pageSize, searchParams.get('order'))
        .then(data => {
          setUsers(data.users)
          setMeta(data.meta)
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }, [searchParams])

  const onChangePage = (page: number) => {
    setSearchParams(`page=${page}`, {})
  }

  const handleTableChange: any = (
    _: TablePaginationConfig,
    filters: Record<string, FilterValue>,
    sorter: SorterResult<UserType>,
  ) => {
    setSearchParams(`order=${JSON.stringify([[sorter.field],[sorter.order]])}`)
  };

  return (
    <Layout>
      <Table
        loading={loading}
        dataSource={users}
        columns={columns}
        pagination={{total: meta?.total, pageSize: pageSize, hideOnSinglePage: true, onChange: onChangePage}}
        onChange={handleTableChange}
        sortDirections={['descend', 'ascend']}
      />
    </Layout>
  )
}

export default Users