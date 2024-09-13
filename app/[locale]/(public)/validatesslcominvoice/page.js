'use client'

import {Button, Result} from 'antd'
import Link from 'next/link'
import {useSearchParams} from 'next/navigation'
import {useEffect, useState} from 'react'

export default function Validatesslcominvoice() {
  const searchParams = useSearchParams()
  const status = searchParams.get('status')
  const [loading, setLoading] = useState(true)

  const handelOnload = () => {
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }

  useEffect(() => {
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
                  <Link href={'/packages'}>
                    <Button
                      className='prime-button w-52 !mx-auto'
                      type='primary'
                      key='console'
                    >
                      Go Console
                    </Button>
                  </Link>,
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
                  <Link href={'/packages'}>
                    <Button
                      className='prime-button w-52 !mx-auto'
                      type='primary'
                      key='console'
                    >
                      Go Console
                    </Button>
                  </Link>
                }
              />
            </>
          )}
        </div>
      )}
    </div>
  )
}
