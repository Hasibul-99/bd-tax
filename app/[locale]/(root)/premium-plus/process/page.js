'use client'

import WelcomeMessage from '@/components/shared/WelcomeMessage'
import Doc from '@/components/shared/premium-plus/Doc'
import OrderStatus from '@/components/shared/premium-plus/OrderStatus'
import Payment from '@/components/shared/premium-plus/Payment'
import PersonalInfo from '@/components/shared/premium-plus/PersonalInfo'
import Submit from '@/components/shared/premium-plus/Submit'
import {PROCESS_SALARY_DOC} from '@/scripts/api'
import {getData} from '@/scripts/api-service'
import {ConfigProvider, Space, Steps} from 'antd'
import {useSearchParams} from 'next/navigation'
import {useEffect, useState} from 'react'

export default function PremiumPlusProcess() {
  const searchParams = useSearchParams()
  const [current, setCurrent] = useState(1)
  const [loadingPSD, setLoadingPSD] = useState(true)
  const [salaryData, setSalaryData] = useState()
  const status = searchParams.get('status')

  const onChange = (value) => {
    setCurrent(value)
  }

  const getPrecessSalaryDoc = async () => {
    let res = await getData(PROCESS_SALARY_DOC)

    if (res) {
      let masterData = res?.data
      setSalaryData(masterData)
    }
  }

  useEffect(() => {
    if (current === 3) {
      getPrecessSalaryDoc()
    }
  }, [current])

  useEffect(() => {
    if (status) {
      if (status === 'success') {
        setCurrent(4)
      } else {
        setCurrent(3)
      }
    }
  }, [status])

  return (
    <div className='custom-container-under mx-auto px-30 mt-5 pb-16'>
      <div className={`bg-white py-5 px-4 rounded-[20px]`}>
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
          <div className='md:text-right md:ml-auto'>
            <p className='text-sm font-semibold'>
              Tax Due: {salaryData?.tax_amount || 0}
            </p>
            <p className='text-xs'>Tax Year 2023 -2024</p>
          </div>
        </div>

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
          <Steps
            type='navigation'
            size='small'
            current={current}
            onChange={onChange}
            className='site-navigation-steps'
            items={[
              {
                status: 'home',
                title: 'Home',
                icon: '',
              },
              {
                status: 'personal-info',
                title: 'Personal Info',
              },
              {
                status: 'doc',
                title: 'Doc',
              },
              {
                status: 'payment',
                title: 'Payment',
              },
              {
                status: 'status',
                title: 'Order Status',
              },
              {
                status: 'submit',
                title: 'Submit',
              },
            ]}
          />
        </ConfigProvider>
      </div>

      <div className='bg-white mt-6 rounded-[20px]'>
        {current === 1 ? <PersonalInfo setCurrent={setCurrent} /> : ''}
        {current === 2 ? <Doc setCurrent={setCurrent} /> : ''}
        {current === 3 ? (
          <Payment
            salaryData={salaryData}
            setCurrent={setCurrent}
            context={'premium-plus'}
          />
        ) : (
          ''
        )}
        {current === 4 ? <OrderStatus setCurrent={setCurrent} /> : ''}
        {current === 5 ? <Submit /> : ''}
      </div>
    </div>
  )
}
