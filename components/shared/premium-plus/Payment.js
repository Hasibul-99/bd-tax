import {GET_PAYMENT_METHOD} from '@/scripts/api'
import {getData} from '@/scripts/api-service'
import {Button, Card, Space} from 'antd'
import {useEffect, useState} from 'react'

// https://sandbox.sslcommerz.com/EasyCheckOut/testcdedbb9361db7eb1cae0445373d49a881ca
const sslgatewayLink = ''

export default function Payment({salaryData, setCurrent, context}) {
  const [paymentData, setPaymentData] = useState()

  const getPaymentData = async () => {
    let res = await getData(GET_PAYMENT_METHOD + '?request_from=web')

    if (res) {
      let masterData = res?.data
      setPaymentData(masterData)
    }
  }

  const makePayment = (url) => {
    window.location = paymentData?.sslgatewayLink
  }

  useEffect(() => {
    getPaymentData()
    localStorage.setItem('packageType', context)
  }, [])

  return (
    <div className='py-10 px-20'>
      <h3 className='text-xl font-semibold'>
        WE have auto calculated your tax
      </h3>
      <Card className='mt-4 border-0 border-l-4 bg-[#EFFEF2] border-emerald-600'>
        <p>Estimated Tax Due</p>
        <p>
          <span className='text-lime-600'>৳ </span>{' '}
          {salaryData?.tax_amount || 0}
        </p>
      </Card>
      <Space className='text-[#F97316] my-6'>
        <img src='/assets/icons/warning.svg' alt='warning' />
        This amount is not final and only for informational purposes only.
      </Space>

      <p>
        Please make payment to submit your order and our expert tax consultants
        will prepare and submit your return with 100% guaranteed accuracy.
      </p>

      <div className='my-2 pt-3 pb-1 px-4 mx-auto grid grid-cols-1 md:grid-cols-2 rounded-2xl'>
        <div className='flex flex-row items-start p-0 gap-[14.26px]'>
          <a href={paymentData?.sslgatewayLink}>
            <img src='/assets/images/visa.png' alt='warning' />
          </a>
          <a href={paymentData?.sslgatewayLink}>
            <img src='/assets/images/master.png' alt='warning' />
          </a>
          <a href={paymentData?.sslgatewayLink}>
            <img src='/assets/images/discover.png' alt='warning' />
          </a>
          <a href={paymentData?.sslgatewayLink}>
            <img src='/assets/images/amex.png' alt='warning' />
          </a>
          <a href={paymentData?.bkashURL}>
            <img src='/assets/images/bkash.png' alt='warning' />
          </a>
        </div>

        <div className='md:text-right md:ml-auto'>
          <Button
            disabled={!paymentData?.sslgatewayLink}
            type='primary'
            className='prime-button w-52 m-auto'
            size='large'
            onClick={() => makePayment()}
          >
            <Space>
              <img src='/assets/icons/lock.svg' alt='Premium-Plus' /> Make
              Payment
            </Space>
          </Button>
        </div>
      </div>
    </div>
  )
}
