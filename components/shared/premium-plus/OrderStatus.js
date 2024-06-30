import {GET_ORDER_STATUS, GET_PAYMENT_STATUS} from '@/scripts/api'
import {getData} from '@/scripts/api-service'
import {RightOutlined} from '@ant-design/icons'
import {Button, Card, Space} from 'antd'
import Link from 'next/link'
import {useEffect, useState} from 'react'

export default function OrderStatus({
  setCurrent,
  showNextButtons = true,
  showNextButton = true,
  showLastStep,
}) {
  const [orderStatus, setOrderStatus] = useState()

  const getOrdereStatus = async () => {
    const res = await getData(GET_ORDER_STATUS)

    if (res) {
      setOrderStatus(res?.data)
    }
  }

  const getPaymentStatus = async () => {
    const res = await getData(GET_PAYMENT_STATUS)

    if (res) {
      // setOrderStatus(res?.data)
    }
  }

  const showIcons = (status, idx) => {
    if (status == '1') {
      return '/assets/icons/order_documents.svg'
    } else {
      if (idx === 0) return '/assets/icons/order_review.svg'
      else if (idx === 1) return '/assets/icons/order_review.svg'
      else if (idx === 2) return '/assets/icons/card-tick.svg'
      else if (idx === 3) return '/assets/icons/document-forward.svg'
      else if (idx === 4) return '/assets/icons/order_approve.svg'
      else if (idx === 5) return '/assets/icons/status-submit.svg'
      else return '/assets/icons/status-submit.svg'
    }

    return ''
  }

  useEffect(() => {
    getOrdereStatus()
    getPaymentStatus()
  }, [])

  return (
    <div className='py-6 px-6'>
      <Card title='Order Info' className='order-info rounded-lg'>
        {showLastStep ? (
          <>
            <div className='border-l-2 border-[#CBD5E1] rounded-l-md px-3 mb-2'>
              <p>
                Thank you for approving and signing the document. We will now
                submit it to your tax circle. You will receive your
                acknowledgment slip via email and courier shortly,
              </p>
            </div>
          </>
        ) : (
          <>
            <div className='border-l-2 border-[#CBD5E1] rounded-l-md px-3 mb-2'>
              <p>
                Thank you for your order{' '}
                <span className='font-semibold'>#45678624</span>.{' '}
              </p>
              <p>Now you can relax as BDTax experts handle your tax return. </p>
            </div>

            <div className='border-l-2 border-[#CBD5E1] rounded-l-md px-3 mb-2'>
              <p>Your assigned consultant will contact you within 24 hours.</p>
            </div>
          </>
        )}
      </Card>

      <div className='bg-white p-5  mt-4 rounded-[20px]'>
        <h5 className='text-base font-semibold mb-6'>Order Status</h5>

        {orderStatus?.length ? (
          <div className='expect'>
            {orderStatus.map((step, idx) => (
              <div
                key={idx}
                className={`expect-card ${
                  step.status == '1' ? '!bg-[#EFFEF2] ' : ''
                }`}
              >
                <div className='content-text'>
                  <span
                    className={`number-card ${
                      step.status == '1' ? '!bg-[#DCF1E0] ' : ''
                    }`}
                  >
                    <span className='number'>{idx + 1}</span>
                  </span>
                  <span
                    className={`${step.status == '1' ? 'text-green-700 ' : ''}`}
                  >
                    {step?.title}
                  </span>
                </div>

                <div className='text-right ml-auto pt-1'>
                  <h5 className='text-sm font-semibold'>
                    <Space>
                      <span className='text-green-700'>{step?.date}</span>
                      <img
                        src={showIcons(step.status, idx)}
                        width={20}
                        alt='Premium Plus'
                      />
                    </Space>
                  </h5>
                </div>
              </div>
            ))}
          </div>
        ) : (
          ''
        )}
      </div>

      {showNextButtons ? (
        <>
          <div className='text-center'>
            <Space>
              {showNextButton ? (
                <Button
                  type='primary'
                  className='prime-button gap-0 w-52 m-auto'
                  onClick={() => {
                    setCurrent(5)
                  }}
                >
                  Next
                  <RightOutlined style={{fontSize: '12px'}} />
                </Button>
              ) : (
                ''
              )}

              <Link href='/more/referral'>
                <Button type='primary' className='refer-friend-button'>
                  <img src='/assets/icons/user-add.svg' alt='useradd' />
                  Refer Friends
                </Button>
              </Link>
            </Space>
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  )
}
