import {Button, Col, ConfigProvider, Form, Input, Row} from 'antd'

export default function AdjustmentOfTaxRefund() {
  const [form] = Form.useForm()

  const onFinish = (values) => {
    console.log(values)
  }

  return (
    <div className='bg-white pb-6 px-6'>
      <h3 className='text-xl font-semibold'>ADJUSTMENT OF TAX REFUND</h3>
      <p>
        Did you have any adjustments to your tax refund? Current value is 24.00.
        You can change the value below and press store Adjustment of tax refund
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
            <Col className='gutter-row' span={10}>
              <Form.Item
                name='gender'
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col className='gutter-row' span={10}>
              <Form.Item
                name='gender'
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col className='gutter-row' span={4}>
              <Form.Item>
                <Button type='primary' htmlType='submit' className='w-28'>
                  Save
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </ConfigProvider>
    </div>
  )
}
