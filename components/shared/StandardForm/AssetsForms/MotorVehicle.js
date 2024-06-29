import {
  Create_User_MotorVehicles,
  Delete_User_MotorVehicles,
  Get_User_MotorVehicles,
  Update_User_MotorVehicles,
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
  Checkbox,
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

export default function MotorVehicle({
  setActiveTab,
  nextActiveTab,
  setProsCurrent,
  backActiveTab,
}) {
  const [form] = Form.useForm()
  const [MotorVehiclesType, setMotorVehiclesType] = useState()
  const [MotorVehicles, setMotorVehicles] = useState()
  const [selectedItem, setSelecetedItem] = useState()

  const onFinish = async (values) => {
    let data = {...values}
    data.MultipleCar = data.MultipleCar ? 1 : 0

    if (selectedItem?.Id) {
      let res = await putData(
        Update_User_MotorVehicles + selectedItem?.Id,
        data
      )

      if (res) {
        form.resetFields()
        getMotorVehicles()
        setSelecetedItem()
      }
    } else {
      let res = await postData(Create_User_MotorVehicles, data)

      if (res) {
        form.resetFields()
        getMotorVehicles()
        setSelecetedItem()
      }
    }
  }

  const getMotorVehicles = async () => {
    let res = await getData(Get_User_MotorVehicles)

    if (res) {
      setMotorVehicles(res?.data || [])
    }
  }

  const deleteItem = (Id) => {
    confirm({
      title: 'Do you want to delete these items?',
      icon: <ExclamationCircleFilled />,
      async onOk() {
        let res = await deleteData(Delete_User_MotorVehicles + Id)
        if (res) {
          getMotorVehicles()
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
      title: 'Vehicle Brand/Type',
      dataIndex: 'MotorVehicleType',
      key: 'MotorVehicleType',
      width: 200,
    },
    {
      title: 'Registration No.',
      dataIndex: 'RegistrationNo',
      key: 'RegistrationNo',
      width: 150,
    },
    {
      title: 'Engine (CC)',
      dataIndex: 'MVDescription',
      key: 'MVDescription',
      width: 150,
    },
    {
      title: 'Value (BDT)',
      dataIndex: 'MVValue',
      key: 'MVValue',
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
    getMotorVehicles()
  }, [])

  return (
    <div className='bg-white pb-6 px-6'>
      <h3 className='text-xl font-semibold'>MOTOR VEHICLE</h3>
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
            dataSource={MotorVehicles}
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
                name='MotorVehicleType'
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input
                  style={{width: '200px'}}
                  placeholder='Motor Vehicle Type'
                />
              </Form.Item>

              <Form.Item
                name='RegistrationNo'
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input style={{width: '150px'}} placeholder='Registration No' />
              </Form.Item>

              <Form.Item
                name='MVDescription'
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <TextArea
                  rows={2}
                  style={{width: '150px'}}
                  placeholder='Value Change During Income Year'
                />
              </Form.Item>

              <Form.Item
                name='MVValue'
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <InputNumber style={{width: '150px'}} placeholder='Value ' />
              </Form.Item>
            </Flex>

            <div className='text-center'>
              <Form.Item name='MultipleCar' valuePropName='checked'>
                <Checkbox>
                  Do you have more than one motor vehicle (i.e. Private car,
                  Jeep or Microbus) to your name?
                </Checkbox>
              </Form.Item>
              <Form.Item>
                <Button type='primary' htmlType='submit' className='w-28'>
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
