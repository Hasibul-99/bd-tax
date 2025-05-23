import {
  Create_User_Agriculture_Properties,
  Delete_User_Agriculture_Properties,
  Get_User_Agriculture_Properties,
  Update_User_Agriculture_Properties,
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
  Space,
  Table,
} from 'antd'
import {useEffect, useState} from 'react'
const {confirm} = Modal
const {TextArea} = Input

export default function AgriculturalProperty({
  setActiveTab,
  nextActiveTab,
  setProsCurrent,
  backActiveTab,
}) {
  const [form] = Form.useForm()
  const [AgriculturePropertiesType, setAgriculturePropertiesType] = useState()
  const [AgricultureProperties, setAgricultureProperties] = useState()
  const [selectedItem, setSelecetedItem] = useState()

  const onFinish = async (values) => {
    let data = {...values}
    if (selectedItem?.Id) {
      let res = await putData(
        Update_User_Agriculture_Properties + selectedItem?.Id,
        data
      )

      if (res) {
        form.resetFields()
        getAgricultureProperties()
        setSelecetedItem()
      }
    } else {
      let res = await postData(Create_User_Agriculture_Properties, data)

      if (res) {
        form.resetFields()
        getAgricultureProperties()
        setSelecetedItem()
      }
    }
  }

  const getAgricultureProperties = async () => {
    let res = await getData(Get_User_Agriculture_Properties)

    if (res) {
      setAgricultureProperties(res?.data || [])
    }
  }

  const onValuesChange = (changedValues, allValues) => {
    console.log('Changed values:', changedValues)
    console.log('All values:', allValues)

    if (allValues) {
      let cost =
        (allValues.ValueStartOfIncomeYear || 0) +
        (allValues.ValueChangeDuringIncomeYear || 0)
      form.setFieldsValue({Cost: cost})
    }
  }

  const deleteItem = (Id) => {
    confirm({
      title: 'Do you want to delete these items?',
      icon: <ExclamationCircleFilled />,
      async onOk() {
        let res = await deleteData(Delete_User_Agriculture_Properties + Id)
        if (res) {
          getAgricultureProperties()
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
      width: 200,
    },
    {
      title: 'Value Start Of Income Year (BDT)',
      dataIndex: 'ValueStartOfIncomeYear',
      key: 'ValueStartOfIncomeYear',
      width: 150,
    },
    {
      title: 'Value Change During Income Year (BDT)',
      dataIndex: 'ValueChangeDuringIncomeYear',
      key: 'ValueChangeDuringIncomeYear',
      width: 150,
    },
    {
      title: 'Value (BDT)',
      dataIndex: 'Cost',
      key: 'Cost',
      width: 150,
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
    getAgricultureProperties()
  }, [])

  return (
    <div className='bg-white pb-6 px-6'>
      <h3 className='text-xl font-semibold'>AGRICULTURAL PROPERTY</h3>
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
            dataSource={AgricultureProperties}
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
                  style={{width: '200px'}}
                  placeholder='Description'
                />
              </Form.Item>

              <Form.Item
                name='ValueStartOfIncomeYear'
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <InputNumber
                  style={{width: '150px'}}
                  placeholder='Value Start Of Income Year'
                />
              </Form.Item>

              <Form.Item
                name='ValueChangeDuringIncomeYear'
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <InputNumber
                  style={{width: '150px'}}
                  placeholder='Value Change During Income Year'
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
                <InputNumber
                  readOnly
                  style={{width: '150px'}}
                  placeholder='Value '
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
