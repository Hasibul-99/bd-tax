import {GET_PAYMENT_METHOD} from '@/scripts/api'
import {getData} from '@/scripts/api-service'
import {defaultStore} from '@/store/default'
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
      updateTaxDue(masterData?.due_amount || 0)
      setPaymentData(masterData)
    }
  }

  const updateTaxDue = defaultStore((state) => state.updateTaxDue)

  const makePayment = (url) => {
    window.location = paymentData?.sslgatewayLink
  }

  useEffect(() => {
    getPaymentData()
    localStorage.setItem('packageType', context)
  }, [])

  return (
    <div className='p-5'>
      <h3 className='text-xl font-semibold'>
        We have auto calculated your tax
      </h3>
      {/* border-l-4 bg-[#EFFEF2] border-emerald-600 */}
      <Card className='mt-4 border-0 bg-[#EFFEF2] payment-card'>
        <span className='left-bar'></span>
        <p className='font-normal text-sm leading-[18px] text-[#1E293B]'>
          Estimated Tax Due
        </p>
        <p className='flex gap-1'>
          <img src='/assets/icons/taka.svg' alt='taka' />
          <span className='font-semibold text-[21px] leading-[30px] text-[#1E293B]'>
            {paymentData?.due_amount || 0}
          </span>
        </p>
      </Card>
      <Space className='text-[#F97316] my-6 payment-warning'>
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
            <img
              src='/assets/images/visa.png'
              alt='warning'
              width={60}
              height={40}
            />
          </a>
          <a href={paymentData?.sslgatewayLink}>
            <img
              src='/assets/images/master.png'
              alt='warning'
              width={60}
              height={40}
            />
          </a>
          <a href={paymentData?.sslgatewayLink}>
            <img
              src='/assets/images/discover.png'
              alt='warning'
              width={60}
              height={40}
            />
          </a>
          <a href={paymentData?.sslgatewayLink}>
            <img
              src='/assets/images/amex.png'
              alt='warning'
              width={60}
              height={40}
            />
          </a>
          <a href={paymentData?.bkashURL}>
            <img
              src='/assets/images/bkash.png'
              alt='warning'
              width={60}
              height={40}
            />
          </a>
        </div>

        <div className='md:text-right md:ml-auto'>
          <Button
            disabled={!paymentData?.sslgatewayLink}
            type='primary'
            className='prime-button w-52 m-auto'
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
