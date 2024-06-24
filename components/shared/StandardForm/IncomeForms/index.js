import {standardStore} from '@/store/standard'

export default function IncomeForm({incomeList, setProsCurrent}) {
  const incomeOptions = standardStore((state) => state.incomeOptions)
  console.log('====================================')
  console.log('incomeList', incomeList, incomeOptions)
  console.log('====================================')
  return <div className='py-8 px-6'>Income form</div>
}
