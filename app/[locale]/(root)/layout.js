'use client'

import Footer from '@/components/shared/Footer'
import Navbar from '@/components/shared/Navbar'
import Cookies from 'js-cookie'
import {useRouter} from 'next/navigation'
import Script from 'next/script'
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
    if (!token) {
      router.push('/signin')
    }

    setTimeout(() => {
      const element = document.getElementById('chatra-script')
      if (element) {
        element.remove()
      }

      const element2 = document.getElementById('chatra')
      if (element2) {
        element2.remove()
      }
    }, 5000)
  }, [token])

  return (
    <>
      <div className='bg-[#F8FAFC]'>
        <Navbar locale={locale} />
        <div className='bg-[#F8FAFC] container mx-auto min-h-[80vh]'>
          {children}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default RootLayout
