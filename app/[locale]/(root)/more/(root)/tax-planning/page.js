'use client'

import {GET_INSURANCE, SUBMIT_NEWLEAD} from '@/scripts/api'
import {getData, postData} from '@/scripts/api-service'
import {alertPop} from '@/scripts/helper'
import {ExclamationCircleFilled} from '@ant-design/icons'
import {Button, Modal, Space} from 'antd'
import {useEffect, useState} from 'react'
const {confirm} = Modal

export default function TaxPlanning() {
  const [lifeInsuranceList, setLifeInsuranceList] = useState()

  const getInsurance = async () => {
    let res = await getData(GET_INSURANCE)
    if (res) {
      setLifeInsuranceList(res?.data)
    }
  }

  const handelPurchase = (item) => {
    // window.open(url, '_blank')
    confirm({
      title: item?.confirm_message,
      icon: <ExclamationCircleFilled />,
      async onOk() {
        let res = await postData(SUBMIT_NEWLEAD, {vendor: item?.vendor})
        if (res) {
          // getElectronicEquipments()
          alertPop('success', res?.data?.message)
        }
      },
      onCancel() {
        console.log('Cancel')
      },
    })
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
                <img src={item.logo} alt='Premium Plus' width={60} />
                {item.title}
              </Space>
              <p>{item.description}</p>

              <div className='tax-planning-card mt-6 py-5 px-4 mx-auto grid grid-cols-1 md:grid-cols-2 rounded-md'>
                <p className='font-medium text-[14px] leading-[20px] text-slate-900'>
                  {item.short_desc}
                </p>
                <Button
                  type='primary'
                  className='prime-button rounded-lg py-[18px] px-8 w-auto ml-auto'
                  onClick={() => {
                    handelPurchase(item)
                  }}
                >
                  {item?.button_title}
                </Button>
              </div>

              <div className='text-center mt-6'>
                <Space>
                  <p>Powered By</p>
                  <img src={item.logo} alt='sms' width={70} height={31} />
                </Space>
              </div>
            </div>
          ))}
        </>
      ) : null}
    </>
  )
}
