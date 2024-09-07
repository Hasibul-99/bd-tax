'use client'

import {THIRDPARTY_AUTH} from '@/scripts/api'
import {postData} from '@/scripts/api-service'
import Cookies from 'js-cookie'
import {useSearchParams} from 'next/navigation'
import {useEffect} from 'react'
import Loading from '../../loading'

export default function page() {
  const searchParams = useSearchParams()
  const source = searchParams.get('source')
  const token = searchParams.get('token')

  const checkTokenHandel = async () => {
    let res = await postData(THIRDPARTY_AUTH + token)

    if (res) {
      let masterData = res?.data?.data

      if (masterData?.need_reg === 1) {
        window.location = `/signup?mobile=${masterData.mobile}`
        return false
      }
      Cookies.set('bdtax_token', masterData?.token)
      Cookies.set('bdtax_user', JSON.stringify(masterData))

      setTimeout(() => {
        window.location = '/signin'
      }, 1000)
    } else {
      window.location = '/signin'
    }
  }

  useEffect(() => {
    checkTokenHandel()
  }, [])

  return (
    <div className='bg-[#F8FAFC] container mx-auto min-h-[80vh] mt-5 pb-16'>
      <div>
        <Loading />
      </div>
    </div>
  )
}
