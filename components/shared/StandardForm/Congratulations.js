import {Button} from 'antd'
import Link from 'next/link'

export default function Congratulations() {
  return (
    <div className='p-6 '>
      <div className='flex flex-col justify-center items-center py-8 overflow-hidden gap-4'>
        {/* <div className='text-center'> */}
        <img src='/assets/images/copy-success.png' alt='copy-success' />
        <div className='font-semibold text-lg leading-[25px] text-[#020617]'>
          Congratulations!
        </div>
        <div className='flex flex-col justify-center items-center p-0 gap-4 md:w-[566.56px]'>
          <span className='text-center'>
            You have successfully prepared your tax return. Please download your
            tax return form, sign and submit at{' '}
            <span className='font-bold'>Tax Circle 2A</span>.
          </span>
          <span className='text-center'>
            You can make unlimited edits to your tax return. You can always
            acess your tax return form in the{' '}
            <Link href={'/docs'} className='underline text-[revert]'>
              Docs section
            </Link>
            .
          </span>
        </div>

        <div class='flex flex-col md:flex-row justify-center items-center p-0 gap-4 w-[566.56px]'>
          <Button className='prime-button w-auto md:w-full px-6' type='primary'>
            Download My Tax Form
          </Button>

          <Button className='refer-friend-button shadow-none px-6'>
            Pay Tax Due Via Sonali Bank
            <img src='/assets/icons/export-copy.svg' />
          </Button>
        </div>
        {/* </div> */}
      </div>
    </div>
  )
}
