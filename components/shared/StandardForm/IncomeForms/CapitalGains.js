import {
  delete_Capital_Gain,
  get_Capital_Gain,
  Get_capital_Gain_Type,
  Save_Capital_Gain,
} from '@/scripts/api'
import {getData, postData} from '@/scripts/api-service'
import {alertPop} from '@/scripts/helper'
import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleFilled,
} from '@ant-design/icons'
import {
  Button,
  ConfigProvider,
  Flex,
  Form,
  Input,
  InputNumber,
  Modal,
  Radio,
  Select,
  Space,
  Table,
} from 'antd'
import {useEffect, useState} from 'react'

import {LeftOutlined, RightOutlined} from '@ant-design/icons'
const {confirm} = Modal

export default function CapitalGains({
  setActiveTab,
  nextActiveTab,
  setCurrent,
  backActiveTab,
}) {
  const [form] = Form.useForm()
  const [capitalGainType, setCapitalGainType] = useState()
  const [capitalGain, setCapitalGain] = useState()
  const [selectedType, setSelectedType] = useState()
  const [selectedItem, setSelecetedItem] = useState()
  const [loading, setLoading] = useState(false)

  const columns = [
    {
      title: 'Type',
      dataIndex: 'Type',
      key: 'Type',
      width: 300,
    },
    {
      title: 'Details',
      dataIndex: 'Description',
      key: 'Description',
      width: 200,
    },
    {
      title: 'Amount (BDT)',
      dataIndex: 'SaleOfShare',
      key: 'SaleOfShare',
      width: 200,
    },
    {
      title: 'Method',
      dataIndex: 'MoreThanTenPercentHolder',
      key: 'Cost',
      width: 200,
      render: (_, record) => (
        <>
          {record?.MoreThanTenPercentHolder
            ? 'Shareholder of more than 10% -'
            : 'N/A'}
        </>
      ),
    },
    {
      title: 'Taxable Income (BDT)',
      dataIndex: 'Cost',
      key: 'Cost',
      width: 200,
    },
    {
      title: 'Tds (BDT)',
      dataIndex: 'tds_amount',
      key: 'tds_amount',
      width: 200,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size='middle'>
          <Button
            type='primary'
            onClick={() => updateItem(record)}
            icon={<EditOutlined />}
            size={'large'}
          />
          <Button
            type='primary'
            danger
            icon={<DeleteOutlined />}
            onClick={() => deleteItem(record.IncomeCapitalGainsId)}
            size={'large'}
          />
        </Space>
      ),
    },
  ]

  const deleteItem = (InterestOnSecuritiesId) => {
    confirm({
      title: 'Do you want to delete these items?',
      icon: <ExclamationCircleFilled />,
      async onOk() {
        let res = await postData(
          delete_Capital_Gain + '/' + InterestOnSecuritiesId
        )
        if (res) {
          getCapitalGain()
          alertPop('success', res?.data?.message)
        }
      },
      onCancel() {
        console.log('Cancel')
      },
    })
  }

  const updateItem = (data) => {
    onTypeChange(data.Type)
    setSelecetedItem(data)

    setTimeout(() => {
      form.setFieldsValue(data)
    }, 1000)
  }

  const onFinish = async (values) => {
    setLoading(true)
    console.log(values)
    let data = {...values}
    data.SaleOfShare = values.SaleOfShare.toString()

    if (selectedItem?.IncomeCapitalGainsId) {
      data.IncomeCapitalGainsId = selectedItem.IncomeCapitalGainsId

      let res = await postData(Save_Capital_Gain, data)

      if (res) {
        getCapitalGain()
        form.resetFields()
        setLoading(false)
        setSelecetedItem(null)
      }
    } else {
      let res = await postData(Save_Capital_Gain, data)

      if (res) {
        getCapitalGain()
        form.resetFields()
        setLoading(false)
        setSelecetedItem(null)
      }
    }
  }

  const getCapitalGainType = async () => {
    let res = await getData(Get_capital_Gain_Type)

    if (res) {
      setCapitalGainType(res?.data)
      setSelectedType()
    }
  }

  const getCapitalGain = async () => {
    let res = await getData(get_Capital_Gain)

    if (res) {
      setCapitalGain(res?.data || [])
    }
  }

  const onTypeChange = (val) => {
    let data = capitalGainType[val]
    console.log({data, val})

    setSelectedType(data)
    form.resetFields([
      'Description',
      'SaleOfShare',
      'MoreThanTenPercentHolder',
      'Cost',
      'tds_amount',
    ])
  }

  const onValuesChange = (changedValues, allValues) => {
    if (allValues) {
      if (allValues.Type === 'Sale of Share') {
        if (allValues.MoreThanTenPercentHolder === 'Yes') {
          form.setFieldsValue({Cost: allValues.SaleOfShare})
        } else {
          form.setFieldsValue({Cost: 0})
        }
      } else {
        form.setFieldsValue({Cost: allValues.SaleOfShare})
      }
    }
  }

  useEffect(() => {
    getCapitalGainType()
    getCapitalGain()
  }, [])

  return (
    <div className='bg-white pb-6 px-6'>
      <h3 className='text-xl font-semibold'>CAPITAL GAINS</h3>
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
            dataSource={capitalGain}
            pagination={false}
          />
        </div>
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
                onChange={onTypeChange}
                popupMatchSelectWidth={false}
                allowClear
                suffixIcon={
                  <img src='/assets/icons/select-icon.svg' alt='select-icon' />
                }
              >
                <Option value='Sale of Share'>Sale of Share</Option>
                <Option value='Sale of Land'>Sale of Land </Option>
                <Option value='Sale of Land and House'>
                  Sale of Land and House
                </Option>
                <Option value='Sale of Flat'>Sale of Flat</Option>
                <Option value='Signing Money Received'>
                  Signing Money Received
                </Option>
                <Option value='Other'>Other</Option>
              </Select>
            </Form.Item>

            {selectedType?.Details ? (
              <Form.Item
                name='Description'
                rules={[
                  {
                    required: true,
                    message: 'Please input Description!',
                  },
                ]}
              >
                <Input placeholder='Description' maxLength={300} />
              </Form.Item>
            ) : (
              ''
            )}
            <div>
              {selectedType?.Amount ? (
                <Form.Item
                  name='SaleOfShare'
                  rules={[
                    {
                      required: true,
                      message: 'Please input Amount!',
                    },
                  ]}
                >
                  <InputNumber className='w-full' placeholder='Amount' />
                </Form.Item>
              ) : null}

              {selectedType && selectedType['Tds Amount'] ? (
                <Form.Item
                  name='tds_amount'
                  rules={[
                    {
                      required: false,
                      message: 'Please input !',
                    },
                  ]}
                >
                  <Input placeholder='TDS Amount' />
                </Form.Item>
              ) : (
                ''
              )}
            </div>
            {selectedType?.Shareholder ? (
              <Form.Item
                label='Are you shareholder of more than 10% shares of the listed company?'
                name='MoreThanTenPercentHolder'
              >
                <Radio.Group>
                  <Radio value={'Yes'}>Yes</Radio>
                  <Radio value={'No'}>No</Radio>
                </Radio.Group>
              </Form.Item>
            ) : null}

            <Form.Item name='Cost'>
              <Input disabled value={0} />
            </Form.Item>
          </Flex>
          <Form.Item className='m-auto text-center'>
            <Button
              type='primary'
              htmlType='submit'
              className='w-28'
              loading={loading}
            >
              Save
            </Button>
          </Form.Item>
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

          {console.log('nextActiveTab', nextActiveTab)}
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
