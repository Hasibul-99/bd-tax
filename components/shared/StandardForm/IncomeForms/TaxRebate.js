import {
  Delete_User_Income_TaxRebate,
  Get_User_Income_TaxRebate,
  Save_User_Income_TaxRebate,
  Update_User_Income_TaxRebate,
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
  Col,
  ConfigProvider,
  Divider,
  Flex,
  Form,
  Input,
  InputNumber,
  Modal,
  Row,
  Space,
  Table,
} from 'antd'
import {useEffect, useState} from 'react'
const {TextArea} = Input
const {confirm} = Modal

export default function TaxRebate({
  setCurrent,
  setActiveTab,
  setProsCurrent,
  nextActiveTab,
  backActiveTab,
}) {
  const [form] = Form.useForm()
  const [TaxRebate, setTaxRebate] = useState()
  const [showList, setShowList] = useState(false)
  const [selecetdItem, setSelecetdItem] = useState()

  const columns = [
    {
      title: 'Total allowable investment',
      dataIndex: 'AnnualRentalIncome',
      key: 'AnnualRentalIncome',
      width: 300,
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
            onClick={() => deleteItem(record.IncomeTaxRebateId)}
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
    if (selecetdItem?.IncomeTaxRebateId) {
      let res = await putData(
        Update_User_Income_TaxRebate + `${selecetdItem.IncomeTaxRebateId}`,
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
          getTaxRebate()
        }
      }
    } else {
      let res = await postData(
        Save_User_Income_TaxRebate,
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
          getTaxRebate()
        }
      }
    }
  }

  const deleteItem = (TaxDeductId) => {
    confirm({
      title: 'Do you want to delete these items?',
      icon: <ExclamationCircleFilled />,
      async onOk() {
        let res = await deleteData(Delete_User_Income_TaxRebate + TaxDeductId)
        console.log('res ===', res)
        if (res) {
          setShowList(false)
          getTaxRebate()
          alertPop('success', res?.data?.message)
        }
      },
      onCancel() {
        console.log('Cancel')
      },
    })
  }

  const getTaxRebate = async () => {
    let res = await getData(Get_User_Income_TaxRebate)

    if (res) {
      // console.log('res', res)
      setTaxRebate(res.data)
      if (res.data) {
        setShowList(true)
        form.setFieldsValue(res.data)
      }
    }
  }

  const onValuesChange = (changedValues, allValues) => {
    console.log('Changed values:', changedValues)
    console.log('All values:', allValues)

    if (allValues) {
      let formData = {
        LifeInsurancePremium: (allValues.PolicyValue || 0) * 0.1,
        ProvidentFund: allValues.ProvidentFund_1 || 0,
        SCECProvidentFund: allValues.SCECProvidentFund_1 || 0,
        SuperAnnuationFund: allValues.SuperAnnuationFund_1 || 0,
        InvestInStockOrShare: allValues.InvestInStockOrShare_1 || 0,
        DepositPensionScheme: allValues.DepositPensionScheme_1 || 0,
        BenevolentFund: allValues.BenevolentFund_1 || 0,
        ZakatFund: allValues.ZakatFund_1 || 0,
        SavingsCertificates: allValues.SavingsCertificates_1 || 0,
        BangladeshGovtTreasuryBond: allValues.BangladeshGovtTreasuryBond_1 || 0,
        DonationNLInstitutionFON: allValues.DonationNLInstitutionFON_1 || 0,
        DonationCharityHospitalNBR: allValues.DonationCharityHospitalNBR_1 || 0,
        DonationOrganizationRetardPeople:
          allValues.DonationOrganizationRetardPeople_1 || 0,
        ContributionNLInstituionLW: allValues.ContributionNLInstituionLW_1 || 0,
        ContributionLiberationWarMuseum:
          allValues.ContributionLiberationWarMuseum_1 || 0,
        DonationEduInstitutionGov: allValues.DonationEduInstitutionGov_1 || 0,
        MutualFund: allValues.MutualFund_1 || 0,
      }

      form.setFieldsValue(formData)
    }
  }

  useEffect(() => {
    getTaxRebate()
  }, [])

  return (
    <div className='bg-white pb-6 px-6'>
      <h3 className='text-xl font-semibold'>
        YOUR TOTAL INVEST IN ANY TAX DEDUCTIBLE INVESTMENTS
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
            <Table
              columns={columns}
              dataSource={[TaxRebate]}
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
            >
              <Row gutter={16} className='mb-8'>
                <Col className='gutter-row ' xs={24} sm={24} md={6}></Col>
                <Col className='gutter-row' xs={24} sm={24} md={9}>
                  Amount (BDT)
                </Col>
                <Col className='gutter-row' xs={24} sm={24} md={9}>
                  Allowed (BDT)
                </Col>
              </Row>

              <Row gutter={16}>
                <Col className='gutter-row ' xs={24} sm={24} md={6}>
                  Life Insurance Premium
                </Col>
                <Col className='gutter-row' xs={24} sm={24} md={9}>
                  <Form.Item
                    name='LifeInsurancePremium_1'
                    rules={[
                      {
                        required: false,
                        message: 'Please input Adress Of Property',
                      },
                    ]}
                  >
                    <InputNumber className='w-full' />
                  </Form.Item>
                </Col>
                <Col className='gutter-row' xs={24} sm={24} md={9}>
                  <Form.Item
                    name='LifeInsurancePremium'
                    rules={[
                      {
                        required: false,
                        message: 'Please input Adress Of Property',
                      },
                    ]}
                  >
                    <InputNumber className='w-full' disabled />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col className='gutter-row ' xs={24} sm={24} md={6}>
                  Policy Value
                </Col>
                <Col className='gutter-row' xs={24} sm={24} md={9}>
                  <Form.Item
                    name='PolicyValue'
                    rules={[
                      {
                        required: false,
                        message: 'Please input Adress Of Property',
                      },
                    ]}
                  >
                    <InputNumber className='w-full' />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16} className='mb-6'>
                <Col className='gutter-row ' xs={24} sm={24} md={6}>
                  Contribution to Provident Fund to which Provident Fund Act,
                  1925 Applies
                </Col>
                <Col className='gutter-row' xs={24} sm={24} md={9}>
                  <Form.Item
                    name='ProvidentFund_1'
                    rules={[
                      {
                        required: false,
                        message: 'Please input Adress Of Property',
                      },
                    ]}
                  >
                    <InputNumber className='w-full' />
                  </Form.Item>
                </Col>
                <Col className='gutter-row' xs={24} sm={24} md={9}>
                  <Form.Item
                    name='ProvidentFund'
                    rules={[
                      {
                        required: false,
                        message: 'Please input Adress Of Property',
                      },
                    ]}
                  >
                    <InputNumber className='w-full' disabled />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col className='gutter-row ' xs={24} sm={24} md={6}>
                  Self Contribution and Employer’s Contribution to Recognized
                  Fund
                </Col>
                <Col className='gutter-row' xs={24} sm={24} md={9}>
                  <Form.Item
                    name='SCECProvidentFund_1'
                    rules={[
                      {
                        required: false,
                        message: 'Please input Adress Of Property',
                      },
                    ]}
                  >
                    <InputNumber className='w-full' />
                  </Form.Item>
                </Col>
                <Col className='gutter-row' xs={24} sm={24} md={9}>
                  <Form.Item
                    name='SCECProvidentFund'
                    rules={[
                      {
                        required: false,
                        message: 'Please input Adress Of Property',
                      },
                    ]}
                  >
                    <InputNumber className='w-full' disabled />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col className='gutter-row ' xs={24} sm={24} md={6}>
                  Contribution to Super Annuation Fund
                </Col>
                <Col className='gutter-row' xs={24} sm={24} md={9}>
                  <Form.Item
                    name='SuperAnnuationFund_1'
                    rules={[
                      {
                        required: false,
                        message: 'Please input Adress Of Property',
                      },
                    ]}
                  >
                    <InputNumber className='w-full' />
                  </Form.Item>
                </Col>
                <Col className='gutter-row' xs={24} sm={24} md={9}>
                  <Form.Item
                    name='SuperAnnuationFund'
                    rules={[
                      {
                        required: false,
                        message: 'Please input Adress Of Property',
                      },
                    ]}
                  >
                    <InputNumber className='w-full' disabled />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col className='gutter-row ' xs={24} sm={24} md={6}>
                  Investment in Approved Debenture or Debenture Stock, Stock or
                  Shares
                </Col>
                <Col className='gutter-row' xs={24} sm={24} md={9}>
                  <Form.Item
                    name='InvestInStockOrShare_1'
                    rules={[
                      {
                        required: false,
                        message: 'Please input Adress Of Property',
                      },
                    ]}
                  >
                    <InputNumber className='w-full' />
                  </Form.Item>
                </Col>
                <Col className='gutter-row' xs={24} sm={24} md={9}>
                  <Form.Item
                    name='InvestInStockOrShare'
                    rules={[
                      {
                        required: false,
                        message: 'Please input Adress Of Property',
                      },
                    ]}
                  >
                    <InputNumber className='w-full' disabled />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col className='gutter-row ' xs={24} sm={24} md={6}>
                  Contribution to Deposit Pension Scheme
                </Col>
                <Col className='gutter-row' xs={24} sm={24} md={9}>
                  <Form.Item
                    name='DepositPensionScheme_1'
                    rules={[
                      {
                        required: false,
                        message: 'Please input Adress Of Property',
                      },
                    ]}
                  >
                    <InputNumber className='w-full' />
                  </Form.Item>
                </Col>
                <Col className='gutter-row' xs={24} sm={24} md={9}>
                  <Form.Item
                    name='DepositPensionScheme'
                    rules={[
                      {
                        required: false,
                        message: 'Please input Adress Of Property',
                      },
                    ]}
                  >
                    <InputNumber className='w-full' disabled />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col className='gutter-row ' xs={24} sm={24} md={6}>
                  Contribution to Benevolent Fund and Group Insurance Premium
                </Col>
                <Col className='gutter-row' xs={24} sm={24} md={9}>
                  <Form.Item
                    name='BenevolentFund_1'
                    rules={[
                      {
                        required: false,
                        message: 'Please input Adress Of Property',
                      },
                    ]}
                  >
                    <InputNumber className='w-full' />
                  </Form.Item>
                </Col>
                <Col className='gutter-row' xs={24} sm={24} md={9}>
                  <Form.Item
                    name='BenevolentFund'
                    rules={[
                      {
                        required: false,
                        message: 'Please input Adress Of Property',
                      },
                    ]}
                  >
                    <InputNumber className='w-full' disabled />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col className='gutter-row ' xs={24} sm={24} md={6}>
                  Contribution to Zakat Fund
                </Col>
                <Col className='gutter-row' xs={24} sm={24} md={9}>
                  <Form.Item
                    name='ZakatFund_1'
                    rules={[
                      {
                        required: false,
                        message: 'Please input Adress Of Property',
                      },
                    ]}
                  >
                    <InputNumber className='w-full' />
                  </Form.Item>
                </Col>
                <Col className='gutter-row' xs={24} sm={24} md={9}>
                  <Form.Item
                    name='ZakatFund'
                    rules={[
                      {
                        required: false,
                        message: 'Please input Adress Of Property',
                      },
                    ]}
                  >
                    <InputNumber className='w-full' disabled />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col className='gutter-row ' xs={24} sm={24} md={6}>
                  Investment in Savings Certificates / Sanchaypatra
                </Col>
                <Col className='gutter-row' xs={24} sm={24} md={9}>
                  <Form.Item
                    name='SavingsCertificates_1'
                    rules={[
                      {
                        required: false,
                        message: 'Please input Adress Of Property',
                      },
                    ]}
                  >
                    <InputNumber className='w-full' />
                  </Form.Item>
                </Col>
                <Col className='gutter-row' xs={24} sm={24} md={9}>
                  <Form.Item
                    name='SavingsCertificates'
                    rules={[
                      {
                        required: false,
                        message: 'Please input Adress Of Property',
                      },
                    ]}
                  >
                    <InputNumber className='w-full' disabled />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16} className='mb-6'>
                <Col className='gutter-row ' xs={24} sm={24} md={6}>
                  Investment in Bangladesh Govt. Treasury Bond
                </Col>
                <Col className='gutter-row' xs={24} sm={24} md={9}>
                  <Form.Item
                    name='BangladeshGovtTreasuryBond_1'
                    rules={[
                      {
                        required: false,
                        message: 'Please input Adress Of Property',
                      },
                    ]}
                  >
                    <InputNumber className='w-full' />
                  </Form.Item>
                </Col>
                <Col className='gutter-row' xs={24} sm={24} md={9}>
                  <Form.Item
                    name='BangladeshGovtTreasuryBond'
                    rules={[
                      {
                        required: false,
                        message: 'Please input Adress Of Property',
                      },
                    ]}
                  >
                    <InputNumber className='w-full' disabled />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16} className='mb-6'>
                <Col className='gutter-row ' xs={24} sm={24} md={6}>
                  Donation to National Level Institution set up in the memory of
                  Father of the Nation
                </Col>
                <Col className='gutter-row' xs={24} sm={24} md={9}>
                  <Form.Item
                    name='DonationNLInstitutionFON_1'
                    rules={[
                      {
                        required: false,
                        message: 'Please input Adress Of Property',
                      },
                    ]}
                  >
                    <InputNumber className='w-full' />
                  </Form.Item>
                </Col>
                <Col className='gutter-row' xs={24} sm={24} md={9}>
                  <Form.Item
                    name='DonationNLInstitutionFON'
                    rules={[
                      {
                        required: false,
                        message: 'Please input Adress Of Property',
                      },
                    ]}
                  >
                    <InputNumber className='w-full' disabled />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16} className='mb-6'>
                <Col className='gutter-row ' xs={24} sm={24} md={6}>
                  NBR Recognized Charitable Hospital located outside City
                  Corporation Area which is Established 1 Year Prior to Donation
                </Col>
                <Col className='gutter-row' xs={24} sm={24} md={9}>
                  <Form.Item
                    name='DonationCharityHospitalNBR_1'
                    rules={[
                      {
                        required: false,
                        message: 'Please input Adress Of Property',
                      },
                    ]}
                  >
                    <InputNumber className='w-full' />
                  </Form.Item>
                </Col>
                <Col className='gutter-row' xs={24} sm={24} md={9}>
                  <Form.Item
                    name='DonationCharityHospitalNBR'
                    rules={[
                      {
                        required: false,
                        message: 'Please input Adress Of Property',
                      },
                    ]}
                  >
                    <InputNumber className='w-full' disabled />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16} className='mb-6'>
                <Col className='gutter-row ' xs={24} sm={24} md={6}>
                  Donation to Organizations set up for the welfare of retarded
                  people authorized by NBR & Department of Social Welfare which
                  is Established 1 Year Prior to the Donation
                </Col>
                <Col className='gutter-row' xs={24} sm={24} md={9}>
                  <Form.Item
                    name='DonationOrganizationRetardPeople_1'
                    rules={[
                      {
                        required: false,
                        message: 'Please input Adress Of Property',
                      },
                    ]}
                  >
                    <InputNumber className='w-full' />
                  </Form.Item>
                </Col>
                <Col className='gutter-row' xs={24} sm={24} md={9}>
                  <Form.Item
                    name='DonationOrganizationRetardPeople'
                    rules={[
                      {
                        required: false,
                        message: 'Please input Adress Of Property',
                      },
                    ]}
                  >
                    <InputNumber className='w-full' disabled />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16} className='mb-6'>
                <Col className='gutter-row ' xs={24} sm={24} md={6}>
                  Contribution to national level institution set up in memory of
                  Liberation war
                </Col>
                <Col className='gutter-row' xs={24} sm={24} md={9}>
                  <Form.Item
                    name='ContributionNLInstituionLW_1'
                    rules={[
                      {
                        required: false,
                        message: 'Please input Adress Of Property',
                      },
                    ]}
                  >
                    <InputNumber className='w-full' />
                  </Form.Item>
                </Col>
                <Col className='gutter-row' xs={24} sm={24} md={9}>
                  <Form.Item
                    name='ContributionNLInstituionLW'
                    rules={[
                      {
                        required: false,
                        message: 'Please input Adress Of Property',
                      },
                    ]}
                  >
                    <InputNumber className='w-full' disabled />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col className='gutter-row ' xs={24} sm={24} md={6}>
                  Contribution to Liberation war Museum
                </Col>
                <Col className='gutter-row' xs={24} sm={24} md={9}>
                  <Form.Item
                    name='ContributionLiberationWarMuseum_1'
                    rules={[
                      {
                        required: false,
                        message: 'Please input Adress Of Property',
                      },
                    ]}
                  >
                    <InputNumber className='w-full' />
                  </Form.Item>
                </Col>
                <Col className='gutter-row' xs={24} sm={24} md={9}>
                  <Form.Item
                    name='ContributionLiberationWarMuseum'
                    rules={[
                      {
                        required: false,
                        message: 'Please input Adress Of Property',
                      },
                    ]}
                  >
                    <InputNumber className='w-full' disabled />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col className='gutter-row ' xs={24} sm={24} md={6}>
                  Donation to Educational Institution recognized by Government
                </Col>
                <Col className='gutter-row' xs={24} sm={24} md={9}>
                  <Form.Item
                    name='DonationEduInstitutionGov_1'
                    rules={[
                      {
                        required: false,
                        message: 'Please input Adress Of Property',
                      },
                    ]}
                  >
                    <InputNumber className='w-full' />
                  </Form.Item>
                </Col>
                <Col className='gutter-row' xs={24} sm={24} md={9}>
                  <Form.Item
                    name='DonationEduInstitutionGov'
                    rules={[
                      {
                        required: false,
                        message: 'Please input Adress Of Property',
                      },
                    ]}
                  >
                    <InputNumber className='w-full' disabled />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col className='gutter-row ' xs={24} sm={24} md={6}>
                  Mutual Fund
                </Col>
                <Col className='gutter-row' xs={24} sm={24} md={9}>
                  <Form.Item
                    name='MutualFund_1'
                    rules={[
                      {
                        required: false,
                        message: 'Please input Adress Of Property',
                      },
                    ]}
                  >
                    <InputNumber className='w-full' />
                  </Form.Item>
                </Col>
                <Col className='gutter-row' xs={24} sm={24} md={9}>
                  <Form.Item
                    name='MutualFund'
                    rules={[
                      {
                        required: false,
                        message: 'Please input Adress Of Property',
                      },
                    ]}
                  >
                    <InputNumber className='w-full' disabled />
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
