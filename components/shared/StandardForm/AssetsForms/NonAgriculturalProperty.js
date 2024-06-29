import {
  Create_User_NonAgricultureProperty,
  Delete_User_NonAgricultureProperty,
  Get_User_NonAgricultureProperty,
  Get_User_NonAgricultureProperty_Type,
  Update_User_NonAgricultureProperty,
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

export default function NonAgriculturalProperty({
  setActiveTab,
  nextActiveTab,
  setProsCurrent,
  backActiveTab,
}) {
  const [form] = Form.useForm()
  const [NonAgriculturePropertiesType, setNonAgriculturePropertiesType] =
    useState()
  const [NonAgricultureProperties, setNonAgricultureProperties] = useState()
  const [selectedItem, setSelecetedItem] = useState()

  const onFinish = async (values) => {
    let data = {...values}
    data.HousePropertyInCityCorporation = data.HousePropertyInCityCorporation
      ? 1
      : 0
    if (selectedItem?.Id) {
      let res = await putData(
        Update_User_NonAgricultureProperty + selectedItem?.Id,
        data
      )

      if (res) {
        form.resetFields()
        getNonAgricultureProperties()
        setSelecetedItem()
      }
    } else {
      let res = await postData(Create_User_NonAgricultureProperty, data)

      if (res) {
        form.resetFields()
        getNonAgricultureProperties()
        setSelecetedItem()
      }
    }
  }

  const getNonAgriculturePropertiesType = async () => {
    let res = await getData(Get_User_NonAgricultureProperty_Type)

    if (res) {
      setNonAgriculturePropertiesType(res?.data)
    }
  }

  const getNonAgricultureProperties = async () => {
    let res = await getData(Get_User_NonAgricultureProperty)

    if (res) {
      setNonAgricultureProperties(res?.data || [])
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
        let res = await deleteData(Delete_User_NonAgricultureProperty + Id)
        if (res) {
          getNonAgricultureProperties()
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
      dataIndex: 'Type',
      key: 'Type',
      width: 250,
    },
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
      width: 200,
    },
    {
      title: 'Value Change During Income Year (BDT)',
      dataIndex: 'ValueChangeDuringIncomeYear',
      key: 'ValueChangeDuringIncomeYear',
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
    getNonAgriculturePropertiesType()
    getNonAgricultureProperties()
  }, [])

  return (
    <div className='bg-white pb-6 px-6'>
      <h3 className='text-xl font-semibold'>NonAgricultureProperties</h3>
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
            dataSource={NonAgricultureProperties || []}
            pagination={false}
          />

          <Form
            className='mt-5'
            form={form}
            layout={'vertical'}
            name='control-hooks'
            onFinish={onFinish}
            onValuesChange={onValuesChange}
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
                  {NonAgriculturePropertiesType?.length &&
                    NonAgriculturePropertiesType.map((item) => (
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
                  style={{width: '150px'}}
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
                  style={{width: '150px'}}
                  placeholder='Cost'
                  readOnly
                />
              </Form.Item>
            </Flex>

            <div className='text-center'>
              <Form.Item
                name='HousePropertyInCityCorporation'
                valuePropName='checked'
              >
                <Checkbox>
                  Do you have any house property more than 8000sqft. in an area
                  under city corporation?
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
