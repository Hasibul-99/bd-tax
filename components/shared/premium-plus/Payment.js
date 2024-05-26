import React, { useEffect, useState } from 'react'
import { Space, Card, Button, ConfigProvider } from 'antd';
import { getData } from '@/scripts/api-service';
import { GET_PAYMENT_METHOD } from '@/scripts/api';

export default function Payment({salaryData, setCurrent}) {
  const [paymentData, setPaymentData] = useState()

  const getPaymentData = async() => {
    let res = await getData(GET_PAYMENT_METHOD);

    if (res) {
      let masterData = res?.data;
      console.log("master", masterData);
      setPaymentData(masterData)
    }
  }

  const makePayment = () => {
    window.location = paymentData?.sslgatewayLink;
  }

  useEffect(() => {
    getPaymentData()
  }, [])

  return (
    <div className='py-10 px-20'>
      <h3 className='text-xl font-semibold'>WE have auto calculated your tax</h3>
      <Card className='mt-4 border-0 border-l-4 bg-[#EFFEF2] border-emerald-600'>
        <p>Estimated Tax Due</p>
        <p><span className='text-lime-600'>৳</span> {salaryData?.tax_amount || 0}</p>
      </Card>
      <Space className='text-[#F97316] my-6'>
        <img src='/assets/icons/warning.svg' alt="warning" />
        This amount is not final and only for informational purposes only.
      </Space>

      <p>Please make payment to submit your order and our expert tax consultants will prepare and submit your return with 100% guaranteed accuracy.</p>

      <div className='my-2 pt-3 pb-1 px-4 mx-auto grid grid-cols-1 md:grid-cols-2 rounded-2xl'>
        <div className='flex'>
          <a href={paymentData?.sslgatewayLink}><img src='/assets/images/visa.png' alt="warning" /></a>
          <a href={paymentData?.sslgatewayLink}><img src='/assets/images/master.png' alt="warning" /></a>
          <a href={paymentData?.sslgatewayLink}><img src='/assets/images/discover.png' alt="warning" /></a>
          <a href={paymentData?.sslgatewayLink}><img src='/assets/images/amex.png' alt="warning" /></a>
          <a href={paymentData?.bkashURL}><img src='/assets/images/bkash.png' alt="warning" /></a>
        </div>

        <div className='md:text-right md:ml-auto'>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#126A25",
              },
              components: {
                Button: {
                  colorPrimary: "#126A25",
                },
              },
            }}
          >
            <Button disabled={!paymentData?.sslgatewayLink} type="primary" className='w-full' size='large' onClick={() => makePayment()}>
              <Space>
                <img src='/assets/icons/lock.svg' alt="Premium-Plus" /> Make Payment
              </Space>
            </Button>
          </ConfigProvider>
        </div>
      </div>
    </div>
  )
}
