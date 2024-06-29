import {
  Create_User_Income_SpouseChilds,
  Delete_User_Income_SpouseChilds,
  Get_User_Income_SpouseChilds,
  Get_User_Income_SpouseChilds_Type,
  Update_User_Income_SpouseChilds,
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
  Select,
  Space,
  Table,
} from 'antd'
import {useEffect, useState} from 'react'
const {confirm} = Modal

export default function SpouseChild({
  setActiveTab,
  nextActiveTab,
  setProsCurrent,
  backActiveTab,
}) {
  const [form] = Form.useForm()
  const [SpouseChildsType, setSpouseChildsType] = useState()
  const [SpouseChilds, setSpouseChilds] = useState()
  const [selectedItem, setSelecetedItem] = useState()

  const onFinish = async (values) => {
    let data = {...values}
    if (selectedItem?.IncomeSpouseOrChildId) {
      let res = await putData(
        Update_User_Income_SpouseChilds + selectedItem?.IncomeSpouseOrChildId,
        data
      )

      if (res) {
        form.resetFields()
        getSpouseChilds()
        setSelecetedItem()
      }
    } else {
      let res = await postData(Create_User_Income_SpouseChilds, data)

      if (res) {
        form.resetFields()
        getSpouseChilds()
        setSelecetedItem()
      }
    }
  }

  const getSpouseChildsType = async () => {
    let res = await getData(Get_User_Income_SpouseChilds_Type)

    if (res) {
      setSpouseChildsType(res?.data)
    }
  }

  const getSpouseChilds = async () => {
    let res = await getData(Get_User_Income_SpouseChilds)

    if (res) {
      setSpouseChilds(res?.data || [])
    }
  }

  const deleteItem = (IncomeSpouseOrChildId) => {
    confirm({
      title: 'Do you want to delete these items?',
      icon: <ExclamationCircleFilled />,
      async onOk() {
        let res = await deleteData(
          Delete_User_Income_SpouseChilds + IncomeSpouseOrChildId
        )
        if (res) {
          getSpouseChilds()
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
      title: 'Relation',
      dataIndex: 'Type',
      key: 'Type',
      width: 250,
    },
    {
      title: 'Name',
      dataIndex: 'Name',
      key: 'Name',
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
            onClick={() => deleteItem(record.IncomeSpouseOrChildId)}
          />
        </Space>
      ),
    },
  ]

  useEffect(() => {
    getSpouseChildsType()
    getSpouseChilds()
  }, [])

  return (
    <div className='bg-white pb-6 px-6'>
      <h3 className='text-xl font-semibold'>SPOUSE/CHILD </h3>
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
            dataSource={SpouseChilds}
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
                  style={{width: '230px'}}
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
                  {SpouseChildsType?.length &&
                    SpouseChildsType.map((item) => (
                      <Option value={item}>{item}</Option>
                    ))}
                </Select>
              </Form.Item>

              <Form.Item
                name='Name'
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input style={{width: '200px'}} placeholder='Name' />
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
                <Button type='primary' htmlType='submit' className='w-28'>
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
