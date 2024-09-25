'use client'

import {Button, Space} from 'antd'
import Link from 'next/link'
import {useRouter} from 'next/navigation'
import {useState} from 'react'

export default function CardViewPremiumPlus(props) {
  const {locale, packageList} = props
  const router = useRouter()
  const [showDetails, setShowDetails] = useState(false)

  return (
    <>
      {packageList ? (
        <div>
          <div className='block rounded-[20px] border text-surface shadow-secondary-1 border-[#D4AF37] relative overflow-hidden'>
            <div
              className={`bg-[#FFFDCC] px-6 py-3 rounded-t-[25px]  ${
                showDetails
                  ? ' border-b-2 border-[#D4AF37]'
                  : 'rounded-b-[25px]'
              } `}
            >
              <div className='packages-price'>
                <div className='pp-image'>
                  <img
                    src='/assets/images/primium-plus.png'
                    alt='Premium Plus'
                  />
                </div>
                <span className='font-semibold text-base leading-6 text-center text-slate-900'>
                  {packageList.current_package_id_title} (৳
                  {packageList.current_package_id_price})
                </span>
              </div>
              <div className='pack-details mt-4 mb-4'>
                {packageList.current_package_id_moredescription}
              </div>

              <Button
                type='primary'
                className='w-72 primary-plus-Button'
                size='large'
              >
                <Link href={`/${locale}/premium-plus`}>Let's Continue</Link>
              </Button>
              <div className='text-center mt-5'>
                <Button
                  type='text'
                  onClick={() => setShowDetails((thumb) => !thumb)}
                >
                  <Space>
                    <span>Learn more </span>
                    <img
                      className={showDetails ? 'rotate-180' : ''}
                      src='/assets/icons/arrow-down.svg'
                      alt='Premium Plus'
                      width={15}
                    />
                  </Space>
                </Button>
              </div>
            </div>

            {showDetails ? (
              <>
                <div className='p-6'>
                  <ul>
                    {packageList.current_package_more.map((item, idx) => (
                      <li key={idx} className='package-details'>
                        <div className='pp-details'>
                          <img
                            src='/assets/icons/star.svg'
                            alt='Premium Plus'
                            width={16}
                            className='mt-1'
                          />
                          <div
                            className={
                              idx === 0 ? 'font-semibold mt-0.5' : 'mt-0.5'
                            }
                          >
                            {item}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              ''
            )}
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  )
}
