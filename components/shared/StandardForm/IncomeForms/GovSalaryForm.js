import {ExclamationCircleOutlined} from '@ant-design/icons'
import {Button, Col, Input, InputNumber, Row, Space} from 'antd'
import {
  govNetSalaryIncome,
  govNetTaxableIncome,
  govNetTaxWaiver,
} from './helper'

export default function GovSalaryForm({
  DeleteSalaryForm,
  onFinish,
  Form,
  form,
}) {
  const onValuesChange = (changedValues, allValues) => {
    if (allValues) {
      form.setFieldsValue({
        BasicPay: allValues.BasicPay_1 || 0,
        SpecialPay_2: allValues.SpecialPay_1 || 0,
        DearnessAllowance_2: allValues.DearnessAllowance_1 || 0,
        ConveyanceAllowance_2: allValues.ConveyanceAllowance_1 || 0,
        HouseRentAllowance_2: allValues.HouseRentAllowance_1 || 0,
        MedicalAllowance_2: allValues.MedicalAllowance_1 || 0,
        ServantAllowance_2: allValues.ServantAllowance_1 || 0,
        LeaveAllowance_2: allValues.LeaveAllowance_1 || 0,
        LeaveEncashment_2: allValues.LeaveEncashment_1 || 0,
        HonorariumOrReward: allValues.HonorariumOrReward_1 || 0,
        OvertimeAllowance_2: allValues.OvertimeAllowance_1 || 0,
        Bonus: allValues.Bonus_1 || 0,
        OtherAllowances_2: allValues.OtherAllowances_1 || 0,
        EmployersContributionProvidentFund_2:
          allValues.EmployersContributionProvidentFund_1 || 0,
        InterestAccruedProvidentFund_2:
          allValues.InterestAccruedProvidentFund_1 || 0,
        DeemedIncomeTransport_2: allValues.DeemedIncomeTransport_1 || 0,
        DeemedFreeAccommodation_2: allValues.DeemedFreeAccommodation_1 || 0,
        FestivalBonus: allValues.FestivalBonus_1 || 0,
        BengaliNewYearBonus_2: allValues.BengaliNewYearBonus_1 || 0,
        EntertainmentAllowance: allValues.EntertainmentAllowance_1 || 0,
        Pension_2: allValues.Pension_1 || 0,
        Pension: 0,
        RecognizedProvidentFundIncome_2:
          allValues.RecognizedProvidentFundIncome_1 || 0,
        Others_2: allValues.Others_1 || 0,
        Arear: allValues.Arear_1 || 0,
        NetSalaryIncome: govNetSalaryIncome(allValues),
        NetTaxWaiver: govNetTaxWaiver(allValues),
        NetTaxableIncome: govNetTaxableIncome(allValues),
      })
    }
  }

  return (
    <Form
      className='mt-6'
      name='basic'
      form={form}
      onFinish={onFinish}
      onValuesChange={onValuesChange}
      autoComplete='off'
      size='large'
      initialValues={{ReceivedAnyHouse: 'N'}}
    >
      <Row gutter={16}>
        <Col className='gutter-row pt-2' xs={24} sm={24} md={9}>
          Basic Pay * <ExclamationCircleOutlined className='ml-3' />
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item
            name='BasicPay_1'
            rules={[
              {
                required: true,
                message: 'Please input Basic Pay!',
              },
            ]}
          >
            <InputNumber className='w-full' placeholder='Enter Basic Pay *' />
          </Form.Item>
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='BasicPay_2'>
            <InputNumber className='w-full' disabled />
          </Form.Item>
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='BasicPay'>
            <InputNumber className='w-full' disabled />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col className='gutter-row pt-2' xs={24} sm={24} md={9}>
          Special Pay <ExclamationCircleOutlined className='ml-3' />
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item
            name='SpecialPay_1'
            rules={[
              {
                required: false,
                message: 'Please input Special Pay!',
              },
            ]}
          >
            <InputNumber className='w-full' placeholder='Enter Special Pay' />
          </Form.Item>
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='SpecialPay_2'>
            <InputNumber className='w-full' disabled />
          </Form.Item>
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='SpecialPay'>
            <InputNumber className='w-full' disabled />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col className='gutter-row pt-2' xs={24} sm={24} md={9}>
          Dearness Allowance <ExclamationCircleOutlined className='ml-3' />
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
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
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='DearnessAllowance_2'>
            <InputNumber className='w-full' disabled />
          </Form.Item>
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='DearnessAllowance'>
            <InputNumber className='w-full' disabled />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col className='gutter-row pt-2' xs={24} sm={24} md={9}>
          Conveyance Allowance <ExclamationCircleOutlined className='ml-3' />
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
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

        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='ConveyanceAllowance_2'>
            <InputNumber className='w-full' disabled />
          </Form.Item>
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='ConveyanceAllowance'>
            <InputNumber className='w-full' disabled />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col className='gutter-row pt-2' xs={24} sm={24} md={9}>
          House Rent Allowance <ExclamationCircleOutlined className='ml-3' />
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
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
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='HouseRentAllowance_2'>
            <InputNumber className='w-full' disabled />
          </Form.Item>
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='HouseRentAllowance'>
            <InputNumber className='w-full' disabled />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col className='gutter-row' xs={24} sm={24} md={9}>
          Medical Allowance (without disability allowance){' '}
          <ExclamationCircleOutlined className='ml-3' />
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
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
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='MedicalAllowance_2'>
            <InputNumber className='w-full' disabled />
          </Form.Item>
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='MedicalAllowance'>
            <InputNumber className='w-full' disabled />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col className='gutter-row pt-2' xs={24} sm={24} md={9}>
          Allowance for support staff
          <ExclamationCircleOutlined className='ml-3' />
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
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

        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='ServantAllowance_2'>
            <InputNumber className='w-full' disabled />
          </Form.Item>
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='ServantAllowance'>
            <InputNumber className='w-full' disabled />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col className='gutter-row pt-2' xs={24} sm={24} md={9}>
          Leave Fair Assistance (LFA)
          <ExclamationCircleOutlined className='ml-3' />
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
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
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='LeaveAllowance_2'>
            <InputNumber className='w-full' disabled />
          </Form.Item>
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='LeaveAllowance'>
            <InputNumber className='w-full' disabled />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col className='gutter-row pt-2' xs={24} sm={24} md={9}>
          Leave Encashment
          <ExclamationCircleOutlined className='ml-3' />
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
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

        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='LeaveEncashment_2'>
            <InputNumber className='w-full' disabled />
          </Form.Item>
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='LeaveEncashment'>
            <InputNumber className='w-full' disabled />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col className='gutter-row pt-2' xs={24} sm={24} md={9}>
          Honorarium or Reward
          <ExclamationCircleOutlined className='ml-3' />
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
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
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='HonorariumOrReward_2'>
            <InputNumber className='w-full' disabled />
          </Form.Item>
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='HonorariumOrReward'>
            <InputNumber className='w-full' disabled />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col className='gutter-row pt-2' xs={24} sm={24} md={9}>
          Overtime Allowance
          <ExclamationCircleOutlined className='ml-3' />
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
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
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='OvertimeAllowance_2'>
            <InputNumber className='w-full' disabled />
          </Form.Item>
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='OvertimeAllowance'>
            <InputNumber className='w-full' disabled />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col className='gutter-row pt-2' xs={24} sm={24} md={9}>
          Bonus
          <ExclamationCircleOutlined className='ml-3' />
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
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
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='Bonus_2'>
            <InputNumber className='w-full' disabled />
          </Form.Item>
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='Bonus'>
            <InputNumber className='w-full' disabled />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col className='gutter-row pt-2' xs={24} sm={24} md={9}>
          Other Allowances
          <ExclamationCircleOutlined className='ml-3' />
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
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
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='OtherAllowances_2'>
            <InputNumber className='w-full' disabled />
          </Form.Item>
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='OtherAllowances'>
            <InputNumber className='w-full' disabled />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col className='gutter-row ' xs={24} sm={24} md={9}>
          Employers Contribution Provident Fund
          <ExclamationCircleOutlined className='ml-3' />
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item
            name='EmployersContributionProvidentFund_1'
            rules={[
              {
                required: false,
                message: 'Please input Employers Contribution Provident Fund',
              },
            ]}
          >
            <InputNumber
              className='w-full'
              placeholder='Enter Employers Contribution Provident Fund'
            />
          </Form.Item>
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='EmployersContributionProvidentFund_2'>
            <InputNumber className='w-full' disabled />
          </Form.Item>
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='EmployersContributionProvidentFund'>
            <InputNumber className='w-full' disabled />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col className='gutter-row ' xs={24} sm={24} md={9}>
          Interest Accrued Provident Fund
          <ExclamationCircleOutlined className='ml-3' />
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
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
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='InterestAccruedProvidentFund_2'>
            <InputNumber className='w-full' disabled />
          </Form.Item>
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='InterestAccruedProvidentFund'>
            <InputNumber className='w-full' disabled />
          </Form.Item>
        </Col>
      </Row>

      {/* Deemed Income Transport */}
      <Row gutter={16}>
        <Col className='gutter-row ' xs={24} sm={24} md={9}>
          Deemed Income Transport
          <ExclamationCircleOutlined className='ml-3' />
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item
            name='DeemedIncomeTransport_1'
            rules={[
              {
                required: false,
                message: 'Please input Deemed Income Transport',
              },
            ]}
          >
            <InputNumber
              className='w-full'
              placeholder='Enter Deemed Income Transport'
            />
          </Form.Item>
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='DeemedIncomeTransport_2'>
            <InputNumber className='w-full' disabled />
          </Form.Item>
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='DeemedIncomeTransport'>
            <InputNumber className='w-full' disabled />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col className='gutter-row pt-2' xs={24} sm={24} md={9}>
          Concessional Accommodation
          <ExclamationCircleOutlined className='ml-3' />
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='DeemedFreeAccommodation_1'>
            <InputNumber
              className='w-full'
              placeholder='Enter Concessional Accommodation'
            />
          </Form.Item>
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='DeemedFreeAccommodation_2'>
            <InputNumber className='w-full' disabled />
          </Form.Item>
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='DeemedFreeAccommodation'>
            <InputNumber className='w-full' disabled />
          </Form.Item>
        </Col>
      </Row>

      {/* Festival Bonus   */}
      <Row gutter={16}>
        <Col className='gutter-row pt-2' xs={24} sm={24} md={9}>
          Festival Bonus
          <ExclamationCircleOutlined className='ml-3' />
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='FestivalBonus_1'>
            <InputNumber
              className='w-full'
              placeholder='Enter Festival Bonus'
            />
          </Form.Item>
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='FestivalBonus_2'>
            <InputNumber className='w-full' disabled />
          </Form.Item>
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='FestivalBonus'>
            <InputNumber className='w-full' disabled />
          </Form.Item>
        </Col>
      </Row>

      {/* Bengali New Year Bonus   */}
      <Row gutter={16}>
        <Col className='gutter-row pt-2' xs={24} sm={24} md={9}>
          Bengali New Year Bonus
          <ExclamationCircleOutlined className='ml-3' />
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='BengaliNewYearBonus_1'>
            <InputNumber
              className='w-full'
              placeholder='Enter Bengali New Year Bonus'
            />
          </Form.Item>
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='BengaliNewYearBonus_2'>
            <InputNumber className='w-full' disabled />
          </Form.Item>
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='BengaliNewYearBonus'>
            <InputNumber className='w-full' disabled />
          </Form.Item>
        </Col>
      </Row>

      {/* Festival Allowance  */}
      <Row gutter={16}>
        <Col className='gutter-row pt-2' xs={24} sm={24} md={9}>
          Festival Allowance
          <ExclamationCircleOutlined className='ml-3' />
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item
            name='EntertainmentAllowance_1'
            rules={[
              {
                required: false,
                message: 'Please Enter Pension',
              },
            ]}
          >
            <InputNumber
              className='w-full'
              placeholder='Enter Festival Allowance'
            />
          </Form.Item>
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='EntertainmentAllowance_2'>
            <InputNumber className='w-full' disabled />
          </Form.Item>
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='EntertainmentAllowance'>
            <InputNumber className='w-full' disabled />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col className='gutter-row pt-2' xs={24} sm={24} md={9}>
          Pension
          <ExclamationCircleOutlined className='ml-3' />
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
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
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='Pension_2'>
            <InputNumber className='w-full' disabled />
          </Form.Item>
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='Pension'>
            <InputNumber className='w-full' disabled />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col className='gutter-row' xs={24} sm={24} md={9}>
          Income Received from Recognized Provident Fund and Recognized Super
          Annuation Fund
          <ExclamationCircleOutlined className='ml-3' />
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
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
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='RecognizedProvidentFundIncome_2'>
            <InputNumber className='w-full' disabled />
          </Form.Item>
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='RecognizedProvidentFundIncome'>
            <InputNumber className='w-full' disabled />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col className='gutter-row pt-2' xs={24} sm={24} md={9}>
          Others
          <ExclamationCircleOutlined className='ml-3' />
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
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
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='Others_2'>
            <InputNumber className='w-full' disabled />
          </Form.Item>
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='Others'>
            <InputNumber className='w-full' disabled />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col className='gutter-row pt-2' xs={24} sm={24} md={9}>
          Arrear Pay (if not included in taxable income earlier)
          <ExclamationCircleOutlined className='ml-3' />
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
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
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='Arear_2'>
            <InputNumber className='w-full' disabled />
          </Form.Item>
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='Arear'>
            <InputNumber className='w-full' disabled />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16} className='mt-3'>
        <Col className='gutter-row' xs={24} sm={24} md={9}>
          Gross Taxable Income
          <ExclamationCircleOutlined className='ml-3' />
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={15}>
          <Row gutter={16} className=''>
            <Col className='gutter-row' span={8}>
              <Form.Item name='NetSalaryIncome'>
                <Input placeholder='Amount of Yearly Income' disabled />
              </Form.Item>
            </Col>
            <Col className='gutter-row' span={8}>
              <Form.Item name='NetTaxWaiver'>
                <Input placeholder='Amount of Exempted Income' disabled />
              </Form.Item>
            </Col>
            <Col className='gutter-row' span={8}>
              <Form.Item name='NetTaxableIncome'>
                <Input placeholder='Taxable Income' disabled />
              </Form.Item>
            </Col>
          </Row>
        </Col>
      </Row>

      <Form.Item>
        <Space>
          <Button type='primary' htmlType='submit' className='w-28'>
            Save
          </Button>
          <Button
            type='primary'
            danger
            className='w-28'
            onClick={() => {
              DeleteSalaryForm()
            }}
          >
            Delete
          </Button>
        </Space>
      </Form.Item>
    </Form>
  )
}
