import {
  Delete_Income_BsuinessOrProfession,
  Get_Income_BsuinessOrProfession,
  Get_Income_BsuinessOrProfession_Types,
  Save_Income_BsuinessOrProfession,
} from '@/scripts/api'
import {deleteData, getData, postData} from '@/scripts/api-service'
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
  Col,
  ConfigProvider,
  Divider,
  Form,
  Input,
  InputNumber,
  Modal,
  Row,
  Space,
} from 'antd'
import {useEffect, useState} from 'react'
const {TextArea} = Input
const {confirm} = Modal

export default function BusinessForm({
  setCurrent,
  setActiveTab,
  setProsCurrent,
  nextActiveTab,
  backActiveTab,
}) {
  const [form] = Form.useForm()
  const [dpType, setBpType] = useState()
  const [dpList, setBpList] = useState()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selceted, setSelected] = useState()
  const [selectedItem, setSelectedItem] = useState()

  const getBsuinessOrProfessionType = async () => {
    let res = await getData(Get_Income_BsuinessOrProfession_Types)
    if (res) {
      setBpType(res.data)
    }
  }

  const getBPList = async () => {
    let res = await getData(Get_Income_BsuinessOrProfession)
    if (res) {
      console.log(res)
      setBpList(res.data || [])
    }
  }

  const updateItem = (val) => {
    setIsModalOpen(true)
    setSelected(val)

    let find = dpList.find((i) => i.Type === val)

    if (find) {
      setSelectedItem(find)
      form.setFieldsValue(find)
    }
  }

  const onFinish = async (value) => {
    let data = {...value}
    data.BusinessIncomeExempted = data.BusinessIncomeExempted ? 1 : 0
    data.Type = selceted

    let res = await postData(Save_Income_BsuinessOrProfession, data)

    if (res) {
      getBPList()
      form.resetFields()
      setIsModalOpen(false)
      setSelected(null)
    }
  }

  const onValuesChange = (changedValues, allValues) => {
    if (allValues) {
      let NetProfit =
          (allValues.GrossProfit || 0) -
          (allValues.BadDebtExpense || 0) -
          (allValues.OtherExpense || 0),
        TotalAssets =
          (allValues.CashInHandOrBank || 0) +
          (allValues.Inventories || 0) +
          (allValues.FixedAssets || 0) +
          (allValues.OtherAssets || 0),
        ClosingCapital =
          (allValues.OpeningCapital || 0) +
          (NetProfit || 0) -
          (allValues.WithdrawlsInIncomeYear || 0),
        TotalCapitalLiabilities = ClosingCapital + (allValues.Liabilities || 0)

      form.setFieldsValue({
        NetProfit: NetProfit,
        TotalAssets: TotalAssets,
        ClosingCapital: ClosingCapital,
        TotalCapitalLiabilities: TotalCapitalLiabilities,
        temp_Amount: NetProfit,
        temp_NetTaxable: NetProfit,
      })
    }
  }

  const showValue = (type, context) => {
    if (dpList?.length) {
      let allValues = dpList.find((i) => i.Type === type)

      if (allValues) {
        if (context === 'IncomeBusinessOrProfessionDetailsId') {
          return allValues.IncomeBusinessOrProfessionDetailsId || 0
        } else return allValues.NetProfit || 0
      } else return 0
    }
  }

  const deleteItem = (id) => {
    confirm({
      title: 'Do you want to delete these items?',
      icon: <ExclamationCircleFilled />,
      async onOk() {
        let res = await deleteData(Delete_Income_BsuinessOrProfession + id)
        if (res) {
          getBPList()
          alertPop('success', res?.data?.message)
        }
      },
      onCancel() {
        console.log('Cancel')
      },
    })
  }

  useEffect(() => {
    getBsuinessOrProfessionType()
    getBPList()
  }, [])

  return (
    <div className='bg-white pb-6 px-6'>
      <h3 className='text-xl font-semibold'>BUSINESS</h3>
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
        <Row gutter={16} className='my-5'>
          <Col className='gutter-row ' xs={24} sm={24} md={6}>
            Sources of Income
          </Col>
          <Col className='gutter-row' xs={24} sm={24} md={6}>
            Amount of Income (BDT)
          </Col>
          <Col className='gutter-row' xs={24} sm={24} md={6}>
            Net taxable income (BDT){' '}
          </Col>
          <Col className='gutter-row' xs={24} sm={24} md={6}></Col>
        </Row>

        {dpType?.length &&
          dpType[0].map((item) => (
            <>
              <Row gutter={16} className='my-5'>
                <Col className='gutter-row ' xs={24} sm={24} md={6}>
                  {item === 'IncomeFromBusiness1'
                    ? 'Income From Business 1'
                    : item === 'IncomeFromBusiness2'
                    ? 'Income From Business 2'
                    : item === 'IncomeFromBusiness3'
                    ? 'Income From Business 3'
                    : ''}
                </Col>
                <Col className='gutter-row' xs={24} sm={24} md={6}>
                  <Input
                    size='large'
                    value={showValue(item, 'Amount')}
                    disabled
                  />
                </Col>
                <Col className='gutter-row' xs={24} sm={24} md={6}>
                  <Input
                    size='large'
                    value={showValue(item, 'NetTaxable')}
                    disabled
                  />
                </Col>
                <Col className='gutter-row' xs={24} sm={24} md={6}>
                  <Space size='middle'>
                    <Button
                      type='primary'
                      icon={<EditOutlined />}
                      size={'large'}
                      onClick={() => updateItem(item)}
                    />
                    <Button
                      type='primary'
                      danger
                      icon={<DeleteOutlined />}
                      size={'large'}
                      onClick={() =>
                        deleteItem(
                          showValue(item, 'IncomeBusinessOrProfessionDetailsId')
                        )
                      }
                    />
                  </Space>
                </Col>
              </Row>
            </>
          ))}
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

      <Modal
        title={
          selceted === 'IncomeFromBusiness1'
            ? 'Income From Business 1'
            : selceted === 'IncomeFromBusiness2'
            ? 'Income From Business 2'
            : selceted === 'IncomeFromBusiness3'
            ? 'Income From Business 3'
            : ''
        }
        width={750}
        open={isModalOpen}
        footer={false}
        onCancel={() => {
          setIsModalOpen(false)
          form.resetFields()
        }}
      >
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
          <Form
            className='mt-6'
            name='basic'
            form={form}
            onFinish={onFinish}
            onValuesChange={onValuesChange}
            autoComplete='off'
            size='large'
            layout='vertical'
          >
            <Row gutter={16} className='my-5'>
              <Col className='gutter-row ' xs={24} sm={24} md={10}>
                Descriptions
              </Col>
              <Col className='gutter-row' xs={24} sm={24} md={14}>
                Details
              </Col>
            </Row>

            <Row gutter={16} className='my-5'>
              <Col className='gutter-row ' xs={24} sm={24} md={10}>
                Business Or Profession Name *
              </Col>
              <Col className='gutter-row' xs={24} sm={24} md={14}>
                <Form.Item
                  name='BusinessOrProfessionName'
                  rules={[
                    {
                      required: true,
                      message: 'Please input Business Or Profession Name',
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

            <Row gutter={16} className='my-5'>
              <Col className='gutter-row ' xs={24} sm={24} md={10}>
                Address *
              </Col>
              <Col className='gutter-row' xs={24} sm={24} md={14}>
                <Form.Item
                  name='Address'
                  rules={[
                    {
                      required: true,
                      message: 'Please input Address',
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
            <Divider>Summary Of Income</Divider>

            <Row gutter={16} className='my-5'>
              <Col className='gutter-row ' xs={24} sm={24} md={10}>
                Sources
              </Col>
              <Col className='gutter-row' xs={24} sm={24} md={14}>
                Amount (BDT)
              </Col>
            </Row>

            <Row gutter={16} className='my-5'>
              <Col className='gutter-row ' xs={24} sm={24} md={10}>
                Sales *
              </Col>
              <Col className='gutter-row' xs={24} sm={24} md={14}>
                <Form.Item
                  name='Sales'
                  rules={[
                    {
                      required: true,
                      message: 'Please input Sales',
                    },
                  ]}
                >
                  <InputNumber className='w-full' />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16} className='my-5'>
              <Col className='gutter-row ' xs={24} sm={24} md={10}>
                Gross Profit *
              </Col>
              <Col className='gutter-row' xs={24} sm={24} md={14}>
                <Form.Item
                  name='GrossProfit'
                  rules={[
                    {
                      required: true,
                      message: 'Please input Gross Profit',
                    },
                  ]}
                >
                  <InputNumber className='w-full' />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16} className='my-5'>
              <Col className='gutter-row ' xs={24} sm={24} md={10}>
                Other Expense
              </Col>
              <Col className='gutter-row' xs={24} sm={24} md={14}>
                <Form.Item
                  name='OtherExpense'
                  rules={[
                    {
                      required: false,
                      message: 'Please input Other Expense',
                    },
                  ]}
                >
                  <InputNumber className='w-full' />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16} className='my-5'>
              <Col className='gutter-row ' xs={24} sm={24} md={10}>
                Bad Debt Expense
              </Col>
              <Col className='gutter-row' xs={24} sm={24} md={14}>
                <Form.Item
                  name='BadDebtExpense'
                  rules={[
                    {
                      required: false,
                      message: 'Please input Bad Debt Expense',
                    },
                  ]}
                >
                  <InputNumber className='w-full' />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16} className='my-5'>
              <Col className='gutter-row ' xs={24} sm={24} md={10}>
                Net Profit *
              </Col>
              <Col className='gutter-row' xs={24} sm={24} md={14}>
                <Form.Item
                  name='NetProfit'
                  rules={[
                    {
                      required: true,
                      message: 'Please input Net Profit',
                    },
                  ]}
                >
                  <InputNumber disabled className='w-full' />
                </Form.Item>
              </Col>
            </Row>

            <Divider>Summary Of Balance Sheet</Divider>

            <Row gutter={16} className='my-5'>
              <Col className='gutter-row ' xs={24} sm={24} md={10}>
                Sources
              </Col>
              <Col className='gutter-row' xs={24} sm={24} md={14}>
                Amount (BDT)
              </Col>
            </Row>

            <Row gutter={16} className='my-5'>
              <Col className='gutter-row ' xs={24} sm={24} md={10}>
                Cash In Hand Or Bank
              </Col>
              <Col className='gutter-row' xs={24} sm={24} md={14}>
                <Form.Item
                  name='CashInHandOrBank'
                  rules={[
                    {
                      required: false,
                      message: 'Please input Cash In Hand Or Bank',
                    },
                  ]}
                >
                  <InputNumber className='w-full' />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16} className='my-5'>
              <Col className='gutter-row ' xs={24} sm={24} md={10}>
                Inventories
              </Col>
              <Col className='gutter-row' xs={24} sm={24} md={14}>
                <Form.Item
                  name='Inventories'
                  rules={[
                    {
                      required: false,
                      message: 'Please input Inventories',
                    },
                  ]}
                >
                  <InputNumber className='w-full' />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16} className='my-5'>
              <Col className='gutter-row ' xs={24} sm={24} md={10}>
                Fixed Assets
              </Col>
              <Col className='gutter-row' xs={24} sm={24} md={14}>
                <Form.Item
                  name='FixedAssets'
                  rules={[
                    {
                      required: false,
                      message: 'Please input Fixed Assets',
                    },
                  ]}
                >
                  <InputNumber className='w-full' />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16} className='my-5'>
              <Col className='gutter-row ' xs={24} sm={24} md={10}>
                Other Assets
              </Col>
              <Col className='gutter-row' xs={24} sm={24} md={14}>
                <Form.Item
                  name='OtherAssets'
                  rules={[
                    {
                      required: false,
                      message: 'Please input Other Assets',
                    },
                  ]}
                >
                  <InputNumber className='w-full' />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16} className='my-5'>
              <Col className='gutter-row ' xs={24} sm={24} md={10}>
                Total Assets *
              </Col>
              <Col className='gutter-row' xs={24} sm={24} md={14}>
                <Form.Item
                  name='TotalAssets'
                  rules={[
                    {
                      required: true,
                      message: 'Please input Total Assets',
                    },
                  ]}
                >
                  <InputNumber disabled className='w-full' />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16} className='my-5'>
              <Col className='gutter-row ' xs={24} sm={24} md={10}>
                Opening Capital
              </Col>
              <Col className='gutter-row' xs={24} sm={24} md={14}>
                <Form.Item
                  name='OpeningCapital'
                  rules={[
                    {
                      required: false,
                      message: 'Please input Opening Capital',
                    },
                  ]}
                >
                  <InputNumber className='w-full' />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16} className='my-5'>
              <Col className='gutter-row ' xs={24} sm={24} md={10}>
                Net Profit *
              </Col>
              <Col className='gutter-row' xs={24} sm={24} md={14}>
                <Form.Item
                  name='NetProfit'
                  rules={[
                    {
                      required: false,
                      message: 'Please input Net Profit',
                    },
                  ]}
                >
                  <InputNumber disabled className='w-full' />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16} className='my-5'>
              <Col className='gutter-row ' xs={24} sm={24} md={10}>
                Withdrawals In Income Year
              </Col>
              <Col className='gutter-row' xs={24} sm={24} md={14}>
                <Form.Item
                  name='WithdrawlsInIncomeYear'
                  rules={[
                    {
                      required: false,
                      message: 'Please input Withdrawals In Income Year',
                    },
                  ]}
                >
                  <InputNumber className='w-full' />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16} className='my-5'>
              <Col className='gutter-row ' xs={24} sm={24} md={10}>
                Closing Capital *
              </Col>
              <Col className='gutter-row' xs={24} sm={24} md={14}>
                <Form.Item
                  name='ClosingCapital'
                  rules={[
                    {
                      required: true,
                      message: 'Please input Closing Capital',
                    },
                  ]}
                >
                  <InputNumber disabled className='w-full' />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16} className='my-5'>
              <Col className='gutter-row ' xs={24} sm={24} md={10}>
                Liabilities
              </Col>
              <Col className='gutter-row' xs={24} sm={24} md={14}>
                <Form.Item
                  name='Liabilities'
                  rules={[
                    {
                      required: false,
                      message: 'Please input Liabilities',
                    },
                  ]}
                >
                  <InputNumber className='w-full' />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16} className='my-5'>
              <Col className='gutter-row ' xs={24} sm={24} md={10}>
                Total Capital Liabilities *
              </Col>
              <Col className='gutter-row' xs={24} sm={24} md={14}>
                <Form.Item
                  name='TotalCapitalLiabilities'
                  rules={[
                    {
                      required: true,
                      message: 'Please input Total Capital Liabilities',
                    },
                  ]}
                >
                  <InputNumber disabled className='w-full' />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16} className='my-5'>
              <Col className='gutter-row ' xs={24} sm={24} md={10}>
                <Form.Item
                  layout='vertical'
                  label='Amount of Income (BDT)'
                  name='temp_Amount'
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <InputNumber disabled className='w-full' />
                </Form.Item>
              </Col>
              <Col className='gutter-row' xs={24} sm={24} md={14}>
                <Form.Item
                  label='Net taxable income (BDT)'
                  name='temp_NetTaxable'
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <InputNumber disabled className='w-full' />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16} className='my-5'>
              <Col className='gutter-row ' xs={24} sm={24} md={24}>
                <Form.Item
                  name='BusinessIncomeExempted'
                  valuePropName='checked'
                >
                  <Checkbox>
                    Is your business income exempted from Income Tax under sixth
                    schedule of Income Tax Act 2023?
                  </Checkbox>
                </Form.Item>
              </Col>
            </Row>

            <div className='text-center'>
              <Form.Item>
                <Button type='primary' htmlType='submit' className='w-28'>
                  Save
                </Button>
              </Form.Item>
            </div>
          </Form>
        </ConfigProvider>
      </Modal>
    </div>
  )
}
