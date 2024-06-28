import {DeleteOutlined, EditOutlined} from '@ant-design/icons'
import {
  Button,
  ConfigProvider,
  Flex,
  Form,
  Input,
  Radio,
  Select,
  Space,
  Table,
} from 'antd'

const columns = [
  {
    title: 'Type',
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
    title: 'Amount (BDT)',
    dataIndex: 'Cost',
    key: 'Cost',
    width: 200,
  },
  {
    title: 'Method',
    dataIndex: 'Cost',
    key: 'Cost',
    width: 200,
  },
  {
    title: 'Taxable Income (BDT)',
    dataIndex: 'Cost',
    key: 'Cost',
    width: 200,
  },
  {
    title: 'Tds (BDT)',
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

export default function CapitalGains() {
  const [form] = Form.useForm()

  const onFinish = (values) => {
    console.log(values)
  }

  return (
    <div className='bg-white pb-6 px-6'>
      <h3 className='text-xl font-semibold'>CAPITAL GAINS</h3>
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
        </div>
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
              // label='Username'
              name='username'
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Select
                placeholder='Select a option and change input text above'
                // onChange={onGenderChange}
                popupMatchSelectWidth={false}
                allowClear
                suffixIcon={
                  <img src='/assets/icons/select-icon.svg' alt='select-icon' />
                }
              >
                <Option value='male'>male</Option>
                <Option value='female'>female</Option>
                <Option value='other'>other</Option>
              </Select>
            </Form.Item>
            <Form.Item
              // label='Username'
              name='username'
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              // label='Username'
              name='username'
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label='Are you shareholder of more than 10% shares of the listed company?'
              name='username'
              // rules={[
              //   {
              //     required: true,
              //     message: 'Please input your username!',
              //   },
              // ]}
            >
              <Radio defaultChecked>Yes</Radio>
              <Radio>No</Radio>
            </Form.Item>

            <div>
              <Form.Item
                // label='Username'
                name='username'
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input placeholder='Amount' />
              </Form.Item>

              <Form.Item
                // label='Username'
                name='username'
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input placeholder='TDS Amount' />
              </Form.Item>
            </div>

            <Form.Item
              // label='Username'
              name='username'
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Flex>
          <Form.Item className='m-auto text-center'>
            <Button type='primary' htmlType='submit' className='w-28'>
              Save
            </Button>
          </Form.Item>
        </Form>
      </ConfigProvider>
    </div>
  )
}
