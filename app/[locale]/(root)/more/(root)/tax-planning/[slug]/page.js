import React from 'react'
import { Button, ConfigProvider, Space } from "antd";

export default function TaxPlanning() {
    return (
        <div className="bg-white py-6 px-6">
            <Space>
                <img src='/assets/images/Premium-Plus.png' alt="Premium Plus" />
                Premium Plus (৳ 2950)
            </Space>
            <p>Good news! Paying life insurance premiums? You can claim them for tax rebates right here in our app, thanks to the Income Tax Ordinance 1984.

                It’s a smart move to reduce your taxable income while securing your future. For a quick guide on how to claim chat with our support. Save smartly!</p>

            <div className='bg-slate-100 mt-6 py-5 px-4 mx-auto grid grid-cols-1 md:grid-cols-2 rounded-md'>
                <p>Don’t have life insurance?</p>
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
                    <Button type="primary" className='w-fit ml-auto'>Purchase Here</Button>
                </ConfigProvider>
            </div>

            <div className='text-center mt-6'>
                <Space>
                    <p>Powered By</p>
                    <img src='/assets/images/logo.png' alt="sms" className='h-6' />
                </Space>
            </div>
        </div>
    )
}
