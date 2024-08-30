'use client'

import {GET_NOTIFICATION} from '@/scripts/api'
import {getData} from '@/scripts/api-service'
import {Card, Table} from 'antd'
import dayjs from 'dayjs'
import {useEffect, useState} from 'react'

export default function Notification() {
  const [loading, setLoading] = useState(true)
  const [noti, setNoti] = useState()
  const getNoti = async () => {
    let res = await getData(GET_NOTIFICATION)
    if (res) {
      console.log('====================================')
      console.log(res)
      console.log('====================================')
      setNoti(res?.data)
      setLoading(false)
    }
  }

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Email Content',
      dataIndex: 'message',
      key: 'message',
      width: 400,
    },
    {
      title: 'Created At',
      dataIndex: 'created_at',
      key: 'created_at',
      render: (text) => <>{dayjs(text).format('DD-MM-YYYY hh:mm:ss')}</>,
    },
  ]

  useEffect(() => {
    getNoti()
  }, [])

  return (
    <div>
      {loading ? (
        <div className='text-center h-[400px] flex justify-items-center items-center relative'>
          <div>
            <img
              className='image'
              src='/assets/icons/loading.svg'
              alt='Premium Plus'
            />
          </div>
        </div>
      ) : (
        <>
          <Card className='mt-10'>
            <Table columns={columns} dataSource={noti} pagination={false} />
          </Card>
        </>
      )}
    </div>
  )
}
