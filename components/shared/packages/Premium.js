import {TEMP_PACKAGES} from '@/scripts/api'
import {postData} from '@/scripts/api-service'
import {Button} from 'antd'
import {useRouter} from 'next/navigation'

export default function Premium(props) {
  const {locale, pack} = props
  const router = useRouter()

  const tempUserPackages = async () => {
    let res = await postData(
      TEMP_PACKAGES,
      {package_id: pack.id},
      null,
      null,
      true
    )

    if (res) {
      // router.push(`/${locale}/premium`)
    }
  }

  return (
    <div>
      <div className='block rounded-[20px]  border bg-transparent text-surface shadow-secondary-1 border-[#4B7F52] relative'>
        {pack ? (
          <>
            <div className='premium-card-landing'>
              <div className='packages-price'>
                <div className='p-image'>
                  <img src='/assets/images/premium.png' alt='Premium' />
                </div>
                <span className='price-text'>
                  {pack.title} (৳{pack.price})
                </span>
              </div>
              <div id='premium-details' className='pack-details '>
                <p>{pack.description}</p>
              </div>

              <Button
                type='primary'
                className='primary-Button font-semibold'
                size='large'
                onClick={() => tempUserPackages()}
              >
                Select
              </Button>
            </div>
            <div className='p-4'>
              <ul>
                {pack.more.map((item, idx) => (
                  <li key={idx} className='package-details'>
                    <div className='pp-details'>
                      <img
                        src='/assets/icons/star_2.svg'
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
