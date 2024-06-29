import {
  Create_User_Investment,
  Delete_User_Investment,
  Get_User_Investment,
  Get_User_Investment_Type,
  Update_User_Investment,
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
  Divider,
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
const {TextArea} = Input

export default function Investments({
  setActiveTab,
  nextActiveTab,
  setProsCurrent,
  backActiveTab,
}) {
  const [form] = Form.useForm()
  const [InvestmentsType, setInvestmentsType] = useState()
  const [Investments, setInvestments] = useState()
  const [selectedItem, setSelecetedItem] = useState()

  const onFinish = async (values) => {
    let data = {...values}
    data.HousePropertyInCityCorporation = data.HousePropertyInCityCorporation
      ? 1
      : 0
    if (selectedItem?.Id) {
      let res = await putData(Update_User_Investment + selectedItem?.Id, data)

      if (res) {
        form.resetFields()
        getInvestments()
        setSelecetedItem()
      }
    } else {
      let res = await postData(Create_User_Investment, data)

      if (res) {
        form.resetFields()
        getInvestments()
        setSelecetedItem()
      }
    }
  }

  const getInvestmentsType = async () => {
    let res = await getData(Get_User_Investment_Type)

    if (res) {
      setInvestmentsType(res?.data)
    }
  }

  const getInvestments = async () => {
    let res = await getData(Get_User_Investment)

    if (res) {
      setInvestments(res?.data || [])
    }
  }

  const deleteItem = (Id) => {
    confirm({
      title: 'Do you want to delete these items?',
      icon: <ExclamationCircleFilled />,
      async onOk() {
        let res = await deleteData(Delete_User_Investment + Id)
        if (res) {
          getInvestments()
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
      dataIndex: 'InvestmentType',
      key: 'InvestmentType',
      width: 250,
    },
    {
      title: 'Description',
      dataIndex: 'Description',
      key: 'Description',
      width: 200,
    },
    {
      title: 'Value (BDT)',
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
            onClick={() => deleteItem(record.Id)}
          />
        </Space>
      ),
    },
  ]

  useEffect(() => {
    getInvestmentsType()
    getInvestments()
  }, [])

  return (
    <div className='bg-white pb-6 px-6'>
      <h3 className='text-xl font-semibold'>INVESTMENTS </h3>
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
            dataSource={Investments || []}
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
                name='InvestmentType'
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  style={{width: '250px'}}
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
                  {InvestmentsType?.length &&
                    InvestmentsType.map((item) => (
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
                <TextArea
                  rows={2}
                  style={{width: '200px'}}
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
                <InputNumber style={{width: '150px'}} placeholder='Value' />
              </Form.Item>
            </Flex>

            <div className='text-center'>
              <Form.Item>
                <Button type='primary' htmlType='submit' className='w-28'>
                  Save
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>

        <Divider />
        <div className='text-center mt-6'>
          <Space>
            <Button
              type='primary'
              className='refer-friend-button shadow-none md:w-52'
              onClick={() => {
                backActiveTab ? setActiveTab(backActiveTab) : setProsCurrent(1)
              }}
            >
              <LeftOutlined style={{fontSize: '12px', marginTop: '2px'}} />
              Back
            </Button>

            <Button
              type='primary'
              className='prime-button gap-0 md:w-52 m-auto'
              onClick={() => {
                nextActiveTab ? setActiveTab(nextActiveTab) : setProsCurrent(3)
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
