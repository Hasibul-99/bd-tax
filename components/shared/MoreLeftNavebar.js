
import { moreNaveData } from '@/scripts/helper';
import { List, Space } from 'antd';
import Cookies from "js-cookie";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';


export default function MoreLeftNavebar({ locale }) {
  const pathname = usePathname()
  const [selected, setSelected] = useState(1);

  console.log("pathname", pathname);

  const handelChange = (name) => {
    if (name === 'Logout') {
      Cookies.remove("bdtax_token");
      Cookies.remove("bdtax_user");
    }
  }

  const isActiveContent = (url) => {
    if (pathname.startsWith(url)) return true;
    else return false;
  }

  return (
    <div className='bg-white px-6 py-3'>
      <List
        className='mt-5'
        size="large"
        dataSource={moreNaveData}
        renderItem={(item) => <List.Item className={isActiveContent(`/${locale}` + item.url) ? 'bg-[#E2ECE5] rounded-md !text-[#126A25]' : '' + item.id == 9 ? ' !bg-[#FFEBEA] rounded-md !text-[#BA040A]' : ''}
          style={{ 'border-block-end': 0 }}>
          <Link href={`/${locale}` + item.url} onClick={() => { handelChange(item.name) }}>
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
