'use client'

import PersonalInfo from '@/components/shared/StandardForm/PersonalInfo';
import WelcomeMessage from '@/components/shared/WelcomeMessage';
import Doc from '@/components/shared/premium-plus/Doc';
import LoadingStep from '@/components/shared/premium-plus/LoadingStep';
import OrderStatus from '@/components/shared/premium-plus/OrderStatus';
import Income from '@/components/shared/StandardForm/Inome'
import Payment from '@/components/shared/premium-plus/Payment';
import Submit from '@/components/shared/premium-plus/Submit';
import { PROCESS_SALARY_DOC } from '@/scripts/api';
import { getData } from '@/scripts/api-service';
import { Steps, Space, ConfigProvider, Button } from 'antd';
import React, { useEffect, useState } from 'react';

export default function PremiumPlusProcess() {
    const [current, setCurrent] = useState(1);
    const [loadingPSD, setLoadingPSD] = useState(true);
    const [salaryData, setSalaryData] = useState()

    const onChange = (value) => {
        setCurrent(value);
    };

    const getPrecessSalaryDoc = async() => {
        let res = await getData(PROCESS_SALARY_DOC);

        if (res) {
            console.log("da", res);

            let masterData = res?.data;
            setSalaryData(masterData);
        }
    }

    useEffect(() => {
        if (current === 3) {
            getPrecessSalaryDoc()
        }
    }, [current])

    return (
        <div className="container mx-auto px-30 ">
            <div className='bg-white py-5 px-4'>
                <WelcomeMessage/>
                <div className='bg-[#dfdfdf] my-2 pt-3 pb-1 px-4 mx-auto grid grid-cols-1 md:grid-cols-2 rounded-2xl'>
                    <div>
                        <h5 className='text-base font-semibold'>
                            <Space>
                                <img src='/assets/images/Auto Layout Horizontal (2).png' alt="Premium Plus" />
                                Standard
                            </Space>
                        </h5>
                    </div>
                    <div className='md:text-right md:ml-auto'>
                        <p className='text-sm font-semibold pt-6'>
                            Tax Due: 0
                        </p>
                    </div>
                </div>

                <div className='bg-amber-100 my-2 py-5 px-4 mx-auto grid grid-cols-1 md:grid-cols-2 rounded-2xl'>
                    <div className='text-base '>
                        Upgrade to <span className='font-semibold'>Premium Plus</span>  for a hassle free tax submission.
                    </div>
                    <div className='md:text-right md:ml-auto'>
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
                            <Button type="primary" className='w-full text-slate-950 hover:text-slate-950' size='large'>
                                <Space>
                                    <img src='/assets/icons/pp.svg' alt="Premium-Plus" /> Upgrade
                                </Space>
                            </Button>
                        </ConfigProvider>
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
                                status: 'income',
                                title: 'Income',
                            },
                            {
                                status: 'payment',
                                title: 'Payment',
                            },
                            {
                                status: 'status',
                                title: 'Order Status',
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
                        current === 1 ? <PersonalInfo setCurrent={setCurrent}/> : '' 
                    }
                    {
                        current === 2 ? <Income/> : '' 
                    }
                    {
                        current === 3 ? <Payment salaryData={salaryData} setCurrent={setCurrent}/> : '' 
                    }
                    {
                        current === 4 ? <OrderStatus setCurrent={setCurrent}/> : ''
                    }
                    {
                        current === 5 ? <Submit/> : '' 
                    }
                </div>
            </div>
        </div>
    )
}
