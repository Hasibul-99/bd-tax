import {standardStore} from '@/store/standard'
import {Button, ConfigProvider, Divider} from 'antd'
import {useEffect, useState} from 'react'
import AdjustmentOfTaxRefund from './AdjustmentOfTaxRefund'
import AdvancePaidTax from './AdvancePaidTax'
import AgricultureForm from './AgricultureForm'
import BusinessForm from './BusinessForm'
import CapitalGains from './CapitalGains'
import ForeignIncome from './ForeignIncome'
import IncomeFromFinancialAssets from './IncomeFromFinancialAssets'
import OtherSources from './OtherSources'
import PropertyForm from './PropertyForm'
import SalaryForm from './SalaryForm'
import ShareOfProfitInFirm from './ShareOfProfitInFirm'
import SpouseChild from './Spouse-Child'
import TaxDeductedAtSource from './TaxDeductedAtSource'
import TaxRebate from './TaxRebate'

export default function IncomeForm({incomeList, setProsCurrent, setCurrent}) {
  const incomeOptions = standardStore((state) => state.incomeOptions)
  const [tabItems, setTabItems] = useState([])
  const [activeTab, setActiveTab] = useState()

  const accessTabItems = () => {
    if (incomeList?.length && incomeOptions?.length) {
      let arr = []

      incomeList.forEach((item, idx) => {
        if (incomeOptions.includes(item.id)) {
          arr.push({
            key: idx + 1,
            label: item.title,
            id: item.id,
          })
        }
      })

      setActiveTab(incomeOptions[0])
      setTabItems(arr)
    }
  }

  const getNextActiveTab = (val) => {
    let idx = incomeOptions.findIndex((i) => i === val)
    return incomeOptions[idx + 1] || null
  }

  const getBackActivateTab = (val) => {
    let idx = incomeOptions.findIndex((i) => i === val)
    return incomeOptions[idx - 1] || null
  }

  const showSelectedForm = () => {
    switch (activeTab) {
      case 1:
        return (
          <SalaryForm
            setCurrent={setCurrent}
            setActiveTab={setActiveTab}
            setProsCurrent={setProsCurrent}
            nextActiveTab={getNextActiveTab(1)}
          />
        )
      case 2:
        return (
          <IncomeFromFinancialAssets
            setActiveTab={setActiveTab}
            setProsCurrent={setProsCurrent}
            nextActiveTab={getNextActiveTab(2)}
          />
        )
      case 5:
        return (
          <PropertyForm
            setActiveTab={setActiveTab}
            setProsCurrent={setProsCurrent}
            nextActiveTab={getNextActiveTab(5)}
          />
        )
      case 6:
        return <AgricultureForm />
      case 7:
        return <BusinessForm />
      case 8:
        return <ShareOfProfitInFirm />
      case 9:
        return <SpouseChild />
      case 10:
        return (
          <CapitalGains
            setActiveTab={setActiveTab}
            setProsCurrent={setProsCurrent}
            nextActiveTab={getNextActiveTab(10)}
            backActiveTab={getBackActivateTab(10)}
          />
        )
      case 11:
        return (
          <OtherSources
            setActiveTab={setActiveTab}
            setProsCurrent={setProsCurrent}
            nextActiveTab={getNextActiveTab(11)}
            backActiveTab={getBackActivateTab(11)}
          />
        )
      case 12:
        return (
          <ForeignIncome
            setActiveTab={setActiveTab}
            setProsCurrent={setProsCurrent}
            nextActiveTab={getNextActiveTab(12)}
            backActiveTab={getBackActivateTab(12)}
          />
        )
      case 13:
        return <TaxRebate />
      case 14:
        return (
          <TaxDeductedAtSource
            setActiveTab={setActiveTab}
            setProsCurrent={setProsCurrent}
            nextActiveTab={getNextActiveTab(14)}
            backActiveTab={getBackActivateTab(14)}
          />
        )
      case 15:
        return (
          <AdvancePaidTax
            setActiveTab={setActiveTab}
            setProsCurrent={setProsCurrent}
            nextActiveTab={getNextActiveTab(15)}
            backActiveTab={getBackActivateTab(15)}
          />
        )
      case 16:
        return (
          <AdjustmentOfTaxRefund
            setActiveTab={setActiveTab}
            setProsCurrent={setProsCurrent}
            nextActiveTab={getNextActiveTab(16)}
            backActiveTab={getBackActivateTab(16)}
          />
        )
      default:
        break
    }
  }

  useEffect(() => {
    accessTabItems()
  }, [])

  return (
    <div className='py-8 px-6'>
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
        {tabItems.map((item) => (
          <Button
            key={item.key}
            className={`m-2 `}
            type={activeTab === item.id ? 'primary' : 'default'}
            onClick={() => setActiveTab(item.id)}
          >
            {item?.label}
          </Button>
        ))}
      </ConfigProvider>
      <Divider className='my-5' />
      <div className='mt-0 mb-10'>{showSelectedForm()}</div>
    </div>
  )
}
