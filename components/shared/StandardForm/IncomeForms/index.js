import {standardStore} from '@/store/standard'
import {Button, ConfigProvider} from 'antd'
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

export default function IncomeForm({incomeList, setProsCurrent}) {
  const incomeOptions = standardStore((state) => state.incomeOptions)
  const [tabItems, setTabItems] = useState([])
  const [activeTab, setActiveTab] = useState()

  console.log('====================================')
  console.log('incomeList', incomeList, incomeOptions)
  console.log('====================================')

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

  const showSelectedForm = () => {
    switch (activeTab) {
      case 1:
        return <SalaryForm />
      case 2:
        return <IncomeFromFinancialAssets />
      case 5:
        return <PropertyForm />
      case 6:
        return <AgricultureForm />
      case 7:
        return <BusinessForm />
      case 8:
        return <ShareOfProfitInFirm />
      case 9:
        return <SpouseChild />
      case 10:
        return <CapitalGains />
      case 11:
        return <OtherSources />
      case 12:
        return <ForeignIncome />
      case 13:
        return <TaxRebate />
      case 14:
        return <TaxDeductedAtSource />
      case 15:
        return <AdvancePaidTax />
      case 16:
        return <AdjustmentOfTaxRefund />
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

      <div className='my-10'>{showSelectedForm()}</div>
    </div>
  )
}