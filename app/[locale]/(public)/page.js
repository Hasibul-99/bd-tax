import {GUEST_PACKAGE_LIST} from '@/scripts/api'
import '@/style/css/w3.css'
import '@/style/css/style.css'
import '@/style/css/other-style.css'
import Slider from '@/components/common/Landing/Slider'

async function getData() {
  const res = await fetch(
    `${
      process.env.BASE_URL || 'https://newdevapi.bdtax.com.bd/public/api/'
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

export default async function Home(props) {
  const {
    params: {locale},
  } = props
  const data = await getData()

  return (
    <>
      {/* Header with full-height image */}
      <header
        className='bgimg-1 w3-display-container w3-grayscale-min'
        id='home'
      >
        <div className='grid'>
          <div className='row'>
            <div className='w3-col s8 w3-padding'>
              <img src='assets/images/left_lft.jpg' alt width='100%' />
            </div>
            <div className='w3-col s4 w3-padding'>
              <form action='/action_page.php' className='form-border'>
                <h1 className='poppins-bold pt-6'>
                  #1 tax software in Bangladesh
                </h1>
                <h5 className='w3-center p-4'>
                  Hassle-free tax season starts here
                </h5>
                <input
                  type='text'
                  id='fname'
                  name='firstname'
                  placeholder='Your name..'
                />
                <input
                  type='text'
                  id='lname'
                  name='lastname'
                  placeholder='Your last name..'
                />
                <input type='submit' defaultValue='Sign In' />
              </form>
              <div className='wrapped w3-center'>
                <p className='p-2'>
                  By clicking Sign In, you accept the{' '}
                  <a href='#'>Terms of service</a>
                </p>
                <p className='p-2'>
                  <span>New to BDTax?</span> <a href='#'>Create Account</a>
                </p>
                <div className='w3-center img-center'>
                  <div className='w3-col s5 w3-padding-small w3-center'>
                    <img src='assets/images/apple_icon.png' alt height={60} />
                  </div>
                  <div className='w3-col s5 w3-padding-small w3-center'>
                    <img src='assets/images/Frame-(11)_1.png' alt height={60} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Partners Section */}
      <div className='container partners mt-6'>
        <h1 className='w3-center'>Our Partners</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 gap-x-5  p-10 px-4  bg-gray rounded-[12px]'>
          <div className>
            <img src='assets/images/logo_1.png' alt width='100%' />
          </div>
          <div className>
            <img src='assets/images/logo_2.png' alt width='100%' />
          </div>
          <div className>
            <img src='assets/images/logo_3.png' alt width='100%' />
          </div>
          <div className>
            <img src='assets/images/logo_4.png' alt width='100%' />
          </div>
          <div className>
            <img src='assets/images/logo_5.png' alt width='100%' />
          </div>
          <div className>
            <img src='assets/images/logo_6.png' alt width='100%' />
          </div>
          <div className>
            <img src='assets/images/logo_7.png' alt width='100%' />
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className='container mx-auto min-h-[80vh] mt-5 pb-16 partners'>
        <div className='custom-container-under mx-auto px-30 '>
          <div className='bg-white pt-6 pb-2 px-4 rounded-t-2xl'>
            <h1 className='w3-center'>Compare Our Packages</h1>
          </div>
          <div className='rounded-b-[20px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 bg-white pb-10 pt-6 px-4'>
            <div className='mb-5'>
              <div className='block rounded-[20px] border bg-transparent text-surface shadow-secondary-1 border-[#D4AF37] relative'>
                <div className='bg-[#FFFDCC] border border-[#D4AF37] rounded-xl absolute px-2 py-1 top-[-18px] font-semibold start-1/3'>
                  Most Popular
                </div>
                <div className='premium-plus-card-landing'>
                  <div className='packages-price'>
                    <div className='pp-image'>
                      <img
                        src='assets/images/primium-plus.png'
                        alt='Premium Plus'
                      />
                    </div>
                    <span className='price-text'>Premium Plus (৳2950)</span>
                  </div>
                  <div
                    id='premium-plus-details'
                    className='pack-details'
                    style={{height: 59}}
                  >
                    <p>
                      Our experienced tax consultant will prepare your tax
                      return and it will be submitted by BDTax team
                    </p>
                  </div>
                  <button
                    type='button'
                    className='ant-btn css-mzwlov ant-btn-primary ant-btn-lg primary-plus-Button font-semibold'
                  >
                    <span>Select</span>
                  </button>
                </div>
                <div className='p-4'>
                  <ul>
                    <li className='package-details'>
                      <div className='pp-details'>
                        <img
                          src='assets/icons/post-icons/star.svg'
                          alt='Premium Plus'
                          width={16}
                          className='mt-1'
                        />
                        <div className='font-semibold mt-0.5'>
                          Available in Metro City only: Dhaka, Narayanganj,
                          Gazipur, Chattogram, Comilla, Rajshahi, Rangpur,
                          Sylhet, Mymensingh, Barishal &amp; Khulna
                        </div>
                      </div>
                    </li>
                    <li className='package-details'>
                      <div className='pp-details'>
                        <img
                          src='assets/icons/post-icons/star.svg'
                          alt='Premium Plus'
                          width={16}
                          className='mt-1'
                        />
                        <div className='mt-0.5'>
                          Our experienced tax consultant will prepare your tax
                          return
                        </div>
                      </div>
                    </li>
                    <li className='package-details'>
                      <div className='pp-details'>
                        <img
                          src='assets/icons/post-icons/star.svg'
                          alt='Premium Plus'
                          width={16}
                          className='mt-1'
                        />
                        <div className='mt-0.5'>
                          Submit your tax return by the BDTax team
                        </div>
                      </div>
                    </li>
                    <li className='package-details'>
                      <div className='pp-details'>
                        <img
                          src='assets/icons/post-icons/star.svg'
                          alt='Premium Plus'
                          width={16}
                          className='mt-1'
                        />
                        <div className='mt-0.5'>
                          Unlimited download of your tax return PDF file
                        </div>
                      </div>
                    </li>
                    <li className='package-details'>
                      <div className='pp-details'>
                        <img
                          src='assets/icons/post-icons/star.svg'
                          alt='Premium Plus'
                          width={16}
                          className='mt-1'
                        />
                        <div className='mt-0.5'>
                          Receive your acknowledgement slip &amp; tax
                          certificate via email and courier
                        </div>
                      </div>
                    </li>
                    <li className='package-details'>
                      <div className='pp-details'>
                        <img
                          src='assets/icons/post-icons/star.svg'
                          alt='Premium Plus'
                          width={16}
                          className='mt-1'
                        />
                        <div className='mt-0.5'>
                          Get 24/7 support from our online BDTax specialists
                        </div>
                      </div>
                    </li>
                    <li className='package-details'>
                      <div className='pp-details'>
                        <img
                          src='assets/icons/post-icons/star.svg'
                          alt='Premium Plus'
                          width={16}
                          className='mt-1'
                        />
                        <div className='mt-0.5'>
                          Store your return related documents securely
                        </div>
                      </div>
                    </li>
                    <li className='package-details'>
                      <div className='pp-details'>
                        <img
                          src='assets/icons/post-icons/star.svg'
                          alt='Premium Plus'
                          width={16}
                          className='mt-1'
                        />
                        <div className='mt-0.5'>
                          Receive bank-level data encryption and protection
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='mb-5'>
              <div className='block rounded-[20px]  border bg-transparent text-surface shadow-secondary-1 border-[#4B7F52] relative'>
                <div className='premium-card-landing'>
                  <div className='packages-price'>
                    <div className='p-image'>
                      <img src='assets/images/premium.png' alt='Premium' />
                    </div>
                    <span className='price-text'>Premium (৳2450)</span>
                  </div>
                  <div
                    id='premium-details'
                    className='pack-details '
                    style={{height: 59}}
                  >
                    <p>
                      Our experienced tax consultant will prepare your tax
                      return &amp; you will submit it by yourself
                    </p>
                  </div>
                  <button
                    type='button'
                    className='ant-btn css-mzwlov ant-btn-primary ant-btn-lg primary-Button font-semibold'
                  >
                    <span>Select</span>
                  </button>
                </div>
                <div className='p-4'>
                  <ul>
                    <li className='package-details'>
                      <div className='pp-details'>
                        <img
                          src='assets/icons/post-icons/star_2.svg'
                          alt='Premium Plus'
                          width={16}
                          className='mt-1'
                        />
                        <div className='font-semibold mt-0.5'>
                          Available in all over Bangladesh
                        </div>
                      </div>
                    </li>
                    <li className='package-details'>
                      <div className='pp-details'>
                        <img
                          src='assets/icons/post-icons/star_2.svg'
                          alt='Premium Plus'
                          width={16}
                          className='mt-1'
                        />
                        <div className='mt-0.5'>
                          Our experienced tax consultant will prepare your tax
                          return
                        </div>
                      </div>
                    </li>
                    <li className='package-details'>
                      <div className='pp-details'>
                        <img
                          src='assets/icons/post-icons/star_2.svg'
                          alt='Premium Plus'
                          width={16}
                          className='mt-1'
                        />
                        <div className='mt-0.5'>
                          Submit your tax return by yourself
                        </div>
                      </div>
                    </li>
                    <li className='package-details'>
                      <div className='pp-details'>
                        <img
                          src='assets/icons/post-icons/star_2.svg'
                          alt='Premium Plus'
                          width={16}
                          className='mt-1'
                        />
                        <div className='mt-0.5'>
                          Unlimited download of your tax return PDF file
                        </div>
                      </div>
                    </li>
                    <li className='package-details'>
                      <div className='pp-details'>
                        <img
                          src='assets/icons/post-icons/star_2.svg'
                          alt='Premium Plus'
                          width={16}
                          className='mt-1'
                        />
                        <div className='mt-0.5'>
                          Get 24/7 support from our online BDTax specialists
                        </div>
                      </div>
                    </li>
                    <li className='package-details'>
                      <div className='pp-details'>
                        <img
                          src='assets/icons/post-icons/star_2.svg'
                          alt='Premium Plus'
                          width={16}
                          className='mt-1'
                        />
                        <div className='mt-0.5'>
                          Store your return related documents securely
                        </div>
                      </div>
                    </li>
                    <li className='package-details'>
                      <div className='pp-details'>
                        <img
                          src='assets/icons/post-icons/star_2.svg'
                          alt='Premium Plus'
                          width={16}
                          className='mt-1'
                        />
                        <div className='mt-0.5'>
                          Receive bank-level data encryption and protection
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='mb-5'>
              <div className='block rounded-[20px] border bg-transparent text-surface shadow-secondary-1 border-[#0F172A] relative'>
                <div className='standard-card-landing'>
                  <div className='packages-price'>
                    <div className='s-image'>
                      <img src='assets/images/standerd.png' alt='standard' />
                    </div>
                    <span className='price-text'>Standard (৳550)</span>
                  </div>
                  <div
                    id='standard-details'
                    className='pack-details'
                    style={{height: 59}}
                  >
                    <p>
                      Prepare tax return, download &amp; submit return by
                      yourself
                    </p>
                  </div>
                  <button
                    type='button'
                    className='ant-btn css-mzwlov ant-btn-primary ant-btn-lg standard-button font-semibold'
                  >
                    <span>Select</span>
                  </button>
                </div>
                <div className='p-4'>
                  <ul>
                    <li className='package-details'>
                      <div className='pp-details'>
                        <img
                          src='assets/icons/post-icons/star_3.svg'
                          alt='Premium Plus'
                          width={16}
                          className='mt-1'
                        />
                        <div className='font-semibold mt-0.5'>
                          Available in all over Bangladesh
                        </div>
                      </div>
                    </li>
                    <li className='package-details'>
                      <div className='pp-details'>
                        <img
                          src='assets/icons/post-icons/star_3.svg'
                          alt='Premium Plus'
                          width={16}
                          className='mt-1'
                        />
                        <div className='mt-0.5'>
                          Complete your return by quick &amp; easy step-by-step
                          process
                        </div>
                      </div>
                    </li>
                    <li className='package-details'>
                      <div className='pp-details'>
                        <img
                          src='assets/icons/post-icons/star_3.svg'
                          alt='Premium Plus'
                          width={16}
                          className='mt-1'
                        />
                        <div className='mt-0.5'>
                          Receive 100% accurate &amp; automatic tax calculation
                        </div>
                      </div>
                    </li>
                    <li className='package-details'>
                      <div className='pp-details'>
                        <img
                          src='assets/icons/post-icons/star_3.svg'
                          alt='Premium Plus'
                          width={16}
                          className='mt-1'
                        />
                        <div className='mt-0.5'>
                          Get unlimited data revisions &amp; unlimited PDF (tax
                          return file) downloads
                        </div>
                      </div>
                    </li>
                    <li className='package-details'>
                      <div className='pp-details'>
                        <img
                          src='assets/icons/post-icons/star_3.svg'
                          alt='Premium Plus'
                          width={16}
                          className='mt-1'
                        />
                        <div className='mt-0.5'>
                          Get easy download &amp; print
                        </div>
                      </div>
                    </li>
                    <li className='package-details'>
                      <div className='pp-details'>
                        <img
                          src='assets/icons/post-icons/star_3.svg'
                          alt='Premium Plus'
                          width={16}
                          className='mt-1'
                        />
                        <div className='mt-0.5'>
                          Submit tax return at your local NBR office
                        </div>
                      </div>
                    </li>
                    <li className='package-details'>
                      <div className='pp-details'>
                        <img
                          src='assets/icons/post-icons/star_3.svg'
                          alt='Premium Plus'
                          width={16}
                          className='mt-1'
                        />
                        <div className='mt-0.5'>
                          Get answers 24/7 from our online BDTAX specialists
                          team
                        </div>
                      </div>
                    </li>
                    <li className='package-details'>
                      <div className='pp-details'>
                        <img
                          src='assets/icons/post-icons/star_3.svg'
                          alt='Premium Plus'
                          width={16}
                          className='mt-1'
                        />
                        <div className='mt-0.5'>
                          Work on your tax return anytime you want
                        </div>
                      </div>
                    </li>
                    <li className='package-details'>
                      <div className='pp-details'>
                        <img
                          src='assets/icons/post-icons/star_3.svg'
                          alt='Premium Plus'
                          width={16}
                          className='mt-1'
                        />
                        <div className='mt-0.5'>
                          Bank-level data encryption and protection
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Promo Section - "What our client say" */}
      <Slider />

      {/* Promo Section Awards */}
      <div className='container partners mt-12 mb-10'>
        <h1 className='w3-center'>Our Awards</h1>
        <div className='bg-[#f9fafc] rounded-[12px]'>
          <div className='custom-container-under'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-cols-4 gap-x-5 justify-center'>
              <div className='p-5'>
                {' '}
                <img
                  src='assets/images/Image (5).png'
                  alt='Premium Plus'
                  width='100%'
                  className='mt-1'
                />
              </div>
              <div className='p-5'>
                {' '}
                <img
                  src='assets/images/Image (6).png'
                  alt='Premium Plus'
                  width='100%'
                  className='mt-1'
                />
              </div>
              <div className='p-5'>
                {' '}
                <img
                  src='assets/images/Image (7).png'
                  alt='Premium Plus'
                  width='100%'
                  className='mt-1'
                />
              </div>
              <div className='p-5'>
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

      <div>
        {/* Promo Section "FAQ" */}
        <div className='container partners mt-12 mb-10'>
          <h1 className='w3-center'>Frequently asked questions</h1>
          <p className='w3-center pb-10'>
            Everything you need to know about our product and taxes.
          </p>
          <div className='custom-container-under'>
            <div className='faq-content'>
              <div className='faq-question active rounded-[12px]'>
                <input id='q1' type='checkbox' className='panel' />
                <div className='plus'>+</div>
                <label htmlFor='q1' className='panel-title'>
                  What is the meaning of life?
                </label>
                <div className='panel-content'>
                  Income tax in Bangladesh is the tax on the income of the
                  taxpayer. Tax under the Income-tax Ordinance 1984 means income
                  tax payable under the ordinance, additional tax, surplus tax,
                  fine, interest, or recoverable amount. In other words, income
                  tax is a compulsory amount paid to the government to meet the
                  expenses of the state in the interest of all the people of the
                  state.
                </div>
              </div>
              <div className='faq-question'>
                <input id='q2' type='checkbox' className='panel' />
                <div className='plus'>+</div>
                <label htmlFor='q2' className='panel-title'>
                  How much wood would a woodchuck chuck?
                </label>
                <div className='panel-content'>
                  A woodchuck would chuck all the wood he could chuck, if a
                  woodchuck could chuck wood!
                </div>
              </div>
              <div className='faq-question'>
                <input id='q3' type='checkbox' className='panel' />
                <div className='plus'>+</div>
                <label htmlFor='q3' className='panel-title'>
                  What happens if Pinocchio says, "my nose will grow now"?
                </label>
                <div className='panel-content'>
                  Certain questions are better left &nbsp;{' '}
                  <a
                    href='https://en.wikipedia.org/wiki/The_Unanswered_Question'
                    target='_blank'
                  >
                    unanswered
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Promo Section "Call To Action" */}
        <div className='container mt-12 mb-10'>
          <div className='container call-bg text-[16px] rounded-[12px]'>
            <div className='custom-container-under'>
              <div className='section-center'>
                <h3 className='w3-center font-bold'>Try Premium Plus Now</h3>
                <p className='w3-center p-4'>
                  Relax! Our Tax experts at BDTax handle it all. Trust us for
                  seamless tax prep and submission. Stress-free tax season
                  starts here
                </p>
                <button
                  type='button'
                  className='ant-btn css-mzwlov ant-btn-primary ant-btn-lg primary-plus-Button font-semibold'
                >
                  <span>Try Premium Plus</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
