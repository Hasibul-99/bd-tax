import {User_Expense} from '@/scripts/api'
import {getData} from '@/scripts/api-service'
import {standardStore} from '@/store/standard'
import {Button, ConfigProvider, Divider} from 'antd'
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

export default function ExpenseForms({
  expenceList,
  setProsCurrent,
  setCurrent,
}) {
  const expenceOptions = standardStore((state) => state.expenceOptions)
  const [tabItems, setTabItems] = useState([])
  const [activeTab, setActiveTab] = useState()
  const [userExpense, setUserExpense] = useState()

  console.log({expenceList, expenceOptions})

  const getNextActiveTab = (val) => {
    let idx = expenceOptions.findIndex((i) => i === val)
    return expenceOptions[idx + 1] || null
  }

  const getBackActivateTab = (val) => {
    let idx = expenceOptions.findIndex((i) => i === val)
    return expenceOptions[idx - 1] || null
  }

  const getExpenseData = async () => {
    let res = await getData(User_Expense)

    if (res) {
      setUserExpense(res.data)
    }
  }

  useEffect(() => {
    getExpenseData()
  }, [])

  const showSelectedForm = () => {
    switch (activeTab) {
      case 30:
        return (
          <PersonalorFood
            setActiveTab={setActiveTab}
            setProsCurrent={setProsCurrent}
            nextActiveTab={getNextActiveTab(30)}
            backActiveTab={getBackActivateTab(30)}
          />
        )
      case 31:
        return (
          <Accommodation
            setActiveTab={setActiveTab}
            setProsCurrent={setProsCurrent}
            nextActiveTab={getNextActiveTab(31)}
            backActiveTab={getBackActivateTab(31)}
            comment={userExpense.AccommodationComment}
            getExpenseData={getExpenseData}
          />
        )
      case 32:
        return (
          <Transportation
            setActiveTab={setActiveTab}
            setProsCurrent={setProsCurrent}
            nextActiveTab={getNextActiveTab(32)}
            backActiveTab={getBackActivateTab(32)}
            comment={userExpense.TransportComment}
            getExpenseData={getExpenseData}
          />
        )
      case 33:
        return (
          <OtherTransportation
            setActiveTab={setActiveTab}
            setProsCurrent={setProsCurrent}
            nextActiveTab={getNextActiveTab(33)}
            backActiveTab={getBackActivateTab(33)}
            comment={userExpense.OtherTransportComment}
            getExpenseData={getExpenseData}
          />
        )
      case 34:
        return (
          <Electricity
            setActiveTab={setActiveTab}
            setProsCurrent={setProsCurrent}
            nextActiveTab={getNextActiveTab(34)}
            backActiveTab={getBackActivateTab(34)}
            comment={userExpense.ElectricityBillComment}
            getExpenseData={getExpenseData}
          />
        )
      case 35:
        return (
          <Water
            setActiveTab={setActiveTab}
            setProsCurrent={setProsCurrent}
            nextActiveTab={getNextActiveTab(35)}
            backActiveTab={getBackActivateTab(35)}
            comment={userExpense.WasaBillComment}
            getExpenseData={getExpenseData}
          />
        )
      case 36:
        return (
          <Gas
            setActiveTab={setActiveTab}
            setProsCurrent={setProsCurrent}
            nextActiveTab={getNextActiveTab(36)}
            backActiveTab={getBackActivateTab(36)}
            comment={userExpense.GasBillComment}
            getExpenseData={getExpenseData}
          />
        )
      case 37:
        return (
          <Telephone
            setActiveTab={setActiveTab}
            setProsCurrent={setProsCurrent}
            nextActiveTab={getNextActiveTab(37)}
            backActiveTab={getBackActivateTab(37)}
            comment={userExpense.TelephoneBillComment}
            getExpenseData={getExpenseData}
          />
        )
      case 38:
        return (
          <OtherHouseHold
            setActiveTab={setActiveTab}
            setProsCurrent={setProsCurrent}
            nextActiveTab={getNextActiveTab(38)}
            backActiveTab={getBackActivateTab(38)}
            comment={userExpense.OtherHouseholdComment}
            getExpenseData={getExpenseData}
          />
        )
      case 39:
        return (
          <ChildrenEducation
            setActiveTab={setActiveTab}
            setProsCurrent={setProsCurrent}
            nextActiveTab={getNextActiveTab(39)}
            backActiveTab={getBackActivateTab(39)}
            comment={userExpense.ChildrenEducationComment}
            getExpenseData={getExpenseData}
          />
        )
      case 40:
        return (
          <DomesticForeignTravel
            setActiveTab={setActiveTab}
            setProsCurrent={setProsCurrent}
            nextActiveTab={getNextActiveTab(40)}
            backActiveTab={getBackActivateTab(40)}
            comment={userExpense.PersonalForeignTravelComment}
            getExpenseData={getExpenseData}
          />
        )
      case 41:
        return (
          <Festival
            setActiveTab={setActiveTab}
            setProsCurrent={setProsCurrent}
            nextActiveTab={getNextActiveTab(41)}
            backActiveTab={getBackActivateTab(41)}
            comment={userExpense.FestivalOtherSpecialComment}
            getExpenseData={getExpenseData}
          />
        )
      case 42:
        return (
          <Donation
            setActiveTab={setActiveTab}
            setProsCurrent={setProsCurrent}
            nextActiveTab={getNextActiveTab(42)}
            backActiveTab={getBackActivateTab(42)}
            comment={userExpense.DonationComment}
            getExpenseData={getExpenseData}
          />
        )
      case 43:
        return (
          <OtherSpecial
            setActiveTab={setActiveTab}
            setProsCurrent={setProsCurrent}
            nextActiveTab={getNextActiveTab(43)}
            backActiveTab={getBackActivateTab(43)}
            comment={userExpense.OtherSpecialComment}
            getExpenseData={getExpenseData}
          />
        )
      case 44:
        return (
          <Other
            setActiveTab={setActiveTab}
            setProsCurrent={setProsCurrent}
            nextActiveTab={getNextActiveTab(44)}
            backActiveTab={getBackActivateTab(44)}
            comment={userExpense.OtherComment}
            getExpenseData={getExpenseData}
          />
        )
      case 45:
        return (
          <TaxAtSource
            setActiveTab={setActiveTab}
            setProsCurrent={setProsCurrent}
            nextActiveTab={getNextActiveTab(45)}
            backActiveTab={getBackActivateTab(45)}
            comment={userExpense.TaxAtSourceComment}
            getExpenseData={getExpenseData}
          />
        )
      case 46:
        return (
          <TaxPaidSurchargeandOther
            setActiveTab={setActiveTab}
            setProsCurrent={setProsCurrent}
            nextActiveTab={getNextActiveTab(46)}
            backActiveTab={getBackActivateTab(46)}
            comment={userExpense.SurchargeOtherComment}
            getExpenseData={getExpenseData}
          />
        )
      case 47:
        return (
          <LossDeductionsExpenses
            setActiveTab={setActiveTab}
            setProsCurrent={setProsCurrent}
            nextActiveTab={getNextActiveTab(47)}
            backActiveTab={getBackActivateTab(47)}
            comment={userExpense.LossDeductionsComment}
            getExpenseData={getExpenseData}
          />
        )
      case 48:
        return (
          <GiftDonationContribution
            setActiveTab={setActiveTab}
            setProsCurrent={setProsCurrent}
            nextActiveTab={getNextActiveTab(48)}
            backActiveTab={getBackActivateTab(48)}
            comment={userExpense.GiftDonationContributionComment}
            getExpenseData={getExpenseData}
          />
        )
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
      <Divider />
      <div className='my-10'>{showSelectedForm()}</div>
    </div>
  )
}
