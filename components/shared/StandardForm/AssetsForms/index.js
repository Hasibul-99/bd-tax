import {standardStore} from '@/store/standard'
import {Button, ConfigProvider} from 'antd'
import {useEffect, useState} from 'react'
import AgriculturalProperty from './AgriculturalProperty'
import BusinessCapital from './BusinessCapital'
import CashAssets from './CashAssets'
import DirectorShareholdingAssets from './DirectorShareholdingAssets'
import ElectronicEquipment from './ElectronicEquipment'
import Furniture from './Furniture'
import Investments from './Investments'
import Jewellery from './Jewellery'
import MotorVehicle from './MotorVehicle'
import NonAgriculturalProperty from './NonAgriculturalProperty'
import OtherAssets from './OtherAssets'
import OtherAssetsReceipt from './OtherAssetsReceipt'
import PreviousYearNetWealth from './PreviousYearNetWealth'

export default function AssetsForms({assetsList, setProsCurrent, setCurrent}) {
  const assetsOptions = standardStore((state) => state.assetsOptions)
  const [tabItems, setTabItems] = useState([])
  const [activeTab, setActiveTab] = useState()

  const getNextActiveTab = (val) => {
    let idx = assetsOptions.findIndex((i) => i === val)
    return assetsOptions[idx + 1] || null
  }

  const getBackActivateTab = (val) => {
    let idx = assetsOptions.findIndex((i) => i === val)
    return assetsOptions[idx - 1] || null
  }

  const showSelectedForm = () => {
    switch (activeTab) {
      case 17:
        return (
          <BusinessCapital
            setActiveTab={setActiveTab}
            setProsCurrent={setProsCurrent}
            nextActiveTab={getNextActiveTab(17)}
            backActiveTab={getBackActivateTab(17)}
          />
        )
      case 18:
        return <DirectorShareholdingAssets />
      case 19:
        return <NonAgriculturalProperty />
      case 20:
        return <AgriculturalProperty />
      case 21:
        return <Investments />
      case 22:
        return <MotorVehicle />
      case 23:
        return <Furniture />
      case 24:
        return <Jewellery />
      case 25:
        return <ElectronicEquipment />
      case 26:
        return <CashAssets />
      case 27:
        return <OtherAssets />
      case 28:
        return <OtherAssetsReceipt />
      case 29:
        return <PreviousYearNetWealth />
      default:
        break
    }
  }

  const accessTabItems = () => {
    if (assetsList?.length && assetsOptions?.length) {
      let arr = []

      assetsList.forEach((item, idx) => {
        if (assetsOptions.includes(item.id)) {
          arr.push({
            key: idx + 1,
            label: item.title,
            id: item.id,
          })
        }
      })

      setActiveTab(assetsOptions[0])
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
