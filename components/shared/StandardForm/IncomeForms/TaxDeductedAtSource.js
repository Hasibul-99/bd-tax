import {Delete_Tds, Get_Tds, Get_Tds_Type, Save_Tds} from '@/scripts/api'
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
  InputNumber,
  Modal,
  Select,
  Space,
  Table,
} from 'antd'
import {useEffect, useState} from 'react'
const {confirm} = Modal

export default function TaxDeductedAtSource({
  setActiveTab,
  nextActiveTab,
  setCurrent,
  backActiveTab,
}) {
  const [form] = Form.useForm()
  const [tdsType, setTdsType] = useState()
  const [tds, setTds] = useState()
  const [selectedItem, setSelecetedItem] = useState()
  const [loading, setLoading] = useState(false)
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
            onClick={() => deleteItem(record.TaxDeductId)}
            size={'large'}
          />
        </Space>
      ),
    },
  ]

  const deleteItem = (TaxDeductId) => {
    confirm({
      title: 'Do you want to delete these items?',
      icon: <ExclamationCircleFilled />,
      async onOk() {
        let res = await postData(Delete_Tds + '/' + TaxDeductId)
        if (res) {
          getTds()
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

  const onFinish = async (values) => {
    let data = {...values}
    setLoading(true)

    if (selectedItem?.TaxDeductId) {
      data.TaxDeductId = selectedItem.TaxDeductId
    }

    let res = await postData(Save_Tds, data)
    if (res) {
      form.resetFields()
      getTds()
      setLoading(false)
      setSelecetedItem(null)
    }
  }

  const getTdsType = async () => {
    let res = await getData(Get_Tds_Type)

    if (res) {
      setTdsType(res?.data)
    }
  }

  const getTds = async () => {
    let res = await getData(Get_Tds)

    if (res) {
      setTds(res?.data || [])
    }
  }

  useEffect(() => {
    getTdsType()
    getTds()
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
          <Table columns={columns} dataSource={tds} pagination={false} />

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
                  popupMatchSelectWidth={false}
                  allowClear
                  suffixIcon={
                    <img
                      src='/assets/icons/select-icon.svg'
                      alt='select-icon'
                    />
                  }
                >
                  {tdsType?.length &&
                    tdsType.map((item) => (
                      <Option key={item} value={item}>
                        {item}
                      </Option>
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
                <InputNumber style={{width: '200px'}} placeholder='Cost' />
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
      </ConfigProvider>
    </div>
  )
}
