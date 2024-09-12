import '@/style/css/w3.css'
import '@/style/css/style.css'
import '@/style/css/other-style.css'
import {GUEST_PACKAGE_LIST} from '@/scripts/api'
import PackagePricing from '@/components/common/Landing/PackagePricing'

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

export default async function page() {
  const data = await getData()

  return (
    <div>
      {/* Pricing Section */}
      <div className='container mx-auto mt-5 pb-10'>
        <div className='custom-container-under mx-auto px-30 '>
          <div className='bg-white pt-6 pb-6 px-4 rounded-t-2xl'>
            <h1 className='w3-center'>BDTax Referral program</h1>
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
          <PackagePricing data={data.data} />
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
