import {GET_ORDER_STATUS, GET_PAYMENT_STATUS} from '@/scripts/api'
import {getData} from '@/scripts/api-service'
import {Button, Card, Space} from 'antd'
import Link from 'next/link'
import {useEffect, useState} from 'react'

export default function OrderStatus({
  setCurrent,
  showNextButtons = true,
  showNextButton = true,
  showLastStep,
  showOrderInfo = true,
}) {
  const [orderStatus, setOrderStatus] = useState()
  const [paymentStatus, setPaymentStatus] = useState()

  const getOrdereStatus = async () => {
    const res = await getData(GET_ORDER_STATUS)

    if (res) {
      setOrderStatus(res?.data)
    }
  }

  const getPaymentStatus = async () => {
    const res = await getData(GET_PAYMENT_STATUS)

    if (res) {
      setPaymentStatus(res?.data)
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

  const handelReviewSign = (step) => {
    console.log()

    if (step.title === 'Review & Sign' && setCurrent) {
      setCurrent(5)
    }
  }

  useEffect(() => {
    getOrdereStatus()
    getPaymentStatus()
  }, [])

  return (
    <div className='p-5'>
      {showOrderInfo ? (
        <Card
          title={showLastStep ? '' : 'Order Info'}
          className='order-info rounded-lg border-0 p-0'
        >
          {showLastStep ? (
            <>
              <div className='p-2 bg-[#F8FAFC] border-l-2 border-l-[#CBD5E1] rounded-md'>
                <p>
                  Thank you for approving and signing the document. We will now
                  submit it to your tax circle. You will receive your
                  acknowledgment <br /> slip via email and courier shortly,
                </p>
              </div>
            </>
          ) : (
            <>
              {paymentStatus?.order_message_1 ? (
                <div className='p-2 bg-[#F8FAFC] border-l-2 border-l-[#CBD5E1] rounded-md mb-2'>
                  <p>
                    {paymentStatus?.order_message_1}{' '}
                    <span className='font-semibold'>
                      {paymentStatus?.order_message_2}
                    </span>
                    .{' '}
                  </p>
                  {paymentStatus?.order_message_3 ? (
                    <p>{paymentStatus?.order_message_3}</p>
                  ) : null}
                </div>
              ) : null}

              {paymentStatus?.order_message_4 ? (
                <div className='p-2 bg-[#F8FAFC] border-l-2 border-l-[#CBD5E1] rounded-md mb-2'>
                  <p>
                    {paymentStatus?.order_message_4}
                    <span className='font-semibold'>
                      {paymentStatus?.order_message_5}
                    </span>{' '}
                    .
                  </p>
                </div>
              ) : null}
            </>
          )}
        </Card>
      ) : null}

      <div className='bg-white py-5 rounded-[20px]'>
        <h5 className='text-base font-semibold mb-6'>Order Status</h5>

        {orderStatus?.length ? (
          <div className='expect'>
            {orderStatus.map((step, idx) => (
              <div
                onClick={() => {
                  handelReviewSign(step)
                }}
                key={idx}
                className={`expect-card ${
                  step.status == '1' || step?.click_able == '1'
                    ? '!bg-[#EFFEF2] cursor-pointer'
                    : ''
                }`}
              >
                <div className='content-text'>
                  <span
                    className={`number-card ${
                      step.status == '1' || step?.click_able == '1'
                        ? '!bg-[#DCF1E0] '
                        : ''
                    }`}
                  >
                    <span className='number'>{idx + 1}</span>
                  </span>
                  <span
                    className={`${
                      step.status == '1' || step?.click_able == '1'
                        ? 'text-green-700 '
                        : ''
                    }`}
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
              {/* {showNextButton ? (
                <Button
                  type='primary'
                  className='prime-button gap-0 !w-52 m-auto'
                  onClick={() => {
                    setCurrent(5)
                  }}
                >
                  Next
                  <RightOutlined style={{fontSize: '12px'}} />
                </Button>
              ) : (
                ''
              )} */}

              {orderStatus?.show_reffer_friend === 1 ? (
                <Link href='/more/referral'>
                  <Button type='primary' className='refer-friend-button '>
                    <img src='/assets/icons/user-add.svg' alt='useradd' />
                    <span className='font-medium'>Refer Friends</span>
                  </Button>
                </Link>
              ) : null}
            </Space>
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  )
}
