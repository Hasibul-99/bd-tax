'use client'

import StepOne from '@/components/shared/forget-password/StepOne'
import StepTwo from '@/components/shared/forget-password/StepTwo'
import {ConfigProvider, Space, Typography} from 'antd'
import Link from 'next/link'
import {useState} from 'react'
const {Text} = Typography

export default function ForgetPassword() {
  const [step, setStep] = useState(1)
  const [stepOneRes, setStepOneRes] = useState(null)

  return (
    <div className='flex items-center w-full'>
      <div className='w-full p-6 m-4 md:max-w-sm md:mx-auto text-center'>
        <h1 className='block w-full font-bold mb-2 text-[22px]'>
          Forget Password
        </h1>
        <Text type='secondary' className='!text-[#475569]'>
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
          <div className={step !== 1 ? 'hidden' : ''}>
            <StepOne setStep={setStep} setStepOneRes={setStepOneRes} />
          </div>
          <div className={step !== 2 ? 'hidden' : ''}>
            <StepTwo etStep={setStep} stepOneRes={stepOneRes} />
          </div>
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
            href='signin'
            className='text-emerald-700 hover:text-emerald-700'
          >
            Already have account
          </Link>
        </Space>

        <img
          className='mt-5 m-auto'
          src='/assets/images/Frame.png'
          alt='logo'
        />

        <Space>
          <img src='/assets/icons/sms.svg' alt='sms' width={20} />
          support@bdtax.com.bd
        </Space>
        <br />
        <Space>
          <img src='/assets/icons/call.svg' alt='sms' width={20} />
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
