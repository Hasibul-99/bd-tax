import { GET_DOWNLOAD_TAX_FILE } from '@/scripts/api';
import { getData } from '@/scripts/api-service';
import { useEffect, useRef, useState } from 'react';
import SignatureUpload from './SignatureUpload';
import ShowDownloadTaxFile from './ShowDownloadTaxFile';
import OrderStatus from './OrderStatus';


export default function Submit() {
  const ref = useRef(null);
  const [show, setShow] = useState(1)


  return (
    <div ref={ref} className='mt-12' >
      {
        show === 1 ? <ShowDownloadTaxFile setShow={setShow}/> : ''
      }
      {
        show === 2 ? <SignatureUpload offsetWidth={ref?.current?.offsetWidth || 0} setShow={setShow}/> : ''
      }
      {
        show === 3 ? <OrderStatus showNextButton={false}/> : ''
      }
    </div>
  )
}
