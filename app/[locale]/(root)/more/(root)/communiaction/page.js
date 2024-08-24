'use client'

import {Table} from 'antd'

import {Get_Email_Log} from '@/scripts/api'
import {getData} from '@/scripts/api-service'
import dayjs from 'dayjs'
import {useEffect, useState} from 'react'

export default function Communications() {
  const [emailLog, setEmaillog] = useState([])

  const columns = [
    {
      title: 'Email Type',
      dataIndex: 'email_type',
      key: 'email_type',
    },
    {
      title: 'Email Sender',
      dataIndex: 'email_sender',
      key: 'email_sender',
    },
    {
      title: 'Email Content',
      dataIndex: 'email_content',
      key: 'email_content',
      render: (text) => (
        <div
          className='post__content'
          dangerouslySetInnerHTML={{__html: text}}
        ></div>
      ),
      width: 400,
    },
    {
      title: 'Created At',
      dataIndex: 'created_at',
      key: 'created_at',
      render: (text) => <>{dayjs(text).format('DD-MM-YYYY hh:mm:ss')}</>,
    },
  ]

  const getEmailLog = async () => {
    let res = await getData(Get_Email_Log)

    if (res) {
      setEmaillog(res?.data)
    }
  }

  useEffect(() => {
    getEmailLog()
  }, [])

  return (
    <div className='bg-white py-6 px-6'>
      <h3 className='text-xl font-semibold'>Communiactions</h3>

      <div className='overflow-x-scroll mt-6'>
        <Table columns={columns} dataSource={emailLog} pagination={false} />
      </div>
    </div>
  )
}
