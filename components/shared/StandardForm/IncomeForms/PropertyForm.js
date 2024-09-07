import {
  Create_Rental_Properties,
  Delete_Rental_Properties,
  Get_Rental_Properties,
  Update_Rental_Properties,
} from '@/scripts/api'
import {deleteData, getData, postData, putData} from '@/scripts/api-service'
import {alertPop} from '@/scripts/helper'
import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleFilled,
  ExclamationCircleOutlined,
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons'
import {
  Button,
  Col,
  ConfigProvider,
  Divider,
  Flex,
  Form,
  Input,
  InputNumber,
  Modal,
  Radio,
  Row,
  Space,
  Table,
} from 'antd'
import {useEffect, useState} from 'react'
const {TextArea} = Input
const {confirm} = Modal

export default function PropertyForm({
  setCurrent,
  setActiveTab,
  setProsCurrent,
  nextActiveTab,
  backActiveTab,
}) {
  const [form] = Form.useForm()
  const [rentalProperty, setRentalProperty] = useState()
  const [showList, setShowList] = useState(false)
  const [selecetdItem, setSelecetdItem] = useState()

  const columns = [
    {
      title: 'Annual Rental Income',
      dataIndex: 'AnnualRentalIncome',
      key: 'AnnualRentalIncome',
      width: 300,
    },
    {
      title: 'Net income',
      dataIndex: 'NetIncome',
      key: 'NetIncome',
      width: 200,
    },
    {
      title: 'Year',
      dataIndex: 'EntryYear',
      key: 'EntryYear',
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
            onClick={() => deleteItem(record.IncomePropertiesId)}
          />
        </Space>
      ),
    },
  ]

  const updateItem = (data) => {
    setShowList(false)
    setSelecetdItem(data)
    setTimeout(() => {
      form.setFieldsValue(data)
    }, 1000)
  }

  const onFinish = async (value) => {
    if (selecetdItem?.IncomePropertiesId) {
      let res = await putData(
        Update_Rental_Properties + `${selecetdItem.IncomePropertiesId}`,
        value,
        null,
        'showError'
      )

      if (res) {
        console.log('res', res)

        if (res.code === 'error') {
          form.setFields(res?.errors)
        } else {
          alertPop('success', res.data?.message)
          form.resetFields()
          setShowList(true)
        }
      }
    } else {
      let res = await postData(
        Create_Rental_Properties,
        value,
        null,
        'showError'
      )

      if (res) {
        if (res.code === 'error') {
          form.setFields(res?.errors)
        } else {
          alertPop('success', res.data?.message)
          form.resetFields()
          setShowList(true)
        }
      }
    }
  }

  const deleteItem = (TaxDeductId) => {
    confirm({
      title: 'Do you want to delete these items?',
      icon: <ExclamationCircleFilled />,
      async onOk() {
        let res = await deleteData(Delete_Rental_Properties + TaxDeductId)
        if (res) {
          setShowList(false)
          getRentalProperty()
          alertPop('success', res?.data?.message)
        }
      },
      onCancel() {
        console.log('Cancel')
      },
    })
  }

  const getRentalProperty = async () => {
    let res = await getData(Get_Rental_Properties)

    if (res) {
      setRentalProperty(res.data)
      if (res?.data?.length) {
        setShowList(true)
      }
    }
  }

  const changeAnnualRentalIncome = (val) => {
    form.setFieldsValue({Repair: (val || 0) * 0.25})
  }

  const onValuesChange = (changedValues, allValues) => {
    console.log('Changed values:', changedValues)
    console.log('All values:', allValues)
    if (allValues) {
      let RepairTotal =
          (allValues.AnnualRentalIncome || 0) +
          (allValues.AdvanceRentReceived || 0) +
          (allValues.ValueofnyBenefit || 0),
        Repair =
          allValues.ResidentOrCommercial === 2
            ? (RepairTotal || 0) * 0.3
            : (RepairTotal || 0) * 0.25,
        othersTotal =
          (allValues.AdjustedAdvanceRent || 0) +
          (allValues.MunicipalOrLocalTax || 0) +
          (allValues.LandRevenue || 0) +
          (allValues.LoanInterestOrMorgageOrCapitalCrg || 0) +
          (allValues.InsurancePremium || 0) +
          (allValues.VacancyAllowence || 0) +
          (allValues.Others || 0),
        NetIncome = RepairTotal - (Repair || 0) - (othersTotal || 0),
        ShareOfIncome = allValues.ShareOfProperty
          ? ((NetIncome || 0) * (allValues.ShareOfProperty || 0)) / 100
          : NetIncome || 0

      form.setFieldsValue({
        Repair: Math.round(Repair),
        NetIncome: Math.round(NetIncome),
        ClaimedExpensesTotal: Math.round(Repair + (othersTotal || 0)),
        ShareOfIncome: Math.round(ShareOfIncome),
      })
    }
  }

  useEffect(() => {
    getRentalProperty()
  }, [])
  return (
    <div className='bg-white pb-6 px-6'>
      <h3 className='text-xl font-semibold'>
        Rental Property Income Information
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
        {showList ? (
          <>
            <div className='text-right mb-5'>
              <Button
                type='primary'
                onClick={() => {
                  setShowList(false)
                }}
              >
                Add More
              </Button>
            </div>
            <Table
              columns={columns}
              dataSource={rentalProperty}
              pagination={false}
            />
          </>
        ) : (
          <>
            <Form
              className='mt-6'
              name='basic'
              form={form}
              onFinish={onFinish}
              onValuesChange={onValuesChange}
              autoComplete='off'
              size='large'
              initialValues={{
                ResidentOrCommercial: 1,
              }}
            >
              <Row gutter={16} className='mb-5'>
                <Col className='gutter-row ' xs={24} sm={24} md={24}>
                  <Form.Item name='ResidentOrCommercial'>
                    <Radio.Group>
                      <Radio value={1}>Residential</Radio>
                      <Radio value={2}>Commercial</Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col className='gutter-row ' xs={24} sm={24} md={6}>
                  Address of Property <span className='text-red-700'>*</span>
                  <ExclamationCircleOutlined className='ml-3' />
                </Col>
                <Col className='gutter-row' xs={24} sm={24} md={18}>
                  <Form.Item
                    name='AdressOfProperty'
                    rules={[
                      {
                        required: true,
                        message: 'Please input Adress Of Property',
                      },
                      {
                        max: 600,
                        message:
                          'The message cannot be longer than 500 characters!',
                      },
                    ]}
                  >
                    <TextArea maxLength={700} rows={2} />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col className='gutter-row ' xs={24} sm={24} md={6}>
                  Total Area <span className='text-red-700'>*</span>
                  <ExclamationCircleOutlined className='ml-3' />
                </Col>
                <Col className='gutter-row' xs={24} sm={24} md={18}>
                  <Form.Item
                    name='AreaOfProperty'
                    rules={[
                      {
                        required: true,
                        message: 'Please input Total Area',
                      },
                    ]}
                  >
                    <Input className='w-full' />
                  </Form.Item>
                </Col>
              </Row>

              <Divider />

              <Row gutter={16} className='mb-5'>
                <Col className='gutter-row text-center' xs={24} sm={24} md={6}>
                  Details
                </Col>
                <Col className='gutter-row text-center' xs={24} sm={24} md={18}>
                  BDT
                </Col>
              </Row>

              <Row gutter={16}>
                <Col className='gutter-row ' xs={24} sm={24} md={6}>
                  Annual Rental Income <span className='text-red-700'>*</span>
                  <ExclamationCircleOutlined className='ml-3' />
                </Col>
                <Col className='gutter-row' xs={24} sm={24} md={18}>
                  <Form.Item
                    name='AnnualRentalIncome'
                    rules={[
                      {
                        required: true,
                        message: 'Please input Annual Rental Income',
                      },
                    ]}
                  >
                    <InputNumber
                      className='w-full'
                      onChange={changeAnnualRentalIncome}
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col className='gutter-row ' xs={24} sm={24} md={6}>
                  Advance Rent Received <span className='text-red-700'>*</span>
                  <ExclamationCircleOutlined className='ml-3' />
                </Col>
                <Col className='gutter-row' xs={24} sm={24} md={18}>
                  <Form.Item
                    name='AdvanceRentReceived'
                    rules={[
                      {
                        required: true,
                        message: 'Please input Advance Rent Received',
                      },
                    ]}
                  >
                    <InputNumber className='w-full' />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16} className='mb-8'>
                <Col className='gutter-row ' xs={24} sm={24} md={6}>
                  Value of any Benefit in addition to Rent Received or Annual
                  Value & Advance Rent Received{' '}
                  <span className='text-red-700'>*</span>
                  <ExclamationCircleOutlined className='ml-3' />
                </Col>
                <Col className='gutter-row' xs={24} sm={24} md={18}>
                  <Form.Item
                    name='ValueofnyBenefit'
                    rules={[
                      {
                        required: true,
                        message: 'Please input',
                      },
                    ]}
                  >
                    <InputNumber className='w-full' />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col className='gutter-row ' xs={24} sm={24} md={6}>
                  Adjusted Advance Rent <span className='text-red-700'>*</span>
                  <ExclamationCircleOutlined className='ml-3' />
                </Col>
                <Col className='gutter-row' xs={24} sm={24} md={18}>
                  <Form.Item
                    name='AdjustedAdvanceRent'
                    rules={[
                      {
                        required: true,
                        message: 'Please input Adjusted Advance Rent ',
                      },
                    ]}
                  >
                    <InputNumber className='w-full' />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col className='gutter-row ' xs={24} sm={24} md={6}>
                  Repair <span className='text-red-700'>*</span>
                  <ExclamationCircleOutlined className='ml-3' />
                </Col>
                <Col className='gutter-row' xs={24} sm={24} md={18}>
                  <Form.Item
                    name='Repair'
                    rules={[
                      {
                        required: true,
                        message: 'Please input Repair',
                      },
                    ]}
                  >
                    <InputNumber className='w-full' disabled />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col className='gutter-row ' xs={24} sm={24} md={6}>
                  Municipal or Local Tax
                  <ExclamationCircleOutlined className='ml-3' />
                </Col>
                <Col className='gutter-row' xs={24} sm={24} md={18}>
                  <Form.Item
                    name='MunicipalOrLocalTax'
                    rules={[
                      {
                        required: false,
                      },
                    ]}
                  >
                    <InputNumber className='w-full' />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col className='gutter-row ' xs={24} sm={24} md={6}>
                  Land Revenue
                  <ExclamationCircleOutlined className='ml-3' />
                </Col>
                <Col className='gutter-row' xs={24} sm={24} md={18}>
                  <Form.Item
                    name='LandRevenue'
                    rules={[
                      {
                        required: false,
                      },
                    ]}
                  >
                    <InputNumber className='w-full' />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col className='gutter-row ' xs={24} sm={24} md={6}>
                  Loan Interest/Mortgage/Capital Charge
                  <ExclamationCircleOutlined className='ml-3' />
                </Col>
                <Col className='gutter-row' xs={24} sm={24} md={18}>
                  <Form.Item
                    name='LoanInterestOrMorgageOrCapitalCrg'
                    rules={[
                      {
                        required: false,
                      },
                    ]}
                  >
                    <InputNumber className='w-full' />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col className='gutter-row ' xs={24} sm={24} md={6}>
                  Insurance Premium
                  <ExclamationCircleOutlined className='ml-3' />
                </Col>
                <Col className='gutter-row' xs={24} sm={24} md={18}>
                  <Form.Item
                    name='InsurancePremium'
                    rules={[
                      {
                        required: false,
                      },
                    ]}
                  >
                    <InputNumber className='w-full' />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col className='gutter-row ' xs={24} sm={24} md={6}>
                  Vacancy Allowance
                  <ExclamationCircleOutlined className='ml-3' />
                </Col>
                <Col className='gutter-row' xs={24} sm={24} md={18}>
                  <Form.Item
                    name='VacancyAllowence'
                    rules={[
                      {
                        required: false,
                      },
                    ]}
                  >
                    <InputNumber className='w-full' />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col className='gutter-row ' xs={24} sm={24} md={6}>
                  Other
                  <ExclamationCircleOutlined className='ml-3' />
                </Col>
                <Col className='gutter-row' xs={24} sm={24} md={18}>
                  <Form.Item
                    name='Others'
                    rules={[
                      {
                        required: false,
                      },
                    ]}
                  >
                    <InputNumber className='w-full' />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col className='gutter-row ' xs={24} sm={24} md={6}>
                  Claimed Expenses Total
                  <ExclamationCircleOutlined className='ml-3' />
                </Col>
                <Col className='gutter-row' xs={24} sm={24} md={18}>
                  <Form.Item
                    name='ClaimedExpensesTotal'
                    rules={[
                      {
                        required: false,
                      },
                    ]}
                  >
                    <InputNumber className='w-full' disabled />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col className='gutter-row ' xs={24} sm={24} md={6}>
                  Net Property Income
                  <ExclamationCircleOutlined className='ml-3' />
                </Col>
                <Col className='gutter-row' xs={24} sm={24} md={18}>
                  <Form.Item
                    name='NetIncome'
                    rules={[
                      {
                        required: false,
                      },
                    ]}
                  >
                    <InputNumber className='w-full' disabled />
                  </Form.Item>
                </Col>
              </Row>
              <Divider />

              <h3 className='text-xl font-semibold'>
                Rental Property Income Information
              </h3>

              <Row gutter={16}>
                <Col className='gutter-row ' xs={24} sm={24} md={6}>
                  Share Percent of Property
                  <ExclamationCircleOutlined className='ml-3' />
                </Col>
                <Col className='gutter-row' xs={24} sm={24} md={18}>
                  <Form.Item
                    name='ShareOfProperty'
                    rules={[
                      {
                        required: false,
                      },
                    ]}
                  >
                    <InputNumber className='w-full' placeholder='%' />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col className='gutter-row ' xs={24} sm={24} md={6}>
                  Share of Income
                  <ExclamationCircleOutlined className='ml-3' />
                </Col>
                <Col className='gutter-row' xs={24} sm={24} md={18}>
                  <Form.Item
                    name='ShareOfIncome'
                    rules={[
                      {
                        required: false,
                      },
                    ]}
                  >
                    <InputNumber className='w-full' />
                  </Form.Item>
                </Col>
              </Row>

              <Flex gap='middle'>
                <Form.Item>
                  <Button type='primary' htmlType='submit' className='w-28'>
                    Save
                  </Button>
                </Form.Item>

                <Button
                  type='primary'
                  className='w-28'
                  onClick={() => {
                    setShowList(true)
                  }}
                >
                  cancel
                </Button>
              </Flex>
            </Form>
          </>
        )}
      </ConfigProvider>
      <Divider />
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
    </div>
  )
}

// Advance Rent Received
// Value of any Benefit in addition to Rent Received or Annual Value & Advance Rent Received
// Adjusted Advance Rent
