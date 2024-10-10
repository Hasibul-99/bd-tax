'use client'

import '@/style/css/w3.css'
import '@/style/css/style.css'
import '@/style/css/other-style.css'

import WelcomeMessage from '@/components/common/WelcomeMessage'
import {SUBMIT_CONTACT} from '@/scripts/api'
import {postData} from '@/scripts/api-service'
import {alertPop} from '@/scripts/helper'
import {Button, Col, ConfigProvider, Form, Input, Row, Select} from 'antd'
import {MailOutlined} from '@ant-design/icons'

const {Option} = Select
const {TextArea} = Input

export default function ContactUs() {
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
    <div className='wrapped  pt-20 pb-20'>
      <div className='section global_h1 container'>
        <div className='custom-container contact-width '>
          <h1 className='font-semibold mb-3 w3-center'>Contact Us</h1>
          <div className='w3-center '>
            <a href='#' className='flex justify-center gap-2 mx-auto'>
              <img src='/assets/icons/sms-2.svg' alt='sms' />{' '}
              support@bdtax.com.bd
            </a>
          </div>
          <p className='w3-center'>
            <a href='#' className='flex justify-center gap-2 mx-auto'>
              <img src='/assets/icons/call-2.svg' alt='sms' /> 01409-991225
            </a>
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
              className='mt-6'
              name='basic'
              form={form}
              onFinish={onFinish}
              autoComplete='off'
              size='large'
            >
              <Form.Item
                name='name'
                rules={[
                  {
                    required: true,
                    message: 'Please input Name!',
                  },
                ]}
              >
                <Input placeholder='Name *' />
              </Form.Item>

              <Form.Item
                name='email'
                rules={[
                  {
                    required: true,
                    message: 'Please input email!',
                  },
                  {
                    pattern:
                      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                    message: 'Please enter a valid email address',
                  },
                ]}
              >
                <Input placeholder='Email Address *' />
              </Form.Item>

              <Form.Item
                label=''
                name='body'
                rules={[
                  {
                    required: true,
                    message: 'Please input Message!',
                  },
                  {
                    max: 500,
                    message:
                      'The message cannot be longer than 500 characters!',
                  },
                ]}
              >
                <TextArea rows={8} placeholder='Message *' />
              </Form.Item>

              <Form.Item className='text-right'>
                <Button
                  className='prime-button ml-auto px-10'
                  type='primary'
                  htmlType='submit'
                >
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </ConfigProvider>
        </div>
      </div>
    </div>
  )
}
