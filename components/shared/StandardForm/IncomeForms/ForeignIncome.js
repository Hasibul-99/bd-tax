import {DeleteOutlined, EditOutlined} from '@ant-design/icons'
import {
  Button,
  ConfigProvider,
  Flex,
  Form,
  Input,
  Select,
  Space,
  Table,
} from 'antd'

const columns = [
  {
    title: 'Tds Type',
    dataIndex: 'Type',
    key: 'Type',
    width: 300,
  },
  {
    title: 'Details',
    dataIndex: 'Description',
    key: 'Description',
    width: 200,
  },
  {
    title: 'TDS (BDT)',
    dataIndex: 'Cost',
    key: 'Cost',
    width: 200,
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size='middle'>
        <Button type='primary' icon={<EditOutlined />} size={'large'} />
        <Button
          type='primary'
          danger
          icon={<DeleteOutlined />}
          size={'large'}
        />
      </Space>
    ),
  },
]
const data = [
  {
    TaxDeductId: 13308,
    IncomeId: 41838,
    Description: 'TDS',
    Cost: 5000,
    LastUpdateAt: null,
    CerateAt: '2024-04-16 11:49:30',
    Type: null,
  },
]

export default function ForeignIncome({setActiveTab}) {
  const [form] = Form.useForm()

  const onFinish = (values) => {
    console.log(values)
  }

  return (
    <div className='bg-white pb-6 px-6'>
      <h3 className='text-xl font-semibold'>INCOME FROM FINANCIAL ASSETS </h3>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#126A25',
          },
          components: {
            Button: {
              colorPrimary: '#126A25',
            },
          },
        }}
      >
        <div className='mt-5'>
          <Table columns={columns} dataSource={data} pagination={false} />

          <Form
            className='mt-5'
            form={form}
            layout={'vertical'}
            name='control-hooks'
            onFinish={onFinish}
            size='large'
          >
            <Flex wrap gap='small'>
              <Form.Item
                name='gender'
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  style={{width: '280px'}}
                  placeholder='Select a option and change input text above'
                  // onChange={onGenderChange}
                  popupMatchSelectWidth={false}
                  allowClear
                  suffixIcon={
                    <img
                      src='/assets/icons/select-icon.svg'
                      alt='select-icon'
                    />
                  }
                >
                  <Option value='male'>male</Option>
                  <Option value='female'>female</Option>
                  <Option value='other'>other</Option>
                </Select>
              </Form.Item>

              <Form.Item
                name='gender'
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input style={{width: '200px'}} />
              </Form.Item>

              <Form.Item
                name='gender'
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input style={{width: '200px'}} />
              </Form.Item>

              <Form.Item>
                <Button type='primary' htmlType='submit' className='w-28'>
                  Save
                </Button>
              </Form.Item>
            </Flex>
          </Form>
        </div>
      </ConfigProvider>
    </div>
  )
}
