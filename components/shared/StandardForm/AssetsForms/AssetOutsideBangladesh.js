import {
  Create_AssetOutsideOfBangladesh,
  Delete_AssetOutsideOfBangladesh,
  Get_AssetOutsideOfBangladesh,
  Update_AssetOutsideOfBangladesh,
} from '@/scripts/api'
import {deleteData, getData, postData} from '@/scripts/api-service'
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
  Divider,
  Flex,
  Form,
  Input,
  InputNumber,
  Modal,
  Space,
  Table,
} from 'antd'
import {useEffect, useState} from 'react'
const {confirm} = Modal
const {TextArea} = Input

export default function AssetOutsideBangladesh({
  setActiveTab,
  setProsCurrent,
  nextActiveTab,
  backActiveTab,
}) {
  const [form] = Form.useForm()
  const [Transportations, setTransportations] = useState()
  const [loading, setLoading] = useState(false)
  const [selectedItem, setSelecetedItem] = useState()

  const onFinish = async (values) => {
    setLoading(true)
    let data = {...values}

    if (selectedItem?.id) {
      let res = await postData(
        Update_AssetOutsideOfBangladesh + selectedItem?.id,
        data
      )

      if (res) {
        form.resetFields()
        getTransportations()
        setSelecetedItem()
        setLoading(false)
      }
    } else {
      let res = await postData(Create_AssetOutsideOfBangladesh, data)

      if (res) {
        form.resetFields()
        getTransportations()
        setSelecetedItem()
        setLoading(false)
      }
    }
  }

  const getTransportations = async () => {
    let res = await getData(Get_AssetOutsideOfBangladesh)

    if (res) {
      setTransportations(res?.data || [])
    }
  }

  const deleteItem = (Id) => {
    confirm({
      title: 'Do you want to delete these items?',
      icon: <ExclamationCircleFilled />,
      async onOk() {
        let res = await deleteData(Delete_AssetOutsideOfBangladesh + Id)
        if (res) {
          getTransportations()
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
      title: 'Description',
      dataIndex: 'Description',
      key: 'Description',
      width: 300,
    },
    {
      title: 'Value (BDT)',
      dataIndex: 'Cost',
      key: 'Cost',
      width: 300,
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
            onClick={() => deleteItem(record.id)}
          />
        </Space>
      ),
    },
  ]

  useEffect(() => {
    getTransportations()
  }, [])

  return (
    <div className='bg-white pb-6 px-6'>
      <h3 className='text-xl font-semibold'>Asset Outside Bangladesh</h3>
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
            dataSource={Transportations}
            pagination={false}
          />

          <Form
            className='mt-5 overflow-x-scroll'
            form={form}
            layout={'vertical'}
            name='control-hooks'
            onFinish={onFinish}
            size='large'
          >
            <Flex wrap gap='small'>
              <Form.Item
                name='Description'
                rules={[
                  {
                    required: true,
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
                  style={{width: '300px'}}
                  placeholder='Description'
                />
              </Form.Item>

              <Form.Item
                name='Cost'
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <InputNumber style={{width: '300px'}} placeholder='Value ' />
              </Form.Item>

              {/* <Form.Item name='TransportComment'>
                <TextArea
                  maxLength={700}
                  rows={2}
                  style={{width: '300px'}}
                  placeholder='Comment'
                />
              </Form.Item> */}
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
            </Flex>
          </Form>
        </div>
        <Divider />
        <div className='text-center mt-6'>
          <Space>
            <Button
              type='primary'
              className='refer-friend-button shadow-none md:w-52'
              onClick={() => {
                backActiveTab ? setActiveTab(backActiveTab) : setProsCurrent(3)
              }}
            >
              <LeftOutlined style={{fontSize: '12px', marginTop: '2px'}} />
              Back
            </Button>

            <Button
              type='primary'
              className='prime-button gap-0 md:w-52 m-auto'
              onClick={() => {
                nextActiveTab ? setActiveTab(nextActiveTab) : setProsCurrent(5)
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
