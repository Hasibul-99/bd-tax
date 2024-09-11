import {
  Create_User_Income_AgricultureCrops,
  Delete_User_Income_AgricultureCrops,
  Get_User_Income_AgricultureCrops,
  Get_User_Income_AgricultureCrops_Type,
  Update_User_Income_AgricultureCrops,
} from '@/scripts/api'
import {deleteData, getData, postData, putData} from '@/scripts/api-service'
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
  InputNumber,
  Modal,
  Radio,
  Select,
  Space,
  Table,
} from 'antd'
import {useEffect, useState} from 'react'
const {confirm} = Modal
const {TextArea} = Input

export default function AgricultureForm({
  setActiveTab,
  nextActiveTab,
  setProsCurrent,
  backActiveTab,
}) {
  const [form] = Form.useForm()
  const [AgricultureType, setAgricultureType] = useState()
  const [Agriculture, setAgriculture] = useState()
  const [selectedItem, setSelecetedItem] = useState()
  const [loading, setLoading] = useState(false)

  const onFinish = async (values) => {
    setLoading(true)
    let data = {...values}
    if (selectedItem?.IncomeAgricultureId) {
      let res = await putData(
        Update_User_Income_AgricultureCrops + selectedItem?.IncomeAgricultureId,
        data
      )

      if (res) {
        form.resetFields()
        getAgriculture()
        setSelecetedItem()
        setLoading(false)
      }
    } else {
      let res = await postData(Create_User_Income_AgricultureCrops, data)

      if (res) {
        form.resetFields()
        getAgriculture()
        setSelecetedItem()
        setLoading(false)
      }
    }
  }

  const getAgricultureType = async () => {
    let res = await getData(Get_User_Income_AgricultureCrops_Type)

    if (res) {
      setAgricultureType(res?.data)
    }
  }

  const getAgriculture = async () => {
    let res = await getData(Get_User_Income_AgricultureCrops)

    if (res) {
      setAgriculture(res?.data || [])
    }
  }

  const onValuesChange = (changedValues, allValues) => {
    console.log('Changed values:', changedValues)
    console.log('All values:', allValues)

    if (allValues) {
      let grossProfit =
        (allValues.TotalRevenue || 0) - (allValues.ProductionCost || 0)
      let cost =
        (allValues.TotalRevenue || 0) -
        (allValues.ProductionCost || 0) -
        (allValues.Expenses || 0)

      form.setFieldsValue({Cost: cost, GrossProfit: grossProfit})
    }
  }

  const deleteItem = (IncomeAgricultureId) => {
    confirm({
      title: 'Do you want to delete these items?',
      icon: <ExclamationCircleFilled />,
      async onOk() {
        let res = await deleteData(
          Delete_User_Income_AgricultureCrops + IncomeAgricultureId
        )
        if (res) {
          getAgriculture()
          alertPop('success', res?.data?.message)
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
      dataIndex: 'CropsType',
      key: 'CropsType',
      width: 250,
    },
    {
      title: 'Short Description',
      dataIndex: 'LandInBigha',
      key: 'LandInBigha',
      width: 250,
    },
    {
      title: 'Do you have any Books of Account?',
      dataIndex: 'BooksOfAccount',
      key: 'BooksOfAccount',
      width: 200,
    },
    {
      title: 'Total Revenue (BDT)',
      dataIndex: 'TotalRevenue',
      key: 'TotalRevenue',
      width: 200,
    },
    {
      title: 'Production Cost (BDT)',
      dataIndex: 'ProductionCost',
      key: 'ProductionCost',
      width: 200,
    },
    {
      title: 'Gross Profit',
      dataIndex: 'GrossProfit',
      key: 'GrossProfit',
      width: 200,
    },
    {
      title: 'Expenses',
      dataIndex: 'Expenses',
      key: 'Expenses',
      width: 200,
    },
    {
      title: 'Net Income (BDT)',
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
            onClick={() => deleteItem(record.IncomeAgricultureId)}
          />
        </Space>
      ),
    },
  ]

  useEffect(() => {
    getAgricultureType()
    getAgriculture()
  }, [])

  return (
    <div className='bg-white pb-6 px-6'>
      <h3 className='text-xl font-semibold'>AGRICULTURE</h3>
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
            className='overflow-x-scroll'
            columns={columns}
            dataSource={Agriculture}
            pagination={false}
          />

          <Form
            className='mt-5 overflow-x-scroll'
            form={form}
            layout={'vertical'}
            name='control-hooks'
            onFinish={onFinish}
            onValuesChange={onValuesChange}
            size='large'
          >
            <Flex wrap gap='small'>
              <Form.Item
                name='CropsType'
                rules={[
                  {
                    required: true,
                    message: 'Please select an option',
                  },
                ]}
              >
                <Select
                  style={{width: '100px'}}
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
                  {AgricultureType?.length &&
                    AgricultureType.map((item) => (
                      <Option value={item}>{item}</Option>
                    ))}
                </Select>
              </Form.Item>

              <Form.Item
                name='LandInBigha'
                rules={[
                  {
                    required: true,
                    message: 'Please input land size in bigha ',
                  },
                  {
                    max: 600,
                    message:
                      'The message cannot be longer than 500 characters!',
                  },
                ]}
              >
                <TextArea
                  maxLength={700}
                  rows={2}
                  style={{width: '120px'}}
                  placeholder='Short Description'
                />
              </Form.Item>

              <Form.Item
                name='BooksOfAccount'
                rules={[
                  {
                    required: true,
                    message: 'Please select  ',
                  },
                ]}
              >
                <Radio.Group>
                  <Space direction='vertical'>
                    <Radio value={'Yes'}>Yes</Radio>
                    <Radio value={'No'}>No</Radio>
                  </Space>
                </Radio.Group>
              </Form.Item>

              <Form.Item
                name='TotalRevenue'
                rules={[
                  {
                    required: true,
                    message: 'Please input Revenue ',
                  },
                ]}
              >
                <InputNumber
                  style={{width: '100px'}}
                  placeholder='Total Revenue'
                />
              </Form.Item>

              <Form.Item
                name='ProductionCost'
                rules={[
                  {
                    required: true,
                    message: 'Please input Production Cost ',
                  },
                ]}
              >
                <InputNumber
                  style={{width: '100px'}}
                  placeholder='Production Cost'
                />
              </Form.Item>

              <Form.Item
                name='GrossProfit'
                rules={[
                  {
                    required: true,
                    message: 'Please input Gross profit',
                  },
                ]}
              >
                <InputNumber
                  style={{width: '100px'}}
                  placeholder='Gross profit'
                  disabled
                />
              </Form.Item>

              <Form.Item
                name='Expenses'
                rules={[
                  {
                    required: true,
                    message: 'Please input Expenses',
                  },
                ]}
              >
                <InputNumber style={{width: '100px'}} placeholder='Expenses' />
              </Form.Item>

              <Form.Item
                name='Cost'
                rules={[
                  {
                    required: true,
                    message: 'Please input Cost ',
                  },
                ]}
              >
                <InputNumber
                  style={{width: '100px'}}
                  placeholder='Cost'
                  disabled
                />
              </Form.Item>
            </Flex>
            <div className='text-center'>
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
            </div>
          </Form>
        </div>

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

            <Button
              type='primary'
              className='prime-button gap-0 md:w-52 m-auto'
              onClick={() => {
                nextActiveTab ? setActiveTab(nextActiveTab) : setProsCurrent(2)
              }}
            >
              Next
              <RightOutlined style={{fontSize: '12px', marginTop: '2px'}} />
            </Button>
          </Space>
        </div>
      </ConfigProvider>
    </div>
  )
}
