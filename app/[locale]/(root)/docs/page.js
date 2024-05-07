import React from 'react'
import { ConfigProvider, Button, Space } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import Link from 'next/link';


export default function Docs() {
    return (
        <div class="container mx-auto px-30 py-10 ">
            <div className='bg-white py-5 px-4 rounded-md'>
                <div className='bg-slate-100 py-5 px-4 mx-auto grid grid-cols-1 md:grid-cols-2 rounded-md'>
                    <div>
                        <h5 className='text-base font-semibold'>Tax Year 2022-2023</h5>
                        <p>Please choose a Tax Prep package </p>
                    </div>
                    <div className='text-right ml-auto'>
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
                            <Button type="primary" size='large' className='flex'>
                                <Link href={'/'}>
                                    Lets Get Started <RightOutlined style={{ fontSize: '12px', marginTop: '7px' }} />
                                </Link>
                            </Button>
                        </ConfigProvider>
                    </div>
                </div>
            </div>

            <div className='bg-white mt-5 py-5 px-4 rounded-md'>
                <div className='bg-slate-100 pt-3 pb-1 px-4 mx-auto grid grid-cols-1 md:grid-cols-2 rounded-md'>
                    <div>
                        <h5 className='text-base font-semibold'>
                            <Space>
                                <img src='/assets/icons/ok.svg' alt="Premium Plus" />
                                Tax Year 2020-2021
                            </Space>
                        </h5>
                    </div>
                    <div className='text-right ml-auto'>
                        <h5 className='text-sm font-semibold'>
                            <Space>
                                Premium Plus
                                <img src='/assets/images/Premium-Plus.png' width={40} alt="Premium Plus" />
                            </Space>
                        </h5>
                    </div>
                </div>

                <div className='pt-3 pb-1 px-4 mx-auto grid grid-cols-1 md:grid-cols-3 rounded-md'>
                    <div>
                        <Space>
                            Filling Status:
                            <span className='font-semibold'>Complete</span>
                        </Space>
                        <Space>
                            Order Date:
                            <span className='font-semibold'>Nov 25th, 2023</span>
                        </Space>
                    </div>
                    <div className=''>
                        <Space>
                            Filling Date:
                            <span className='font-semibold'>Nov 25th, 2023</span>
                        </Space>
                        <Space>
                            Total Tax Paid:
                            <span className='font-semibold'>25,000</span>
                        </Space>
                    </div>
                    <div className='text-[#126A25] underline  decoration-1 mt-auto cursor-pointer'>
                        View NBR Acknowledge Receipt
                    </div>
                </div>
            </div>

            <div className='bg-white mt-5 py-5 px-4 rounded-md'>
                <div className='bg-slate-100 pt-3 pb-1 px-4 mx-auto grid grid-cols-1 md:grid-cols-2 rounded-md'>
                    <div>
                        <h5 className='text-base font-semibold'>
                            <Space>
                                <img src='/assets/icons/ok.svg' alt="Premium Plus" />
                                Tax Year 2020-2021
                            </Space>
                        </h5>
                    </div>
                    <div className='text-right ml-auto'>
                        <h5 className='text-sm font-semibold'>
                            <Space>
                                Premium Plus
                                <img src='/assets/images/Premium-Plus.png' width={40} alt="Premium Plus" />
                            </Space>
                        </h5>
                    </div>
                </div>

                <div className='pt-3 pb-1 px-4 mx-auto grid grid-cols-1 md:grid-cols-3 rounded-md'>
                    <div>
                        <Space>
                            Filling Status:
                            <span className='font-semibold'>Complete</span>
                        </Space>
                        <Space>
                            Order Date:
                            <span className='font-semibold'>Nov 25th, 2023</span>
                        </Space>
                    </div>
                    <div className=''>
                        <Space>
                            Filling Date:
                            <span className='font-semibold'>Nov 25th, 2023</span>
                        </Space>
                        <Space>
                            Total Tax Paid:
                            <span className='font-semibold'>25,000</span>
                        </Space>
                    </div>
                    <div className='text-[#126A25] underline  decoration-1 mt-auto cursor-pointer'>
                        View NBR Acknowledge Receipt
                    </div>
                </div>
            </div>

            <div className='bg-white mt-5 py-5 px-4 rounded-md'>
                <div className='bg-slate-100 pt-3 pb-1 px-4 mx-auto grid grid-cols-1 md:grid-cols-2 rounded-md'>
                    <div>
                        <h5 className='text-base font-semibold'>
                            <Space>
                                <img src='/assets/icons/ok.svg' alt="Premium Plus" />
                                Tax Year 2020-2021
                            </Space>
                        </h5>
                    </div>
                    <div className='text-right ml-auto'>
                        <h5 className='text-sm font-semibold'>
                            <Space>
                                Premium Plus
                                <img src='/assets/images/Premium-Plus.png' width={40} alt="Premium Plus" />
                            </Space>
                        </h5>
                    </div>
                </div>

                <div className='pt-3 pb-1 px-4 mx-auto grid grid-cols-1 md:grid-cols-3 rounded-md'>
                    <div>
                        <Space>
                            Filling Status:
                            <span className='font-semibold'>Complete</span>
                        </Space>
                        <Space>
                            Order Date:
                            <span className='font-semibold'>Nov 25th, 2023</span>
                        </Space>
                    </div>
                    <div className=''>
                        <Space>
                            Filling Date:
                            <span className='font-semibold'>Nov 25th, 2023</span>
                        </Space>
                        <Space>
                            Total Tax Paid:
                            <span className='font-semibold'>25,000</span>
                        </Space>
                    </div>
                    <div className='text-[#126A25] underline  decoration-1 mt-auto cursor-pointer'>
                        View NBR Acknowledge Receipt
                    </div>
                </div>
            </div>

            <div className='bg-white mt-5 py-5 px-4 rounded-md'>
                <div className='bg-slate-100 pt-3 pb-1 px-4 mx-auto grid grid-cols-1 md:grid-cols-2 rounded-md'>
                    <div>
                        <h5 className='text-base font-semibold'>
                            <Space>
                                <img src='/assets/icons/ok.svg' alt="Premium Plus" />
                                Tax Year 2020-2021
                            </Space>
                        </h5>
                    </div>
                    <div className='text-right ml-auto'>
                        <h5 className='text-sm font-semibold'>
                            <Space>
                                Premium Plus
                                <img src='/assets/images/Premium-Plus.png' width={40} alt="Premium Plus" />
                            </Space>
                        </h5>
                    </div>
                </div>

                <div className='pt-3 pb-1 px-4 mx-auto grid grid-cols-1 md:grid-cols-3 rounded-md'>
                    <div>
                        <Space>
                            Filling Status:
                            <span className='font-semibold'>Complete</span>
                        </Space>
                        <Space>
                            Order Date:
                            <span className='font-semibold'>Nov 25th, 2023</span>
                        </Space>
                    </div>
                    <div className=''>
                        <Space>
                            Filling Date:
                            <span className='font-semibold'>Nov 25th, 2023</span>
                        </Space>
                        <Space>
                            Total Tax Paid:
                            <span className='font-semibold'>25,000</span>
                        </Space>
                    </div>
                    <div className='text-[#126A25] underline  decoration-1 mt-auto cursor-pointer'>
                        View NBR Acknowledge Receipt
                    </div>
                </div>
            </div>

            <div className='bg-white mt-5 py-5 px-4 rounded-md'>
                <div className='bg-slate-100 pt-3 pb-1 px-4 mx-auto grid grid-cols-1 md:grid-cols-2 rounded-md'>
                    <div>
                        <h5 className='text-base font-semibold'>
                            <Space>
                                <img src='/assets/icons/ok.svg' alt="Premium Plus" />
                                Tax Year 2020-2021
                            </Space>
                        </h5>
                    </div>
                    <div className='text-right ml-auto'>
                        <h5 className='text-sm font-semibold'>
                            <Space>
                                Premium Plus
                                <img src='/assets/images/Premium-Plus.png' width={40} alt="Premium Plus" />
                            </Space>
                        </h5>
                    </div>
                </div>

                <div className='pt-3 pb-1 px-4 mx-auto grid grid-cols-1 md:grid-cols-3 rounded-md'>
                    <div>
                        <Space>
                            Filling Status:
                            <span className='font-semibold'>Complete</span>
                        </Space>
                        <Space>
                            Order Date:
                            <span className='font-semibold'>Nov 25th, 2023</span>
                        </Space>
                    </div>
                    <div className=''>
                        <Space>
                            Filling Date:
                            <span className='font-semibold'>Nov 25th, 2023</span>
                        </Space>
                        <Space>
                            Total Tax Paid:
                            <span className='font-semibold'>25,000</span>
                        </Space>
                    </div>
                    <div className='text-[#126A25] underline  decoration-1 mt-auto cursor-pointer'>
                        View NBR Acknowledge Receipt
                    </div>
                </div>
            </div>
        </div>
    )
}
