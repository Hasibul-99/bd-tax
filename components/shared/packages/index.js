'use client'

import WelcomeMessage from '@/components/shared/WelcomeMessage'
import Premium from '@/components/shared/packages/Premium'
import PremiumPlus from '@/components/shared/packages/PremiumPlus'
import Standard from '@/components/shared/packages/Standard'
import {PACKAGE_LIST} from '@/scripts/api'
import {getData} from '@/scripts/api-service'
import {Button, Col, Row} from 'antd'
import Cookies from 'js-cookie'
import {useEffect, useState} from 'react'
import CardViewPremium from './cardView/Premium'
import CardViewPremiumPlus from './cardView/PremiumPlus'
import CardViewStandard from './cardView/Standard'

export default function Packages({locale, ssrData}) {
  const token = Cookies.get('bdtax_token')
  const [packageList, setPackageList] = useState()
  const [showPackages, setShowPackages] = useState(true)
  const [isShowAllPackages, setIsShowAllPackages] = useState(0)

  const getPackagesList = async () => {
    let res = await getData(PACKAGE_LIST)

    console.log('res?.data', res?.data)

    if (res) {
      setPackageList(res?.data)
      setShowPackages(!res?.data?.current_package_id)
      setIsShowAllPackages(res?.data?.show_more_package)
    } else {
      setPackageList(ssrData)
    }
  }

  useEffect(() => {
    // if (token) {
    getPackagesList()
    // } else {
    setPackageList(ssrData)
    // }
  }, [token])

  return (
    <>
      {packageList ? (
        <>
          <div className='bg-white py-10 px-4 rounded-t-2xl'>
            <WelcomeMessage />
            <div className='text-center bg-slate-100 mt-4 py-5 rounded-[12px] '>
              <h5 className='text-base font-semibold'>
                {packageList.page_tite_tax_year}
              </h5>
              <p>{packageList.page_tite}</p>
            </div>
          </div>

          {packageList.current_package_id ? (
            <>
              <div className='mb-10 bg-white pb-10 rounded-b-2xl'>
                <Row>
                  <Col span={10} offset={8}>
                    {isShowAllPackages ? (
                      <>
                        <Button
                          type='primary'
                          ghost
                          size='large'
                          className='w-full mb-5 view-all-pack font-medium text-sm leading-5 !text-custom-green'
                          onClick={() => setShowPackages((thumb) => !thumb)}
                        >
                          View All Packages
                        </Button>
                      </>
                    ) : (
                      ''
                    )}

                    {packageList.current_package_id_title === 'Premium Plus' ? (
                      <CardViewPremiumPlus
                        locale={locale}
                        packageList={packageList}
                      />
                    ) : packageList.current_package_id_title === 'Premium ' ? (
                      <CardViewPremium
                        locale={locale}
                        packageList={packageList}
                      />
                    ) : packageList.current_package_id_title === 'Standard' ? (
                      <CardViewStandard
                        locale={locale}
                        packageList={packageList}
                      />
                    ) : (
                      ''
                    )}
                  </Col>
                </Row>
              </div>
            </>
          ) : (
            ''
          )}

          {showPackages ? (
            <div
              className={`rounded-[20px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${
                packageList.current_package_id ? '2' : '3'
              } gap-x-5 bg-white pb-10 pt-6 px-4`}
            >
              {packageList.packages?.length ? (
                <>
                  {packageList.packages.map((item) => {
                    return item.title === 'Premium Plus' &&
                      packageList.current_package_id_title !==
                        'Premium Plus' ? (
                      <PremiumPlus locale={locale} pack={item} />
                    ) : item.title === 'Premium ' &&
                      packageList.current_package_id_title !== 'Premium ' ? (
                      <Premium locale={locale} pack={item} />
                    ) : item.title === 'Standard' &&
                      packageList.current_package_id_title !== 'Standard' ? (
                      <Standard locale={locale} pack={item} />
                    ) : (
                      ''
                    )
                  })}
                </>
              ) : (
                ''
              )}
            </div>
          ) : (
            ''
          )}
        </>
      ) : (
        ''
      )}
    </>
  )
}
