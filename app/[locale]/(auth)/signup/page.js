'use client'

import {HEAR_ABOUT_US, REGISTRATION} from '@/scripts/api'
import {getData, postData} from '@/scripts/api-service'
import {alertPop} from '@/scripts/helper'
import {defaultStore} from '@/store/default'
import {
  Button,
  ConfigProvider,
  Form,
  Input,
  Select,
  Space,
  Typography,
} from 'antd'
import Cookies from 'js-cookie'
import Link from 'next/link'
import {useRouter, useSearchParams} from 'next/navigation'

import {useEffect, useState} from 'react'
const {Option} = Select
const {Title, Text} = Typography

export default function SignUp() {
  const [form] = Form.useForm()
  const searchParams = useSearchParams()
  const mobile = searchParams.get('mobile')
  const [hearAboutUs, setHearAboutUs] = useState([])
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const updateTaxDue = defaultStore((state) => state.updateTaxDue)

  const onFinish = async (values) => {
    setLoading(true)
    let res = await postData(REGISTRATION, values, 'no_token', 'showError')

    if (res) {
      if (res.code === 'error') {
        form.setFields(res?.errors)
      } else {
        // alertPop('success', res.message)
        // router.push('signin')
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
        }, 5000)
      }
      setLoading(false)
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

  useEffect(() => {
    if (mobile) {
      form.setFieldsValue({mobile: mobile})
    }
  }, [mobile])

  return (
    <div className='flex items-center w-full'>
      <div className='w-full md:p-6 m-4 md:max-w-sm md:mx-auto text-center'>
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
                  pattern: /^\+?\d+$/,
                  message: 'Please enter a valid mobile no',
                },
              ]}
            >
              <Input placeholder='Phone *' disabled={!!mobile} />
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
              <Select
                placeholder='How did you hear about us *'
                suffixIcon={
                  <img src='/assets/icons/select-icon.svg' alt='select-icon' />
                }
              >
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

            <Form.Item name='ref_code'>
              <Input placeholder='Referral Code' />
            </Form.Item>

            <Form.Item>
              <Button
                className='prime-button'
                type='primary'
                htmlType='submit'
                loading={loading}
              >
                Register
              </Button>
            </Form.Item>
          </Form>
        </ConfigProvider>

        <div className='mb-2'>
          Already have account?{' '}
          <Link
            href='signin'
            className=' text-emerald-700 hover:text-emerald-700'
          >
            Log in here
          </Link>
        </div>
        <Space>
          <img src='/assets/icons/sms.svg' alt='sms' width={14} />
          support@bdtax.com.bd
        </Space>
        <br />
        <Space>
          <img src='/assets/icons/call.svg' alt='sms' width={14} />
          01409-991225
        </Space>

        <div className='flex justify-center items-center p-0 gap-8'>
          <img
            className=''
            src='/assets/images/bangladesh_copyright_logo-min 2.png'
            alt='bangladesh'
            width={94}
            height={90}
          />

          <img
            className=''
            src='/assets/icons/start_award_logo-min-removebg-preview 1.svg'
            alt='start'
            width={101}
            height={35}
          />

          <img
            className=''
            src='/assets/images/Champion_final3-min-removebg-preview 1.png'
            alt='Champion'
            width={94}
            height={71}
          />
        </div>
      </div>
    </div>
  )
}
