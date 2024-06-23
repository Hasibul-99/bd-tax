'use client'

import {GET_INSURANCE} from '@/scripts/api'
import {getData} from '@/scripts/api-service'
import {Button, Space} from 'antd'
import {useEffect, useState} from 'react'

export default function TaxPlanning() {
  const [lifeInsuranceList, setLifeInsuranceList] = useState()

  const getInsurance = async () => {
    let res = await getData(GET_INSURANCE)
    if (res) {
      setLifeInsuranceList(res?.data)
    }
  }

  const handelPurchase = (url) => {
    window.open(url, '_blank')
  }

  useEffect(() => {
    getInsurance()
  }, [])

  return (
    <>
      {lifeInsuranceList?.length ? (
        <>
          {lifeInsuranceList.map((item, idx) => (
            <div key={idx} className='bg-white py-6 px-6 mb-8 rounded-[20px]'>
              <Space>
                <img src={item.logo} alt='Premium Plus' width={36} />
                {item.title}
              </Space>
              <p>{item.description}</p>

              <div className='tax-planning-card mt-6 py-5 px-4 mx-auto grid grid-cols-1 md:grid-cols-2 rounded-md'>
                <p className='font-medium text-[14px] leading-[20px] text-slate-900'>
                  {item.short_desc}
                </p>
                <Button
                  type='primary'
                  className='prime-button rounded-lg py-[18px] w-32 ml-auto'
                  onClick={() => {
                    handelPurchase(item.link)
                  }}
                >
                  Purchase Here
                </Button>
              </div>

              <div className='text-center mt-6'>
                <Space>
                  <p>Powered By</p>
                  <img src={item.logo} alt='sms' width={48} height={31} />
                </Space>
              </div>
            </div>
          ))}
        </>
      ) : null}
    </>
  )
}
