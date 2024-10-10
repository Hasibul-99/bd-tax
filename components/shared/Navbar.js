'use client'

import {moreNaveData} from '@/scripts/helper'
import {docsIcone, HomeIcone, MessageQuestionIcon, More} from '@/scripts/icons'
import {Space} from 'antd'
import Cookies from 'js-cookie'
import Image from 'next/image'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {useEffect, useState} from 'react'
import NavbarPackage from './NavbarPackage'

// https://codepen.io/its7rishi/pen/qBPmENP
export default function Navbar({locale}) {
  const pathname = usePathname()
  const [token, setToken] = useState()
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  // const token =
  //   Cookies.get('bdtax_token') || window?.localStorage?.getItem('bdtax_token')

  const isActiveUrl = (url) => {
    return pathname.startsWith(url) //pathname;
  }

  const handelMobileMenu = () => {
    setShowMobileMenu((thumb) => !thumb)
  }

  const handelChange = (name) => {
    if (name === 'Logout') {
      Cookies.remove('bdtax_token')
      Cookies.remove('bdtax_user')

      localStorage.removeItem('bdtax_token')
      localStorage.removeItem('bdtax_user')
      if (typeof window !== 'undefined') {
        window.location = '/signin'
      }
    }
  }

  useEffect(() => {
    setToken(Cookies.get('bdtax_token') || localStorage.getItem('bdtax_token'))
  }, [])

  return (
    <nav className='pt-6'>
      <div className='custom-container mx-auto'>
        <div className='flex justify-between mx-6 md:mx-0 bg-white rounded-[100px] px-4 py-2.5'>
          <div className='flex space-x-7'>
            <div className=''>
              <Link
                href='/my-packages'
                className='flex items-center bg-[#F8FAFC] rounded-[100px] px-4 py-1'
              >
                <Image
                  width={120}
                  height={50}
                  src='/assets/images/logo-2.png'
                  alt='logo'
                />
              </Link>
            </div>
            {/* Primary Navbar items */}
            <div className='hidden md:flex items-center space-x-1 gap-x-5 navbar-content bg-[#F8FAFC] rounded-[100px] px-4'>
              <Link
                href={`/home`}
                className={`py-4 px-2 text-base font-semibold ${
                  isActiveUrl(`/home`) ? 'active' : ''
                }`}
              >
                <Space>
                  {/* <img src='/assets/icons/Home.svg' alt='home' /> */}
                  {HomeIcone}
                  Home
                </Space>
              </Link>
              <Link
                href={`/docs`}
                className={`py-4 px-2 text-base font-semibold ${
                  isActiveUrl(`/docs`) ? 'active' : ''
                }`}
              >
                <Space>
                  {docsIcone}
                  Docs
                </Space>
              </Link>
              {/* <Link
                href={`/${locale}/tax-genius`}
                className={`py-4 px-2 text-base font-semibold ${
                  isActiveUrl(`/${locale}/tax-genius`) ? 'active' : ''
                }`}
              >
                <Space>
                  {TaxGeniusIcon}
                  Tax Genius
                </Space>
              </Link> */}
              <Link
                href={`/contactus`}
                className={`py-4 px-2 text-base font-semibold ${
                  isActiveUrl(`/contactus`) ? 'active' : ''
                }`}
              >
                <Space>
                  {/* <img src='/assets/icons/message-question.svg' /> */}
                  {MessageQuestionIcon}
                  Contact Us
                </Space>
              </Link>
              <Link
                href={token ? `/more/profile` : `/signin`}
                className={`py-4 px-2 text-base font-semibold ${
                  isActiveUrl(`/more/`) ? 'active' : ''
                }`}
              >
                <Space>
                  {/* <img src='/assets/icons/more.svg' /> */}
                  {More}
                  More
                </Space>
              </Link>
            </div>
          </div>
          {/* Secondary Navbar items */}
          <div className='hidden md:flex items-center space-x-3 '>
            <a
              href='/notifications'
              className='py-2 px-2 font-medium bg-[#F8FAFC] rounded-[145px]'
            >
              <img src='/assets/icons/Group.svg' />
            </a>
            <a
              href='/chat'
              className='py-2 px-2 font-medium bg-[#F8FAFC] rounded-[145px]'
            >
              <img src='/assets/icons/Frame.svg' />
            </a>

            <NavbarPackage />
          </div>
          {/* Mobile menu button */}
          <div className='md:hidden flex items-center'>
            <button
              onClick={() => handelMobileMenu()}
              className='outline-none mobile-menu-button'
            >
              <svg
                className=' w-6 h-6 text-gray-500 hover:text-green-500 '
                x-show='!showMenu'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path d='M4 6h16M4 12h16M4 18h16' />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* mobile menu */}
      <div className={`${showMobileMenu ? '' : 'hidden'} mobile-menu`}>
        <ul className>
          <li className='active'>
            <Link
              href={`/home`}
              className='block text-sm px-2 py-4 text-white bg-green-500 font-semibold'
            >
              <Space>
                <img src='/assets/icons/Home.svg' />
                Home
              </Space>
            </Link>
          </li>
          <li>
            <Link
              href={`/docs`}
              className='block text-sm px-2 py-4 hover:bg-green-500 transition duration-300'
            >
              <Space>
                <img src='/assets/icons/docs.svg' />
                Docs
              </Space>
            </Link>
          </li>
          {/* <li>
            <Link
              href={`/${locale}/tax-genius`}
              className='block text-sm px-2 py-4 hover:bg-green-500 transition duration-300'
            >
              <Space>
                <img src='/assets/icons/tax-genius.svg' />
                Tax Genius
              </Space>
            </Link>
          </li> */}
          <li>
            <Link
              href={`/contactus`}
              className='hidden md:block text-sm px-2 py-4 hover:bg-green-500 transition duration-300'
            >
              <Space>
                <img src='/assets/icons/message-question.svg' />
                Contact Us
              </Space>
            </Link>
          </li>
          {moreNaveData.map((item) => (
            <li key={item.id}>
              <Link
                href={`${item.url}`}
                className='block text-sm px-2 py-4 hover:bg-green-500 transition duration-300'
                onClick={() => {
                  handelChange(item.name)
                }}
              >
                <Space>
                  <img src={item.icon} alt={item.name} />
                  {item.name}
                </Space>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
