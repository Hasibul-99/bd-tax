'use client'

import TaxYear from '@/components/common/Tax-Year'
import TaxDue from '@/components/common/TaxDue'
import WelcomeMessage from '@/components/common/WelcomeMessage'
import Doc from '@/components/shared/premium-plus/Doc'
import OrderStatus from '@/components/shared/premium-plus/OrderStatus'
import Payment from '@/components/shared/premium-plus/Payment'
import PersonalInfo from '@/components/shared/premium-plus/PersonalInfo'
import Submit from '@/components/shared/premium-plus/Submit'
import {GET_USER_TAX, PROCESS_SALARY_DOC} from '@/scripts/api'
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
  const step = searchParams.get('step')
  const updateTaxDue = defaultStore((state) => state.updateTaxDue)

  const onChange = (value) => {
    setCurrent(value || 1)
  }

  const getPrecessSalaryDoc = async () => {
    let res = await getData(PROCESS_SALARY_DOC)

    if (res) {
      let masterData = res?.data
      setSalaryData(masterData)
    }
  }

  const getUserTax = async () => {
    let res = await getData(GET_USER_TAX)

    if (res) {
      updateTaxDue(res?.data?.tax_amount || 0)
    }
  }

  useEffect(() => {
    if (current === 3) {
      getPrecessSalaryDoc()
    }
    getUserTax()
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

  useEffect(() => {
    if (step) {
      setCurrent(parseInt(step))
    }
  }, [step])

  return (
    <div className='custom-container-under mx-auto px-30 mt-5 pb-16'>
      {/* {
                showPayment && paymentLink ? <>
                    <iframe id="myIframe" src={paymentLink} frameborder="0" allowfullscreen
                    style={{ width: "100%", height: "100vh" }} ></iframe>
                </> : <></>
            } */}
      <div>
        <div className={`bg-white py-5 px-4 rounded-[20px]`}>
          <WelcomeMessage />
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

          <div className='pt-3 px-4'>
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
                  // {
                  //     status: 'submit',
                  //     title: 'Submit',
                  // },
                ]}
              />
            </ConfigProvider>
          </div>
        </div>

        <div className='bg-white mt-6 rounded-[20px]'>
          {current === 1 ? <PersonalInfo setCurrent={setCurrent} /> : ''}
          {current === 2 ? <Doc setCurrent={setCurrent} /> : ''}
          {current === 3 ? (
            <Payment
              salaryData={salaryData}
              setCurrent={setCurrent}
              context={'premium'}
            />
          ) : (
            ''
          )}
          {current === 4 ? <OrderStatus setCurrent={setCurrent} /> : ''}
          {current === 5 ? <Submit /> : ''}
        </div>
      </div>
    </div>
  )
}
