'use client'

import TaxYear from '@/components/common/Tax-Year'
import TaxDue from '@/components/common/TaxDue'
import WelcomeMessage from '@/components/common/WelcomeMessage'
import GetUserStep from '@/components/shared/get-user-step'
import {GET_USER_STEP} from '@/scripts/api'
import {getData} from '@/scripts/api-service'
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
        <div className='premium-pack-header mt-3'>
          <div className='packages-price'>
            <div className='pp-image'>
              <img src='/assets/images/primium-plus.png' alt='Premium' />
            </div>
            <span className='price-text'>Premium Plus</span>
          </div>
          <div className='md:text-right md:ml-auto'>
            <p className='text-sm font-semibold'>
              Tax Due: <TaxDue />
            </p>
            <p className='text-xs'>
              Tax Year <TaxYear />{' '}
            </p>
          </div>
        </div>

        <p className='text-sm mt-3'>
          Excellent choice with Premium Plus! Trust us for accurate tax prep and
          hassle-free submission
        </p>
      </div>

      <GetUserStep steps={steps} addiInfo={addiInfo} />
    </div>
  )
}
