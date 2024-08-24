import {Get_Other_Sources, Save_Other_Sources} from '@/scripts/api'
import {getData, postData} from '@/scripts/api-service'
import {alertPop} from '@/scripts/helper'
import {LeftOutlined, RightOutlined} from '@ant-design/icons'
import {Button, Col, ConfigProvider, Form, InputNumber, Row, Space} from 'antd'
import {useEffect} from 'react'
import {getDataOtherSourse} from './helper'

export default function OtherSources({
  setActiveTab,
  nextActiveTab,
  setCurrent,
  backActiveTab,
}) {
  const [form] = Form.useForm()

  const onFinish = async (values) => {
    let data = {...values}

    let res = await postData(Save_Other_Sources, data, null, 'showError')

    if (res) {
      if (res.code === 'error') {
        form.setFields(res?.errors)
      } else {
        getOtherSources()
        alertPop('success', res.data?.message)
      }
    }
  }

  const getOtherSources = async () => {
    let res = await getData(Get_Other_Sources)

    if (res) {
      form.setFieldsValue(getDataOtherSourse(res?.data))
    }
  }

  const onValuesChange = (changedValues, allValues) => {
    console.log('Changed values:', changedValues)
    console.log('All values:', allValues)

    if (allValues) {
      form.setFieldsValue({
        InterestIncomeFromWEDBA: allValues.InterestFromMutualFund_1
          ? 0
          : undefined,
        CashDividend: allValues.CashDividend_1 ? 0 : undefined,
        InterestIncomeFromWEDB: allValues.InterestIncomeFromWEDB_1
          ? 0
          : undefined,
        USDollarPremium: allValues.USDollarPremium_1 ? 0 : undefined,
        PoundSterlingPremium: allValues.PoundSterlingPremium_1 ? 0 : undefined,
        EuroPremium: allValues.EuroPremium_1 ? 0 : undefined,
        InterestFromInstrument: allValues.InterestFromInstrument_1
          ? 0
          : undefined,
        SanchaypatraIncome: allValues.SanchaypatraIncome_1
          ? allValues.SanchaypatraIncome_1
          : undefined,
        Others: allValues.Others_1 ? allValues.Others_1 : undefined,
        SanchaypatraIncome: allValues.SanchaypatraIncome_1
          ? allValues.SanchaypatraIncome_1
          : undefined,
      })
    }
  }

  useEffect(() => {
    getOtherSources()
  }, [])

  return (
    <div className='bg-white pb-6 px-6'>
      <h3 className='text-xl font-semibold'>OTHER SOURCES</h3>

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
          className='mt-5'
          form={form}
          layout={'vertical'}
          name='control-hooks'
          onFinish={onFinish}
          onValuesChange={onValuesChange}
          size='large'
        >
          <Row gutter={16}>
            <Col className='gutter-row' span={12}>
              Other Sources of Income
            </Col>
            <Col className='gutter-row' span={6}>
              Amount of Income (BDT)
            </Col>
            <Col className='gutter-row' span={6}>
              Net taxable income (BDT)
            </Col>
          </Row>

          <Row gutter={16} className='mt-5'>
            <Col className='gutter-row' span={12}>
              Interest income from WEDB (wage earners development bond)
            </Col>
            <Col className='gutter-row' span={6}>
              <Form.Item
                name='InterestIncomeFromWEDB_1'
                rules={[
                  {
                    required: false,
                    message: 'Required *',
                  },
                ]}
              >
                <InputNumber style={{width: '200px'}} />
              </Form.Item>
            </Col>
            <Col className='gutter-row' span={6}>
              <Form.Item
                name='InterestIncomeFromWEDB'
                rules={[
                  {
                    required: false,
                    message: 'Required',
                  },
                ]}
              >
                <InputNumber style={{width: '200px'}} disabled />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16} className='mt-5'>
            <Col className='gutter-row' span={12}>
              US dollar premium/investment bond
            </Col>
            <Col className='gutter-row' span={6}>
              <Form.Item
                name='USDollarPremium_1'
                rules={[
                  {
                    required: false,

                    message: 'Required *',
                  },
                ]}
              >
                <InputNumber style={{width: '200px'}} />
              </Form.Item>
            </Col>
            <Col className='gutter-row' span={6}>
              <Form.Item
                name='USDollarPremium'
                rules={[
                  {
                    required: false,
                  },
                ]}
              >
                <InputNumber style={{width: '200px'}} disabled />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16} className='mt-5'>
            <Col className='gutter-row' span={12}>
              Pound sterling premium/investment bond
            </Col>
            <Col className='gutter-row' span={6}>
              <Form.Item
                name='PoundSterlingPremium_1'
                rules={[
                  {
                    required: false,

                    message: 'Required *',
                  },
                ]}
              >
                <InputNumber style={{width: '200px'}} />
              </Form.Item>
            </Col>
            <Col className='gutter-row' span={6}>
              <Form.Item
                name='PoundSterlingPremium'
                rules={[
                  {
                    required: false,
                  },
                ]}
              >
                <InputNumber style={{width: '200px'}} disabled />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16} className='mt-5'>
            <Col className='gutter-row' span={12}>
              Euro premium/investment bond
            </Col>
            <Col className='gutter-row' span={6}>
              <Form.Item
                name='EuroPremium_1'
                rules={[
                  {
                    required: false,

                    message: 'Required *',
                  },
                ]}
              >
                <InputNumber style={{width: '200px'}} />
              </Form.Item>
            </Col>
            <Col className='gutter-row' span={6}>
              <Form.Item
                name='EuroPremium'
                rules={[
                  {
                    required: false,
                  },
                ]}
              >
                <InputNumber style={{width: '200px'}} disabled />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16} className='mt-5'>
            <Col className='gutter-row' span={12}>
              What is the amount of your investment in pensioner's savings
              instrument?
            </Col>
            <Col className='gutter-row' span={6}>
              <Form.Item
                name='InvestmentInInstrument'
                rules={[
                  {
                    required: false,

                    message: 'Required *',
                  },
                ]}
              >
                <InputNumber style={{width: '200px'}} />
              </Form.Item>
            </Col>
            {/* <Col className='gutter-row' span={6}>
              <Form.Item
                name='InvestmentInInstrument'
                rules={[
                  {
                    required: false,
                  },
                ]}
              >
                <InputNumber style={{width: '200px'}} disabled />
              </Form.Item>
            </Col> */}
          </Row>
          <Row gutter={16} className='mt-5'>
            <Col className='gutter-row' span={12}>
              What is the amount of your investment in pensioner's savings
              instrument?
            </Col>
            <Col className='gutter-row' span={6}>
              <Form.Item
                name='InterestFromInstrument_1'
                rules={[
                  {
                    required: false,

                    message: 'Required *',
                  },
                ]}
              >
                <InputNumber style={{width: '200px'}} />
              </Form.Item>
            </Col>
            <Col className='gutter-row' span={6}>
              <Form.Item
                name='InterestFromInstrument'
                rules={[
                  {
                    required: false,
                  },
                ]}
              >
                <InputNumber style={{width: '200px'}} disabled />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16} className='mt-5'>
            <Col className='gutter-row' span={12}>
              Sanchaypatra Income
            </Col>
            <Col className='gutter-row' span={6}>
              <Form.Item
                name='SanchaypatraIncome_1'
                rules={[
                  {
                    required: false,
                    message: 'Required *',
                  },
                ]}
              >
                <InputNumber style={{width: '200px'}} />
              </Form.Item>
            </Col>
            <Col className='gutter-row' span={6}>
              <Form.Item
                name='SanchaypatraIncome'
                rules={[
                  {
                    required: false,
                  },
                ]}
              >
                <InputNumber style={{width: '200px'}} disabled />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16} className='mt-5'>
            <Col className='gutter-row' span={12}>
              TDS From Sanchaypatra
            </Col>
            <Col className='gutter-row' span={12}>
              <Form.Item
                name='TDSFromSanchaypatra'
                rules={[
                  {
                    required: false,

                    message: 'Required *',
                  },
                ]}
              >
                <InputNumber style={{width: '200px'}} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16} className='mt-5'>
            <Col className='gutter-row' span={12}>
              Others (Royalty, License Fees, Honorarium, Govt. Incentive etc.)
            </Col>
            <Col className='gutter-row' span={6}>
              <Form.Item
                name='Others_1'
                rules={[
                  {
                    required: true,

                    message: 'Required *',
                  },
                ]}
              >
                <InputNumber style={{width: '200px'}} />
              </Form.Item>
            </Col>
            <Col className='gutter-row' span={6}>
              <Form.Item
                name='Others'
                rules={[
                  {
                    required: false,
                  },
                ]}
              >
                <InputNumber style={{width: '200px'}} disabled />
              </Form.Item>
            </Col>
          </Row>

          <div className='text-center mt-10'>
            <Form.Item>
              <Button type='primary' htmlType='submit' className='w-28'>
                Save
              </Button>
            </Form.Item>
          </div>
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
