'use client'

import TaxYear from '@/components/common/Tax-Year'
import TaxDue from '@/components/common/TaxDue'
import WelcomeMessage from '@/components/common/WelcomeMessage'
import GetUserStep from '@/components/shared/get-user-step'
import {GET_USER_STEP, GET_USER_TAX, TEMP_PACKAGES} from '@/scripts/api'
import {getData, postData} from '@/scripts/api-service'
import {defaultStore} from '@/store/default'
import {Button, Space} from 'antd'
import Cookies from 'js-cookie'
import {useRouter} from 'next/navigation'
import {useEffect, useState} from 'react'

export default function Premium() {
  const router = useRouter()
  const [steps, setSteps] = useState()
  const [addiInfo, setAdiinfo] = useState()
  const premiumPlusId = Cookies.get('premium_plus_id')
  const updateTaxDue = defaultStore((state) => state.updateTaxDue)
  const [loading, setLoading] = useState(false)

  const getUserStep = async () => {
    let res = await getData(GET_USER_STEP)

    if (res) {
      console.log('res', res)
      let masterData = res?.data
      setSteps(masterData?.steps)
      setAdiinfo(masterData?.addi_info)
    }
  }

  const getUserTax = async () => {
    let res = await getData(GET_USER_TAX)

    if (res) {
      updateTaxDue(res?.data?.tax_amount || 0)
    }
  }

  const handelUpgrade = async () => {
    setLoading(false)
    let res = await postData(
      TEMP_PACKAGES,
      {package_id: premiumPlusId},
      null,
      null,
      true
    )

    if (res) {
      router.push(`premium-plus`)
    }
    setLoading(true)
  }

  useEffect(() => {
    getUserStep()
    getUserTax()
  }, [])

  return (
    <div className='custom-container-under mx-auto px-30 mt-5 pb-16'>
      <div className='bg-white py-5 px-4 rounded-[20px]'>
        <WelcomeMessage />
        {/* bg-[#e6f8e9] my-2 pt-3 pb-1 px-4 mx-auto grid grid-cols-1 md:grid-cols-2 rounded-2xl */}
        <div className='premium-pack-card mt-3'>
          <div className='packages-price'>
            <div className='p-image'>
              <img src='/assets/images/premium.png' alt='Premium' />
            </div>
            <span className='price-text'>Premium</span>
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

        <div className='bg-gold-20 border border-gold-40 my-2 py-3 px-4 mx-auto grid grid-cols-1 md:grid-cols-2 rounded-2xl'>
          <div className='text-base pt-2.5'>
            Upgrade to <span className='font-semibold'>Premium Plus</span> for a
            hassle free tax submission.
          </div>
          <div className='md:text-right md:ml-auto'>
            {/* <Link href='/premium-plus'> */}
            <Button
              type='primary'
              className='w-full pp-upgrade '
              size='large'
              loading={loading}
              onClick={() => {
                handelUpgrade()
              }}
            >
              <Space>
                <img src='/assets/icons/pp.svg' alt='Premium-Plus' /> Upgrade{' '}
              </Space>
            </Button>
            {/* </Link> */}
          </div>
        </div>

        <div className='bg-gold-20 border border-gold-40 my-2 py-3 px-4 mx-auto rounded-2xl text-base font-normal text-gray-900 leading-7'>
          <p>Congratulations on selecting the Premium package!</p>
          <p>
            Trust us for precise tax preparation, ensuring accuracy every step
            of the way.
          </p>
        </div>
      </div>

      <GetUserStep steps={steps} addiInfo={addiInfo} context='premium' />
    </div>
  )
}
