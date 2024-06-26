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
    title: 'Type',
    dataIndex: 'Type',
    key: 'Type',
    width: 200,
  },
  {
    title: 'Description',
    dataIndex: 'Description',
    key: 'Description',
    width: 150,
  },
  {
    title: 'Amount (BDT)',
    dataIndex: 'Cost',
    key: 'Cost',
    width: 150,
  },
  {
    title: 'Commission/Interest (BDT)',
    dataIndex: 'CommissionOrInterest',
    key: 'CommissionOrInterest',
  },
  {
    title: 'Net income (BDT)',
    dataIndex: 'NetAmount',
    key: 'NetAmount',
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
    InterestOnSecuritiesId: 605,
    IncomeId: 41838,
    Type: 'Bond',
    Description: 'test',
    NetAmount: 10000,
    CommissionOrInterest: 250,
    Cost: 9750,
    CerateAt: '2024-04-23 16:55:26',
    LastUpdateAt: null,
    CPIId: 49997,
    EntryYear: '2023-2024',
    trash: 0,
  },
]

export default function IncomeFromFinancialAssets({setActiveTab}) {
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
                  style={{width: '180px'}}
                  placeholder='Select a option and change input text above'
                  // onChange={onGenderChange}
                  popupMatchSelectWidth={false}
                  allowClear
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
                <Input style={{width: '150px'}} />
              </Form.Item>

              <Form.Item
                name='gender'
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input style={{width: '150px'}} />
              </Form.Item>

              <Form.Item
                name='gender'
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input style={{width: '150px'}} />
              </Form.Item>

              <Form.Item
                name='gender'
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input style={{width: '150px'}} />
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
