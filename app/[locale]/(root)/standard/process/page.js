'use client'

import TaxDue from '@/components/common/TaxDue'
import WelcomeMessage from '@/components/common/WelcomeMessage'
import Doc from '@/components/shared/premium-plus/Doc'
import Payment from '@/components/shared/premium-plus/Payment'
import AssetsForms from '@/components/shared/StandardForm/AssetsForms'
import Congratulations from '@/components/shared/StandardForm/Congratulations'
import ExpenseForms from '@/components/shared/StandardForm/ExpenseForms'
import IncomeForm from '@/components/shared/StandardForm/IncomeForms'
import LiabilitieForms from '@/components/shared/StandardForm/LiabilitieForms'
import PersonalInfo from '@/components/shared/StandardForm/PersonalInfo'
import Prospects from '@/components/shared/StandardForm/Prospects'
import ProspectsSummary from '@/components/shared/StandardForm/ProspectsSummary'
import {
  GET_incomeAssetLiabilySourceList,
  GET_USER_TAX,
  PROCESS_SALARY_DOC,
} from '@/scripts/api'
import {getData, postData} from '@/scripts/api-service'
import {defaultStore} from '@/store/default'
import {ConfigProvider, Steps} from 'antd'
import {useSearchParams} from 'next/navigation'
import {useEffect, useState} from 'react'

const {Step} = Steps

export default function PremiumPlusProcess() {
  const searchParams = useSearchParams()
  const [current, setCurrent] = useState(1)
  const [prosCurrent, setProsCurrent] = useState(1)
  const [loadingPSD, setLoadingPSD] = useState(true)
  const [salaryData, setSalaryData] = useState()
  const [prospectData, setProspectData] = useState()
  const status = searchParams.get('status')
  const updateTaxDue = defaultStore((state) => state.updateTaxDue)

  const onChange = (value) => {
    if (value === 4) {
      setTimeout(() => {
        setCurrent(value)
      }, 500)
    } else {
      setCurrent(value || 1)
    }
  }

  const onProspectChange = (value) => {
    if (value === 0) {
      setCurrent(1)
      setProsCurrent(1)
      return false
    }
    setProsCurrent(value)
  }

  const getPrecessSalaryDoc = async () => {
    let res = await getData(PROCESS_SALARY_DOC)

    if (res) {
      let masterData = res?.data
      setSalaryData(masterData)
    }
  }

  const getIncomeAssetLiabilySourceList = async () => {
    let res = await postData(GET_incomeAssetLiabilySourceList)

    if (res) {
      console.log(res)
      let masterData = res?.data?.data
      setProspectData(masterData)
    }
  }

  const getUserTax = async () => {
    let res = await getData(GET_USER_TAX)

    if (res) {
      updateTaxDue(res?.data?.tax_amount || 0)
    }
  }

  useEffect(() => {
    getIncomeAssetLiabilySourceList()
  }, [])

  useEffect(() => {
    if (current === 3) {
      getPrecessSalaryDoc()
    }
  }, [current])

  useEffect(() => {
    getUserTax()
  }, [prosCurrent, current])

  useEffect(() => {
    if (status) {
      if (status === 'success') {
        setCurrent(6)
      } else {
        setCurrent(5)
      }
    }
  }, [status])

  return (
    <div className='custom-container-under mx-auto px-30 mt-5 pb-16'>
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

        <div className={current === 4 || current === 6 ? 'hidden' : ''}>
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
            >
              <Step title='Home' />
              <Step title='Personal Info' />
              <Step title='Prospects' />
              <Step title='Doc' />
              <Step className='!hidden' title='Prospects Steps' />
              <Step title='Payment' />
              <Step title='Congratulations' />
            </Steps>
          </ConfigProvider>
        </div>

        <div className={current === 4 ? '' : 'hidden'}>
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
              current={prosCurrent}
              onChange={onProspectChange}
              className='site-navigation-steps'
              items={[
                {
                  status: 'home',
                  title: 'Home',
                  icon: '',
                },
                {
                  status: 'income',
                  title: 'Income',
                },
                {
                  status: 'assets',
                  title: 'Assets',
                },
                {
                  status: 'liabilities',
                  title: 'Liabilities',
                },
                {
                  status: 'expenses',
                  title: 'Expenses',
                },
                {
                  status: 'summary',
                  title: 'Summary',
                },
              ]}
            />
          </ConfigProvider>
        </div>
      </div>

      <div className='bg-white mt-6 rounded-[20px]'>
        {current === 1 ? <PersonalInfo setCurrent={setCurrent} /> : ''}
        {current === 2 ? (
          <Prospects setCurrent={setCurrent} prospectData={prospectData} />
        ) : (
          ''
        )}
        {current === 3 ? <Doc setCurrent={setCurrent} nextCurrent={4} /> : ''}
        {current === 5 ? (
          <Payment
            salaryData={salaryData}
            setCurrent={setCurrent}
            context={'standard'}
          />
        ) : (
          ''
        )}
        {current === 6 ? <Congratulations setCurrent={setCurrent} /> : ''}
      </div>

      {prospectData && current === 4 ? (
        <>
          <div className={`bg-white mt-6 rounded-[20px]`}>
            {prosCurrent === 1 ? (
              <IncomeForm
                setProsCurrent={setProsCurrent}
                setCurrent={setCurrent}
                incomeList={prospectData?.income}
              />
            ) : (
              ''
            )}
            {prosCurrent === 2 ? (
              <AssetsForms
                setProsCurrent={setProsCurrent}
                assetsList={prospectData?.assets}
              />
            ) : (
              ''
            )}
            {prosCurrent === 3 ? (
              <LiabilitieForms
                setProsCurrent={setProsCurrent}
                libilityList={prospectData?.libility}
              />
            ) : (
              ''
            )}
            {prosCurrent === 4 ? (
              <ExpenseForms
                setProsCurrent={setProsCurrent}
                expenceList={prospectData?.expence}
              />
            ) : (
              ''
            )}
            {prosCurrent === 5 ? (
              <ProspectsSummary
                setProsCurrent={setProsCurrent}
                setCurrent={setCurrent}
              />
            ) : (
              ''
            )}
          </div>
        </>
      ) : null}
    </div>
  )
}
