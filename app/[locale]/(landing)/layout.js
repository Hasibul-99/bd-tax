import AuthNavbar from '@/components/shared/AuthNavbar'
import Footer from '@/components/shared/Footer'
import Script from 'next/script'

const RootLayout = (props) => {
  const {
    children,
    params: {locale},
  } = props

  return (
    <>
      <div className='bg-white'>
        <AuthNavbar locale={locale} />
        <div className='mx-auto min-h-[80vh]'>{children}</div>
      </div>
      <Footer />

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
