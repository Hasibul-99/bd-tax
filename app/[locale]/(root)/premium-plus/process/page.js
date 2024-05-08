'use client'

import { ConfigProvider, Button, Space } from 'antd';

export default function PremiumPlusProcess() {
    return (
        <div className="container mx-auto px-30 ">
            <div className='bg-white py-5 px-4'>
                <h3 className='text-xl font-semibold'>Welcome back, Tareq</h3>
                <div className='bg-amber-100 my-2 pt-3 pb-1 px-4 mx-auto grid grid-cols-1 md:grid-cols-2 rounded-2xl'>
                    <div>
                        <h5 className='text-base font-semibold'>
                            <Space>
                                <img src='/assets/icons/ok.svg' alt="Premium Plus" />
                                Premium Plus
                            </Space>
                        </h5>
                    </div>
                    <div className='md:text-right md:ml-auto'>
                        <p className='text-sm font-semibold'>
                            Tax Due: 25,000
                        </p>
                        <p className='text-xs'>
                            Tax Year 2023 -2024
                        </p>
                    </div>
                </div>
                <p className='text-sm'>Excellent choice with Premium Plus! Trust us for accurate tax prep and hassle-free submission</p>
            </div>
        </div>
    )
}
