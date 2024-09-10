'use client'

import {useTranslations} from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
// import LanguageChange from '../common/LanguageChange'

// https://codepen.io/Blockshot/pen/rNwOYBE
export default function AuthNavbar({locale}) {
  const pathname = usePathname()
  const t = useTranslations('navigation')

  const handelToggle = () => {
    const authMenu = document.querySelector('#menu')
    authMenu.classList.toggle('hidden')
  }

  console.log(pathname)

  const isActiveUrl = (url) => {
    return url === pathname
  }

  const isActiveBaseUrl = (url) => {
    return pathname.startsWith(url) //pathname;
  }

  return (
    <header className='container mx-auto'>
      {/* justify-between */}
      <nav className='flex flex-wrap items-center     w-full py-4 md:pt-0 md:pb-2.5 text-lg text-gray-700 bg-white'>
        <div className='pt-3 md:mr-12'>
          <Link href={`/${locale}`}>
            <Image
              width={100}
              height={50}
              src='/assets/images/BDTax-Logo.png'
              alt='logo'
            />
          </Link>
        </div>
        {/* <Link href={`#`}> */}
        <svg
          xmlns='<http://www.w3.org/2000/svg>'
          id='menu-button'
          onClick={() => {
            handelToggle()
          }}
          className='h-6 w-6 cursor-pointer md:hidden block'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
        {/* </Link> */}
        <div
          className='hidden w-full md:flex md:items-center md:w-auto'
          id='menu'
        >
          <ul className='text-gray-700 pt-4 md:mt-3 md:flex md:justify-between items-center md:pt-0 text-sm navbar-content'>
            <li className='font-normal text-base leading-5 text-[#020617] '>
              {/* ${locale}/home */}
              <Link
                href={`/`}
                className={`md:px-5 py-4 block hover:text-green-400 ${
                  isActiveUrl(`/${locale}`) ? 'active' : ''
                }`}
              >
                {t(`home`)}
              </Link>
            </li>
            <li className='font-normal text-base leading-5 text-[#020617]'>
              <Link
                href={`/${locale}/packages`}
                className={`md:px-5 py-4 block hover:text-green-400 ${
                  isActiveBaseUrl(`/${locale}/packages`) ? 'active' : ''
                }`}
              >
                {t(`packages`)}
              </Link>
            </li>
            <li className='font-normal text-base leading-5 text-[#020617]'>
              <Link
                href={`/${locale}/news`}
                className={`md:px-5 py-4 block hover:text-green-400 ${
                  isActiveBaseUrl(`/${locale}/news`) ? 'active' : ''
                }`}
              >
                {t(`news`)}
              </Link>
            </li>
            <li className='font-normal text-base leading-5 text-[#020617]'>
              <Link
                href={`/${locale}/blog`}
                className={`md:px-5 py-4 block hover:text-green-400 ${
                  isActiveBaseUrl(`/${locale}/blog`) ? 'active' : ''
                }`}
              >
                {t(`blog`)}
              </Link>
            </li>
            <li className='font-normal text-base leading-5 text-[#020617]'>
              <Link
                href={`/${locale}/faq`}
                className={`md:px-5 py-4 block hover:text-green-400 ${
                  isActiveBaseUrl(`/${locale}/faq`) ? 'active' : ''
                }`}
              >
                {t(`faq`)}
              </Link>
            </li>
            <li className='font-normal text-base leading-5 text-[#020617]'>
              <Link
                href={`/${locale}/about-us`}
                className={`md:px-5 py-4 block hover:text-green-400 ${
                  isActiveBaseUrl(`/${locale}/about-us`) ? 'active' : ''
                }`}
              >
                {t(`about_us`)}
              </Link>
            </li>
            <li className='font-normal text-base leading-5 text-[#020617]'>
              <Link
                href={`/${locale}/contact-us`}
                className={`md:px-5 py-4 block hover:text-green-400 ${
                  isActiveBaseUrl(`/${locale}/contact-us`) ? 'active' : ''
                }`}
              >
                {t(`contact_us`)}
              </Link>
            </li>
            {/* <li>
              <LanguageChange />
            </li> */}
            <li className='font-normal text-base leading-5 text-[#020617] md:px-2.5 my-6 md:my-0'>
              <Link
                href={`/${locale}/signin`}
                className={
                  isActiveUrl(`/${locale}/signin`)
                    ? 'rounded-[12px] py-2 px-10 md:px-4 bg-custom-gradient text-white '
                    : 'md:px-5 py-4 block hover:text-green-400'
                }
              >
                {t(`login`)}
              </Link>
            </li>
            <li className='font-normal text-base leading-5 text-[#020617]'>
              <Link
                href={`/${locale}/signup`}
                className={
                  isActiveUrl(`/${locale}/signup`)
                    ? 'rounded-[12px] py-2 px-10 md:px-4 bg-custom-gradient text-white'
                    : 'md:px-5 py-4 block hover:text-green-400'
                }
              >
                {t(`sign_up`)}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
