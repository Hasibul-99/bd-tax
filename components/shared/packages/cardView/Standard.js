import {Button, Space} from 'antd'
import Link from 'next/link'
import {useRouter} from 'next/navigation'
import {useState} from 'react'

export default function CardViewStandard(props) {
  const {locale, packageList} = props
  const router = useRouter()
  const [showDetails, setShowDetails] = useState(false)

  return (
    <div>
      <div className='block rounded-[20px] border bg-transparent text-surface shadow-secondary-1 border-[#0F172A] relative'>
        {packageList ? (
          <>
            <div
              className={`bg-[#f5f5f5] truncate rounded-t-[25px] ${
                showDetails
                  ? ' border-b-2 border-[#0F172A]'
                  : 'rounded-b-[25px]'
              } `}
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
                    colorPrimary: '#ccc',
                  },
                  components: {
                    Button: {
                      colorPrimary: '#ccc',
                    },
                  },
                }}
              >
                <Link href={`/${locale}/standard`}>
                  <Button
                    type='primary'
                    className='w-full border-[#0F172A] text-[#0F172A] hover:!text-[#0F172A]'
                    size='large'
                  >
                    Let's Continue
                  </Button>
                </Link>
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
              <div className='standard-card-landing'>
                <div className='packages-price'>
                  <div className='s-image'>
                    <img src='/assets/images/standerd.png' alt='standard' />
                  </div>
                  <span className='price-text'>
                    {packageList.current_package_id_title} (৳{' '}
                    {packageList.current_package_id_price})
                  </span>
                </div>
                <div id='standard-details' className='pack-details'>
                  <p>{packageList.current_package_id_moredescription}</p>
                </div>

                <Link href={`/${locale}/standard`}>
                  <Button
                    type='primary'
                    className='standard-button w-full min-w-80 font-semibold'
                    size='large'
                    // onClick={() => tempUserPackages()}
                  >
                    Let's Continue
                  </Button>
                </Link>

                <div className='text-center'>
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
                            src='/assets/icons/star_3.svg'
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
