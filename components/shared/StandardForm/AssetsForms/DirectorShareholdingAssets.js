import {
  Create_User_Shareholding_Companies,
  Delete_User_Shareholding_Companies,
  Get_User_Shareholding_Companies,
  Update_User_Shareholding_Companies,
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

export default function DirectorShareholdingAssets({
  setActiveTab,
  nextActiveTab,
  setProsCurrent,
  backActiveTab,
}) {
  const [form] = Form.useForm()
  const [ShareholdingCompaniesType, setShareholdingCompaniesType] = useState()
  const [ShareholdingCompanies, setShareholdingCompanies] = useState()
  const [selectedItem, setSelecetedItem] = useState()

  const onFinish = async (values) => {
    let data = {...values}
    if (selectedItem?.Id) {
      let res = await putData(
        Update_User_Shareholding_Companies + selectedItem?.Id,
        data
      )

      if (res) {
        form.resetFields()
        getShareholdingCompanies()
        setSelecetedItem()
      }
    } else {
      let res = await postData(Create_User_Shareholding_Companies, data)

      if (res) {
        form.resetFields()
        getShareholdingCompanies()
        setSelecetedItem()
      }
    }
  }

  const getShareholdingCompanies = async () => {
    let res = await getData(Get_User_Shareholding_Companies)

    if (res) {
      setShareholdingCompanies(res?.data || [])
    }
  }

  const deleteItem = (Id) => {
    confirm({
      title: 'Do you want to delete these items?',
      icon: <ExclamationCircleFilled />,
      async onOk() {
        let res = await deleteData(Delete_User_Shareholding_Companies + Id)
        if (res) {
          getShareholdingCompanies()
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

  const onValuesChange = (changedValues, allValues) => {
    if (allValues) {
      let cost =
        (allValues.NumberOfShares || 0) * (allValues.EachShareCost || 0)
      form.setFieldsValue({CompanyAssetValue: cost})
    }
  }

  const columns = [
    {
      title: 'Company Name',
      dataIndex: 'CompanyName',
      key: 'CompanyName',
      width: 250,
    },
    {
      title: 'Number of Shares',
      dataIndex: 'NumberOfShares',
      key: 'NumberOfShares',
      width: 250,
    },
    {
      title: 'Each Share Cost (BDT)',
      dataIndex: 'EachShareCost',
      key: 'EachShareCost',
      width: 200,
    },
    {
      title: 'Value (BDT)',
      dataIndex: 'CompanyAssetValue',
      key: 'CompanyAssetValue',
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
    getShareholdingCompanies()
  }, [])

  return (
    <div className='bg-white pb-6 px-6'>
      <h3 className='text-xl font-semibold'>DIRECTOR'S SHAREHOLDING ASSETS</h3>
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
            dataSource={ShareholdingCompanies}
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
                name='CompanyName'
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input style={{width: '250px'}} placeholder='Company Name' />
              </Form.Item>

              <Form.Item
                name='NumberOfShares'
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <InputNumber
                  style={{width: '150px'}}
                  placeholder='Number Of Shares'
                />
              </Form.Item>

              <Form.Item
                name='EachShareCost'
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <InputNumber
                  style={{width: '150px'}}
                  placeholder='Each Share Cost'
                />
              </Form.Item>

              <Form.Item
                name='CompanyAssetValue'
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <InputNumber
                  style={{width: '150px'}}
                  placeholder='Company Asset Value'
                  readOnly
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
