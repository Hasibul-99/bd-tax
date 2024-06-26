import {Button, Col, ConfigProvider, Form, Input, Row} from 'antd'

export default function OtherSources() {
  const [form] = Form.useForm()

  const onFinish = (values) => {
    console.log(values)
  }

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
                name='gender'
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input style={{width: '200px'}} />
              </Form.Item>
            </Col>
            <Col className='gutter-row' span={6}>
              <Form.Item
                name='gender'
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input style={{width: '200px'}} />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16} className='mt-5'>
            <Col className='gutter-row' span={12}>
              US dollar premium/investment bond
            </Col>
            <Col className='gutter-row' span={6}>
              <Form.Item
                name='gender'
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input style={{width: '200px'}} />
              </Form.Item>
            </Col>
            <Col className='gutter-row' span={6}>
              <Form.Item
                name='gender'
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input style={{width: '200px'}} />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16} className='mt-5'>
            <Col className='gutter-row' span={12}>
              Pound sterling premium/investment bond
            </Col>
            <Col className='gutter-row' span={6}>
              <Form.Item
                name='gender'
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input style={{width: '200px'}} />
              </Form.Item>
            </Col>
            <Col className='gutter-row' span={6}>
              <Form.Item
                name='gender'
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input style={{width: '200px'}} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16} className='mt-5'>
            <Col className='gutter-row' span={12}>
              Euro premium/investment bond
            </Col>
            <Col className='gutter-row' span={6}>
              <Form.Item
                name='gender'
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input style={{width: '200px'}} />
              </Form.Item>
            </Col>
            <Col className='gutter-row' span={6}>
              <Form.Item
                name='gender'
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input style={{width: '200px'}} />
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
                name='gender'
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input style={{width: '200px'}} />
              </Form.Item>
            </Col>
            <Col className='gutter-row' span={6}>
              <Form.Item
                name='gender'
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input style={{width: '200px'}} />
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
                name='gender'
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input style={{width: '200px'}} />
              </Form.Item>
            </Col>
            <Col className='gutter-row' span={6}>
              <Form.Item
                name='gender'
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input style={{width: '200px'}} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16} className='mt-5'>
            <Col className='gutter-row' span={12}>
              What is the amount of interest received from pensioner’s savings
              instrument?
            </Col>
            <Col className='gutter-row' span={6}>
              <Form.Item
                name='gender'
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input style={{width: '200px'}} />
              </Form.Item>
            </Col>
            <Col className='gutter-row' span={6}>
              <Form.Item
                name='gender'
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input style={{width: '200px'}} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16} className='mt-5'>
            <Col className='gutter-row' span={12}>
              Sanchaypatra Income
            </Col>
            <Col className='gutter-row' span={6}>
              <Form.Item
                name='gender'
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input style={{width: '200px'}} />
              </Form.Item>
            </Col>
            <Col className='gutter-row' span={6}>
              <Form.Item
                name='gender'
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input style={{width: '200px'}} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16} className='mt-5'>
            <Col className='gutter-row' span={12}>
              TDS From Sanchaypatra
            </Col>
            <Col className='gutter-row' span={6}>
              <Form.Item
                name='gender'
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input style={{width: '200px'}} />
              </Form.Item>
            </Col>
            <Col className='gutter-row' span={6}>
              <Form.Item
                name='gender'
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input style={{width: '200px'}} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16} className='mt-5'>
            <Col className='gutter-row' span={12}>
              Others
            </Col>
            <Col className='gutter-row' span={6}>
              <Form.Item
                name='gender'
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input style={{width: '200px'}} />
              </Form.Item>
            </Col>
            <Col className='gutter-row' span={6}>
              <Form.Item
                name='gender'
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input style={{width: '200px'}} />
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
    </div>
  )
}
