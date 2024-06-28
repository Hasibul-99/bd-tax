import {
  Delete_Financial_Assets,
  Get_Financial_Assets,
  GET_Financial_Assets_Type,
  Save_Financial_Assets,
} from '@/scripts/api'
import {getData, postData} from '@/scripts/api-service'
import {alertPop} from '@/scripts/helper'
import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleFilled,
} from '@ant-design/icons'
import {
  Button,
  ConfigProvider,
  Flex,
  Form,
  Input,
  InputNumber,
  Modal,
  Select,
  Space,
  Table,
} from 'antd'
import {useEffect, useState} from 'react'
const {confirm} = Modal

export default function IncomeFromFinancialAssets({setActiveTab}) {
  const [form] = Form.useForm()
  const [financialAssetsType, setFinancialAssetsType] = useState()
  const [financialAssets, setFinancialAssets] = useState()
  const [selectedItem, setSelecetedItem] = useState()

  const onFinish = async (values) => {
    let data = {...values}
    if (selectedItem?.InterestOnSecuritiesId) {
      data.InterestOnSecuritiesId = selectedItem.InterestOnSecuritiesId

      let res = await postData(Save_Financial_Assets, data)

      if (res) {
        form.resetFields()
        getFinancialAssets()
        setSelecetedItem()
      }
    } else {
      let res = await postData(Save_Financial_Assets, data)

      if (res) {
        form.resetFields()
        getFinancialAssets()
        setSelecetedItem()
      }
    }
  }

  const getFinancialAssetsType = async () => {
    let res = await getData(GET_Financial_Assets_Type)

    if (res) {
      setFinancialAssetsType(res?.data)
    }
  }

  const getFinancialAssets = async () => {
    let res = await getData(Get_Financial_Assets)

    if (res) {
      setFinancialAssets(res?.data || [])
    }
  }

  const deleteItem = (InterestOnSecuritiesId) => {
    confirm({
      title: 'Do you want to delete these items?',
      icon: <ExclamationCircleFilled />,
      async onOk() {
        let res = await postData(
          Delete_Financial_Assets + '/' + InterestOnSecuritiesId
        )
        if (res) {
          getFinancialAssets()
          alertPop('error', res?.data?.message)
        }
      },
      onCancel() {
        console.log('Cancel')
      },
    })
  }

  const updateItem = (data) => {
    form.setFieldsValue(data)
    setSelecetedItem(data)
  }

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
            onClick={() => deleteItem(record.InterestOnSecuritiesId)}
          />
        </Space>
      ),
    },
  ]

  useEffect(() => {
    getFinancialAssetsType()
    getFinancialAssets()
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
            dataSource={financialAssets}
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
                  style={{width: '180px'}}
                  placeholder='Select a option'
                  popupMatchSelectWidth={false}
                  allowClear
                  suffixIcon={
                    <img
                      src='/assets/icons/select-icon.svg'
                      alt='select-icon'
                    />
                  }
                >
                  {financialAssetsType?.length &&
                    financialAssetsType.map((item) => (
                      <Option value={item}>{item}</Option>
                    ))}
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
                <Input style={{width: '150px'}} placeholder='Description' />
              </Form.Item>

              <Form.Item
                name='Cost'
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <InputNumber style={{width: '150px'}} placeholder='Cost' />
              </Form.Item>

              <Form.Item
                name='CommissionOrInterest'
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <InputNumber
                  style={{width: '150px'}}
                  placeholder='Commission Or Interest'
                />
              </Form.Item>

              <Form.Item
                name='NetAmount'
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <InputNumber
                  style={{width: '150px'}}
                  placeholder='Net Amount'
                />
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
