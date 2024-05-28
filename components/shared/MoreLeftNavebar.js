
import { moreNaveData } from '@/scripts/helper';
import { List, Space } from 'antd';
import Link from 'next/link';
import { useState } from 'react';
import Cookies from "js-cookie";


export default function MoreLeftNavebar({locale}) {
  const [selected, setSelected] = useState(1);

  const handelChange = (name) => {
    console.log();
    if (name === 'Logout') {
      Cookies.remove("bdtax_token");
      Cookies.remove("bdtax_user");
    }
  }

  return (
    <div className='bg-white px-6 py-3'>
      <List
        className='mt-5'
        size="large"
        dataSource={moreNaveData}
        renderItem={(item) => <List.Item className={selected === item.id ? 'bg-[#E2ECE5] rounded-md !text-[#126A25]' : '' + item.id == 9 ? ' !bg-[#FFEBEA] rounded-md !text-[#BA040A]' : ''}
          style={{ 'border-block-end': 0 }}>
          <Link href={`/${locale}` + item.url} onClick={() => {handelChange(item.name)}}>
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
