'use client'

import AssetsForms from '@/components/shared/StandardForm/AssetsForms'
import ExpenseForms from '@/components/shared/StandardForm/ExpenseForms'
import IncomeForm from '@/components/shared/StandardForm/IncomeForms'
import LiabilitieForms from '@/components/shared/StandardForm/LiabilitieForms'
import PersonalInfo from '@/components/shared/StandardForm/PersonalInfo'
import Prospects from '@/components/shared/StandardForm/Prospects'
import ProspectsSummary from '@/components/shared/StandardForm/ProspectsSummary'
import WelcomeMessage from '@/components/shared/WelcomeMessage'
import Doc from '@/components/shared/premium-plus/Doc'
import Payment from '@/components/shared/premium-plus/Payment'
import {
  GET_incomeAssetLiabilySourceList,
  PROCESS_SALARY_DOC,
} from '@/scripts/api'
import {getData, postData} from '@/scripts/api-service'
import {Button, ConfigProvider, Space, Steps} from 'antd'
import {useEffect, useState} from 'react'

export default function PremiumPlusProcess() {
  const [current, setCurrent] = useState(4)
  const [prosCurrent, setProsCurrent] = useState(1)
  const [loadingPSD, setLoadingPSD] = useState(true)
  const [salaryData, setSalaryData] = useState()
  const [prospectData, setProspectData] = useState()

  const onChange = (value) => {
    setCurrent(value)
  }

  const onProspectChange = (value) => {
    setProsCurrent(value)
  }

  const getPrecessSalaryDoc = async () => {
    let res = await getData(PROCESS_SALARY_DOC)

    if (res) {
      console.log('da', res)

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

  useEffect(() => {
    getIncomeAssetLiabilySourceList()
  }, [])

  useEffect(() => {
    if (current === 3) {
      getPrecessSalaryDoc()
    }
  }, [current])

  return (
    <div className='custom-container-under mx-auto px-30 mt-5 pb-16'>
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

        <div className={current === 4 ? 'hidden' : ''}>
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
                  status: 'prospects',
                  title: 'Prospects',
                },
                {
                  status: 'doc',
                  title: 'Doc',
                },
                {
                  status: 'payment',
                  title: 'Payment',
                },
              ]}
            />
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
          <Payment salaryData={salaryData} setCurrent={setCurrent} />
        ) : (
          ''
        )}
      </div>

      {prospectData ? (
        <>
          <div
            className={`bg-white mt-6 rounded-[20px] ${
              current === 4 ? '' : 'hidden'
            }`}
          >
            {prosCurrent === 1 ? (
              <IncomeForm
                setProsCurrent={setProsCurrent}
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
