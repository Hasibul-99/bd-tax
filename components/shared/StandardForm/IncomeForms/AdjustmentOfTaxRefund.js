import {
  Delete_Adjustment_TaxRefund,
  Get_Adjustmentsof_TaxRefund,
  Save_Adjustmentsof_TaxRefund,
} from '@/scripts/api'
import {getData, postData} from '@/scripts/api-service'
import {alertPop} from '@/scripts/helper'
import {LeftOutlined, RightOutlined} from '@ant-design/icons'
import {Button, Col, ConfigProvider, Form, Input, Row, Space} from 'antd'
import {useEffect, useState} from 'react'

export default function AdjustmentOfTaxRefund({
  setActiveTab,
  nextActiveTab,
  setProsCurrent,
  backActiveTab,
}) {
  const [form] = Form.useForm()
  const [ajValue, setAjValue] = useState()

  const onFinish = async (values) => {
    let res = await postData(Save_Adjustmentsof_TaxRefund, values)

    if (res) {
      alertPop('success', res.data.message)
      getAdjustmentsofTaxRefund()
    }
  }

  const deleteAdjustmentTaxRefund = async () => {
    let res = await postData(Delete_Adjustment_TaxRefund)

    if (res) {
      form.resetFields()
      alertPop('success', res.data.message)
    }
  }

  const getAdjustmentsofTaxRefund = async () => {
    let res = await getData(Get_Adjustmentsof_TaxRefund)

    console.log('res', res)
    if (res) {
      let masterData = res?.data
      setAjValue(masterData)
      form.setFieldsValue(masterData)
    }
  }

  useEffect(() => {
    getAdjustmentsofTaxRefund()
  }, [])

  return (
    <div className='bg-white pb-6 px-6'>
      <h3 className='text-xl font-semibold'>ADJUSTMENT OF TAX REFUND</h3>
      <p>
        {ajValue?.AdjustmentTaxRefund
          ? `Did you have any adjustments to your tax refund? Current value is ${ajValue?.AdjustmentTaxRefund}.
        You can change the value below and press store Adjustment of tax refund
        Did you have any adjustments to your tax refund?`
          : 'Did you have any adjustments to your tax refund? Adjustment of tax refund'}
      </p>

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
          size='large'
        >
          <Row gutter={16}>
            <Col className='gutter-row' span={8}>
              <Form.Item
                name='AdjustmentTaxRefund'
                rules={[
                  {
                    required: true,
                    message: 'Please enter Adjustment Tax Refund',
                  },
                ]}
              >
                <Input className='w-full' placeholder='Adjustment Tax Refund' />
              </Form.Item>
            </Col>
            <Col className='gutter-row' span={8}>
              <Form.Item
                name='AdjustmentTaxRefundYear'
                rules={[
                  {
                    required: true,
                    message: 'Please enter Adjustment Tax Refund Year',
                  },
                ]}
              >
                <Input
                  className='w-full'
                  placeholder='Adjustment Tax Refund Year'
                />
              </Form.Item>
            </Col>
            <Col className='gutter-row' span={8}>
              <Form.Item>
                <Button type='primary' htmlType='submit' className=''>
                  Store
                </Button>

                <Button
                  type='primary'
                  danger
                  className=' ml-5'
                  onClick={() => {
                    deleteAdjustmentTaxRefund()
                  }}
                >
                  Delete
                </Button>
              </Form.Item>
            </Col>
          </Row>
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
