import styles from './ServicesControl.module.scss'
import { Layout, TemplateCard } from 'src/components/modules'
import { useAppSelector } from 'src/store/store'
import { getSchemas } from 'src/store/slices/schemaSlice/schemaSlice'
import { Button, Dropdown, MenuProps, Space, Table, TableColumnsType } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { SchemaType, TemplateType } from 'src/components/modules/Templates/Template.types'
import { HistoryType } from 'src/store/slices/adminSlise/adminSlise.types'
import dayjs from 'dayjs'
import { DeleteOutlined, DownOutlined, EditOutlined, FullscreenExitOutlined, UserOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

const ServicesControl = () => {
  const schemas = useAppSelector(getSchemas)
  const navigate = useNavigate()

  const columns: TableColumnsType<TemplateType> = [
    {
      width: '10%',
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      width: '20%',
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      width: '30%',
      title: 'Subtitle',
      dataIndex: 'subtitle',
      key: 'subtitle',
    },
    {
      width: '30%',
      title: 'Actions',
      render: (row) => {

        const handleMenuClick: MenuProps['onClick'] = (e) => {
          switch (e.key) {
            case '3':
              navigate(`/admin/services-control/form-builder/${row.id}`)
              return
          }
        };

        const items: MenuProps['items'] = [
          {
            label: 'Скрыть',
            key: '2',
            icon:  <FullscreenExitOutlined />,
          },
          {
            label: 'Редактировать',
            key: '3',
            icon: <EditOutlined />,
          },
          {
            label: 'Удалить',
            key: '4',
            icon: <DeleteOutlined />,
            danger: true,
          },
        ];

        const menuProps = {
          items,
          onClick: handleMenuClick,
        };

        return (
          <Dropdown menu={menuProps} trigger={['click']}>
            <Button>
              <Space>
                Меню
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        )
      }
    }
  ]

  return (
    <Layout>
      <Table dataSource={schemas} columns={columns} />
    </Layout>
  )
}




export default ServicesControl

