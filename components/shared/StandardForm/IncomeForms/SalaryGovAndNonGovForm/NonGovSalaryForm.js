import {ExclamationCircleOutlined} from '@ant-design/icons'
import {
  Button,
  Checkbox,
  Col,
  Divider,
  Input,
  InputNumber,
  Modal,
  Radio,
  Row,
  Select,
  Space,
  Typography,
} from 'antd'
import {useEffect} from 'react'
import {
  addNonNegative,
  DeemedFreeAccommodationCal,
  getEmployeeShareSchemes,
  getInterestAccruedProvidentFund,
  getInterestAccruedProvidentFund2,
  getTotalGrossTaxableIncome1,
  getTotalGrossTaxableIncome2,
} from '../helper'
const {Text, Link} = Typography
const {confirm} = Modal

export default function NonGovSalaryForm({
  DeleteSalaryForm,
  onFinish,
  Form,
  form,
  hasTranspost,
  setHasTransport,
  tranportMonth,
  setTranportMonth,
  ReceivedAnyHouse,
  setReceivedAnyHouse,
  PaidAnyPartOfRent,
  setPaidAnyPartOfRent,
}) {
  const onChangeTransport = (e) => {
    setHasTransport(e.target.value)
  }

  const onChangeTranportMonth = (val) => {
    setTranportMonth(val)
  }

  const onValuesChange = (changedValues, allValues) => {
    console.log('Changed values:', changedValues)
    console.log('All values:', allValues)

    if (allValues) {
      let grossTaxableIncome_1 = getTotalGrossTaxableIncome1(allValues),
        grossTaxableIncome_2 = getTotalGrossTaxableIncome2(allValues),
        grossTaxableIncome = grossTaxableIncome_1 - grossTaxableIncome_2,
        NetSalaryIncome = grossTaxableIncome_1,
        NetTaxWaiver =
          grossTaxableIncome_2 +
          (allValues.Surgery_HEKLC_1 || 0) +
          (allValues.Gratuity_2 || 0) +
          (allValues.Pension_1 || 0) +
          getInterestAccruedProvidentFund2(allValues),
        NetTaxableIncome = addNonNegative(NetSalaryIncome - NetTaxWaiver)

      form.setFieldsValue({
        NetSalaryIncome: NetSalaryIncome,
        NetTaxWaiver: NetTaxWaiver,
        NetTaxableIncome: NetTaxableIncome,
        BasicPay: allValues.BasicPay_1 || 0,
        SpecialPay: allValues.SpecialPay_1 || 0,
        DearnessAllowance: allValues.DearnessAllowance_1 || 0,
        ConveyanceAllowance: allValues.ConveyanceAllowance_1 || 0,
        MedicalAllowance: allValues.MedicalAllowance_1 || 0,
        EmployeeShareSchemes: getEmployeeShareSchemes(allValues),
        EmployersContributionProvidentFund:
          allValues.EmployersContributionProvidentFund_1 || 0,
        Gratuity: allValues.Gratuity_1 || 0,
        HonorariumOrReward: allValues.HonorariumOrReward_1 || 0,
        HouseRentAllowance: allValues.HouseRentAllowance_1 || 0,
        InterestAccruedProvidentFund:
          getInterestAccruedProvidentFund(allValues),
        InterestAccruedProvidentFund_2:
          getInterestAccruedProvidentFund2(allValues),
        LeaveAllowance: allValues.LeaveAllowance_1 || 0,
        LeaveEncashment: allValues.LeaveEncashment_1 || 0,
        MedicalAllowance: allValues.MedicalAllowance_1 || 0,
        MedicalAllowanceForDisability:
          allValues.MedicalAllowanceForDisability_1 || 0,
        OvertimeAllowance: allValues.OvertimeAllowance_1 || 0,
        // PaidPartOfRentValue: allValues.PaidPartOfRentValue_1 || 0,
        Pension_2: allValues.Pension_1 || 0,
        Pension: 0,
        RecognizedProvidentFundIncome:
          allValues.RecognizedProvidentFundIncome_1 || 0,
        // RentalValueOfHouse: allValues.RentalValueOfHouse_1 || 0,
        DeemedFreeAccommodation: DeemedFreeAccommodationCal(allValues),
        ServantAllowance: allValues.ServantAllowance_1 || 0,
        SpecialPay: allValues.SpecialPay_1 || 0,
        Surgery_HEKLC: allValues.HEKLCNetTaxable
          ? allValues.Surgery_HEKLC_1
          : 0,
        Surgery_HEKLC_2: !allValues.HEKLCNetTaxable
          ? allValues.Surgery_HEKLC_1
          : 0,
        WorkersProfitParticipationFund:
          allValues.WorkersProfitParticipationFund_1 || 0,
        Bonus: allValues.Bonus_1 || 0,
        OtherAllowances: allValues.OtherAllowances_1 || 0,
        Others: allValues.Others_1 || 0,
        ReceiptLieuOfOrAdditionToSalaryOrWages:
          allValues.ReceiptLieuOfOrAdditionToSalaryOrWages_1 || 0,
        AnyOtherFacilityProvidedByEmployer:
          allValues.AnyOtherFacilityProvidedByEmployer_1 || 0,
        Arear: allValues.Arear_1 || 0,
        Gratuity_2: allValues.Gratuity_1
          ? allValues.Gratuity_1 <= 25000000
            ? allValues.Gratuity_1
            : 25000000
          : 0,
        Gratuity: allValues.Gratuity_1
          ? allValues.Gratuity_1 <= 25000000
            ? 0
            : allValues.Gratuity_1 - 25000000
          : 0,
      })
    }
  }

  useEffect(() => {
    if (hasTranspost && tranportMonth) {
      let amount = hasTranspost === 2 ? 25000 : 10000

      form.setFieldsValue({DeemedIncomeTransport: amount * tranportMonth})
      setTimeout(() => {
        onValuesChange(null, form.getFieldsValue())
      }, 1000)
    } else {
      form.setFieldsValue({DeemedIncomeTransport: 0})
      setTimeout(() => {
        onValuesChange(null, form.getFieldsValue())
      }, 1000)
    }
  }, [hasTranspost, tranportMonth])

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
        <Col className='gutter-row ' xs={24} sm={24} md={9}>
          Medical Allowance (disabled person)
          <ExclamationCircleOutlined className='ml-3' />
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item
            name='MedicalAllowanceForDisability_1'
            rules={[
              {
                required: false,
                message: 'Please input Medical Allowance (disabled person)!',
              },
            ]}
          >
            <InputNumber
              className='w-full'
              placeholder='Enter House Medical Allowance (disabled person)'
            />
          </Form.Item>
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='MedicalAllowanceForDisability_2'>
            <InputNumber className='w-full' disabled />
          </Form.Item>
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='MedicalAllowanceForDisability'>
            <InputNumber className='w-full' disabled />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col className='gutter-row ' xs={24} sm={24} md={9}>
          Any amount received for surgery of heart, eye, liver, kidney, cancer
          <ExclamationCircleOutlined className='ml-3' />
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
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
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='Surgery_HEKLC_2'>
            <InputNumber className='w-full' disabled />
          </Form.Item>
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='Surgery_HEKLC'>
            <InputNumber className='w-full' disabled />
          </Form.Item>
        </Col>

        <Col className='gutter-row' xs={24} sm={24} md={24}>
          <Form.Item
            label='Are you share holder or Director of the company?'
            name='HEKLCNetTaxable'
            valuePropName='checked'
          >
            <Checkbox name='HEKLCNetTaxable' />
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

      <Row gutter={16} className='mb-5'>
        <Col className='gutter-row ' xs={24} sm={24} md={9}>
          Have you received any transport from employer?
          <ExclamationCircleOutlined className='ml-3' />
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={15}>
          <Row gutter={16}>
            <Col className='gutter-row' xs={10} sm={10} md={10}>
              <Radio.Group onChange={onChangeTransport} value={hasTranspost}>
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
                    {Array.from({length: 12}, (_, i) => i + 1).map((num) => (
                      <Option value={num}> {num} Month</Option>
                    ))}
                  </Select>
                </>
              ) : (
                ''
              )}
            </Col>
            <Col className='gutter-row' xs={6} sm={6} md={6}>
              <Radio
                value={0}
                onChange={onChangeTransport}
                checked={!hasTranspost}
              >
                No
              </Radio>
            </Col>
            <Col className='gutter-row' xs={8} sm={8} md={8}>
              <Form.Item name='DeemedIncomeTransport'>
                <InputNumber disabled className='w-full' />
              </Form.Item>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row gutter={16} className='mb-4'>
        <Col className='gutter-row ' xs={24} sm={24} md={9}>
          Have you received any furnished or unfurnished house from employer?
          <ExclamationCircleOutlined className='ml-3' />
        </Col>

        <Col className='gutter-row' xs={24} sm={24} md={5}>
          {/* <Form.Item name='ReceivedAnyHouse'>
    <Radio.Group
    value={'N'}
    onChange={(e) => {
      setReceivedAnyHouse(e.target.value)
    }}
    >
      <Radio value='Y'>Yes</Radio>
      <Radio value='N'>No</Radio>
    </Radio.Group>
  </Form.Item> */}

          <Form.Item name='ReceivedAnyHouse'>
            <Radio.Group
              onChange={(e) => {
                setReceivedAnyHouse(e.target.value)
              }}
            >
              <Radio value='Y'>Yes</Radio>
              <Radio value='N'>No</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>

      {ReceivedAnyHouse === 'Y' ? (
        <>
          <Row gutter={16}>
            <Col className='gutter-row ' xs={24} sm={24} md={9}>
              What is the rental value that your employer paid?
              <ExclamationCircleOutlined className='ml-3' />
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={5}>
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
            <Col className='gutter-row' xs={24} sm={24} md={5}>
              <Form.Item name='RentalValueOfHouse_2'>
                <InputNumber className='w-full' disabled />
              </Form.Item>
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={5}>
              <Form.Item name='RentalValueOfHouse'>
                <InputNumber className='w-full' disabled />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16} className='mb-4'>
            <Col className='gutter-row ' xs={24} sm={24} md={9}>
              Have you paid any part of the rent?
              <ExclamationCircleOutlined className='ml-3' />
            </Col>

            <Col className='gutter-row' xs={24} sm={24} md={5}>
              <Form.Item name='PaidAnyPartOfRent'>
                <Radio.Group
                  onChange={(e) => {
                    setPaidAnyPartOfRent(e.target.value)
                  }}
                >
                  <Radio value={'Y'}>Yes</Radio>
                  <Radio value={'N'}>No</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
          </Row>

          {PaidAnyPartOfRent === 'Y' ? (
            <Row gutter={16}>
              <Col className='gutter-row ' xs={24} sm={24} md={9}>
                How much you have paid for rent?
                <ExclamationCircleOutlined className='ml-3' />
              </Col>
              <Col className='gutter-row' xs={24} sm={24} md={5}>
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
              <Col className='gutter-row' xs={24} sm={24} md={5}>
                <Form.Item name='PaidPartOfRentValue_2'>
                  <InputNumber className='w-full' disabled />
                </Form.Item>
              </Col>
              <Col className='gutter-row' xs={24} sm={24} md={5}>
                <Form.Item name='PaidPartOfRentValue'>
                  <InputNumber className='w-full' disabled />
                </Form.Item>
              </Col>
            </Row>
          ) : null}
        </>
      ) : null}

      <Row gutter={16}>
        <Col className='gutter-row pt-2' xs={24} sm={24} md={9}>
          Concessional Accommodation
          <ExclamationCircleOutlined className='ml-3' />
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='DeemedFreeAccommodation_1'>
            <InputNumber className='w-full' disabled />
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
          Receipt in Lieu of or in Addition to Salary or Wages
          <ExclamationCircleOutlined className='ml-3' />
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item
            name='ReceiptLieuOfOrAdditionToSalaryOrWages_1'
            rules={[
              {
                required: false,
                message:
                  'Please Receipt in Lieu of or in Addition to Salary or Wages',
              },
            ]}
          >
            <InputNumber
              className='w-full'
              placeholder='Enter Receipt in Lieu of or in Addition to Salary or Wages'
            />
          </Form.Item>
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='ReceiptLieuOfOrAdditionToSalaryOrWages_2'>
            <InputNumber className='w-full' disabled />
          </Form.Item>
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='ReceiptLieuOfOrAdditionToSalaryOrWages'>
            <InputNumber className='w-full' disabled />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col className='gutter-row pt-2' xs={24} sm={24} md={9}>
          Any Other Facility Provided by Employer
          <ExclamationCircleOutlined className='ml-3' />
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item
            name='AnyOtherFacilityProvidedByEmployer_1'
            rules={[
              {
                required: false,
                message: 'Please Any Other Facility Provided by Employer',
              },
            ]}
          >
            <InputNumber
              className='w-full'
              placeholder='Enter Any Other Facility Provided by Employer'
            />
          </Form.Item>
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='AnyOtherFacilityProvidedByEmployer_2'>
            <InputNumber className='w-full' disabled />
          </Form.Item>
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='AnyOtherFacilityProvidedByEmployer'>
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

      <Row gutter={16}>
        <Col className='gutter-row pt-2' xs={24} sm={24} md={9}>
          Income received from Gratuity Fund
          <ExclamationCircleOutlined className='ml-3' />
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item
            name='Gratuity_1'
            rules={[
              {
                required: false,
                message: 'Please Enter Income received from Gratuity Fund  ',
              },
            ]}
          >
            <InputNumber
              className='w-full'
              placeholder='Enter Income received from Gratuity Fund '
            />
          </Form.Item>
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='Gratuity_2'>
            <InputNumber className='w-full' disabled />
          </Form.Item>
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='Gratuity'>
            <InputNumber className='w-full' disabled />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col className='gutter-row' xs={24} sm={24} md={9}>
          Income From Workers Profit Participation Fund
          <ExclamationCircleOutlined className='ml-3' />
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
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
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='WorkersProfitParticipationFund_2'>
            <InputNumber className='w-full' disabled />
          </Form.Item>
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='WorkersProfitParticipationFund'>
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

      <Row gutter={16} className='mt-3'>
        <Col className='gutter-row' xs={24} sm={24} md={9}>
          Income from Employee Share Schemes
          <ExclamationCircleOutlined className='ml-3' />
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item
            name='EmployeeShareSchemes_1'
            extra='Fair market value of shares on the date of receipt.'
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
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item
            name='EmployeeShareSchemes_2'
            extra="Cost of acquiring shares. It's a cost not an exempted income."
          >
            <InputNumber
              className='w-full'
              placeholder="It's a cost not an exempted income."
            />
          </Form.Item>
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={5}>
          <Form.Item name='EmployeeShareSchemes'>
            <InputNumber className='w-full' disabled />
          </Form.Item>
        </Col>
      </Row>
      {/* <Divider />
<Row gutter={16} className='mt-3'>
<Col className='gutter-row' xs={24} sm={24} md={9}>
  Gross Taxable Income
  <ExclamationCircleOutlined className='ml-3' />
</Col>
<Col className='gutter-row' xs={24} sm={24} md={15}>
  <Row gutter={16} className=''>
    <Col className='gutter-row' span={8}>
      <Form.Item name='grossSalaryIncome'>
        <Input
          placeholder='Gross Amount of Yearly Income'
          disabled
        />
      </Form.Item>
    </Col>
    <Col className='gutter-row' span={8}>
      <Form.Item name='grossTaxWaiver'>
        <Input
          placeholder='Gross  Amount of Exempted Income'
          disabled
        />
      </Form.Item>
    </Col>
    <Col className='gutter-row' span={8}>
      <Form.Item name='grossTaxableIncome'>
        <Input placeholder='Gross Taxable Income' disabled />
      </Form.Item>
    </Col>
  </Row>
</Col>
</Row> */}
      <Divider className='mt-0 mb-5' />
      <Row gutter={16} className='mt-3'>
        <Col className='gutter-row' xs={24} sm={24} md={9}>
          Net Taxable Income (Including all the exempted income from salary)
          <ExclamationCircleOutlined className='ml-3' />
        </Col>
        <Col className='gutter-row' xs={24} sm={24} md={15}>
          <Row gutter={16} className=''>
            <Col className='gutter-row' span={8}>
              <Form.Item name='NetSalaryIncome'>
                <Input placeholder='Net Amount of Yearly Income' disabled />
              </Form.Item>
            </Col>
            <Col className='gutter-row' span={8}>
              <Form.Item name='NetTaxWaiver'>
                <Input placeholder='Net Amount of Exempted Income' disabled />
              </Form.Item>
            </Col>
            <Col className='gutter-row' span={8}>
              <Form.Item name='NetTaxableIncome'>
                <Input placeholder='Net Taxable Income' disabled />
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
