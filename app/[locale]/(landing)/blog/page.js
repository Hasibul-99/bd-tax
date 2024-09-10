import '@/style/css/w3.css'
import '@/style/css/style.css'
import '@/style/css/other-style.css'

export default function page() {
  return (
    <div>
      {/* Pricing Section */}
      <div className='container mx-auto mt-5 pb-10'>
        <div className='custom-container-under mx-auto px-30 '>
          <div className='bg-white pt-6 pb-6 px-4 rounded-t-2xl'>
            <h1 className='w3-center'>BDTax Referal program</h1>
            <p className='w3-center'>Refer and earn ponts</p>
          </div>
          <div className='process-wrap active-step1'>
            <div className='process-main'>
              <div className='steps-col-3 m-2'>
                <div className='process-step-cont'>
                  <div className='process-step step-1' />
                  <span className='process-label pb-2'>Step 1</span>
                  <span className='referral'>
                    Auto enroll once you
                    <br /> purchase a package
                  </span>
                </div>
              </div>
              <div className='steps-col-3 m-2'>
                <div className='process-step-cont'>
                  <div className='process-step step-2' />
                  <span className='process-label pb-2'>Step 2</span>
                  <span className='referral w3-center'>
                    Share the referral link with
                    <br /> your friends and family
                  </span>
                </div>
              </div>
              <div className='steps-col-3 m-2'>
                <div className='process-step-cont'>
                  <div className='process-step step-3' />
                  <span className='process-label pb-2'>Step 3</span>
                  <span className='referral w3-center'>
                    Earn points once your referral
                    <br /> purchase a package
                  </span>
                </div>
              </div>
              <div className='steps-col-3 m-2'>
                <div className='process-step-cont'>
                  <div className='process-step step-4' />
                  <span className='process-label pb-2'>Step 4</span>
                  <span className='referral w3-center'>
                    Redeem points as cash <br />
                    value when you purchase <br />a package next time
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* List  Section */}
      <div className='container mx-auto mt-5 pb-10 partners'>
        <div className='custom-container-under mx-auto px-30 chcek_list'>
          <ul>
            <li>
              <span>
                You will earn 1000 points when your friends and family registers
                and purchase any package from BDTax.
              </span>
            </li>
            <li>
              <span>
                Your referral will also receive a 20% discount on their
                purchase.
              </span>
            </li>
            <li>
              <span>
                For each referral you will earn an additional 1000 points. You
                can use these points for your next purchase with BDTax
              </span>
            </li>
            <li>
              <span>
                For example, if you refer 5 person you are going to receive 5000
                points (if all 5 persons purchase a service from us) and that
                means you are receiving BDT 500 discount on your next purchase
                from us.
              </span>
            </li>
          </ul>
        </div>
      </div>
      {/* Pricing Section */}
      <div className='container mx-auto mt-5 partners'>
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
                        src='/assets/images/primium-plus.png'
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
                          src='/assets/icons/star.svg'
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
                          src='/assets/icons/star.svg'
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
                          src='/assets/icons/star.svg'
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
                          src='/assets/icons/star.svg'
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
                          src='/assets/icons/star.svg'
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
                          src='/assets/icons/star.svg'
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
                          src='/assets/icons/star.svg'
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
                          src='/assets/icons/star.svg'
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
                      <img src='/assets/images/premium.png' alt='Premium' />
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
                          src='/assets/icons/star_2.svg'
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
                          src='/assets/icons/star_2.svg'
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
                          src='/assets/icons/star_2.svg'
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
                          src='/assets/icons/star_2.svg'
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
                          src='/assets/icons/star_2.svg'
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
                          src='/assets/icons/star_2.svg'
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
                          src='/assets/icons/star_2.svg'
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
                      <img src='/assets/images/standerd.png' alt='standard' />
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
                          src='/assets/icons/star_3.svg'
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
                          src='/assets/icons/star_3.svg'
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
                          src='/assets/icons/star_3.svg'
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
                          src='/assets/icons/star_3.svg'
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
                          src='/assets/icons/star_3.svg'
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
                          src='/assets/icons/star_3.svg'
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
                          src='/assets/icons/star_3.svg'
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
                          src='/assets/icons/star_3.svg'
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
                          src='/assets/icons/star_3.svg'
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
      {/* After price Section */}
      <div className=' container mb-10'>
        <div className='custom-container p-4 bg-[#F1F5F9] border border-solid border-[#E2E8F0] rounded-[12px]'>
          bdtax.com.bd is the first online income tax return preparation,
          processing and submission software in Bangladesh. bdtax.com.bd will
          support you to file income tax return through online easily at minimum
          cost. You can also consult with our tax expert who have good track of
          tax return preparation for individual taxpayers in Bangladesh.
        </div>
      </div>
    </div>
  )
}
