'use client'

import {GET_WEB_URL} from '@/scripts/api'
import {getData} from '@/scripts/api-service'
import {useEffect, useState} from 'react'
import Iframe from 'react-iframe'

export default function Chat() {
  const [loading, setLoading] = useState(true)
  const [chatUrl, setChatUrl] = useState()

  const getChatLink = async () => {
    let res = await getData(GET_WEB_URL)
    if (res) {
      console.log(res)
      setLoading(false)
      setChatUrl(res?.data?.live_chat_url)
    }
  }

  useEffect(() => {
    getChatLink()
  }, [])
  return (
    <>
      {loading ? (
        <>
          <div className='text-center h-[400px] flex justify-items-center items-center relative'>
            <div>
              <img
                className='image'
                src='/assets/icons/loading.svg'
                alt='Premium Plus'
              />
            </div>
          </div>
        </>
      ) : (
        <div>
          <Iframe
            url={chatUrl}
            // width='640px'
            height='700px'
            id=''
            className='w-full'
            display='block'
            position='relative'
          />
        </div>
      )}
    </>
  )
  // <div>Chat https://newdevapi.bdtax.com.bd/public/api/get-web-url</div>
}
