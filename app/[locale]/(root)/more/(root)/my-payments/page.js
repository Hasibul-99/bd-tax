'use client'

import {Get_Payments} from '@/scripts/api'
import {getData} from '@/scripts/api-service'
import {Table, Tag} from 'antd'
import dayjs from 'dayjs'
import {useEffect, useState} from 'react'

const columns = [
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (text) => <Tag color={'green'}>{text}</Tag>,
  },
  {
    title: 'Transaction Date',
    dataIndex: 'payment_date',
    key: 'payment_date',
    render: (text) => <>{dayjs(text).format('DD/MM/YYYY h.mm A')}</>,
  },
  // {
  //   title: 'Tax Year',
  //   dataIndex: 'address',
  //   key: 'address',
  //   render: (text) => <>2020-2021</>,
  // },
  {
    title: 'Tarnsaction ID',
    dataIndex: 'tran_id',
    key: 'tran_id',
    // render: (text) => <>{text}</>,
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Card Type',
    dataIndex: 'card_type',
    key: 'card_type',
  },
  // {
  //   title: 'Card Issuer',
  //   dataIndex: 'address',
  //   key: 'address',
  //   render: (text) => <>WELLS FARGO</>,
  // },
  // {
  //   title: 'Bank Transaction ID',
  //   dataIndex: 'address',
  //   key: 'address',
  //   render: (text) => <>CV668720200816</>,
  // },
  // {
  //   title: 'Error',
  //   dataIndex: 'address',
  //   key: 'address',
  //   render: (text) => <>CANCELLED</>,
  // },
  // {
  //   title: 'View Receipt',
  //   key: 'action',
  //   render: (_, record) => (
  //     <Space size='middle'>
  //       <img src='/assets/icons/file-2.svg' alt='Premium Plus' />
  //     </Space>
  //   ),
  // },
]

export default function MyPayments() {
  const [payments, setPayments] = useState()

  const getPayments = async () => {
    let res = await getData(Get_Payments)

    if (res) {
      setPayments(res?.data)
    }
  }

  useEffect(() => {
    getPayments()
  }, [])
  return (
    <div className='bg-white py-6 px-6'>
      <h3 className='text-xl font-semibold'>Payment Status</h3>

      <div className='overflow-x-scroll mt-6'>
        <Table columns={columns} dataSource={payments} pagination={false} />
      </div>
    </div>
  )
}
