import {TEMP_PACKAGES} from '@/scripts/api'
import {postData} from '@/scripts/api-service'
import {Button, Col, Row, Space} from 'antd'
import {useRouter} from 'next/navigation'

export default function Premium(props) {
  const {locale, pack} = props
  const router = useRouter()

  const tempUserPackages = async () => {
    let res = await postData(TEMP_PACKAGES, {package_id: pack.id})

    if (res) {
      router.push(`/${locale}/premium`)
    }
  }

  return (
    <div>
      <div className='block rounded-lg border bg-transparent text-surface shadow-secondary-1 border-[#4B7F52] relative'>
        {pack ? (
          <>
            <div className='bg-[#dffdd1] rounded-tl-xl rounded-tr-xl border-b-2 border-[#4B7F52] px-6 py-3'>
              <h1 className='font-bold'>
                <Space>
                  <img
                    src='/assets/images/Auto Layout Horizontal (1).png'
                    alt='Premium Plus'
                  />
                  <span>
                    {pack.title} (৳{pack.price})
                  </span>
                </Space>
              </h1>
              <p className='my-2'>{pack.description}</p>

              <Button
                type='primary'
                className='primary-Button'
                size='large'
                onClick={() => tempUserPackages()}
              >
                {/* <Link href={`/${locale}/premium`}>Select</Link> */}
                Select
              </Button>
            </div>
            <div className='p-6'>
              <ul>
                {pack.more.map((item, idx) => (
                  <li key={idx} className='mb-3'>
                    <Row gutter={16}>
                      <Col className='gutter-row p-0' span={3}>
                        <img
                          src='/assets/icons/star_2.svg'
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
            {/* <div className="border-t-2 border-[#4B7F52] px-6 py-3">
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
                            <li className="">
                                <Row gutter={16}>
                                    <Col className="gutter-row p-0" span={3}>
                                        <img src='/assets/icons/Check.svg' alt="Premium Plus" width={25} className='mt-1' />
                                    </Col>
                                    <Col className="gutter-row pt-1" span={21}>
                                        <p className=''>Store your return related documents securely</p>

                                    </Col>
                                </Row>
                            </li>
                            <li className="">
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
