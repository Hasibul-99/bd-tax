'use client'

import AuthNavbar from '@/components/shared/AuthNavbar'
import Footer from '@/components/shared/Footer'
import Cookies from 'js-cookie'
import {useRouter} from 'next/navigation'
import {useEffect} from 'react'

const RootLayout = (props) => {
  const {
    children,
    params: {locale},
  } = props
  const router = useRouter()
  const token =
    Cookies.get('bdtax_token') || localStorage.getItem('bdtax_token')

  useEffect(() => {
    if (token) {
      router.push('/')
    }
  }, [token])

  return (
    <>
      <div>
        <AuthNavbar locale={locale} />
        <div className='bg-[#F8FAFC] mx-auto min-h-[80vh]'>{children}</div>
      </div>
      <Footer />
      {/* <Script src="js/script.js"></Script> */}
    </>
  )
}

export default RootLayout
