'use client'

import AuthNavbar from '@/components/shared/AuthNavbar'
import Footer from '@/components/shared/Footer'
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
    if (token) {
      router.push('my-packages')
    }
  }, [token])

  return (
    <>
      <div>
        <AuthNavbar locale={locale} />
        {children}
      </div>
      <Footer />
      {/* <Script src="js/script.js"></Script> */}
      <Script
        id='chatra-script'
        strategy='lazyOnload' // Ensures the script loads lazily after the page has loaded
      >
        {`
          (function(d, w, c) {
            w.ChatraID = 'tSt3hgnALKaspzCWF';
            var s = d.createElement('script');
            w[c] = w[c] || function() {
              (w[c].q = w[c].q || []).push(arguments);
            };
            s.async = true;
            s.src = 'https://call.chatra.io/chatra.js';
            if (d.head) d.head.appendChild(s);
          })(document, window, 'Chatra');
        `}
      </Script>
    </>
  )
}

export default RootLayout
