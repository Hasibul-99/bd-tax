import {
  Create_Expense_LossDeductionExpenses,
  Delete_Expense_LossDeductionExpenses,
  Get_Expense_LossDeductionExpenses,
  Update_Expense_LossDeductionExpenses,
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
  Space,
  Table,
} from 'antd'
import {useEffect, useState} from 'react'
const {confirm} = Modal
const {TextArea} = Input

export default function LossDeductionsExpenses({
  setActiveTab,
  nextActiveTab,
  setProsCurrent,
  backActiveTab,
  setCurrent,
  comment,
  getExpenseData,
}) {
  const [form] = Form.useForm()
  const [LossDeductionExpensesType, setLossDeductionExpensesType] = useState()
  const [LossDeductionExpenses, setLossDeductionExpenses] = useState()
  const [selectedItem, setSelecetedItem] = useState()

  const onFinish = async (values) => {
    let data = {...values}
    data.MultipleCar = data.MultipleCar ? 1 : 0

    if (selectedItem?.Id) {
      let res = await putData(
        Update_Expense_LossDeductionExpenses + selectedItem?.Id,
        data
      )

      if (res) {
        form.resetFields()
        getLossDeductionExpenses()
        getExpenseData()
        setSelecetedItem()
      }
    } else {
      let res = await postData(Create_Expense_LossDeductionExpenses, data)

      if (res) {
        form.resetFields()
        getLossDeductionExpenses()
        getExpenseData()
        setSelecetedItem()
      }
    }
  }

  const getLossDeductionExpenses = async () => {
    let res = await getData(Get_Expense_LossDeductionExpenses)

    if (res) {
      setLossDeductionExpenses(res?.data || [])
    }
  }

  const deleteItem = (Id) => {
    confirm({
      title: 'Do you want to delete these items?',
      icon: <ExclamationCircleFilled />,
      async onOk() {
        let res = await deleteData(Delete_Expense_LossDeductionExpenses + Id)
        if (res) {
          getLossDeductionExpenses()
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
            onClick={() => deleteItem(record.Id)}
          />
        </Space>
      ),
    },
  ]

  useEffect(() => {
    getLossDeductionExpenses()
  }, [])

  useEffect(() => {
    if (comment && typeof comment === 'string') {
      form.setFieldsValue({LossDeductionsComment: comment})
    }
  }, [comment])

  return (
    <div className='bg-white pb-6 px-6'>
      <h3 className='text-xl font-semibold'>
        LOSS, DEDUCTIONS, EXPENSES, ETC.{' '}
      </h3>
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
            dataSource={LossDeductionExpenses}
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
                name='Description'
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <TextArea
                  maxLength={200}
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

              {/* <Form.Item name='LossDeductionsComment'>
                <TextArea
                  maxLength={200}
                  rows={2}
                  style={{width: '300px'}}
                  placeholder='Comment'
                />
              </Form.Item> */}
              <div className='text-center'>
                <Form.Item>
                  <Button type='primary' htmlType='submit' className='w-28'>
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
