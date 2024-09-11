import Link from 'next/link'

export default function Footer() {
  return (
    <div className=' bg-[#F1F5F9] border border-solid border-[#E2E8F0]'>
      <div className='container mx-auto py-8'>
        <div className='footer_top'>
          <div className='footer_logo w3-center mx-auto pb-6'>
            <img src='/assets/images/logo-2-footer.png' width={100} />
          </div>
          <div className='footer_nav '>
            <ul className='md:flex items-center space-x-1 gap-x-5 text-center'>
              <li>
                <Link href='join-our-team'>Join Our Team</Link>
              </li>
              <li>
                <Link href='become-a-partner'>Become a Partner</Link>
              </li>
              <li>
                <Link href='investor-relations'>Investor Relations</Link>
              </li>
              <li>
                <a href='#'>Privacy Policy </a>
              </li>
              <li>
                <Link href='terms-and-conditions'>Terms and conditions</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='text-center sm:flex sm:justify-between sm:text-left'>
          <p className='text-sm'>
            <span className='block sm:inline'>
              © 2024 bdtax.com.bd All Rights Reserved.
            </span>
          </p>
          <p className='mt-4 text-sm sm:order-first sm:mt-0'>
            info@bdtax.com.bd | 01409-991225
          </p>
        </div>
      </div>
    </div>
  )
}
