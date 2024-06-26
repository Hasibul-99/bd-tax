'use client'

import WelcomeMessage from '@/components/shared/WelcomeMessage'
import GetUserStep from '@/components/shared/get-user-step'
import {GET_USER_STEP} from '@/scripts/api'
import {getData} from '@/scripts/api-service'
import {Button, Space} from 'antd'
import {useEffect, useState} from 'react'

export default function Standard() {
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
    <div className='container mx-auto px-30 mt-5 pb-16'>
      <div className='bg-white py-5 px-4 rounded-[20px]'>
        <WelcomeMessage />
        <div className='bg-[#dfdfdf] my-2 pt-3 pb-1 px-4 mx-auto grid grid-cols-1 md:grid-cols-2 rounded-2xl'>
          <div>
            <h5 className='text-base font-semibold'>
              <Space>
                <img
                  src='/assets/images/Auto Layout Horizontal (2).png'
                  alt='Premium Plus'
                />
                Standard
              </Space>
            </h5>
          </div>
          <div className='md:text-right md:ml-auto'>
            <p className='text-sm font-semibold pt-6'>Tax Due: 0</p>
          </div>
        </div>

        <div className='bg-gold-20 border border-gold-40 my-2 py-5 px-4 mx-auto grid grid-cols-1 md:grid-cols-2 rounded-2xl'>
          <div className='text-base pt-2.5'>
            Upgrade to <span className='font-semibold'>Premium Plus</span> for a
            hassle free tax submission.
          </div>
          <div className='md:text-right md:ml-auto'>
            <Button type='primary' className='w-full pp-upgrade ' size='large'>
              <Space>
                <img src='/assets/icons/pp.svg' alt='Premium-Plus' /> Upgrade
              </Space>
            </Button>
          </div>
        </div>
        {/* bg-gold-20 border border-gold-40 */}
        <div className=' my-2 py-5 px-4 mx-auto rounded-2xl text-base font-normal text-gray-900 leading-7'>
          <p>Congratulations on selecting the Premium package!</p>
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
