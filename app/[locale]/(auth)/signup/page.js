'use client'

import {HEAR_ABOUT_US, REGISTRATION} from '@/scripts/api'
import {getData, postData} from '@/scripts/api-service'
import {alertPop} from '@/scripts/helper'
import {
  Button,
  ConfigProvider,
  Form,
  Input,
  Select,
  Space,
  Typography,
} from 'antd'
import Link from 'next/link'
import {useRouter} from 'next/navigation'
import {useEffect, useState} from 'react'
const {Option} = Select
const {Title, Text} = Typography

export default function SignUp() {
  const [form] = Form.useForm()
  const [hearAboutUs, setHearAboutUs] = useState([])
  const router = useRouter()

  const onFinish = async (values) => {
    let res = await postData(REGISTRATION, values, 'no_token', 'showError')

    if (res) {
      if (res.code === 'error') {
        form.setFields(res?.errors)
      } else {
        alertPop('success', res.message)
        router.push('signin')
      }
    }
  }

  const getHearAboutUs = async () => {
    let res = await getData(HEAR_ABOUT_US, 'no_token')
    if (res) {
      let masterData = res?.data
      setHearAboutUs(masterData)
    }
  }

  useEffect(() => {
    getHearAboutUs()
  }, [])

  return (
    <div className='flex items-center w-full'>
      <div className='w-full p-6 m-4 md:max-w-sm md:mx-auto text-center'>
        <h1 className='block w-full font-bold mb-2 text-[22px]'>
          Registration
        </h1>
        <Title level={5} className='!mb-0'>
          #1 Tax Software in Bangladesh
        </Title>
        <Text type='secondary' className='!text-[#475569] text-[13px]'>
          Let’s Create your BDTax account
        </Text>

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
            className='mt-6 text-left'
            name='basic'
            form={form}
            onFinish={onFinish}
            autoComplete='off'
            size='large'
          >
            <Form.Item
              name='first_name'
              rules={[
                {
                  required: true,
                  message: 'Please input first name!',
                },
              ]}
            >
              <Input placeholder='First Name *' />
            </Form.Item>

            <Form.Item
              name='last_name'
              rules={[
                {
                  required: true,
                  message: 'Please input last name!',
                },
              ]}
            >
              <Input placeholder='Last Name *' />
            </Form.Item>

            <Form.Item
              name='etin'
              rules={[
                {
                  required: true,
                  message: 'Please input ETIN!',
                },
                {
                  required: true,
                  message: 'A value must be entered',
                  pattern: new RegExp(/^[0-9]+$/),
                },
              ]}
            >
              <Input placeholder='ETIN *' />
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
              <Input placeholder='Email *' />
            </Form.Item>

            <Form.Item
              name='mobile'
              rules={[
                {
                  required: true,
                  message: 'Please input mobile!',
                },
                {
                  pattern: /^(?:\+?88)?01[15-9]\d{8}$/,
                  message: 'Please enter a valid mobile no',
                },
              ]}
            >
              <Input placeholder='Phone *' />
            </Form.Item>

            <Form.Item
              name='password'
              rules={[
                {
                  required: true,
                  message: 'Please input password!',
                },
              ]}
            >
              <Input.Password placeholder='Password *' />
            </Form.Item>

            <Form.Item
              name='c_password'
              rules={[
                {
                  required: true,
                  message: 'Please input confirm password!',
                },
              ]}
            >
              <Input.Password placeholder='Confirm Password *' />
            </Form.Item>

            <Form.Item
              className='text-left'
              name='hearaboutus'
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Select placeholder='How did you hear about us'>
                {hearAboutUs.length ? (
                  <>
                    {hearAboutUs.map((item, idx) => (
                      <Option value={item} key={idx}>
                        {item}
                      </Option>
                    ))}
                  </>
                ) : (
                  ''
                )}
              </Select>
            </Form.Item>

            <Form.Item>
              <Button
                className='w-full btn-hover color-5 !m-0 !h-11 !rounded-xl'
                type='primary'
                htmlType='submit'
              >
                Register
              </Button>
            </Form.Item>
          </Form>
        </ConfigProvider>

        <Link href='signin' className='text-emerald-700 hover:text-emerald-700'>
          Already have account
        </Link>
        <br />
        <Space>
          <img src='/assets/icons/sms.svg' alt='sms' width={20} />
          support@bdtax.com.bd
        </Space>
        <br />
        <Space>
          <img src='/assets/icons/call.svg' alt='sms' width={20} />
          01409-991225
        </Space>

        <div className='flex justify-center items-center p-0 gap-8'>
          <img
            className=''
            src='/assets/icons/bangladesh_copyright_logo-min 2.svg'
            alt='bangladesh'
          />

          <img
            className=''
            src='/assets/icons/start_award_logo-min-removebg-preview 1.svg'
            alt='start'
          />

          <img
            className=''
            src='/assets/icons/Champion_final3-min-removebg-preview 1.svg'
            alt='Champion'
          />
        </div>
      </div>
    </div>
  )
}
