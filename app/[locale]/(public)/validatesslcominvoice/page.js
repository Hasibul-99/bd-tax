'use client'

import {Button, Result} from 'antd'
import Link from 'next/link'
import {useSearchParams} from 'next/navigation'

export default function Validatesslcominvoice() {
  const searchParams = useSearchParams()
  const status = searchParams.get('status')

  return (
    <div className='bg-[#F8FAFC] container mx-auto min-h-[80vh] mt-5 pb-16'>
      <div>
        {status === 'success' ? (
          <>
            <Result
              status='success'
              title='Order Successfully Completed!'
              subTitle='Thank you for your purchase. configuration takes few minutes, please wait.'
              extra={[
                <Link href={'/packages'}>
                  <Button
                    className='prime-button w-52 !mx-auto'
                    type='primary'
                    key='console'
                  >
                    Go Console
                  </Button>
                </Link>,
              ]}
            />
          </>
        ) : (
          <>
            <Result
              status='error'
              title='Submission Failed'
              subTitle="We're sorry, but there was a problem processing your order. Please try again later or contact support for assistance."
              extra={
                <Link href={'/packages'}>
                  <Button
                    className='prime-button w-52 !mx-auto'
                    type='primary'
                    key='console'
                  >
                    Go Console
                  </Button>
                </Link>
              }
            />
          </>
        )}
      </div>
    </div>
  )
}
