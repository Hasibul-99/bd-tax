import Footer from '@/components/shared/Footer'
import Navbar from '@/components/shared/Navbar'

const RootLayout = (props) => {
  const {
    children,
    params: {locale},
  } = props

  return (
    <>
      <div className='bg-[#F8FAFC]'>
        <Navbar locale={locale} />
        <div className='bg-[#F8FAFC] container mx-auto min-h-[80vh] mt-5 pb-16'>
          {children}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default RootLayout
