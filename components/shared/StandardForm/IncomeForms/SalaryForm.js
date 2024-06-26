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
  Row,
  Space,
} from 'antd'

const {TextArea} = Input

export default function SalaryForm() {
  const [form] = Form.useForm()

  const onFinish = async (values) => {
    let res = await postData(SUBMIT_CONTACT, values, 'no_token', 'showError')

    if (res) {
      if (res.code === 'error') {
        form.setFields(res?.errors)
      } else {
        alertPop('success', res.data?.message)
        form.resetFields()
      }
    }
  }

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
          autoComplete='off'
          size='large'
        >
          <Row gutter={16}>
            <Col className='gutter-row pt-2' xs={24} sm={24} md={6}>
              Basic Pay * <ExclamationCircleOutlined className='ml-3' />
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={18}>
              <Form.Item
                name='BasicPay'
                rules={[
                  {
                    required: true,
                    message: 'Please input Basic Pay!',
                  },
                ]}
              >
                <Input placeholder='Enter Basic Pay *' />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col className='gutter-row pt-2' xs={24} sm={24} md={6}>
              Special Pay <ExclamationCircleOutlined className='ml-3' />
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={18}>
              <Form.Item
                name='SpecialPay'
                rules={[
                  {
                    required: false,
                    message: 'Please input Special Pay!',
                  },
                ]}
              >
                <Input placeholder='Enter Special Pay' />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col className='gutter-row pt-2' xs={24} sm={24} md={6}>
              Dearness Allowance <ExclamationCircleOutlined className='ml-3' />
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={18}>
              <Form.Item
                name='DearnessAllowance'
                rules={[
                  {
                    required: false,
                    message: 'Please input Dearness Allowance!',
                  },
                ]}
              >
                <Input placeholder='Enter Dearness Allowance' />
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
                name='ConveyanceAllowance'
                rules={[
                  {
                    required: false,
                    message: 'Please input Conveyance Allowance!',
                  },
                ]}
              >
                <Input placeholder='Enter Conveyance Allowance' />
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
                name='HouseRentAllowance'
                rules={[
                  {
                    required: false,
                    message: 'Please input House Rent Allowance!',
                  },
                ]}
              >
                <Input placeholder='Enter House Rent Allowance' />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col className='gutter-row' xs={24} sm={24} md={6}>
              Medical Allowance (without disability allowance){' '}
              <ExclamationCircleOutlined className='ml-3' />
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={18}>
              <Form.Item
                name='HouseRentAllowance'
                rules={[
                  {
                    required: false,
                    message:
                      'Please input Medical Allowance (without disability allowance)!',
                  },
                ]}
              >
                <Input placeholder='Enter House Rent Allowance' />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col className='gutter-row' xs={24} sm={24} md={6}>
              Medical Allowance (without disability allowance){' '}
              <ExclamationCircleOutlined className='ml-3' />
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={18}>
              <Form.Item
                name='MedicalAllowance'
                rules={[
                  {
                    required: false,
                    message:
                      'Please input Medical Allowance (without disability allowance)!',
                  },
                ]}
              >
                <Input placeholder='Enter House Medical Allowance (without disability allowance)' />
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
                name='MedicalAllowanceForDisability'
                rules={[
                  {
                    required: false,
                    message:
                      'Please input Medical Allowance (disabled person)!',
                  },
                ]}
              >
                <Input placeholder='Enter House Medical Allowance (disabled person)' />
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
                name='Surgery_HEKLC'
                rules={[
                  {
                    required: false,
                    message:
                      'Please input Any amount received for surgery of heart, eye, liver, kidney, cancer!',
                  },
                ]}
              >
                <Input placeholder='Enter Any amount received for surgery of heart, eye, liver, kidney, cancer' />
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
                name='ServantAllowance'
                rules={[
                  {
                    required: false,
                    message: 'Please input Allowance for support staff ',
                  },
                ]}
              >
                <Input placeholder='Enter Allowance for support staff ' />
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
                name='LeaveAllowance'
                rules={[
                  {
                    required: false,
                    message: 'Please input Leave Fair Assistance (LFA) ',
                  },
                ]}
              >
                <Input placeholder='Enter Leave Fair Assistance (LFA) ' />
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
                name='LeaveEncashment'
                rules={[
                  {
                    required: false,
                    message: 'Please input Leave Encashment',
                  },
                ]}
              >
                <Input placeholder='Enter Leave Encashment' />
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
                name='HonorariumOrReward'
                rules={[
                  {
                    required: false,
                    message: 'Please input Honorarium or Reward',
                  },
                ]}
              >
                <Input placeholder='Enter Honorarium or Reward' />
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
                name='HonorariumOrReward'
                rules={[
                  {
                    required: false,
                    message: 'Please input Overtime Allowance',
                  },
                ]}
              >
                <Input placeholder='Enter Overtime Allowance' />
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
                name='Bonus'
                rules={[
                  {
                    required: false,
                    message: 'Please input Bonus',
                  },
                ]}
              >
                <Input placeholder='Enter Bonus' />
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
                name='OtherAllowances'
                rules={[
                  {
                    required: false,
                    message: 'Please input Other Allowances',
                  },
                ]}
              >
                <Input placeholder='Enter Other Allowances' />
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
                name='EmployersContributionProvidentFund'
                rules={[
                  {
                    required: false,
                    message:
                      'Please input Employers Contribution Provident Fund',
                  },
                ]}
              >
                <Input placeholder='Enter Employers Contribution Provident Fund' />
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
                name='InterestAccruedProvidentFund'
                rules={[
                  {
                    required: false,
                    message: 'Please input Interest Accrued Provident Fund',
                  },
                ]}
              >
                <Input placeholder='Enter Interest Accrued Provident Fund' />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col className='gutter-row ' xs={24} sm={24} md={6}>
              What is the rental value that your employer paid?
              <ExclamationCircleOutlined className='ml-3' />
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={18}>
              <Form.Item
                name='RentalValueOfHouse'
                rules={[
                  {
                    required: false,
                    message:
                      'Please input rental value that your employer paid',
                  },
                ]}
              >
                <Input placeholder='Enter rental value that your employer paid' />
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
                name='PaidPartOfRentValue'
                rules={[
                  {
                    required: false,
                    message: 'Please input paid any part of the rent',
                  },
                ]}
              >
                <Input placeholder='Enter paid any part of the rent' />
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
                name='Others'
                rules={[
                  {
                    required: false,
                    message: 'Please Others',
                  },
                ]}
              >
                <Input placeholder='Enter Others' />
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
                name='Arear'
                rules={[
                  {
                    required: false,
                    message:
                      'Please Arrear Pay (if not included in taxable income earlier)',
                  },
                ]}
              >
                <Input placeholder='Enter Arrear Pay (if not included in taxable income earlier)' />
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
                name='Gratuity'
                rules={[
                  {
                    required: false,
                    message:
                      'Please Enter Income received from Gratuity Fund  ',
                  },
                ]}
              >
                <Input placeholder='Enter Income received from Gratuity Fund ' />
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
                name='WorkersProfitParticipationFund'
                rules={[
                  {
                    required: false,
                    message:
                      'Please Enter Income From Workers Profit Participation Fund',
                  },
                ]}
              >
                <Input placeholder='Enter Income From Workers Profit Participation Fund' />
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
                name='Pension'
                rules={[
                  {
                    required: false,
                    message: 'Please Enter Pension',
                  },
                ]}
              >
                <Input placeholder='Enter Pension' />
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
                name='RecognizedProvidentFundIncome'
                rules={[
                  {
                    required: false,
                    message:
                      'Please Enter Income Received from Recognized Provident Fund and Recognized Super Annuation Fund',
                  },
                ]}
              >
                <Input placeholder='Enter Income Received from Recognized Provident Fund and Recognized Super Annuation Fund' />
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
                name='EmployeeShareSchemes'
                rules={[
                  {
                    required: false,
                    message: 'Please Enter Income from Employee Share Schemes',
                  },
                ]}
              >
                <Input placeholder='Enter Income from Employee Share Schemes' />
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

          <Form.Item className='text-center'>
            <Space>
              <Button
                type='primary'
                className='refer-friend-button shadow-none md:w-52'
                onClick={() => {
                  // setCurrent(5)
                }}
              >
                <LeftOutlined style={{fontSize: '12px', marginTop: '2px'}} />
                Back
              </Button>

              <Button
                type='primary'
                className='prime-button md:w-52 m-auto'
                onClick={() => {
                  setCurrent(5)
                }}
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
