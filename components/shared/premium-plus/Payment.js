import {CANCEL_COUPON, GET_PAYMENT_METHOD, SAVE_COUPON} from '@/scripts/api'
import {getData, postData} from '@/scripts/api-service'
import {alertPop} from '@/scripts/helper'
import {defaultStore} from '@/store/default'
import {RightOutlined} from '@ant-design/icons'
import {Button, Card, ConfigProvider, Input, Space, Typography} from 'antd'
import {useEffect, useState} from 'react'
const {Text, Link} = Typography
// https://sandbox.sslcommerz.com/EasyCheckOut/testcdedbb9361db7eb1cae0445373d49a881ca
const sslgatewayLink = ''

export default function Payment({salaryData, setCurrent, context}) {
  const [paymentData, setPaymentData] = useState()
  const [couponCode, setCouponCode] = useState()
  const [canCancelCoupon, setCancelCoupon] = useState(false)

  console.log('salaryData', salaryData)

  const getPaymentData = async () => {
    let res = await getData(GET_PAYMENT_METHOD + '?request_from=web')

    if (res) {
      let masterData = res?.data
      // updateTaxDue(masterData?.due_amount || 0)
      setPaymentData(masterData)
      setCouponCode(masterData?.coupon_code)
      setCancelCoupon(masterData?.coupon_code ? true : false)
    }
  }

  const updateTaxDue = defaultStore((state) => state.updateTaxDue)

  const makePayment = (url) => {
    if (typeof window !== 'undefined') {
      window.location = paymentData?.sslgatewayLink
    }
  }

  const handelCouponSave = async () => {
    if (couponCode) {
      let res = await postData(SAVE_COUPON, {code: couponCode})

      if (res) {
        alertPop('success', res?.data?.message)
        getPaymentData()
      }
    } else {
      alertPop('warning', 'No coupon code')
    }
  }

  const handelCouponCancel = async () => {
    let res = await postData(CANCEL_COUPON, {})
    if (res) {
      alertPop('success', res?.data?.message)
      getPaymentData()
    }
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

        {salaryData?.salaray_doc_found === 0 &&
        salaryData?.salaray_doc_message ? (
          <Text strong>{salaryData?.salaray_doc_message}</Text>
        ) : (
          <>
            <p className='font-normal text-sm leading-[18px] text-[#1E293B]'>
              Estimated Tax Due
            </p>
            <p className='flex gap-1'>
              {salaryData?.tax_amount ? (
                <>
                  <img src='/assets/icons/taka.svg' alt='taka' />
                  <span className='font-semibold text-[21px] leading-[30px] text-[#1E293B]'>
                    {salaryData?.tax_amount || 0}
                  </span>
                </>
              ) : salaryData?.tax_amount === 0 &&
                salaryData?.Zero_tax_message ? (
                <>{salaryData?.Zero_tax_message}</>
              ) : null}
            </p>
          </>
        )}
      </Card>

      {paymentData?.due_amount !== 0 ? (
        <>
          <Space className='text-[#F97316] my-6 payment-warning'>
            <img src='/assets/icons/warning.svg' alt='warning' />
            This amount is not final and only for informational purposes only.
          </Space>

          <p>
            Please make payment to submit your order and our expert tax
            consultants will prepare and submit your return with 100% guaranteed
            accuracy.
          </p>
        </>
      ) : null}

      {paymentData?.due_amount == 0 ? (
        <>
          <Button
            type='primary'
            className='prime-button gap-0 !w-52 ml-auto mt-6'
            onClick={() => {
              setCurrent(context === 'standard' ? 6 : 4)
            }}
          >
            Next
            <RightOutlined style={{fontSize: '12px'}} />
          </Button>
        </>
      ) : (
        <>
          <Card className='mt-4 border-0 bg-[#EFFEF2] payment-card'>
            <span className='left-bar'></span>
            <p className='font-normal text-sm leading-[18px] text-[#1E293B]'>
              {paymentData?.payment_amount}
            </p>
            <p>{paymentData?.payment_amount_message}</p>
          </Card>

          <div className='premium-pack-card flex-col md:flex-row mt-3  bg-transparent'>
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
              <div className='packages-price'>
                <Input
                  placeholder='Coupon Code'
                  size='large'
                  onChange={(e) => setCouponCode(e.target.value)}
                  value={couponCode}
                />
                <Text type='success'>{paymentData?.discount_text || null}</Text>
              </div>
              <div className='md:ml-auto'>
                {canCancelCoupon ? (
                  <Button
                    disabled={!couponCode}
                    danger
                    type='primary'
                    size='large'
                    onClick={() => handelCouponCancel()}
                  >
                    Cancel Coupon
                  </Button>
                ) : (
                  <Button
                    disabled={!couponCode}
                    type='primary'
                    size='large'
                    onClick={() => handelCouponSave()}
                  >
                    Save Coupon
                  </Button>
                )}
              </div>
            </ConfigProvider>
          </div>

          <div className='my-2 pt-3 pb-1 px-4 mx-auto grid grid-cols-1 md:grid-cols-2 rounded-2xl'>
            <div>
              <p className='font-normal text-sm leading-[18px] text-[#1E293B]'>
                <Text strong>{paymentData?.payment_amount}</Text>
              </p>
              <p>{paymentData?.payment_amount_message}</p>
            </div>
            <div className='flex flex-row items-start p-0 gap-[14.26px] md:ml-auto'>
              {paymentData?.sslgatewayLink ? (
                <a
                  href={paymentData?.sslgatewayLink}
                  className={!paymentData?.sslgatewayLink ? 'disabled' : ''}
                >
                  <img
                    src='/assets/images/visa.png'
                    alt='warning'
                    width={60}
                    height={40}
                  />
                </a>
              ) : null}

              {paymentData?.sslgatewayLink ? (
                <a
                  href={paymentData?.sslgatewayLink}
                  className={!paymentData?.sslgatewayLink ? 'disabled' : ''}
                >
                  <img
                    src='/assets/images/master.png'
                    alt='warning'
                    width={60}
                    height={40}
                  />
                </a>
              ) : null}

              {paymentData?.sslgatewayLink ? (
                <a
                  href={paymentData?.sslgatewayLink}
                  className={!paymentData?.sslgatewayLink ? 'disabled' : ''}
                >
                  <img
                    src='/assets/images/discover.png'
                    alt='warning'
                    width={60}
                    height={40}
                  />
                </a>
              ) : null}

              {paymentData?.sslgatewayLink ? (
                <a
                  href={paymentData?.sslgatewayLink}
                  className={!paymentData?.sslgatewayLink ? 'disabled' : ''}
                >
                  <img
                    src='/assets/images/amex.png'
                    alt='warning'
                    width={60}
                    height={40}
                  />
                </a>
              ) : null}

              {paymentData?.bkashURL ? (
                <a
                  href={paymentData?.bkashURL}
                  className={!paymentData?.bkashURL ? 'disabled' : ''}
                >
                  <img
                    src='/assets/images/bkash.png'
                    alt='warning'
                    width={60}
                    height={40}
                  />
                </a>
              ) : null}

              {paymentData?.pubaliUrl ? (
                <a
                  href={paymentData?.pubaliUrl}
                  className={
                    !paymentData?.pubaliUrl
                      ? 'disabled'
                      : 'border-2 rounded border-slate-600'
                  }
                >
                  <img
                    src='/assets/images/pubali-bank.png'
                    alt='warning'
                    width={150}
                    height={40}
                  />
                </a>
              ) : null}
            </div>

            {/* <div className='md:text-right md:ml-auto'>
              <Button
                disabled={!paymentData?.sslgatewayLink}
                type='primary'
                className='prime-button !w-52 m-auto'
                onClick={() => makePayment()}
              >
                <Space>
                  <img src='/assets/icons/lock.svg' alt='Premium-Plus' /> Make
                  Payment
                </Space>
              </Button>
            </div> */}
          </div>
        </>
      )}
    </div>
  )
}
