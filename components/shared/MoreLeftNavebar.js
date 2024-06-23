import {moreNaveData} from '@/scripts/helper'
import {List, Space} from 'antd'
import Cookies from 'js-cookie'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {useState} from 'react'

export default function MoreLeftNavebar({locale}) {
  const pathname = usePathname()
  const [selected, setSelected] = useState(1)

  const handelChange = (name) => {
    if (name === 'Logout') {
      Cookies.remove('bdtax_token')
      Cookies.remove('bdtax_user')
      window.location = '/en/signin'
    }
  }

  const isActiveContent = (url) => {
    if (url === '/en/' || url === '/bn/') return false

    if (pathname.startsWith(url)) return true
    else return false
  }

  return (
    <div className='bg-white px-6 py-3 rounded-xl'>
      <List
        className='mt-5'
        size='large'
        dataSource={moreNaveData}
        renderItem={(item) => (
          <List.Item
            className={
              isActiveContent(`/${locale}` + item.url)
                ? 'flex justify-center items-center p-4 gap-3 bg-[#E2ECE5] rounded-[12px] mb-3'
                : '' + item.id == 9
                ? ' !bg-[#FFEBEA] rounded-md !text-[#BA040A]'
                : 'flex justify-center items-center p-4 gap-3 bg-[#F8FAFC] rounded-[12px] mb-3'
            }
            style={{'border-block-end': 0}}
          >
            <Link
              className={
                item.id == 9 ? 'hover:text-[#BA040A]' : 'hover:text-[#000]'
              }
              href={`/${locale}` + item.url}
              onClick={() => {
                handelChange(item.name)
              }}
            >
              <Space>
                <img src={item.icon} alt={item.name} />
                <span
                  className={`font-semibold text-base leading-[22px] ${
                    isActiveContent(`/${locale}` + item.url)
                      ? 'text-[#126A25] hover:text-[#126A25]'
                      : ''
                  } `}
                >
                  {item.name}
                </span>
              </Space>
            </Link>
          </List.Item>
        )}
      />
    </div>
  )
}
