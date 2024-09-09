'use client'

import {LOGIN} from '@/scripts/api'
import {postData} from '@/scripts/api-service'
import {alertPop} from '@/scripts/helper'
import {defaultStore} from '@/store/default'
import {Button, ConfigProvider, Form, Input, Space} from 'antd'
import Cookies from 'js-cookie'
import Link from 'next/link'
import {useState} from 'react'

export default function Login() {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  const updateTaxDue = defaultStore((state) => state.updateTaxDue)

  const onFinish = async (values) => {
    setLoading(true)
    let res = await postData(LOGIN, values, 'no_token')

    if (res) {
      if (res.code === 'error') {
        form.setFields(res?.errors)
      } else {
        let masterData = res?.data?.data

        Cookies.set('bdtax_token', masterData?.token)
        Cookies.set('bdtax_user', JSON.stringify(masterData))

        if (values?.remember) {
          localStorage.setItem('bdtax_token', masterData?.token)
          localStorage.setItem('bdtax_user', JSON.stringify(masterData))
        }

        updateTaxDue(masterData?.tax_amount || 0)
        alertPop('success', masterData?.message)

        setTimeout(() => {
          if (masterData.first_time) {
            window.location = 'packages'
          } else {
            window.location = 'home'
          }
        }, 1000)
      }

      setLoading(false)
    } else {
      setLoading(false)
    }
  }

  return (
    <div className='w3-col s4 w3-padding'>
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
          className='form-border p-4'
          name='basic1'
          onFinish={onFinish}
          autocomplete='off'
          size='large'
          form={form}
        >
          <h1 className='poppins-bold pt-6'>#1 tax software in Bangladesh</h1>
          <h5 className='w3-center p-4'>Hassle-free tax season starts here</h5>

          <Form.Item
            className='mb-2'
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
            <Input placeholder='Email Address *' autocomplete='false' />
          </Form.Item>

          <Form.Item
            className='mb-4'
            name='password'
            size='large'
            rules={[
              {
                required: true,
                message: 'Please input password!',
              },
            ]}
          >
            <Input.Password
              autocomplete='new-password'
              className='py-3'
              placeholder='Password *'
            />
          </Form.Item>

          <Form.Item>
            <Button
              className='prime-button'
              type='primary'
              htmlType='submit'
              loading={loading}
            >
              <Space>
                <img src='/assets/icons/home-white.svg' alt='sms' width={20} />
                Sign In
              </Space>
            </Button>
          </Form.Item>
        </Form>
      </ConfigProvider>

      <div className='wrapped w3-center'>
        <p className='p-2'>
          By clicking Sign In, you accept the{' '}
          <Link href='#' className='text-[#5cb85c]'>
            Terms of service
          </Link>
        </p>
        <p className='p-2'>
          <span>New to BDTax?</span>{' '}
          <Link href='/signup' className='text-[#5cb85c]'>
            Create Account
          </Link>
        </p>
        <div className='w3-center img-center'>
          <div className='w3-col s5 w3-padding-small w3-center'>
            <img src='assets/images/apple_icon.png' alt height={60} />
          </div>
          <div className='w3-col s5 w3-padding-small w3-center'>
            <img src='assets/images/Frame-(11)_1.png' alt height={60} />
          </div>
        </div>
      </div>
    </div>
  )
}
