import {standardStore} from '@/store/standard'
import {Button, ConfigProvider} from 'antd'
import {useEffect, useState} from 'react'
import AgriculturalProperty from './AgriculturalProperty'
import AssetOutsideBangladesh from './AssetOutsideBangladesh'
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
        return (
          <DirectorShareholdingAssets
            setActiveTab={setActiveTab}
            setProsCurrent={setProsCurrent}
            nextActiveTab={getNextActiveTab(18)}
            backActiveTab={getBackActivateTab(18)}
          />
        )
      case 19:
        return (
          <NonAgriculturalProperty
            setActiveTab={setActiveTab}
            setProsCurrent={setProsCurrent}
            nextActiveTab={getNextActiveTab(19)}
            backActiveTab={getBackActivateTab(19)}
          />
        )
      case 20:
        return (
          <AgriculturalProperty
            setActiveTab={setActiveTab}
            setProsCurrent={setProsCurrent}
            nextActiveTab={getNextActiveTab(20)}
            backActiveTab={getBackActivateTab(20)}
          />
        )
      case 21:
        return (
          <Investments
            setActiveTab={setActiveTab}
            setProsCurrent={setProsCurrent}
            nextActiveTab={getNextActiveTab(21)}
            backActiveTab={getBackActivateTab(21)}
          />
        )
      case 22:
        return (
          <MotorVehicle
            setActiveTab={setActiveTab}
            setProsCurrent={setProsCurrent}
            nextActiveTab={getNextActiveTab(22)}
            backActiveTab={getBackActivateTab(22)}
          />
        )
      case 23:
        return (
          <Furniture
            setActiveTab={setActiveTab}
            setProsCurrent={setProsCurrent}
            nextActiveTab={getNextActiveTab(23)}
            backActiveTab={getBackActivateTab(23)}
          />
        )
      case 24:
        return (
          <Jewellery
            setActiveTab={setActiveTab}
            setProsCurrent={setProsCurrent}
            nextActiveTab={getNextActiveTab(24)}
            backActiveTab={getBackActivateTab(24)}
          />
        )
      case 25:
        return (
          <ElectronicEquipment
            setActiveTab={setActiveTab}
            setProsCurrent={setProsCurrent}
            nextActiveTab={getNextActiveTab(25)}
            backActiveTab={getBackActivateTab(25)}
          />
        )
      case 26:
        return (
          <CashAssets
            setActiveTab={setActiveTab}
            setProsCurrent={setProsCurrent}
            nextActiveTab={getNextActiveTab(26)}
            backActiveTab={getBackActivateTab(26)}
          />
        )
      case 27:
        return (
          <OtherAssets
            setActiveTab={setActiveTab}
            setProsCurrent={setProsCurrent}
            nextActiveTab={getNextActiveTab(27)}
            backActiveTab={getBackActivateTab(27)}
          />
        )
      case 28:
        return (
          <OtherAssetsReceipt
            setActiveTab={setActiveTab}
            setProsCurrent={setProsCurrent}
            nextActiveTab={getNextActiveTab(28)}
            backActiveTab={getBackActivateTab(28)}
          />
        )
      case 29:
        return (
          <PreviousYearNetWealth
            setActiveTab={setActiveTab}
            setProsCurrent={setProsCurrent}
            nextActiveTab={getNextActiveTab(29)}
            backActiveTab={getBackActivateTab(29)}
          />
        )
      case 53:
        return (
          <AssetOutsideBangladesh
            setActiveTab={setActiveTab}
            setProsCurrent={setProsCurrent}
            nextActiveTab={getNextActiveTab(53)}
            backActiveTab={getBackActivateTab(53)}
          />
        )
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
