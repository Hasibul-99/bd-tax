import Login from '@/components/common/Landing/Login'
import Slider from '@/components/common/Landing/Slider'
import {GET_FAQ, GUEST_PACKAGE_LIST} from '@/scripts/api'
import {Collapse, List, Typography} from 'antd'
import '@/style/css/w3.css'
import '@/style/css/style.css'
import '@/style/css/other-style.css'
import FAQ from '@/components/common/Landing/FAQ'
import Link from 'next/link'
import PackagePricing from '@/components/common/Landing/PackagePricing'
import Slider2 from '@/components/common/Landing/Slider2'
import Image from 'next/image'

async function getData() {
  const res = await fetch(
    `${
      process.env.BASE_URL || 'https://bdtaxliveapi.bdtax.com.bd/public/api/'
    }${GUEST_PACKAGE_LIST}`,
    {next: {revalidate: 3600}}
  )

  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

async function getFaq() {
  const res = await fetch(
    `${
      process.env.BASE_URL || 'https://bdtaxliveapi.bdtax.com.bd/public/api/'
    }${GET_FAQ}`,
    {next: {revalidate: 3600}}
  )

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Home(props) {
  const {
    params: {locale},
  } = props
  const data = await getData()
  const faq = await getFaq()

  return (
    <>
      {/* Header with full-height image */}
      <header
        className='bgimg-1 w3-display-container w3-grayscale-min md:pt-16 md:mb-24'
        id='home'
      >
        <div className='grid'>
          <div className='row'>
            <div className='w3-col s8 w3-padding'>
              {/* <img src='assets/images/left_lft.jpg' alt width='100%' /> */}
              <Image
                src='/assets/images/left_lft.jpeg'
                width={1200}
                height={300}
                full={true}
                loading='lazy'
                quality={100}
                alt='banar-image'
                className='rounded-2xl'
              />
              <p className='mx-auto text-center font-medium text-[16px] leading-[150%] text-[#020617] mt-5'>
                Effortless Tax Filing: Upload and Be Done!
              </p>
            </div>
            <Login />
          </div>
        </div>
      </header>

      {/* Partners Section */}
      <div className='container partners !mt-6 !mb-10'>
        <h1 className='w3-center text-4xl font-semibold !mb-10'>
          Our Partners
        </h1>
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-7 gap-10 md:gap-x-5  p-10 px-4 bg-[#F9FAFB] rounded-[12px]'>
          <div className>
            <img src='assets/images/logo_1.png' alt className />
          </div>
          <div className>
            <img src='assets/images/logo_2.png' alt />
          </div>
          <div className>
            <img src='assets/images/logo_3.png' alt />
          </div>
          <div className>
            <img src='assets/images/logo_5.png' alt />
          </div>
          <div className='col-span-2  md:col-span-1'>
            <img src='assets/images/logo_6.png' className='mx-auto' alt />
          </div>
          <div className>
            <img src='assets/images/logo_4.png' alt />
          </div>
          <div className>
            <img src='assets/images/logo_7.png' alt />
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className='container mx-auto min-h-[80vh] mt-5 partners'>
        <div className='custom-container-under mx-auto px-30 '>
          <div className='bg-white pt-6 pb-2 px-4 rounded-t-2xl'>
            <h1 className='w3-center text-4xl font-semibold'>Our Packages</h1>
          </div>
          <PackagePricing data={data.data} />
        </div>
      </div>

      <div className='container pb-16 md:!px-36'>
        <div className='custom-container-under mx-auto flex flex-col md:flex-row items-start p-[18.5371px] gap-[18.54px] bg-white border border-[#C3C5C9] rounded-[16px]'>
          <div>
            <img src='assets/images/message.png' alt='message' />
          </div>

          <div className='flex flex-col items-start p-0'>
            <h4 className='font-semibold text-[18px] leading-[30px] text-[#101828]'>
              Do you have any questions about our packages?
            </h4>
            <p>
              Please call us at{' '}
              <span className='text-[#418341] underline'>01409-991225</span> or{' '}
              <Link href='contact-us' className='text-[#418341] underline'>
                Contact Us
              </Link>{' '}
            </p>
          </div>
        </div>
      </div>

      {/* Promo Section - "What our client say" */}
      <div className='mb-20'>
        <div className='bg-white pt-6 pb-2 px-4 rounded-t-2xl mb-10'>
          <h1 className='w3-center text-4xl font-semibold'>
            What Our Clients Say
          </h1>
        </div>
        {/* <Slider /> */}
        <Slider2 />
      </div>

      {/* Promo Section Awards */}
      <div className='container partners mt-12 !mb-20'>
        <h1 className='w3-center text-4xl font-semibold md:!mb-10'>
          Our Awards
        </h1>
        <div className='bg-[#f9fafc] rounded-[12px]'>
          <div className='custom-container-under'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-5 justify-center'>
              <div className='px-20 py-10 md:p-5'>
                {' '}
                <img
                  src='assets/images/Image (5).png'
                  alt='Premium Plus'
                  width='100%'
                  className='mt-1'
                />
              </div>
              <div className='px-20 py-10 md:p-5'>
                {' '}
                <img
                  src='assets/images/Image (6).png'
                  alt='Premium Plus'
                  width='100%'
                  className='mt-1'
                />
              </div>
              <div className='px-20 py-10 md:p-5'>
                {' '}
                <img
                  src='assets/images/Image (7).png'
                  alt='Premium Plus'
                  width='100%'
                  className='mt-1'
                />
              </div>
              <div className='px-20 py-10 md:p-5'>
                {' '}
                <img
                  src='assets/images/Image (8).png'
                  alt='Premium Plus'
                  width='100%'
                  className='mt-1'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Promo Section "FAQ" */}
      <div className='container partners mt-12 mb-10'>
        <h1 className='w3-center text-4xl font-semibold'>
          Frequently asked questions
        </h1>
        <p className='w3-center pb-10'>
          Everything you need to know about our product and taxes.
        </p>
        <FAQ faq={faq.data} />
      </div>
      {/* Promo Section "Call To Action" */}
      <div className='container !mt-12 !mb-10'>
        <div className='container call-bg text-[16px] rounded-[12px]'>
          <div className='custom-container-under'>
            <div className='section-center md:!w-[415px]'>
              <h3 className='w3-center font-bold'>Try Premium Plus Now</h3>
              <p className='w3-center p-4'>
                Relax! Our Tax experts at BDTax handle it all. Trust us for
                seamless tax prep and submission. Stress-free tax season starts
                here
              </p>
              <Link href='signin'>
                <button
                  type='button'
                  className='ant-btn css-mzwlov ant-btn-primary ant-btn-lg primary-plus-Button font-semibold w-auto mx-auto'
                >
                  <img
                    src='assets/images/primium-plus.png'
                    alt='Premium Plus'
                  />
                  <span>Try Premium Plus</span>
                </button>
              </Link>

              <div className='my-5 text-center'>OR</div>
              <div className='text-center mx-auto'>
                <Link href='/packages' className='font-semibold underline'>
                  View All Packages
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
