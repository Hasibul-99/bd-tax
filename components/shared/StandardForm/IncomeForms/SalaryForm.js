import {GET_SALARIES, SAVE_INCOME_SALARIES} from '@/scripts/api'
import {getData, postData} from '@/scripts/api-service'
import {alertPop} from '@/scripts/helper'
import {
  ExclamationCircleOutlined,
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons'
import {
  Button,
  Col,
  ConfigProvider,
  Divider,
  Form,
  Input,
  InputNumber,
  Radio,
  Row,
  Select,
  Space,
} from 'antd'
import {useEffect, useState} from 'react'

export default function SalaryForm({
  setCurrent,
  setActiveTab,
  setProsCurrent,
  nextActiveTab,
}) {
  const [form] = Form.useForm()
  const [hasTranspost, setHasTransport] = useState(0)
  const [tranportMonth, setTranportMonth] = useState(1)

  const onFinish = async (values) => {
    let data = {...values}

    data.has_transport = hasTranspost === 0 ? 0 : 1
    data.tranport_month = tranportMonth

    let res = await postData(SAVE_INCOME_SALARIES, data, null, 'showError')
    if (res) {
      if (res.code === 'error') {
        form.setFields(res?.errors)
      } else {
        alertPop('success', res.data?.message)
        form.resetFields()
        if (nextActiveTab) {
          setActiveTab(nextActiveTab)
        } else {
          setProsCurrent(2)
        }
      }
    }
  }

  const onChangeTransport = (e) => {
    setHasTransport(e.target.value)
  }

  const onChangeTranportMonth = (val) => {
    setTranportMonth(val)
  }

  const onValuesChange = (changedValues, allValues) => {
    console.log('Changed values:', changedValues)
    console.log('All values:', allValues)
  }

  const getSalariesData = async () => {
    let res = await getData(GET_SALARIES)
    if (res) {
      console.log('res', res)
      let masterData = res?.data

      if (masterData) {
        let formData = {
          BasicPay_1: masterData.BasicPay_1,
          SpecialPay_1: masterData.SpecialPay_1,
          DearnessAllowance_1: masterData.DearnessAllowance_1,
          ConveyanceAllowance_1: masterData.ConveyanceAllowance_1,
          HouseRentAllowance_1: masterData.HouseRentAllowance_1,
          MedicalAllowance_1: masterData.MedicalAllowance_1,
          MedicalAllowanceForDisability_1:
            masterData.MedicalAllowanceForDisability_1,
          Surgery_HEKLC_1: masterData.Surgery_HEKLC_1,
          ServantAllowance_1: masterData.ServantAllowance_1,
          LeaveAllowance_1: masterData.LeaveAllowance_1,
          LeaveEncashment_1: masterData.LeaveEncashment_1,
          HonorariumOrReward_1: masterData.HonorariumOrReward_1,
          OvertimeAllowance_1: masterData.OvertimeAllowance_1,
          OtherAllowances_1: masterData.OtherAllowances_1,
          EmployersContributionProvidentFund_1:
            masterData.EmployersContributionProvidentFund_1,
          InterestAccruedProvidentFund_1:
            masterData.InterestAccruedProvidentFund_1,
          TransportAmount_1:
            masterData.has_transport * masterData.transport_month,
          RentalValueOfHouse_1: masterData.RentalValueOfHouse_1,
          PaidPartOfRentValue_1: masterData.PaidPartOfRentValue_1,
          Others_1: masterData.Others_1,
          Arear_1: masterData.Arear_1,
          Gratuity_1: masterData.Gratuity_1,
          WorkersProfitParticipationFund_1:
            masterData.WorkersProfitParticipationFund_1,
          RecognizedProvidentFundIncome_1:
            masterData.RecognizedProvidentFundIncome_1,
          EmployeeShareSchemes_1: masterData.EmployeeShareSchemes_1,
        }

        form.setFieldsValue(formData)
        setHasTransport(masterData.has_transport)
        setTranportMonth(masterData.transport_month)
      }
    }
  }

  useEffect(() => {
    if (hasTranspost && tranportMonth) {
      let amount = hasTranspost === 2 ? 25000 : 10000

      form.setFieldsValue({TransportAmount_1: amount * tranportMonth})
    } else {
      form.setFieldsValue({TransportAmount_1: 0})
    }
  }, [hasTranspost, tranportMonth])

  useEffect(() => {
    getSalariesData()
  }, [])

  return (
    <div className='bg-white pb-6 px-6'>
      <h3 className='text-xl font-semibold'>Please enter your Salary</h3>
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
        >
          <Row gutter={16}>
            <Col className='gutter-row pt-2' xs={24} sm={24} md={6}>
              Basic Pay * <ExclamationCircleOutlined className='ml-3' />
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={18}>
              <Form.Item
                name='BasicPay_1'
                rules={[
                  {
                    required: true,
                    message: 'Please input Basic Pay!',
                  },
                ]}
              >
                <InputNumber
                  className='w-full'
                  placeholder='Enter Basic Pay *'
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col className='gutter-row pt-2' xs={24} sm={24} md={6}>
              Special Pay <ExclamationCircleOutlined className='ml-3' />
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={18}>
              <Form.Item
                name='SpecialPay_1'
                rules={[
                  {
                    required: false,
                    message: 'Please input Special Pay!',
                  },
                ]}
              >
                <InputNumber
                  className='w-full'
                  placeholder='Enter Special Pay'
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col className='gutter-row pt-2' xs={24} sm={24} md={6}>
              Dearness Allowance <ExclamationCircleOutlined className='ml-3' />
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={18}>
              <Form.Item
                name='DearnessAllowance_1'
                rules={[
                  {
                    required: false,
                    message: 'Please input Dearness Allowance!',
                  },
                ]}
              >
                <InputNumber
                  className='w-full'
                  placeholder='Enter Dearness Allowance'
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col className='gutter-row pt-2' xs={24} sm={24} md={6}>
              Conveyance Allowance{' '}
              <ExclamationCircleOutlined className='ml-3' />
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={18}>
              <Form.Item
                name='ConveyanceAllowance_1'
                rules={[
                  {
                    required: false,
                    message: 'Please input Conveyance Allowance!',
                  },
                ]}
              >
                <InputNumber
                  className='w-full'
                  placeholder='Enter Conveyance Allowance'
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col className='gutter-row pt-2' xs={24} sm={24} md={6}>
              House Rent Allowance{' '}
              <ExclamationCircleOutlined className='ml-3' />
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={18}>
              <Form.Item
                name='HouseRentAllowance_1'
                rules={[
                  {
                    required: false,
                    message: 'Please input House Rent Allowance!',
                  },
                ]}
              >
                <InputNumber
                  className='w-full'
                  placeholder='Enter House Rent Allowance'
                />
              </Form.Item>
            </Col>
          </Row>

          {/* <Row gutter={16}>
            <Col className='gutter-row' xs={24} sm={24} md={6}>
              Medical Allowance (without disability allowance){' '}
              <ExclamationCircleOutlined className='ml-3' />
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={18}>
              <Form.Item
                name='HouseRentAllowance_1'
                rules={[
                  {
                    required: false,
                    message:
                      'Please input Medical Allowance (without disability allowance)!',
                  },
                ]}
              >
                <InputNumber
                  className='w-full'
                  placeholder='Enter House Rent Allowance'
                />
              </Form.Item>
            </Col>
          </Row> */}

          <Row gutter={16}>
            <Col className='gutter-row' xs={24} sm={24} md={6}>
              Medical Allowance (without disability allowance){' '}
              <ExclamationCircleOutlined className='ml-3' />
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={18}>
              <Form.Item
                name='MedicalAllowance_1'
                rules={[
                  {
                    required: false,
                    message:
                      'Please input Medical Allowance (without disability allowance)!',
                  },
                ]}
              >
                <InputNumber
                  className='w-full'
                  placeholder='Enter House Medical Allowance (without disability allowance)'
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col className='gutter-row ' xs={24} sm={24} md={6}>
              Medical Allowance (disabled person)
              <ExclamationCircleOutlined className='ml-3' />
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={18}>
              <Form.Item
                name='MedicalAllowanceForDisability_1'
                rules={[
                  {
                    required: false,
                    message:
                      'Please input Medical Allowance (disabled person)!',
                  },
                ]}
              >
                <InputNumber
                  className='w-full'
                  placeholder='Enter House Medical Allowance (disabled person)'
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col className='gutter-row ' xs={24} sm={24} md={6}>
              Any amount received for surgery of heart, eye, liver, kidney,
              cancer
              <ExclamationCircleOutlined className='ml-3' />
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={18}>
              <Form.Item
                name='Surgery_HEKLC_1'
                rules={[
                  {
                    required: false,
                    message:
                      'Please input Any amount received for surgery of heart, eye, liver, kidney, cancer!',
                  },
                ]}
              >
                <InputNumber
                  className='w-full'
                  placeholder='Enter Any amount received for surgery of heart, eye, liver, kidney, cancer'
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col className='gutter-row pt-2' xs={24} sm={24} md={6}>
              Allowance for support staff
              <ExclamationCircleOutlined className='ml-3' />
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={18}>
              <Form.Item
                name='ServantAllowance_1'
                rules={[
                  {
                    required: false,
                    message: 'Please input Allowance for support staff ',
                  },
                ]}
              >
                <InputNumber
                  className='w-full'
                  placeholder='Enter Allowance for support staff '
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col className='gutter-row pt-2' xs={24} sm={24} md={6}>
              Leave Fair Assistance (LFA)
              <ExclamationCircleOutlined className='ml-3' />
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={18}>
              <Form.Item
                name='LeaveAllowance_1'
                rules={[
                  {
                    required: false,
                    message: 'Please input Leave Fair Assistance (LFA) ',
                  },
                ]}
              >
                <InputNumber
                  className='w-full'
                  placeholder='Enter Leave Fair Assistance (LFA) '
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col className='gutter-row pt-2' xs={24} sm={24} md={6}>
              Leave Encashment
              <ExclamationCircleOutlined className='ml-3' />
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={18}>
              <Form.Item
                name='LeaveEncashment_1'
                rules={[
                  {
                    required: false,
                    message: 'Please input Leave Encashment',
                  },
                ]}
              >
                <InputNumber
                  className='w-full'
                  placeholder='Enter Leave Encashment'
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col className='gutter-row pt-2' xs={24} sm={24} md={6}>
              Honorarium or Reward
              <ExclamationCircleOutlined className='ml-3' />
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={18}>
              <Form.Item
                name='HonorariumOrReward_1'
                rules={[
                  {
                    required: false,
                    message: 'Please input Honorarium or Reward',
                  },
                ]}
              >
                <InputNumber
                  className='w-full'
                  placeholder='Enter Honorarium or Reward'
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col className='gutter-row pt-2' xs={24} sm={24} md={6}>
              Overtime Allowance
              <ExclamationCircleOutlined className='ml-3' />
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={18}>
              <Form.Item
                name='OvertimeAllowance_1'
                rules={[
                  {
                    required: false,
                    message: 'Please input Overtime Allowance',
                  },
                ]}
              >
                <InputNumber
                  className='w-full'
                  placeholder='Enter Overtime Allowance'
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col className='gutter-row pt-2' xs={24} sm={24} md={6}>
              Bonus
              <ExclamationCircleOutlined className='ml-3' />
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={18}>
              <Form.Item
                name='Bonus_1'
                rules={[
                  {
                    required: false,
                    message: 'Please input Bonus',
                  },
                ]}
              >
                <InputNumber className='w-full' placeholder='Enter Bonus' />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col className='gutter-row pt-2' xs={24} sm={24} md={6}>
              Other Allowances
              <ExclamationCircleOutlined className='ml-3' />
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={18}>
              <Form.Item
                name='OtherAllowances_1'
                rules={[
                  {
                    required: false,
                    message: 'Please input Other Allowances',
                  },
                ]}
              >
                <InputNumber
                  className='w-full'
                  placeholder='Enter Other Allowances'
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col className='gutter-row ' xs={24} sm={24} md={6}>
              Employers Contribution Provident Fund
              <ExclamationCircleOutlined className='ml-3' />
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={18}>
              <Form.Item
                name='EmployersContributionProvidentFund_1'
                rules={[
                  {
                    required: false,
                    message:
                      'Please input Employers Contribution Provident Fund',
                  },
                ]}
              >
                <InputNumber
                  className='w-full'
                  placeholder='Enter Employers Contribution Provident Fund'
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col className='gutter-row ' xs={24} sm={24} md={6}>
              Interest Accrued Provident Fund
              <ExclamationCircleOutlined className='ml-3' />
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={18}>
              <Form.Item
                name='InterestAccruedProvidentFund_1'
                rules={[
                  {
                    required: false,
                    message: 'Please input Interest Accrued Provident Fund',
                  },
                ]}
              >
                <InputNumber
                  className='w-full'
                  placeholder='Enter Interest Accrued Provident Fund'
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16} className='mb-5'>
            <Col className='gutter-row ' xs={24} sm={24} md={6}>
              Have you received any transport from employer?
              <ExclamationCircleOutlined className='ml-3' />
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={18}>
              <Row gutter={16}>
                <Col className='gutter-row' xs={8} sm={8} md={8}>
                  <Radio.Group
                    onChange={onChangeTransport}
                    value={hasTranspost}
                  >
                    <Radio value={1}>Yes (Upto 2500cc)</Radio>
                    <Radio value={2}>Yes (More than 2500cc)</Radio>
                  </Radio.Group>

                  {hasTranspost ? (
                    <>
                      <Select
                        className='w-full mt-3'
                        defaultValue={tranportMonth}
                        suffixIcon={
                          <img
                            src='/assets/icons/select-icon.svg'
                            alt='select-icon'
                          />
                        }
                        onChange={onChangeTranportMonth}
                      >
                        {Array.from({length: 12}, (_, i) => i + 1).map(
                          (num) => (
                            <Option value={num}> {num} Month</Option>
                          )
                        )}
                      </Select>
                    </>
                  ) : (
                    ''
                  )}
                </Col>
                <Col className='gutter-row' xs={8} sm={8} md={8}>
                  <Radio
                    value={0}
                    onChange={onChangeTransport}
                    checked={!hasTranspost}
                  >
                    No
                  </Radio>
                </Col>
                <Col className='gutter-row' xs={8} sm={8} md={8}>
                  <Form.Item name='TransportAmount_1'>
                    <InputNumber readOnly className='w-full' />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col className='gutter-row ' xs={24} sm={24} md={6}>
              What is the rental value that your employer paid?
              <ExclamationCircleOutlined className='ml-3' />
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={18}>
              <Form.Item
                name='RentalValueOfHouse_1'
                rules={[
                  {
                    required: false,
                    message:
                      'Please input rental value that your employer paid',
                  },
                ]}
              >
                <InputNumber
                  className='w-full'
                  placeholder='Enter rental value that your employer paid'
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col className='gutter-row ' xs={24} sm={24} md={6}>
              Have you paid any part of the rent?
              <ExclamationCircleOutlined className='ml-3' />
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={18}>
              <Form.Item
                name='PaidPartOfRentValue_1'
                rules={[
                  {
                    required: false,
                    message: 'Please input paid any part of the rent',
                  },
                ]}
              >
                <InputNumber
                  className='w-full'
                  placeholder='Enter paid any part of the rent'
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col className='gutter-row pt-2' xs={24} sm={24} md={6}>
              Others
              <ExclamationCircleOutlined className='ml-3' />
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={18}>
              <Form.Item
                name='Others_1'
                rules={[
                  {
                    required: false,
                    message: 'Please Others',
                  },
                ]}
              >
                <InputNumber className='w-full' placeholder='Enter Others' />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col className='gutter-row pt-2' xs={24} sm={24} md={6}>
              Arrear Pay (if not included in taxable income earlier)
              <ExclamationCircleOutlined className='ml-3' />
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={18}>
              <Form.Item
                name='Arear_1'
                rules={[
                  {
                    required: false,
                    message:
                      'Please Arrear Pay (if not included in taxable income earlier)',
                  },
                ]}
              >
                <InputNumber
                  className='w-full'
                  placeholder='Enter Arrear Pay (if not included in taxable income earlier)'
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col className='gutter-row pt-2' xs={24} sm={24} md={6}>
              Income received from Gratuity Fund
              <ExclamationCircleOutlined className='ml-3' />
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={18}>
              <Form.Item
                name='Gratuity_1'
                rules={[
                  {
                    required: false,
                    message:
                      'Please Enter Income received from Gratuity Fund  ',
                  },
                ]}
              >
                <InputNumber
                  className='w-full'
                  placeholder='Enter Income received from Gratuity Fund '
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col className='gutter-row' xs={24} sm={24} md={6}>
              Income From Workers Profit Participation Fund
              <ExclamationCircleOutlined className='ml-3' />
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={18}>
              <Form.Item
                name='WorkersProfitParticipationFund_1'
                rules={[
                  {
                    required: false,
                    message:
                      'Please Enter Income From Workers Profit Participation Fund',
                  },
                ]}
              >
                <InputNumber
                  className='w-full'
                  placeholder='Enter Income From Workers Profit Participation Fund'
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col className='gutter-row pt-2' xs={24} sm={24} md={6}>
              Pension
              <ExclamationCircleOutlined className='ml-3' />
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={18}>
              <Form.Item
                name='Pension_1'
                rules={[
                  {
                    required: false,
                    message: 'Please Enter Pension',
                  },
                ]}
              >
                <InputNumber className='w-full' placeholder='Enter Pension' />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col className='gutter-row' xs={24} sm={24} md={6}>
              Income Received from Recognized Provident Fund and Recognized
              Super Annuation Fund
              <ExclamationCircleOutlined className='ml-3' />
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={18}>
              <Form.Item
                name='RecognizedProvidentFundIncome_1'
                rules={[
                  {
                    required: false,
                    message:
                      'Please Enter Income Received from Recognized Provident Fund and Recognized Super Annuation Fund',
                  },
                ]}
              >
                <InputNumber
                  className='w-full'
                  placeholder='Enter Income Received from Recognized Provident Fund and Recognized Super Annuation Fund'
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16} className='mt-3'>
            <Col className='gutter-row' xs={24} sm={24} md={6}>
              Income from Employee Share Schemes
              <ExclamationCircleOutlined className='ml-3' />
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={18}>
              <Form.Item
                name='EmployeeShareSchemes_1'
                rules={[
                  {
                    required: false,
                    message: 'Please Enter Income from Employee Share Schemes',
                  },
                ]}
              >
                <InputNumber
                  className='w-full'
                  placeholder='Enter Income from Employee Share Schemes'
                />
              </Form.Item>
            </Col>
          </Row>
          <Divider />
          <Row gutter={16} className='mt-3'>
            <Col className='gutter-row' xs={24} sm={24} md={6}>
              Gross Taxable Income
              <ExclamationCircleOutlined className='ml-3' />
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={18}>
              <Row gutter={16} className=''>
                <Col className='gutter-row'>
                  <Form.Item name='grossSalaryIncome'>
                    <Input placeholder='Gross Amount of Yearly Income' />
                  </Form.Item>
                </Col>
                <Col className='gutter-row'>
                  <Form.Item name='grossTaxWaiver'>
                    <Input placeholder='Gross  Amount of Exempted Income' />
                  </Form.Item>
                </Col>
                <Col className='gutter-row'>
                  <Form.Item name='grossTaxableIncome'>
                    <Input placeholder='Gross Taxable Income' />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
          </Row>
          <Divider className='mt-0 mb-5' />
          <Row gutter={16} className='mt-3'>
            <Col className='gutter-row' xs={24} sm={24} md={6}>
              Net Taxable Income (Including all the exempted income from salary)
              <ExclamationCircleOutlined className='ml-3' />
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={18}>
              <Row gutter={16} className=''>
                <Col className='gutter-row'>
                  <Form.Item name='NetSalaryIncome'>
                    <Input placeholder='Net Amount of Yearly Income' />
                  </Form.Item>
                </Col>
                <Col className='gutter-row'>
                  <Form.Item name='NetTaxWaiver'>
                    <Input placeholder='Net Amount of Exempted Income' />
                  </Form.Item>
                </Col>
                <Col className='gutter-row'>
                  <Form.Item name='NetTaxableIncome'>
                    <Input placeholder='Net Taxable Income' />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
          </Row>

          <Form.Item className='text-center mt-6'>
            <Space>
              <Button
                type='primary'
                className='refer-friend-button shadow-none md:w-52'
                onClick={() => {
                  setCurrent(3)
                }}
              >
                <LeftOutlined style={{fontSize: '12px', marginTop: '2px'}} />
                Back
              </Button>

              <Button
                htmlType='submit'
                type='primary'
                className='prime-button gap-0 md:w-52 m-auto'
              >
                Next
                <RightOutlined style={{fontSize: '12px', marginTop: '2px'}} />
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </ConfigProvider>
    </div>
  )
}
