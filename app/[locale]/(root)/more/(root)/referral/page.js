'use client'

import {Get_User_Referral_Program} from '@/scripts/api'
import {postData} from '@/scripts/api-service'
import {Col, ConfigProvider, Input, Row} from 'antd'
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
} from 'next-share'
import {useEffect, useState} from 'react'
export default function referral() {
  const [refData, setRefData] = useState()

  const getReferralData = async () => {
    let res = await postData(Get_User_Referral_Program)

    if (res) {
      setRefData(res?.data?.data[0])
    }
  }

  useEffect(() => {
    getReferralData()
  }, [])
  return (
    <>
      <div className='bg-white py-6 px-6'>
        <div className='referral-banner py-6'>
          <h4>Referral Program</h4>
          <h5>Refer and earn 1000 points</h5>
        </div>
        {refData?.toptitle ? (
          <h3 className='text-center font-bold px-5 pb-5 mt-8'>
            {refData.toptitle}
          </h3>
        ) : null}

        {refData?.url ? (
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
              <Input value={refData.url} readOnly />
            </ConfigProvider>

            <div className='text-center mt-6'>
              <span className='mr-6'>
                <FacebookShareButton
                  url={refData.url}
                  quote={
                    'next-share is a social share buttons for your next React apps.'
                  }
                  title='Share'
                  hashtag={'#nextshare'}
                >
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
              </span>
              <span>
                <EmailShareButton
                  url={refData.url}
                  subject={'Next Share'}
                  body='body'
                >
                  <EmailIcon size={32} round />
                </EmailShareButton>
              </span>
            </div>
          </>
        ) : (
          ''
        )}

        {refData?.yourReferralPoints?.length ? (
          <>
            <div className='font-bold mt-5'>
              <div className='referral-points'>
                <h3
                  className='mb-6'
                  style={{textAlign: 'center', fontWeight: 'bold'}}
                >
                  Your Referral Points
                </h3>
                <hr />
                <Row gutter={16} className='mt-10'>
                  <Col className='gutter-row' xs={24} sm={24} md={12}>
                    <div className='kpi'>
                      <p>
                        Total Earnings in Points:{' '}
                        {refData?.yourReferralPoints[0].TotalEarningsInPoints ||
                          0}
                      </p>
                    </div>
                    <div className='kpi'>
                      <p>
                        Total Earning in Taka :{' '}
                        {refData?.yourReferralPoints[0].TotalEarningInTaka || 0}{' '}
                        BDT{' '}
                      </p>
                    </div>
                  </Col>
                  <Col className='gutter-row' xs={24} sm={24} md={12}>
                    <div className='kpi'>
                      <p>
                        Total consumed in points:{' '}
                        {refData?.yourReferralPoints[0].TotalConsumedInPoints ||
                          0}
                      </p>
                    </div>
                    <div className='kpi'>
                      <p>
                        Total consumed in Taka :{' '}
                        {refData?.yourReferralPoints[0].TotalConsumedInTaka ||
                          0}{' '}
                        BDT
                      </p>
                    </div>
                  </Col>
                </Row>
                <div className='clearfix' />
              </div>
              <div className='clearfix' />
            </div>
          </>
        ) : null}

        {refData?.referralProgramDetails?.length ? (
          <div className='px-10 referral-points referral-program-details'>
            <h3
              className='mb-6'
              style={{textAlign: 'center', fontWeight: 'bold'}}
            >
              Referral Program Details
            </h3>
            <hr />
            <ol className='mt-6'>
              {refData?.referralProgramDetails.map((item, idx) => (
                <li className='flex gap-2 mb-4' key={idx}>
                  <img src='/assets/icons/Check.svg' />
                  <p>{item.rdes}</p>{' '}
                </li>
              ))}
            </ol>
          </div>
        ) : null}
      </div>
    </>
  )
}
