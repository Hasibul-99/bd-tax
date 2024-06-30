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

  const detailsHightHandel = () => {
    // Get the div elements by their IDs
    const div1 = document.getElementById('premium-plus-details')
    const div2 = document.getElementById('premium-details')
    const div3 = document.getElementById('standard-details')

    // Get the heights of each div
    const height1 = div1.offsetHeight
    const height2 = div2.offsetHeight
    const height3 = div3.offsetHeight

    // Find the maximum height
    const maxHeight = Math.max(height1, height2, height3)

    // Set the height of all divs to the maximum height
    div1.style.height = `${maxHeight}px`
    div2.style.height = `${maxHeight}px`
    div3.style.height = `${maxHeight}px`
  }

  const getPackagesList = async () => {
    let res = await getData(PACKAGE_LIST)

    if (res) {
      setPackageList(res?.data)
      setShowPackages(!res?.data?.current_package_id)
      setIsShowAllPackages(res?.data?.show_more_package)

      detailsHightHandel()
    } else {
      setPackageList(ssrData)
      detailsHightHandel()
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
          <div className='bg-white pt-6 pb-10 px-4 rounded-t-2xl'>
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
              className={`${
                packageList.current_package_id
                  ? 'rounded-[20px]'
                  : 'rounded-b-[20px]'
              } grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${
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
