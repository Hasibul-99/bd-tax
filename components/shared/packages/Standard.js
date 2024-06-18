import {TEMP_PACKAGES} from '@/scripts/api'
import {postData} from '@/scripts/api-service'
import {Button, Col, Row} from 'antd'
import {useRouter} from 'next/navigation'

export default function Standard(props) {
  const {locale, pack} = props
  const router = useRouter()

  const tempUserPackages = async () => {
    let res = await postData(TEMP_PACKAGES, {package_id: pack.id})

    if (res) {
      router.push(`/${locale}/standard`)
    }
  }

  return (
    <div>
      <div className='block rounded-[20px] border bg-transparent text-surface shadow-secondary-1 border-[#0F172A] relative'>
        {pack ? (
          <>
            <div className='standard-card-landing'>
              <div className='packages-price'>
                <div className='s-image'>
                  <img src='/assets/images/standerd.png' alt='standard' />
                </div>
                <span className='price-text'>
                  {pack.title} (৳{pack.price})
                </span>
              </div>
              <p className='pack-details'>{pack.description}</p>

              <Button
                type='primary'
                className='standard-button'
                size='large'
                onClick={() => tempUserPackages()}
              >
                Select
              </Button>
            </div>
            <div className='p-6'>
              <ul>
                {pack.more.map((item, idx) => (
                  <li className='mb-3' key={idx}>
                    <Row gutter={16}>
                      <Col className='gutter-row p-0' span={3}>
                        <img
                          src='/assets/icons/star_3.svg'
                          alt='Premium Plus'
                          width={25}
                          className='mt-1'
                        />
                      </Col>
                      <Col className='gutter-row pt-1' span={21}>
                        <p className={idx === 0 ? 'font-semibold' : ''}>
                          {item}
                        </p>
                      </Col>
                    </Row>
                  </li>
                ))}
              </ul>
            </div>
            {/* <div className="border-t-2 border-[#0F172A] px-6 py-3">
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
                                        <p className=''>Get 24/7 support from our online BDTax specialists</p>
                                    </Col>
                                </Row>
                            </li>
                            <li className="pt-1">
                                <Row gutter={16}>
                                    <Col className="gutter-row p-0" span={3}>
                                        <img src='/assets/icons/Check.svg' alt="Premium Plus" width={25} className='mt-1' />
                                    </Col>
                                    <Col className="gutter-row pt-1" span={21}>
                                        <p className=''>Store your return related documents securely</p>
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
          </>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}
