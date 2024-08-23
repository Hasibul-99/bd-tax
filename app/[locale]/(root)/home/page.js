'use client'

import {GET_ORDER_HISTORY} from '@/scripts/api'
import {getData} from '@/scripts/api-service'
import {RightOutlined} from '@ant-design/icons'
import {Button, Result, Space} from 'antd'
import Link from 'next/link'
import {useEffect, useState} from 'react'

export default function Docs() {
  const [orderHistory, setOrderHistory] = useState()

  const getOrderHistory = async () => {
    let res = await getData(GET_ORDER_HISTORY)

    if (res) {
      let masterData = res?.data
      setOrderHistory(masterData)
    }
  }

  useEffect(() => {
    getOrderHistory()
  }, [])
  return (
    <div className='custom-container-under mx-auto px-30 py-10 '>
      {orderHistory ? (
        <>
          {orderHistory?.show_header === 1 ? (
            <>
              <div className='bg-white py-5 px-4 rounded-md'>
                <div className='bg-slate-100 py-5 px-4 mx-auto grid grid-cols-1 md:grid-cols-2 rounded-md'>
                  <div>
                    <h5 className='text-base font-semibold'>
                      Tax Year {orderHistory.tax_year}
                    </h5>
                    <p>{orderHistory.title} </p>
                  </div>
                  <div className='text-right ml-auto'>
                    <Link href={'/'}>
                      <Button
                        type='primary'
                        size='large'
                        className='prime-button w-52 gap-0'
                      >
                        {orderHistory.button_title}{' '}
                        <RightOutlined style={{fontSize: '14px'}} />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          ) : null}

          {orderHistory.order_history?.length ? (
            <>
              {orderHistory.order_history.map((order, idx) => (
                <div className='bg-white mt-5 py-5 px-4 rounded-md' key={idx}>
                  <div className='flex flex-row justify-between items-center p-4 gap-1 bg-[#F8FAFC] rounded-2xl'>
                    <div className='flex flex-row items-center p-0 gap-2'>
                      <img src='/assets/icons/ok.svg' alt='Premium Plus' />
                      <span className='font-medium text-base leading-[1.4] text-slate-950'>
                        Tax Year {order.tax_year}
                      </span>
                    </div>
                    <div className='text-right ml-auto'>
                      <h5 className='text-sm font-semibold'>
                        <Space>
                          {order.package}

                          {order.package === 'Premium Plus' ? (
                            <div className='premium-plus'>
                              <img
                                src='/assets/images/primium-plus.png'
                                alt='Premium Plus'
                              />
                            </div>
                          ) : (
                            ''
                          )}
                          {order.package === 'Standard' ? (
                            <div className='standart-but'>
                              <img
                                src='/assets/images/standerd.png'
                                alt='Standard'
                              />
                            </div>
                          ) : (
                            ''
                          )}
                          {order.package === 'Premium ' ? (
                            <div className='premium-but'>
                              <img
                                src='/assets/images/premium.png'
                                alt='Premium Plus'
                              />
                            </div>
                          ) : (
                            ''
                          )}
                        </Space>
                      </h5>
                    </div>
                  </div>

                  <div className='pt-3 pb-1 px-4 mx-auto grid grid-cols-1 md:grid-cols-3 rounded-md'>
                    <div>
                      <Space>
                        Filling Status:
                        <span className='font-semibold'>{order.status}</span>
                      </Space>
                      <br />
                      <Space>
                        Order Date:
                        <span className='font-semibold'>{order.create_at}</span>
                      </Space>
                    </div>
                    <div className=''>
                      <Space>
                        Filling Date:
                        <span className='font-semibold'>{order.update_at}</span>
                      </Space>
                      <br />
                      <Space>
                        Total Tax Paid:
                        <span className='font-semibold'>{order.completed}</span>
                      </Space>
                    </div>
                    <div className='text-[#126A25] underline  decoration-1 mt-auto cursor-pointer'>
                      {/* {order.ack_file_id && order.show_ack_link ? ( */}
                      <a target='_blank' href={order.ack_file_id}>
                        View NBR Acknowledge Receipt
                      </a>
                      {/* ) : null} */}
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <Result
              status='warning'
              title="It looks like you haven't made any purchases."
            />
          )}
        </>
      ) : null}
    </div>
  )
}
