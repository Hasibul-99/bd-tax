import { GET_ORDER_STATUS } from '@/scripts/api';
import { getData } from '@/scripts/api-service';
import { RightOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, ConfigProvider, Space } from 'antd';
import { useEffect, useState } from 'react';

export default function OrderStatus({ setCurrent, showNextButtons = true }) {
    const [orderStatus, setOrderStatus] = useState()

    const getOrdereStatus = async () => {
        const res = await getData(GET_ORDER_STATUS);

        if (res) {
            setOrderStatus(res?.data);
        }
    }

    const showIcons = (status, idx) => {
        if (status == '1') {
            return '/assets/icons/order_documents.svg'
        } else {
            if (idx === 0) return '/assets/icons/order_review.svg'
            else if (idx === 1) return '/assets/icons/order_review.svg'
            else if (idx === 2) return '/assets/icons/card-tick.svg'
            else if (idx === 3) return '/assets/icons/document-forward.svg'
            else if (idx === 4) return '/assets/icons/order_approve.svg'
            else if (idx === 5) return '/assets/icons/status-submit.svg'
            else return '/assets/icons/status-submit.svg'
        }

        return ''
    }

    useEffect(() => {
        getOrdereStatus()
    }, [])
    return (
        <div>
            <Card title="Order Info" className=''>
                <div className='border-l-2 border-zinc-800 rounded-l-md px-3 mb-2'>
                    <p>Thank you for your order <span className='font-semibold'>#45678624</span>. </p>
                    <p>Now you can relax as BDTax experts handle your tax return. </p>
                </div>

                <div className='border-l-2 border-zinc-800 rounded-l-md px-3 mb-2'>
                    <p>Your assigned consultant will contact you within 24 hours.</p>
                </div>
            </Card>

            <div className='bg-white py-5 px-4 mt-4 rounded'>
                <h5 className='text-base font-semibold mb-6'>Order Status</h5>

                {
                    orderStatus?.length ? <>
                        {
                            orderStatus.map((step, idx) => <div key={idx} className={`${step.status == '1' ? 'bg-[#d9fae0] ' : 'bg-slate-100 '} mb-6 pt-6 pb-5 px-4 mx-auto grid grid-cols-1 md:grid-cols-2 rounded-md`}>
                                <div>
                                    <h5 className='text-sm font-semibold'>
                                        <Space>
                                            <span className='bg-slate-200 px-3 py-2 rounded-full'>{idx + 1}</span>
                                            <span className={`${step.status == '1' ? 'text-green-700 ' : ''}`}>{step?.title}</span>
                                        </Space>
                                    </h5>
                                </div>

                                <div className='text-right ml-auto'>
                                    <h5 className='text-sm font-semibold'>
                                        <Space>
                                            <span className='text-green-700'>{step?.date}</span>
                                            <img src={showIcons(step.status, idx)} width={25} alt="Premium Plus" />
                                        </Space>
                                    </h5>
                                </div>
                            </div>)
                        }
                    </> : ''
                }
            </div>

            {
                showNextButtons ? <>
                    <div className='text-center'>
                        <ConfigProvider
                            theme={{
                                token: {
                                    colorPrimary: "#4B7F52",
                                },
                                components: {
                                    Button: {
                                        colorPrimary: "#4B7F52",
                                    },
                                },
                            }}
                        >
                            <Space>
                                <Button type="primary" className='px-10 mt-5 flex m-auto' onClick={() => { setCurrent(5) }}>
                                    Next
                                    <RightOutlined style={{ fontSize: '12px', marginTop: '7px' }} />
                                </Button>

                                <Button type="primary" className='px-10 mt-5 flex m-auto'>
                                    <UserOutlined />
                                    Refer Friends
                                </Button>
                            </Space>
                        </ConfigProvider>
                    </div>
                </> : ''
            }

        </div>
    )
}
