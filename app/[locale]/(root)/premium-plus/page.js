'use client'

import { ConfigProvider, Button, Space } from 'antd';
import Link from 'next/link'

export default function PremiumPlus() {
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
        <p className='text-sm'>Excellent choice with Premium Plus! Trust us for accurate tax prep and hassle-free submission</p>
      </div>

      <div className='bg-white py-5 px-4 mt-4 rounded'>
        <h5 className='text-base font-semibold mb-6'>This is what to expect next</h5>

        <div className='bg-slate-100 mb-6 pt-6 pb-5 px-4 mx-auto grid grid-cols-1 md:grid-cols-2 rounded-md'>
          <div>
            <h5 className='text-sm font-semibold'>
              <Space>
                <span className='bg-slate-200 px-3 py-2 rounded-full'>1</span>
                Enter Personal Info
              </Space>
            </h5>
          </div>
          <div className='text-right ml-auto'>
            <h5 className='text-sm font-semibold'>
              <img src='/assets/icons/PropertyPersonalInfo.svg' width={40} alt="Premium Plus" />
            </h5>
          </div>
        </div>

        <div className='bg-slate-100 mb-6 pt-6 pb-5 px-4 mx-auto grid grid-cols-1 md:grid-cols-2 rounded-md'>
          <div>
            <h5 className='text-sm font-semibold'>
              <Space>
                <span className='bg-slate-200 px-3 py-2 rounded-full'>2</span>
                Upload documents
              </Space>
            </h5>
          </div>
          <div className='text-right ml-auto'>
            <h5 className='text-sm font-semibold'>
              <img src='/assets/icons/PropertyDocuments.svg' width={40} alt="Premium Plus" />
            </h5>
          </div>
        </div>

        <div className='bg-slate-100 mb-6 pt-6 pb-5 px-4 mx-auto grid grid-cols-1 md:grid-cols-2 rounded-md'>
          <div>
            <h5 className='text-sm font-semibold'>
              <Space>
                <span className='bg-slate-200 px-3 py-2 rounded-full'>3</span>
                Make payment
              </Space>
            </h5>
          </div>
          <div className='text-right ml-auto'>
            <h5 className='text-sm font-semibold'>
              <img src='/assets/icons/PropertyPayment.svg' width={40} alt="Premium Plus" />
            </h5>
          </div>
        </div>

        <div className='bg-slate-100 mb-6 pt-6 pb-5 px-4 mx-auto grid grid-cols-1 md:grid-cols-2 rounded-md'>
          <div>
            <h5 className='text-sm font-semibold'>
              <Space>
                <span className='bg-slate-200 px-3 py-2 rounded-full'>4</span>
                We will prepare your return
              </Space>
            </h5>
          </div>
          <div className='text-right ml-auto'>
            <h5 className='text-sm font-semibold'>
              <img src='/assets/icons/PropertyPrepare.svg' width={40} alt="Premium Plus" />
            </h5>
          </div>
        </div>

        <div className='bg-slate-100 mb-6 pt-6 pb-5 px-4 mx-auto grid grid-cols-1 md:grid-cols-2 rounded-md'>
          <div>
            <h5 className='text-sm font-semibold'>
              <Space>
                <span className='bg-slate-200 px-3 py-2 rounded-full'>5</span>
                We will submit your return
              </Space>
            </h5>
          </div>
          <div className='text-right ml-auto'>
            <h5 className='text-sm font-semibold'>
              <img src='/assets/icons/PropertySubmitReturn.svg' width={40} alt="Premium Plus" />
            </h5>
          </div>
        </div>

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
            <Button type="primary" size='large' className='md:px-10'>
              <Link href={'premium-plus/process'}>
                Let's GO
              </Link>
            </Button>
          </ConfigProvider>
        </div>
      </div>
    </div>
  )
}
