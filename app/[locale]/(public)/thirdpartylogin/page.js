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

      Cookies.set('bdtax_token', masterData?.token)
      Cookies.set('bdtax_user', JSON.stringify(masterData))

      setTimeout(() => {
        window.location = '/'
      }, 1000)
    } else {
      window.location = '/'
    }
  }

  useEffect(() => {
    checkTokenHandel()
  }, [])

  return (
    <div>
      <Loading />
    </div>
  )
}
