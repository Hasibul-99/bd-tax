import {standardStore} from '@/store/standard'
import {Button, ConfigProvider} from 'antd'
import {useEffect, useState} from 'react'
import Accommodation from './Accommodation'
import ChildrenEducation from './ChildrenEducation'
import DomesticForeignTravel from './DomesticForeignTravel'
import Donation from './Donation'
import Electricity from './Electricity'
import Festival from './Festival'
import Gas from './Gas'
import GiftDonationContribution from './GiftDonationContribution'
import LossDeductionsExpenses from './LossDeductionsExpenses'
import Other from './Other'
import OtherHouseHold from './OtherHouseHold'
import OtherSpecial from './OtherSpecial'
import OtherTransportation from './OtherTransportation'
import PersonalorFood from './PersonalorFood'
import TaxAtSource from './TaxAtSource'
import TaxPaidSurchargeandOther from './TaxPaidSurchargeandOther'
import Telephone from './Telephone'
import Transportation from './Transportation'
import Water from './Water'

export default function ExpenseForms({expenceList}) {
  const expenceOptions = standardStore((state) => state.expenceOptions)
  const [tabItems, setTabItems] = useState([])
  const [activeTab, setActiveTab] = useState()

  console.log({expenceList, expenceOptions})
  const showSelectedForm = () => {
    switch (activeTab) {
      case 30:
        return <PersonalorFood />
      case 31:
        return <Accommodation />
      case 32:
        return <Transportation />
      case 33:
        return <OtherTransportation />
      case 34:
        return <Electricity />
      case 35:
        return <Water />
      case 36:
        return <Gas />
      case 37:
        return <Telephone />
      case 38:
        return <OtherHouseHold />
      case 39:
        return <ChildrenEducation />
      case 40:
        return <DomesticForeignTravel />
      case 41:
        return <Festival />
      case 42:
        return <Donation />
      case 43:
        return <OtherSpecial />
      case 44:
        return <Other />
      case 45:
        return <TaxAtSource />
      case 46:
        return <TaxPaidSurchargeandOther />
      case 47:
        return <LossDeductionsExpenses />
      case 48:
        return <GiftDonationContribution />
      default:
        break
    }
  }

  const accessTabItems = () => {
    if (expenceList?.length && expenceOptions?.length) {
      let arr = []

      expenceList.forEach((item, idx) => {
        if (expenceOptions.includes(item.id)) {
          arr.push({
            key: idx + 1,
            label: item.title,
            id: item.id,
          })
        }
      })

      setActiveTab(expenceOptions[0])
      setTabItems(arr)
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
