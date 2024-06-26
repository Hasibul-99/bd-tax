import {Button, Col, ConfigProvider, Form, Input, Row} from 'antd'

export default function AdvancePaidTax() {
  const [form] = Form.useForm()

  const onFinish = (values) => {
    console.log(values)
  }

  return (
    <div className='bg-white pb-6 px-6'>
      <h3 className='text-xl font-semibold'>ADVANCE PAID TAX</h3>
      <p>
        Current value is 424.00. You can change the value below and press store
        You can enter total annual data below or you can breakdown your data
        Income Tax Paid In Advance
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
            <Col className='gutter-row' span={20}>
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
