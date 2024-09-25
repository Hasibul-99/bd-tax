'use client'

import {GET_ORDER_STATUS, GET_VALIDATE_PUBALI} from '@/scripts/api'
import {getData, postData} from '@/scripts/api-service'
import {ConfigProvider, Result, Spin} from 'antd'
import {useRouter, useSearchParams} from 'next/navigation'
import {useEffect, useState} from 'react'

export default function page() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const reqref = searchParams.get('reqref')
  const regref = searchParams.get('regref')
  const [packageType, setPackageType] = useState()

  const validatePubaliPayment = async () => {
    const res = await postData(GET_VALIDATE_PUBALI, {reqref, regref})
    // if (res) {
    setTimeout(() => {
      let masterData = res?.data?.data
      router.push(
        `${packageType || localStorage.getItem('packageType')}/process?status=${
          masterData.status === 1 ? 'success' : 'fail'
        }`
      )
    }, 9000)
    // }
  }

  useEffect(() => {
    validatePubaliPayment()

    setPackageType(localStorage.getItem('packageType'))
  }, [])
  return (
    <div className='bg-white container mx-auto min-h-[80vh] mt-5 pb-16'>
      <div>
        <>
          <Result
            icon={
              <img
                src='/assets/images/pubali-bank.png'
                alt='success'
                className='w-60 mx-auto'
              />
            }
            title='Verifying Payment Status'
            subTitle="Please wait while we verify your payment. This won't take long."
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
      </div>
    </div>
  )
}

//  PI User ID: m12578449
//  PI User Pass: Dhaka1234
// OTP:
//  123456
