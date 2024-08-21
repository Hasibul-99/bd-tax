'use client'

import {GET_NOTIFICATION} from '@/scripts/api'
import {getData} from '@/scripts/api-service'
import {useEffect} from 'react'

export default function Notification() {
  const getNoti = async () => {
    let res = await getData(GET_NOTIFICATION)
    if (res) {
      console.log('====================================')
      console.log(res)
      console.log('====================================')
    }
  }

  useEffect(() => {
    getNoti()
  }, [])

  return (
    <div>
      page https://newdevapi.bdtax.com.bd/public/api/getNotification
      <div className='text-center h-[400px] flex justify-items-center items-center relative'>
        <div>
          <img
            className='image'
            src='/assets/icons/loading.svg'
            alt='Premium Plus'
          />
        </div>
      </div>
    </div>
  )
}
