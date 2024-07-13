import {Button} from 'antd'
import Link from 'next/link'

export default function GetUserStep({
  steps,
  addiInfo,
  context = 'premium-plus',
}) {
  const showIcons = (idx) => {
    if (idx === 0) return '/assets/icons/PropertyPersonalInfo.svg'
    else if (idx === 1) return '/assets/icons/PropertyDocuments.svg'
    else if (idx === 2) return '/assets/icons/PropertyPayment.svg'
    else if (idx === 3) return '/assets/icons/PropertyPrepare.svg'
    else if (idx === 4) return '/assets/icons/PropertySubmitReturn.svg'
    else if (idx === 0) return '/assets/icons/PropertyPersonalInfo.svg'
  }

  return (
    <div className='bg-white py-5 px-4 mt-4 rounded-[20px]'>
      <h5 className='text-base font-semibold mb-6'>
        This is what to expect next
      </h5>

      {steps?.length ? (
        <div className='expect'>
          {steps.map((step, idx) => (
            <div key={idx} className='expect-card'>
              <div className='content-text'>
                <span className='number-card'>
                  <span className='number'>{idx + 1}</span>
                </span>
                {step?.title}
              </div>

              <div className='text-right ml-auto'>
                <h5 className='text-sm font-semibold'>
                  <img src={showIcons(idx)} width={32} alt='Premium Plus' />
                </h5>
              </div>
            </div>
          ))}
        </div>
      ) : (
        ''
      )}
      {context === 'standard' ? (
        <div className='mt-4 font-normal text-sm leading-[1.4] text-slate-800'>
          Our app will guide you through the entire process, which typically
          takes about 30 minutes to complete.
        </div>
      ) : (
        ''
      )}

      <div className='text-center mt-5'>
        <Link href={`${context}/process`}>
          <Button
            type='primary'
            size='large'
            className='prime-button w-52 m-auto'
          >
            {addiInfo?.go_button_title || "Let's GO"}
          </Button>
        </Link>
      </div>
    </div>
  )
}
