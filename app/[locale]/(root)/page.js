import { Space, ConfigProvider, Button } from 'antd';

export default function Home() {
  return (
    <div className="container mx-auto px-30 ">
      <div className='bg-white py-10 px-4'>
        <h3 className='text-xl font-semibold'>Welcome back, Tareq</h3>
        <div className='text-center bg-slate-100 mt-4 py-5 rounded-md '>
          <h5 className='text-base font-semibold'>Tax Year 2022-2023</h5>
          <p>Please choose a Tax Prep package </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 bg-white pb-10 px-4">

        <div className="block rounded-lg border bg-transparent text-surface shadow-secondary-1 border-[#D4AF37] relative">
          <div className='bg-[#FFFDCC] border border-[#D4AF37] rounded-xl absolute px-2 py-1 top-[-18px] start-1/3'>Most Popular</div>
          <div className="bg-[#FFFDCC] rounded-tl-xl rounded-tr-xl border-b-2 border-[#D4AF37] px-6 py-3">
            <h1 className="font-bold mb-2">
              <Space>
                <img src='/assets/images/Premium-Plus.png' alt="Premium Plus" />
                Premium Plus (৳ 2950)
              </Space>
            </h1>
            <p className='my-2'>Relax! Our Tax experts at BDTax handle it all. Trust us for seamless tax prep and submission. Stress-free tax season starts here</p>

            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#D4AF37",
                },
                components: {
                  Button: {
                    colorPrimary: "#D4AF37",
                  },
                },
              }}
            >
              <Button type="primary" className='w-full' size='large'>Select</Button>
            </ConfigProvider>
          </div>
          <div className="p-6">
            <ul>
              <li className="flex gap-x-2">
                <div>
                  <img src='/assets/icons/star.svg' alt="Premium Plus" width={80} className='mt-1' />
                </div>
                <p className='font-semibold'>Available in Metro City only: Dhaka, Narayanganj, Gazipur, Chattogram, Comilla, Rajshahi, Rangpur, Sylhet, Mymensingh, Barishal & Khulna</p>
              </li>
              <li className="flex gap-x-2 pt-1">
                <div>
                  <img src='/assets/icons/star.svg' alt="Premium Plus" width={35} className='mt-1' />
                </div>
                <p className=''>Our experienced tax consultant will prepare your tax return</p>
              </li>
              <li className="flex gap-x-2 pt-1"><div>
                <img src='/assets/icons/star.svg' alt="Premium Plus" width={30} className='mt-1' />
              </div>
                <p className=''>Submit your tax return by the BDTax team</p>
              </li>
              <li className="flex gap-x-2 pt-1"><div>
                <img src='/assets/icons/star.svg' alt="Premium Plus" width={30} className='mt-1' />
              </div>
                <p>Unlimited download of your tax return PDF file</p>
              </li>
            </ul>
          </div>
          <div className="border-t-2 border-[#D4AF37] px-6 py-3">
            <h5 className="mb-2 font-semibold leading-tight text-primary">
              Orhter Value Added Services
            </h5>

            <ul>
              <li className="flex gap-x-2 pt-1">
                <div>
                  <img src='/assets/icons/Check.svg' alt="Premium Plus" width={35} className='mt-1' />
                </div>
                <p className=''>Get 24/7 support from our online BDTax specialists</p>
              </li>
              <li className="flex gap-x-2 pt-1"><div>
                <img src='/assets/icons/Check.svg' alt="Premium Plus" width={30} className='mt-1' />
              </div>
                <p className=''>Store your return related documents securely</p>
              </li>
              <li className="flex gap-x-2 pt-1"><div>
                <img src='/assets/icons/Check.svg' alt="Premium Plus" width={30} className='mt-1' />
              </div>
                <p>Receive bank-level data encryption and protection</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="block rounded-lg border bg-transparent text-surface shadow-secondary-1 border-[#4B7F52] relative">
          <div className="bg-[#dffdd1] rounded-tl-xl rounded-tr-xl border-b-2 border-[#4B7F52] px-6 py-3">
            <h1 className="font-bold mb-2">
              <Space>
                <img src='/assets/images/Auto Layout Horizontal (1).png' alt="Premium Plus" />
                Premium (৳ 2450)
              </Space>
            </h1>
            <p className='my-2'>Relax! Our Tax experts at BDTax handle it all. Trust us for seamless tax prep and submission. Stress-free tax season starts here</p>

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
              <Button type="primary" className='w-full' size='large'>Select</Button>
            </ConfigProvider>
          </div>
          <div className="p-6">
            <ul>
              <li className="flex gap-x-2">
                <div>
                  <img src='/assets/icons/Check.svg' alt="Premium Plus" width={80} className='mt-1' />
                </div>
                <p className='font-semibold'>Available in Metro City only: Dhaka, Narayanganj, Gazipur, Chattogram, Comilla, Rajshahi, Rangpur, Sylhet, Mymensingh, Barishal & Khulna</p>
              </li>
              <li className="flex gap-x-2 pt-1">
                <div>
                  <img src='/assets/icons/Check.svg' alt="Premium Plus" width={35} className='mt-1' />
                </div>
                <p className=''>Our experienced tax consultant will prepare your tax return</p>
              </li>
              <li className="flex gap-x-2 pt-1"><div>
                <img src='/assets/icons/Check.svg' alt="Premium Plus" width={30} className='mt-1' />
              </div>
                <p className=''>Submit your tax return by the BDTax team</p>
              </li>
              <li className="flex gap-x-2 pt-1"><div>
                <img src='/assets/icons/Check.svg' alt="Premium Plus" width={30} className='mt-1' />
              </div>
                <p>Unlimited download of your tax return PDF file</p>
              </li>
            </ul>
          </div>
          <div className="border-t-2 border-[#4B7F52] px-6 py-3">
            <h5 className="mb-2 font-semibold leading-tight text-primary">
              Orhter Value Added Services
            </h5>

            <ul>
              <li className="flex gap-x-2 pt-1">
                <div>
                  <img src='/assets/icons/Check.svg' alt="Premium Plus" width={35} className='mt-1' />
                </div>
                <p className=''>Get 24/7 support from our online BDTax specialists</p>
              </li>
              <li className="flex gap-x-2 pt-1"><div>
                <img src='/assets/icons/Check.svg' alt="Premium Plus" width={30} className='mt-1' />
              </div>
                <p className=''>Store your return related documents securely</p>
              </li>
              <li className="flex gap-x-2 pt-1"><div>
                <img src='/assets/icons/Check.svg' alt="Premium Plus" width={30} className='mt-1' />
              </div>
                <p>Receive bank-level data encryption and protection</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="block rounded-lg border bg-transparent text-surface shadow-secondary-1 border-[#0F172A] relative">
          <div className="bg-[#f5f5f5] rounded-tl-xl rounded-tr-xl border-b-2 border-[#0F172A] px-6 py-3">
            <h1 className="font-bold mb-2">
              <Space>
                <img src='/assets/images/Auto Layout Horizontal (2).png' alt="Premium Plus" />
                Premium (৳ 2450)
              </Space>
            </h1>
            <p className='my-2'>Relax! Our Tax experts at BDTax handle it all. Trust us for seamless tax prep and submission. Stress-free tax season starts here</p>

            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#ccc",
                },
                components: {
                  Button: {
                    colorPrimary: "#ccc",
                  },
                },
              }}
            >
              <Button type="primary" className='w-full border-[#0F172A] text-[#0F172A]' size='large'>Select</Button>
            </ConfigProvider>
          </div>
          <div className="p-6">
            <ul>
              <li className="flex gap-x-2">
                <div>
                  <img src='/assets/icons/Check.svg' alt="Premium Plus" width={80} className='mt-1' />
                </div>
                <p className='font-semibold'>Available in Metro City only: Dhaka, Narayanganj, Gazipur, Chattogram, Comilla, Rajshahi, Rangpur, Sylhet, Mymensingh, Barishal & Khulna</p>
              </li>
              <li className="flex gap-x-2 pt-1">
                <div>
                  <img src='/assets/icons/Check.svg' alt="Premium Plus" width={35} className='mt-1' />
                </div>
                <p className=''>Our experienced tax consultant will prepare your tax return</p>
              </li>
              <li className="flex gap-x-2 pt-1"><div>
                <img src='/assets/icons/Check.svg' alt="Premium Plus" width={30} className='mt-1' />
              </div>
                <p className=''>Submit your tax return by the BDTax team</p>
              </li>
              <li className="flex gap-x-2 pt-1"><div>
                <img src='/assets/icons/Check.svg' alt="Premium Plus" width={30} className='mt-1' />
              </div>
                <p>Unlimited download of your tax return PDF file</p>
              </li>
            </ul>
          </div>
          <div className="border-t-2 border-[#0F172A] px-6 py-3">
            <h5 className="mb-2 font-semibold leading-tight text-primary">
              Orhter Value Added Services
            </h5>

            <ul>
              <li className="flex gap-x-2 pt-1">
                <div>
                  <img src='/assets/icons/Check.svg' alt="Premium Plus" width={35} className='mt-1' />
                </div>
                <p className=''>Get 24/7 support from our online BDTax specialists</p>
              </li>
              <li className="flex gap-x-2 pt-1"><div>
                <img src='/assets/icons/Check.svg' alt="Premium Plus" width={30} className='mt-1' />
              </div>
                <p className=''>Store your return related documents securely</p>
              </li>
              <li className="flex gap-x-2 pt-1"><div>
                <img src='/assets/icons/Check.svg' alt="Premium Plus" width={30} className='mt-1' />
              </div>
                <p>Receive bank-level data encryption and protection</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
