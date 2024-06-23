'use client'

import {Button, Col, ConfigProvider, Form, Input, Row} from 'antd'

export default function LifeInsurance() {
  const onFinish = (values) => {
    console.log('Success:', values)
  }

  return (
    <div>
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
          layout='vertical'
          name='basic'
          onFinish={onFinish}
          autoComplete='off'
          size='large'
        >
          <Row gutter={16}>
            <Col className='gutter-row' span={20}>
              <Form.Item
                label='Your projected annual income'
                name='first_name1'
                rules={[
                  {
                    required: true,
                    message: 'Please input First Name!',
                  },
                ]}
              >
                <Input placeholder='' />
              </Form.Item>
            </Col>
            <Col className='gutter-row' span={4}>
              <Form.Item className='text-right'>
                <Button
                  className='prime-button !mt-11'
                  type='primary'
                  htmlType='submit'
                >
                  Calculate
                </Button>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col className='gutter-row' span={24}>
              <Form.Item
                label='Your approximate investment amount'
                name='first_name2'
                rules={
                  [
                    // {
                    //     required: true,
                    //     message: 'Please input First Name!',
                    // },
                  ]
                }
              >
                <Input placeholder='' />
              </Form.Item>
            </Col>

            <Col className='gutter-row' span={24}>
              <Form.Item
                label='Your approximate tax rebate amount'
                name='first_name3'
                rules={
                  [
                    // {
                    //     required: true,
                    //     message: 'Please input First Name!',
                    // },
                  ]
                }
              >
                <Input placeholder='' />
              </Form.Item>
            </Col>
          </Row>
        </Form>

        <div className='text-center'>
          <p>Unlock Exclusive investment Options with our Partners!</p>
          <Button
            className='prime-button w-80 m-auto mt-4'
            type='primary'
            htmlType='submit'
          >
            Explore Investments
          </Button>
        </div>
      </ConfigProvider>
    </div>
  )
}
