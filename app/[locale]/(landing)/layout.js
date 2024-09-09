import AuthNavbar from '@/components/shared/AuthNavbar'
import Footer from '@/components/shared/Footer'

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
    </>
  )
}

export default RootLayout
