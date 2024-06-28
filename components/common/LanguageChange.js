'use client'

import {ConfigProvider, Select, Space} from 'antd'
import {usePathname, useRouter} from 'next/navigation'
// import { useRouter } from 'next/router';

export default function LanguageChange() {
  const router = useRouter()
  const pathname = usePathname()

  const selected = () => {
    if (pathname.startsWith('/en/')) {
      return 'en'
    } else return 'bn'
  }

  const languageHandel = (val) => {
    let url = pathname

    // Check if the URL starts with '/en/'
    if (url.startsWith('/en/')) {
      // If it starts with '/en/', replace it with '/bn/'
      url = '/bn' + url.slice(3)
    } else if (url.startsWith('/bn/')) {
      // If it starts with '/bn/', replace it with '/en/'
      url = '/en' + url.slice(3)
    }

    router.push(url)
  }

  return (
    <>
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
        <Select
          defaultValue={selected()}
          className='lang-select'
          suffixIcon={
            <img src='/assets/icons/select-icon.svg' alt='select-icon' />
          }
          style={{
            width: 120,
            borderRadius: 10,
          }}
          onChange={languageHandel}
          options={[
            {
              value: 'en',
              label: (
                <Space>
                  <img
                    src='/assets/images/united-kingdom.png'
                    width={22}
                    height={16}
                  />
                  English
                </Space>
              ),
            },
            {
              value: 'bn',
              label: (
                <Space>
                  <img
                    src='/assets/images/bangladesh.png'
                    width={22}
                    height={16}
                  />
                  বাংলা
                </Space>
              ),
            },
          ]}
        />
      </ConfigProvider>
    </>
  )
}
