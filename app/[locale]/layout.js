import {NextIntlClientProvider} from 'next-intl'
import {getMessages} from 'next-intl/server'
import {Poppins} from 'next/font/google'
import Script from 'next/script'

import '../../style/style.scss'
import '../globals.css'
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'BDTax - #1 income tax preparation service provider in Bangladesh!',
  description:
    "BDTax.com.bd is the first online tax preparation, processing, and submission software in Bangladesh! It's super easy to use and manage, get started today!",
}

export default async function LocaleLayout(props) {
  const {children, params} = props
  const messages = await getMessages()

  return (
    <html lang={params?.locale || 'en'}>
      {/* <Script src='js/script.js'></Script> */}
      <body className={poppins.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
      <Script
        src='https://use.fontawesome.com/1744f3f671.js'
        strategy='lazyOnload'
      />
    </html>
  )
}
