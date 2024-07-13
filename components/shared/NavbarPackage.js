import {usePathname} from 'next/navigation'

export default function NavbarPackage() {
  const pathname = usePathname()
  const showPackStatus = (context) => {
    if (pathname) {
      let arr = pathname.split('/')
      let pack = arr[2]

      if (pack && pack === context) return true
    }
  }

  return (
    <>
      {showPackStatus('standard') ? (
        <div className='flex flex-row items-center px-3 py-2 gap-2 w-[180px] h-[55px] bg-[rgba(15,23,42,0.05)] rounded-full'>
          <div className='standart-but rounded-xl'>
            <img src='/assets/images/standerd.png' alt='standerd' />
          </div>
          <div className='flex flex-col justify-center items-start p-0'>
            <div className='font-semibold text-sm leading-[1.4] text-gray-900'>
              Standard
            </div>
            <div className='text-gray-900'>Tax Due: 0</div>
          </div>
        </div>
      ) : showPackStatus('premium') ? (
        <div className='flex flex-row items-center px-3 py-2 gap-2 w-[180px] h-[55px] bg-custom-green-15 rounded-full border border-custom-green'>
          <div className='premium-but rounded-xl'>
            <img src='/assets/images/premium.png' alt='premium' />
          </div>
          <div className='flex flex-col justify-center items-start p-0'>
            <div className='font-semibold text-sm leading-[1.4] text-gray-900'>
              Premium
            </div>
            <div className='text-gray-900'>Tax Due: 0</div>
          </div>
        </div>
      ) : showPackStatus('premium-plus') ? (
        <div className='flex flex-row items-center px-3 py-2 gap-2 w-[180px] h-[55px] rounded-full bg-custom-yellow-20 border border-custom-yellow-40'>
          <div className='premium-plus rounded-xl'>
            <img src='/assets/images/primium-plus.png' alt='primium-plus' />
          </div>
          <div className='flex flex-col justify-center items-start p-0'>
            <div className='font-semibold text-sm leading-[1.4] text-gray-900'>
              Primium Plus
            </div>
            <div className='text-gray-900'>Tax Due: 0</div>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  )
}
