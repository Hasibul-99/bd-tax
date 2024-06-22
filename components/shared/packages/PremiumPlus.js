'use client'

import {TEMP_PACKAGES} from '@/scripts/api'
import {postData} from '@/scripts/api-service'
import {Button} from 'antd'
import {useRouter} from 'next/navigation'

export default function PremiumPlus(props) {
  const {locale, pack} = props
  const router = useRouter()

  const tempUserPackages = async () => {
    let res = await postData(TEMP_PACKAGES, {package_id: pack.id})

    if (res) {
      router.push(`/${locale}/premium-plus`)
    }
  }

  return (
    <>
      {pack ? (
        <div>
          <div className='block rounded-[20px] border bg-transparent text-surface shadow-secondary-1 border-[#D4AF37] relative'>
            <div className='bg-[#FFFDCC] border border-[#D4AF37] rounded-xl absolute px-2 py-1 top-[-18px] start-1/3'>
              Most Popular
            </div>
            <div className='premium-plus-card-landing'>
              <div className='packages-price'>
                <div className='pp-image'>
                  <img
                    src='/assets/images/primium-plus.png'
                    alt='Premium Plus'
                  />
                </div>
                <span className='price-text'>
                  {pack.title} (৳ {pack.price})
                </span>
              </div>
              <div className='pack-details'>{pack.description}</div>

              <Button
                type='primary'
                className='primary-plus-Button'
                size='large'
                onClick={() => tempUserPackages()}
              >
                {/* <Link href={`/${locale}/premium-plus`}>Select</Link> */}
                Select
              </Button>
            </div>
            <div className='p-4'>
              <ul>
                {pack.more.map((item, idx) => (
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
            {/* <div className="border-t-2 border-[#D4AF37] px-6 py-3">
                            <h5 className="mb-2 font-semibold leading-tight text-primary">
                                Orhter Value Added Services
                            </h5>

                            <ul>
                                <li className="pt-1">
                                    <Row gutter={16}>
                                        <Col className="gutter-row p-0" span={3}>
                                            <img src='/assets/icons/Check.svg' alt="Premium Plus" width={25} className='mt-1' />
                                        </Col>
                                        <Col className="gutter-row pt-1" span={21}>
                                            <p>Get 24/7 support from our online BDTax specialists</p>
                                        </Col>
                                    </Row>
                                </li>
                                <li className="pt-1">
                                    <Row gutter={16}>
                                        <Col className="gutter-row p-0" span={3}>
                                            <img src='/assets/icons/Check.svg' alt="Premium Plus" width={25} className='mt-1' />
                                        </Col>
                                        <Col className="gutter-row pt-1" span={21}>
                                            <p>Store your return related documents securely</p>
                                        </Col>
                                    </Row>
                                </li>
                                <li className="pt-1">
                                    <Row gutter={16}>
                                        <Col className="gutter-row p-0" span={3}>
                                            <img src='/assets/icons/Check.svg' alt="Premium Plus" width={25} className='mt-1' />
                                        </Col>
                                        <Col className="gutter-row pt-1" span={21}>
                                            <p>Receive bank-level data encryption and protection</p>
                                        </Col>
                                    </Row>
                                </li>
                            </ul>
                        </div> */}
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  )
}
