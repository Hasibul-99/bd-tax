import {standardStore} from '@/store/standard'
import {ConfigProvider, Tabs} from 'antd'

const items = [
  {
    key: '1',
    label: 'Tab 1',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '2',
    label: 'Tab 2',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'Tab 3',
    children: 'Content of Tab Pane 3',
  },
]
export default function IncomeForm({incomeList, setProsCurrent}) {
  const incomeOptions = standardStore((state) => state.incomeOptions)
  console.log('====================================')
  console.log('incomeList', incomeList, incomeOptions)
  console.log('====================================')

  const onChange = (key) => {
    console.log(key)
  }

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
        <Tabs defaultActiveKey='1' items={items} onChange={onChange} />
      </ConfigProvider>
    </div>
  )
}
