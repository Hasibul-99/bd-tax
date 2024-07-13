'use client'

import {LOGIN} from '@/scripts/api'
import {postData} from '@/scripts/api-service'
import {alertPop} from '@/scripts/helper'
import {defaultStore} from '@/store/default'
import {
  Button,
  Checkbox,
  ConfigProvider,
  Form,
  Input,
  Space,
  Typography,
} from 'antd'
import Cookies from 'js-cookie'
import Link from 'next/link'
import {useRouter} from 'next/navigation'
import {useState} from 'react'
const {Text} = Typography

export default function SignIn() {
  const [form] = Form.useForm()
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const onFinish = async (values) => {
    let res = await postData(LOGIN, values, 'no_token')

    if (res) {
      if (res.code === 'error') {
        form.setFields(res?.errors)
      } else {
        let masterData = res?.data?.data

        setLoading(true)
        Cookies.set('bdtax_token', masterData?.token)
        Cookies.set('bdtax_user', JSON.stringify(masterData))
        updateTaxDue(masterData?.tax_amount || 0)
        alertPop('success', masterData?.message)

        setTimeout(() => {
          if (masterData.first_time) {
            window.location = '/'
          } else {
            window.location = 'home'
          }
        }, 5000)
      }
    }
  }

  const updateTaxDue = defaultStore((state) => state.updateTaxDue)

  if (loading) {
    return (
      <>
        <div className='text-center h-96 flex justify-items-center items-center relative pt-40'>
          <div>
            <img
              className='image'
              src='/assets/icons/loading.svg'
              alt='Premium Plus'
            />
          </div>
          <div className='absolute inset-x-11'>
            <p>Establishing secure connection. </p>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className='flex items-center w-full'>
      <div className='w-full md:p-6 m-4 md:max-w-sm md:mx-auto text-center'>
        <h1 className='block w-full font-bold mb-2 text-[22px]'>Sign In</h1>
        <Text type='secondary' className='!text-[#475569] text-[13px]'>
          Stress-free tax season starts here!
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
            onFinish={onFinish}
            autoComplete='off'
            size='large'
            form={form}
          >
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
              className='mb-1'
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
              className='text-left mb-1'
              name='remember'
              valuePropName='checked'
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button className='prime-button' type='primary' htmlType='submit'>
                <Space>
                  <img
                    src='/assets/icons/home-white.svg'
                    alt='sms'
                    width={20}
                  />
                  Log In
                </Space>
              </Button>
            </Form.Item>
          </Form>
        </ConfigProvider>

        <Space className='mb-3'>
          New to BDTax?
          <Link
            href='signup'
            className='text-emerald-700 hover:text-emerald-700'
          >
            Create Account
          </Link>
        </Space>
        <br />
        <Space>
          <Link
            href='forget-password'
            className='text-emerald-700 hover:text-emerald-700'
          >
            Forgot Password?
          </Link>
        </Space>

        <img
          className='mt-5 mb-4 m-auto'
          src='/assets/images/Frame.png'
          alt='logo'
          width={99}
          height={105}
        />

        <Space>
          <img src='/assets/icons/sms.svg' alt='sms' width={14} />
          support@bdtax.com.bd
        </Space>
        <br />
        <Space>
          <img src='/assets/icons/call.svg' alt='sms' width={14} />
          01409-991225
        </Space>
        <br />
        <Space className='mt-2'>
          Made in
          <img src='/assets/images/bangladesh.png' alt='sms' width={20} />
        </Space>
      </div>
    </div>
  )
}
