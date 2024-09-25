import {Button, Space} from 'antd'
import Link from 'next/link'
import {useRouter} from 'next/navigation'
import {useState} from 'react'

export default function CardViewPremium(props) {
  const {locale, packageList} = props
  const router = useRouter()
  const [showDetails, setShowDetails] = useState(false)

  return (
    <div>
      <div className='block rounded-[25px] border bg-transparent text-surface shadow-secondary-1 border-[#4B7F52] relative overflow-hidden'>
        {packageList ? (
          <>
            <div
              className={`bg-[#dffdd1]  rounded-t-[25px] ${
                showDetails
                  ? ' border-b-2 border-[#4B7F52]'
                  : 'rounded-b-[25px]'
              }`}
            >
              {/* <h1 className='font-bold'>
                <Space>
                  <img
                    src='/assets/images/Premium-Plus.png'
                    alt='Premium Plus'
                  />
                  <span>
                    {packageList.current_package_id_title} (৳{' '}
                    {packageList.current_package_id_price})
                  </span>
                </Space>
              </h1>
              <p className='my-2'>
                {packageList.current_package_id_moredescription}
              </p>

              <ConfigProvider
                theme={{
                  token: {
                    colorPrimary: '#4B7F52',
                  },
                  components: {
                    Button: {
                      colorPrimary: '#4B7F52',
                    },
                  },
                }}
              >
                <Button type='primary' className='w-full' size='large'>
                  <Link href={`/${locale}/premium`}>Let's Continue</Link>
                </Button>
              </ConfigProvider>

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
                    />
                  </Space>
                </Button>
              </div> */}
              <div className='premium-card-landing '>
                <div className='packages-price'>
                  <div className='p-image'>
                    <img src='/assets/images/premium.png' alt='Premium' />
                  </div>
                  <span className='price-text'>
                    {packageList.current_package_id_title} (৳{' '}
                    {packageList.current_package_id_price})
                  </span>
                </div>
                <div id='premium-details' className='pack-details '>
                  <p>{packageList.current_package_id_moredescription}</p>
                </div>

                <Link href={`/${locale}/premium`}>
                  <Button
                    type='primary'
                    className='primary-Button w-72 font-semibold'
                    size='large'
                    // onClick={() => tempUserPackages()}
                  >
                    Let's Continue
                  </Button>
                </Link>

                <div className='text-center '>
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
                      />
                    </Space>
                  </Button>
                </div>
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
              </>
            ) : (
              ''
            )}
          </>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}
