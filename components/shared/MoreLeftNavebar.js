
import { List, Space } from 'antd';
import Link from 'next/link';
import { useState } from 'react';

const data = [
  {
    id: 1,
    icon: '/assets/icons/profile.svg',
    url: '/profile',
    name: 'Profile'
  },
  {
    id: 2,
    icon: '/assets/icons/my-payment.svg',
    url: '/my-payments',
    name: 'My Payments'
  },
  {
    id: 3,
    icon: '/assets/icons/tax-planning.svg',
    url: '/tax-planning',
    name: 'Tax Planning'
  },
  {
    id: 4,
    icon: '/assets/icons/package.svg',
    url: '/package',
    name: 'Packages'
  }, {
    id: 5,
    icon: '/assets/icons/referral.svg',
    url: '/referral',
    name: 'Referral Program'
  },
  {
    id: 6,
    icon: '/assets/icons/communiaction.svg',
    url: '/communiaction',
    name: 'Communications'
  },
  {
    id: 7,
    icon: '/assets/icons/settings.svg',
    url: '/settings',
    name: 'Settings'
  },
  {
    id: 8,
    icon: '/assets/icons/contact-us.svg',
    url: '/contact-us',
    name: 'Contact Us'
  },
  {
    id: 9,
    icon: '/assets/icons/logout.svg',
    url: '/logout',
    name: 'Logout'
  },
];
export default function MoreLeftNavebar() {
  const [selected, setSelected] = useState(1);

  return (
    <div className='bg-white px-6 py-3'>
      <List
        className='mt-5'
        size="large"
        dataSource={data}
        renderItem={(item) => <List.Item className={selected === item.id ? 'bg-[#E2ECE5] rounded-md !text-[#126A25]' : '' + item.id == 9 ? ' !bg-[#FFEBEA] rounded-md !text-[#BA040A]' : ''}
          style={{ 'border-block-end': 0 }}>
          <Link href={item.url}>
            <Space>
              <img src={item.icon} alt={item.name} />
              {item.name}
            </Space>
          </Link>
        </List.Item>}
      />
    </div>
  )
}
