import {Breadcrumb} from 'antd'
import {usePathname} from 'next/navigation'
import WelcomeMessage from './WelcomeMessage'

export default function MoreHeader({locale}) {
  const pathname = usePathname()

  const bcItems = () => {
    let arr = [
      {
        title: 'Home',
      },
      {
        title: 'More',
      },
    ]

    let aspath = pathname.slice(4)

    if (aspath === 'more/profile') {
      arr = [...arr, ...[{title: 'Profile'}]]
    } else if (aspath === 'more/my-payments') {
      arr = [...arr, ...[{title: 'My Payments'}]]
    } else if (aspath === 'more/tax-planning/life-insurance') {
      arr = [...arr, ...[{title: 'Tax Planning'}, {title: 'Life Insurance'}]]
    } else if (aspath === 'more/tax-planning') {
      arr = [...arr, ...[{title: 'Tax Planning'}, {title: 'Savings'}]]
    } else if (aspath === 'more/orderStatus') {
      arr = [...arr, ...[{title: 'Order Status'}]]
    } else if (aspath === 'more/communiaction') {
      arr = [...arr, ...[{title: 'Communiaction'}]]
    } else if (aspath === 'more/settings') {
      arr = [...arr, ...[{title: 'Settings'}]]
    }

    return arr
  }

  return (
    <div className='my-6'>
      <div className='bg-white py-10 px-4 rounded-[20px]'>
        <WelcomeMessage />
        <Breadcrumb
          className='more-breadcome mt-2'
          separator={
            <img src='/assets/icons/right-arrow.svg' className='mt-1.5' />
          }
          items={bcItems()}
        />
      </div>
    </div>
  )
}
