'use client'

import WelcomeMessage from '@/components/shared/WelcomeMessage'
import GetUserStep from '@/components/shared/get-user-step'
import {GET_USER_STEP} from '@/scripts/api'
import {getData} from '@/scripts/api-service'
import {Button, ConfigProvider, Space} from 'antd'
import {useEffect, useState} from 'react'

export default function Premium() {
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
        <div className='bg-[#e6f8e9] my-2 pt-3 pb-1 px-4 mx-auto grid grid-cols-1 md:grid-cols-2 rounded-2xl'>
          <div>
            <h5 className='text-base font-semibold'>
              <Space>
                <img
                  src='/assets/images/Auto Layout Horizontal (1).png'
                  alt='Premium Plus'
                />
                Premium
              </Space>
            </h5>
          </div>
          <div className='md:text-right md:ml-auto pt-3'>
            <p className='text-sm font-semibold'>Tax Due: 0</p>
            <p className='text-xs'>Tax Year 2023 -2024</p>
          </div>
        </div>

        <div className='bg-amber-100 my-2 py-5 px-4 mx-auto grid grid-cols-1 md:grid-cols-2 rounded-2xl'>
          <div className='text-base '>
            Upgrade to <span className='font-semibold'>Premium Plus</span> for a
            hassle free tax submission.
          </div>
          <div className='md:text-right md:ml-auto'>
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: '#D4AF37',
                },
                components: {
                  Button: {
                    colorPrimary: '#D4AF37',
                  },
                },
              }}
            >
              <Button
                type='primary'
                className='w-full text-slate-950 hover:text-slate-950'
                size='large'
              >
                <Space>
                  <img src='/assets/icons/pp.svg' alt='Premium-Plus' /> Upgrade
                </Space>
              </Button>
            </ConfigProvider>
          </div>
        </div>

        <div className='bg-amber-100 my-2 py-5 px-4 mx-auto rounded-2xl'>
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
