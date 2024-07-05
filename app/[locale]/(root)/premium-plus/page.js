'use client'

import TaxYear from '@/components/common/Tax-Year'
import WelcomeMessage from '@/components/common/WelcomeMessage'
import GetUserStep from '@/components/shared/get-user-step'
import {GET_USER_STEP} from '@/scripts/api'
import {getData} from '@/scripts/api-service'
import {Space} from 'antd'
import {useEffect, useState} from 'react'

export default function PremiumPlus() {
  const [steps, setSteps] = useState()
  const [addiInfo, setAdiinfo] = useState()

  const getUserStep = async () => {
    let res = await getData(GET_USER_STEP)

    if (res) {
      console.log('res', res)
      let masterData = res?.data
      setSteps(masterData?.steps)
      setAdiinfo(masterData?.addi_info)
    }
  }

  useEffect(() => {
    getUserStep()
  }, [])

  return (
    <div className='custom-container-under mx-auto px-30 mt-5 pb-16'>
      <div className='bg-white py-5 px-4 rounded-[20px]'>
        <WelcomeMessage />
        <div className='bg-gold-20 border border-gold-40 my-2 pt-3 pb-1 px-4 mx-auto grid grid-cols-1 md:grid-cols-2 rounded-2xl'>
          <div>
            <h5 className='text-base font-semibold'>
              <Space>
                <img src='/assets/images/Premium-Plus.png' alt='Premium Plus' />
                Premium Plus
              </Space>
            </h5>
          </div>
          <div className='md:text-right md:ml-auto pt-3'>
            <p className='text-sm font-semibold'>Tax Due: 25,000</p>
            <p className='text-xs'>
              Tax Year <TaxYear />
            </p>
          </div>
        </div>
        <p className='text-sm'>
          Excellent choice with Premium Plus! Trust us for accurate tax prep and
          hassle-free submission
        </p>
      </div>

      <GetUserStep steps={steps} addiInfo={addiInfo} />
    </div>
  )
}
