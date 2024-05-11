'use client'

import Doc from '@/components/shared/premium-plus/Doc';
import LoadingStep from '@/components/shared/premium-plus/LoadingStep';
import Payment from '@/components/shared/premium-plus/Payment';
import PersonalInfo from '@/components/shared/premium-plus/PersonalInfo';
import Submit from '@/components/shared/premium-plus/Submit';
import { Steps, Space, ConfigProvider } from 'antd';
import React, { useState } from 'react';

export default function PremiumPlusProcess() {
    const [current, setCurrent] = useState(3);
    const onChange = (value) => {
        console.log('onChange:', value);
        setCurrent(value);
    };

    return (
        <div className="container mx-auto px-30 ">
            <div className='bg-white py-5 px-4'>
                <h3 className='text-xl font-semibold'>Welcome back, Tareq</h3>
                <div className='bg-amber-100 my-2 pt-3 pb-1 px-4 mx-auto grid grid-cols-1 md:grid-cols-2 rounded-2xl'>
                    <div>
                        <h5 className='text-base font-semibold'>
                            <Space>
                                <img src='/assets/images/Premium-Plus.png' alt="Premium Plus" />
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

                <ConfigProvider
                    theme={{
                        token: {
                            colorPrimary: "#126A25",
                        },
                        components: {
                            Button: {
                                colorPrimary: "#126A25",
                            },
                        },
                    }}
                >
                    <Steps
                        type="navigation"
                        size="small"
                        current={current}
                        onChange={onChange}
                        className="site-navigation-steps"
                        items={[
                            {
                                status: 'home',
                                title: 'Home',
                                icon: '',
                            },
                            {
                                status: 'personal-info',
                                title: 'Personal Info',
                            },
                            {
                                status: 'doc',
                                title: 'Doc',
                            },
                            {
                                status: 'payment',
                                title: 'Payment',
                            },
                            {
                                status: 'submit',
                                title: 'Submit',
                            },
                        ]}
                    />
                </ConfigProvider>

                <div>
                {
                        current === 0 ? <LoadingStep/> : '' 
                    }
                    {
                        current === 1 ? <PersonalInfo/> : '' 
                    }
                    {
                        current === 2 ? <Doc/> : '' 
                    }
                    {
                        current === 3 ? <Payment/> : '' 
                    }
                    {
                        current === 4 ? <Submit/> : '' 
                    }
                </div>
            </div>
        </div>
    )
}
