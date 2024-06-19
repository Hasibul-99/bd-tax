'use client'

import {ConfigProvider, Result, Spin} from 'antd'
import {useRouter, useSearchParams} from 'next/navigation'
import {useEffect} from 'react'

export default function validatesslcom() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const status = searchParams.get('status')

  const handelOnload = () => {
    setTimeout(() => {
      router.push(
        `${localStorage.getItem('packageType')}/process?status=${status}`
      )
    }, 5000)
  }

  useEffect(() => {
    handelOnload()
  }, [])

  return (
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
  )
}
