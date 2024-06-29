import {standardStore} from '@/store/standard'
import {Button, ConfigProvider} from 'antd'
import {useEffect, useState} from 'react'
import BankLoans from './BankLoans'
import Mortgages from './Mortgages'
import OtherLiabilities from './OtherLiabilities'
import UnsecuredLoans from './UnsecuredLoans'

export default function LiabilitieForms({
  libilityList,
  setProsCurrent,
  setCurrent,
}) {
  const libilityOptions = standardStore((state) => state.libilityOptions)
  const [tabItems, setTabItems] = useState([])
  const [activeTab, setActiveTab] = useState()

  console.log('====================================')
  console.log({libilityList, libilityOptions})
  console.log('====================================')

  const getNextActiveTab = (val) => {
    let idx = libilityOptions.findIndex((i) => i === val)
    return libilityOptions[idx + 1] || null
  }

  const getBackActivateTab = (val) => {
    let idx = libilityOptions.findIndex((i) => i === val)
    return libilityOptions[idx - 1] || null
  }

  const showSelectedForm = () => {
    switch (activeTab) {
      case 49:
        return (
          <Mortgages
            setActiveTab={setActiveTab}
            setProsCurrent={setProsCurrent}
            nextActiveTab={getNextActiveTab(49)}
            backActiveTab={getBackActivateTab(49)}
          />
        )
      case 50:
        return (
          <UnsecuredLoans
            setActiveTab={setActiveTab}
            setProsCurrent={setProsCurrent}
            nextActiveTab={getNextActiveTab(50)}
            backActiveTab={getBackActivateTab(50)}
          />
        )
      case 51:
        return (
          <BankLoans
            setActiveTab={setActiveTab}
            setProsCurrent={setProsCurrent}
            nextActiveTab={getNextActiveTab(51)}
            backActiveTab={getBackActivateTab(51)}
          />
        )
      case 52:
        return (
          <OtherLiabilities
            setActiveTab={setActiveTab}
            setProsCurrent={setProsCurrent}
            nextActiveTab={getNextActiveTab(52)}
            backActiveTab={getBackActivateTab(52)}
          />
        )
      default:
        break
    }
  }

  const accessTabItems = () => {
    if (libilityList?.length && libilityOptions?.length) {
      let arr = []

      libilityList.forEach((item, idx) => {
        if (libilityOptions.includes(item.id)) {
          arr.push({
            key: idx + 1,
            label: item.title,
            id: item.id,
          })
        }
      })

      setActiveTab(libilityOptions[0])
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
