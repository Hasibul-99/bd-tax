'use client'

import TaxDue from '@/components/common/TaxDue'
import WelcomeMessage from '@/components/common/WelcomeMessage'
import GetUserStep from '@/components/shared/get-user-step'
import {GET_USER_STEP, GET_USER_TAX} from '@/scripts/api'
import {getData} from '@/scripts/api-service'
import {defaultStore} from '@/store/default'
import {Button, Space} from 'antd'
import Link from 'next/link'
import {useEffect, useState} from 'react'

export default function Standard() {
  const [steps, setSteps] = useState()
  const [addiInfo, setAdiinfo] = useState()
  const updateTaxDue = defaultStore((state) => state.updateTaxDue)

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

  useEffect(() => {
    getUserStep()
    getUserTax()
  }, [])

  return (
    <div className='container mx-auto px-30 mt-5 pb-16'>
      <div className='bg-white py-5 px-4 rounded-[20px]'>
        <WelcomeMessage />
        <div className='standard-pack-card mt-4'>
          <div className='packages-price'>
            <div className='s-image'>
              <img src='/assets/images/standerd.png' alt='standard' />
            </div>
            <span className='price-text'>Standard</span>
          </div>
          <div className='md:text-right md:ml-auto'>
            <p className='text-sm font-semibold'>
              Tax Due: <TaxDue />
            </p>
          </div>
        </div>

        <div className='bg-gold-20 border border-gold-40 mt-2 py-3 px-4 mx-auto grid grid-cols-1 md:grid-cols-2 rounded-2xl'>
          <div className='text-base pt-2.5'>
            Upgrade to <span className='font-semibold'>Premium Plus</span> for a
            hassle free tax submission.
          </div>
          <div className='md:text-right md:ml-auto'>
            <Link href='/premium-plus'>
              <Button
                type='primary'
                className='w-full pp-upgrade '
                size='large'
              >
                <Space>
                  <img src='/assets/icons/pp.svg' alt='Premium-Plus' /> Upgrade
                </Space>
              </Button>
            </Link>
          </div>
        </div>
        {/* bg-gold-20 border border-gold-40 */}
        <div className='pt-5 px-4 mx-auto rounded-2xl text-base font-normal text-gray-900 leading-7'>
          <p>Congratulations on selecting the Standard package! </p>
          <p>
            Trust us for precise tax preparation, ensuring accuracy every step
            of the way.
          </p>
        </div>
      </div>

      <GetUserStep steps={steps} addiInfo={addiInfo} context='standard' />
    </div>
  )
}
