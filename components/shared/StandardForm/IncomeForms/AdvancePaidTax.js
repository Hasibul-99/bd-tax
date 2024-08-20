import {
  Delete_Advance_Paid_Tax,
  Get_Advance_Paid_Tax,
  Save_Advance_Paid_Tax,
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

export default function AdvancePaidTax({
  setActiveTab,
  nextActiveTab,
  setCurrent,
  backActiveTab,
}) {
  const [form] = Form.useForm()
  const [selectedType, setSelectedType] = useState()
  const [loading, setLoading] = useState(false)
  const [advancePaidTax, setAdvancePaidTax] = useState()
  const [selectedItem, setSelecetedItem] = useState()

  const columns = [
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
            onClick={() => deleteItem(record.TaxAdvanceId)}
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
        let res = await postData(Delete_Advance_Paid_Tax + '/' + TaxDeductId)
        if (res) {
          getAdvancePaidTax()
          alertPop('success', res?.data?.message)
        }
      },
      onCancel() {
        console.log('Cancel')
      },
    })
  }

  const updateItem = (data) => {
    let fdata = {
      Type: data.Description,
      Description: data.Description,
      Cost: data.Cost,
    }
    setSelecetedItem(data)
    form.setFieldsValue(fdata)
  }

  const onFinish = async (values) => {
    console.log(values)
    setLoading(true)
    let data = {
      Description: values.Description || values.Type,
      Cost: values.Cost,
    }

    if (selectedItem?.TaxAdvanceId) {
      data.TaxAdvanceId = selectedItem.TaxAdvanceId
    }

    let res = await postData(Save_Advance_Paid_Tax, data)

    if (res) {
      getAdvancePaidTax()
      setLoading(false)
      form.resetFields()
      setSelecetedItem(null)
    }
  }

  const getAdvancePaidTax = async () => {
    let res = await getData(Get_Advance_Paid_Tax)

    if (res) {
      setAdvancePaidTax(res?.data)
    }
  }

  useEffect(() => {
    getAdvancePaidTax()
  }, [])

  return (
    <div className='bg-white pb-6 px-6'>
      <h3 className='text-xl font-semibold'>ADVANCE PAID TAX</h3>

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
            dataSource={advancePaidTax}
            pagination={false}
          />
        </div>

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
              // label='Username'
              name='Type'
              rules={[
                {
                  required: true,
                  message: 'Please input Type!',
                },
              ]}
            >
              <Select
                placeholder='Select a option'
                popupMatchSelectWidth={false}
                onChange={(val) => setSelectedType(val)}
                suffixIcon={
                  <img src='/assets/icons/select-icon.svg' alt='select-icon' />
                }
              >
                <Option value='Car Advance Tax'>Car Advance Tax</Option>
                <Option value='Other'>Other</Option>
              </Select>
            </Form.Item>

            {selectedType === 'Other' ? (
              <>
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
              </>
            ) : (
              ''
            )}

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
