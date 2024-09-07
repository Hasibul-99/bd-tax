'use client'

import {GET_ORDER_STATUS, GET_VALIDATE_BKASH} from '@/scripts/api'
import {getData} from '@/scripts/api-service'
import {ConfigProvider, Result, Spin} from 'antd'
import {useRouter, useSearchParams} from 'next/navigation'
import {useEffect, useState} from 'react'

export default function validatebkash() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const paymentID = searchParams.get('paymentID')
  const status = searchParams.get('status')
  const [packageType, setPackageType] = useState()

  const validatebkashPayment = async () => {
    let res = await getData(
      GET_VALIDATE_BKASH + `?paymentID=${paymentID}&status=${status}`
    )

    // if (res) {
    setTimeout(() => {
      router.push(
        `${
          packageType || localStorage.getItem('packageType')
        }/process?status=${status}`
      )
    }, 5000)
    // }
  }

  const getOrdereStatus = async () => {
    const res = await getData(GET_ORDER_STATUS)

    if (res) {
      console.log(res?.data)
    }
  }

  useEffect(() => {
    validatebkashPayment()
    getOrdereStatus()

    setPackageType(localStorage.getItem('packageType'))
  }, [])

  return (
    <div className='bg-[#F8FAFC] container mx-auto min-h-[80vh] mt-5 pb-16'>
      <div>
        {status === 'success' ? (
          <>
            <Result
              status='success'
              title='Order Successfully Completed!'
              subTitle='Thank you for your purchase. configuration takes few minutes, please wait.'
              extra={[
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
                  <Spin size='large' />
                </ConfigProvider>,
              ]}
            />
          </>
        ) : (
          <>
            <Result
              status='error'
              title='Submission Failed'
              subTitle="We're sorry, but there was a problem processing your order. Please try again later or contact support for assistance."
              extra={
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
                  <Spin size='large' />
                </ConfigProvider>
              }
            />
          </>
        )}
      </div>
    </div>
  )
}
