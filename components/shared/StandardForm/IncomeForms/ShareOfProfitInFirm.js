import {
  Create_ShareOfProfitInFirms,
  Delete_ShareOfProfitInFirms,
  Get_ShareOfProfitInFirms,
  Update_ShareOfProfitInFirms,
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

export default function ShareOfProfitInFirm({
  setActiveTab,
  nextActiveTab,
  setProsCurrent,
  backActiveTab,
}) {
  const [form] = Form.useForm()
  const [ProfitInFirmsType, setProfitInFirmsType] = useState()
  const [ProfitInFirms, setProfitInFirms] = useState()
  const [selectedItem, setSelecetedItem] = useState()
  const [loading, setLoading] = useState(false)

  const onFinish = async (values) => {
    setLoading(true)
    let data = {...values}
    if (selectedItem?.IncomeShareProfitId) {
      let res = await putData(
        Update_ShareOfProfitInFirms + selectedItem?.IncomeShareProfitId,
        data
      )

      if (res) {
        form.resetFields()
        getProfitInFirms()
        setSelecetedItem()
        setLoading(false)
      }
    } else {
      let res = await postData(Create_ShareOfProfitInFirms, data)

      if (res) {
        form.resetFields()
        getProfitInFirms()
        setSelecetedItem()
        setLoading(false)
      }
    }
  }

  const getProfitInFirms = async () => {
    let res = await getData(Get_ShareOfProfitInFirms)

    if (res) {
      setProfitInFirms(res?.data || [])
    }
  }

  const deleteItem = (IncomeShareProfitId) => {
    confirm({
      title: 'Do you want to delete these items?',
      icon: <ExclamationCircleFilled />,
      async onOk() {
        let res = await deleteData(
          Delete_ShareOfProfitInFirms + IncomeShareProfitId
        )
        if (res) {
          getProfitInFirms()
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

  const onValuesChange = (changedValues, allValues) => {
    console.log('Changed values:', changedValues)
    console.log('All values:', allValues)

    let cost =
      ((allValues.IncomeOfFirm || 0) * (allValues.ShareOfFirm || 0)) / 100

    form.setFieldsValue({Cost: cost || 0})
  }

  const columns = [
    {
      title: 'Firm Name',
      dataIndex: 'NameOfFirm',
      key: 'NameOfFirm',
      width: 200,
    },
    {
      title: 'Income of Firm (BDT)',
      dataIndex: 'IncomeOfFirm',
      key: 'IncomeOfFirm',
      width: 150,
    },
    {
      title: '% of Ownership of Firm',
      dataIndex: 'ShareOfFirm',
      key: 'ShareOfFirm',
      width: 150,
    },
    {
      title: 'Net Value of Share (BDT)',
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
            onClick={() => deleteItem(record.IncomeShareProfitId)}
          />
        </Space>
      ),
    },
  ]

  useEffect(() => {
    getProfitInFirms()
  }, [])

  return (
    <div className='bg-white pb-6 px-6'>
      <h3 className='text-xl font-semibold'>SHARE OF PROFIT IN FIRM</h3>
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
            dataSource={ProfitInFirms}
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
                name='NameOfFirm'
                rules={[
                  {
                    required: true,
                    message: 'Please enter Name Of Firm',
                  },
                ]}
              >
                <Input style={{width: '150px'}} placeholder='Name Of Firm' />
              </Form.Item>

              <Form.Item
                name='IncomeOfFirm'
                rules={[
                  {
                    required: true,
                    message: 'Please enter Income Of Firm',
                  },
                ]}
              >
                <InputNumber
                  style={{width: '150px'}}
                  placeholder='Income Of Firm'
                />
              </Form.Item>

              <Form.Item
                name='ShareOfFirm'
                rules={[
                  {
                    required: true,
                    message: 'Please enter Share Of Firm',
                  },
                ]}
              >
                <InputNumber
                  style={{width: '150px'}}
                  placeholder='Share Of Firm'
                />
              </Form.Item>

              <Form.Item
                name='Cost'
                rules={[
                  {
                    required: true,
                    message: 'Please enter Cost',
                  },
                ]}
              >
                <InputNumber
                  style={{width: '150px'}}
                  placeholder='Cost'
                  readOnly
                />
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
