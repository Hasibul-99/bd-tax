import {
  Create_User_NetWealth,
  Delete_User_NetWealth,
  get_User_NetWealth,
  Update_User_NetWealth,
} from '@/scripts/api'
import {getData, postData, putData} from '@/scripts/api-service'
import {alertPop} from '@/scripts/helper'
import {
  DeleteOutlined,
  ExclamationCircleFilled,
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons'
import {
  Button,
  ConfigProvider,
  Flex,
  Form,
  InputNumber,
  Modal,
  Space,
} from 'antd'
import {useEffect, useState} from 'react'
const {confirm} = Modal

export default function PreviousYearNetWealth({
  setActiveTab,
  nextActiveTab,
  setProsCurrent,
  backActiveTab,
}) {
  const [form] = Form.useForm()
  const [nw, setNw] = useState()

  const onFinish = async (values) => {
    let data = {...values}

    if (nw) {
      let res = await putData(Update_User_NetWealth, data)

      if (res) {
        form.resetFields()
        getNetWealth()
        setSelecetedItem()
      }
    } else {
      let res = await postData(Create_User_NetWealth, data)

      if (res) {
        form.resetFields()
        getNetWealth()
        setSelecetedItem()
      }
    }
  }

  const deleteItem = () => {
    confirm({
      title: 'Do you want to delete these items?',
      icon: <ExclamationCircleFilled />,
      async onOk() {
        let res = await putData(Delete_User_NetWealth)
        if (res) {
          getNetWealth()
          alertPop('success', res?.data?.message)
        }
      },
      onCancel() {
        console.log('Cancel')
      },
    })
  }

  const getNetWealth = async () => {
    let res = await getData(get_User_NetWealth)

    if (res) {
      setNw(res?.data)
      form.setFieldsValue({NetWealthTotal: res?.data || 0})
    }
  }

  useEffect(() => {
    getNetWealth()
  }, [])

  return (
    <div className='bg-white pb-6 px-6'>
      <h3 className='text-xl font-semibold'>PREVIOUS YEAR NET WEALTH </h3>
      <h4 text-lg font-semibold>
        {nw
          ? `Current value is ${nw}. You can change the value below and press store Please enter your net wealth`
          : 'Please enter your net wealth'}
      </h4>

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
                name='NetWealthTotal'
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <InputNumber style={{width: '400px'}} placeholder='Value ' />
              </Form.Item>

              <Form.Item>
                <Button type='primary' htmlType='submit' className='w-28'>
                  Save
                </Button>
              </Form.Item>

              <Button
                type='primary'
                danger
                icon={<DeleteOutlined />}
                size={'large'}
                onClick={() => deleteItem()}
              />
            </Flex>
          </Form>
        </div>
      </ConfigProvider>
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
    </div>
  )
}
