import {useRef, useState} from 'react'
import OrderStatus from './OrderStatus'
import ShowDownloadTaxFile from './ShowDownloadTaxFile'
import SignatureUpload from './SignatureUpload'

export default function Submit() {
  const ref = useRef(null)
  const [show, setShow] = useState(1)

  return (
    <div ref={ref} className=''>
      {show === 1 ? <ShowDownloadTaxFile setShow={setShow} /> : ''}
      {show === 2 ? (
        <SignatureUpload
          offsetWidth={ref?.current?.offsetWidth || 0}
          setShow={setShow}
        />
      ) : (
        ''
      )}
      {show === 3 ? (
        <OrderStatus showNextButton={false} showLastStep={true} />
      ) : (
        ''
      )}
    </div>
  )
}
