'use client'

import {ConfigProvider, Result, Spin} from 'antd'
import {useRouter, useSearchParams} from 'next/navigation'
import {useEffect} from 'react'
import {useState} from 'react'

export default function validatesslcom() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const status = searchParams.get('status')
  const [loading, setLoading] = useState(true)

  const handelOnload = () => {
    setTimeout(() => {
      setLoading(false)
    }, 500)

    setTimeout(() => {
      router.push(
        `${localStorage.getItem('packageType')}/process?status=${status}`
      )
    }, 5000)
  }

  useEffect(() => {
    console.log('validatesslcom')

    handelOnload()
  }, [])

  return (
    <div className='bg-[#F8FAFC] container mx-auto min-h-[80vh] mt-5 pb-16'>
      {loading ? (
        <>
          <div className='text-center h-[400px] flex justify-items-center items-center relative'>
            <div>
              <img
                className='image'
                src='/assets/icons/loading.svg'
                alt='Premium Plus'
              />
            </div>
          </div>
        </>
      ) : (
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
      )}
    </div>
  )
}
