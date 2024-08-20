import {
  Delete_Foreign_Income,
  Get_Foreign_Income,
  Save_Foreign_Income,
} from '@/scripts/api'
import {getData, postData} from '@/scripts/api-service'
import {alertPop} from '@/scripts/helper'
import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleFilled,
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons'
import {
  Button,
  ConfigProvider,
  Flex,
  Form,
  Input,
  Modal,
  Select,
  Space,
  Table,
} from 'antd'
import {useEffect, useState} from 'react'
const {confirm} = Modal

export default function ForeignIncome({
  setActiveTab,
  nextActiveTab,
  setCurrent,
  backActiveTab,
}) {
  const [form] = Form.useForm()
  const [selectedItem, setSelecetedItem] = useState()
  const [loading, setLoading] = useState(false)
  const [foreignIncome, setforeignIncome] = useState()

  const columns = [
    {
      title: 'Source Type',
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
      title: 'Net income (BDT)',
      dataIndex: 'Cost',
      key: 'Cost',
      width: 200,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size='middle'>
          <Button
            type='primary'
            icon={<EditOutlined />}
            size={'large'}
            onClick={() => updateItem(record)}
          />
          <Button
            type='primary'
            danger
            icon={<DeleteOutlined />}
            size={'large'}
            onClick={() => deleteItem(record.ForeignIncomeId)}
          />
        </Space>
      ),
    },
  ]

  const updateItem = (data) => {
    form.setFieldsValue(data)
    setSelecetedItem(data)
  }

  const deleteItem = (TaxDeductId) => {
    confirm({
      title: 'Do you want to delete these items?',
      icon: <ExclamationCircleFilled />,
      async onOk() {
        let res = await postData(Delete_Foreign_Income + '/' + TaxDeductId)
        if (res) {
          getForeignIncome()
          alertPop('success', res?.data?.message)
        }
      },
      onCancel() {
        console.log('Cancel')
      },
    })
  }

  const onFinish = async (values) => {
    setLoading(true)
    let data = {...values}
    if (selectedItem?.ForeignIncomeId) {
      data.ForeignIncomeId = selectedItem?.ForeignIncomeId
    }

    let res = await postData(Save_Foreign_Income, data)

    if (res) {
      form.resetFields()
      getForeignIncome()
      setLoading(false)
      setSelecetedItem(null)
    }
  }

  const getForeignIncome = async () => {
    let res = await getData(Get_Foreign_Income)

    if (res) {
      setforeignIncome(res?.data)
    }
  }

  useEffect(() => {
    getForeignIncome()
  }, [])

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
          <Table
            columns={columns}
            dataSource={foreignIncome}
            pagination={false}
          />

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
                name='Type'
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  style={{width: '280px'}}
                  placeholder='Select a option'
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
                  <Option value='Taxable Income from Abroad'>
                    Taxable Income from Abroad
                  </Option>
                  <Option value='Tax Exempted / Tax Free Income'>
                    Tax Exempted / Tax Free Income
                  </Option>
                  <Option value='other'>other</Option>
                </Select>
              </Form.Item>

              <Form.Item
                name='Description'
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input style={{width: '200px'}} placeholder='Description' />
              </Form.Item>

              <Form.Item
                name='Cost'
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input style={{width: '200px'}} placeholder='Amount' />
              </Form.Item>

              <Form.Item>
                <Button
                  type='primary'
                  htmlType='submit'
                  className='w-28'
                  loading={loading}
                >
                  Save
                </Button>
              </Form.Item>
            </Flex>
          </Form>
        </div>
      </ConfigProvider>

      <div className='text-center mt-6'>
        <Space>
          <Button
            type='primary'
            className='refer-friend-button shadow-none md:w-52'
            onClick={() => {
              setActiveTab(backActiveTab)
            }}
          >
            <LeftOutlined style={{fontSize: '12px', marginTop: '2px'}} />
            Back
          </Button>

          {console.log('nextActiveTab', nextActiveTab)}
          <Button
            type='primary'
            className='prime-button gap-0 md:w-52 m-auto'
            onClick={() => {
              setActiveTab(nextActiveTab)
            }}
          >
            Next
            <RightOutlined style={{fontSize: '12px', marginTop: '2px'}} />
          </Button>
        </Space>
      </div>
    </div>
  )
}
