'use client'

import TaxYear from '@/components/common/Tax-Year'
import TaxDue from '@/components/common/TaxDue'
import WelcomeMessage from '@/components/common/WelcomeMessage'
import Doc from '@/components/shared/premium-plus/Doc'
import OrderStatus from '@/components/shared/premium-plus/OrderStatus'
import Payment from '@/components/shared/premium-plus/Payment'
import PersonalInfo from '@/components/shared/premium-plus/PersonalInfo'
import Submit from '@/components/shared/premium-plus/Submit'
import {PROCESS_SALARY_DOC} from '@/scripts/api'
import {getData} from '@/scripts/api-service'
import {defaultStore} from '@/store/default'
import {ConfigProvider, Steps} from 'antd'
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
      updateTaxDue(masterData?.tax_amount || 0)
    }
  }

  const updateTaxDue = defaultStore((state) => state.updateTaxDue)

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
              {/* {salaryData?.tax_amount || 0} */}
            </p>
            <p className='text-xs'>
              Tax Year <TaxYear />{' '}
            </p>
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
        {current === 1 ? (
          <PersonalInfo setCurrent={setCurrent} context='premium_plus' />
        ) : (
          ''
        )}
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
