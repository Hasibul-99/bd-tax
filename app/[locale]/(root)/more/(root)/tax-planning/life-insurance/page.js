'use client'

import {GET_ANNUAL_INCOME} from '@/scripts/api'
import {postData} from '@/scripts/api-service'
import {Button, Col, ConfigProvider, Form, Input, Row} from 'antd'
import Link from 'next/link'

export default function LifeInsurance() {
  const [form] = Form.useForm()

  const onFinish = async (values) => {
    let res = await postData(GET_ANNUAL_INCOME, {
      annualIncome: values.annualIncome || 0,
    })
    if (res) {
      let masterData = res?.data?.data

      form.setFieldsValue({
        max_investment: masterData?.max_investment,
        max_rebate: masterData?.max_rebate,
      })
    }
  }

  return (
    <div className='bg-white p-10 rounded-2xl'>
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
          form={form}
        >
          <Row gutter={16}>
            <Col className='gutter-row' span={20}>
              <Form.Item
                className='mb-2'
                label='Your projected annual income'
                name='annualIncome'
                rules={[
                  {
                    required: true,
                    message: 'Please input amount!',
                  },
                ]}
              >
                <Input placeholder='Annual Income' />
              </Form.Item>
            </Col>
            <Col className='gutter-row' span={4}>
              <Form.Item className='text-right mb-2'>
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
                className='mb-2'
                label='Your approximate investment amount'
                name='max_investment'
              >
                <Input placeholder='' readOnly />
              </Form.Item>
            </Col>

            <Col className='gutter-row' span={24}>
              <Form.Item
                label='Your approximate tax rebate amount'
                name='max_rebate'
              >
                <Input placeholder='' readOnly />
              </Form.Item>
            </Col>
          </Row>
        </Form>

        <div className='text-center'>
          <p className='font-medium'>
            Unlock Exclusive investment Options with our Partners!
          </p>
          <Link href='/more/tax-planning'>
            <Button className='prime-button w-80 m-auto mt-4' type='primary'>
              Explore Investments
            </Button>
          </Link>
        </div>
      </ConfigProvider>
    </div>
  )
}
