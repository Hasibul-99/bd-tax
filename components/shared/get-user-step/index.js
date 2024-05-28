import { ConfigProvider, Button, Space } from 'antd';
import Link from 'next/link'

export default function GetUserStep({steps, addiInfo, context="premium-plus"}) {
    const showIcons = (idx) => {
        if (idx === 0) return '/assets/icons/PropertyPersonalInfo.svg'
        else if (idx === 1) return '/assets/icons/PropertyDocuments.svg'
        else if (idx === 2) return '/assets/icons/PropertyPayment.svg'
        else if (idx === 3) return '/assets/icons/PropertyPrepare.svg'
        else if (idx === 4) return '/assets/icons/PropertySubmitReturn.svg'
        else if (idx === 0) return '/assets/icons/PropertyPersonalInfo.svg'
    }

    return (
        <div className='bg-white py-5 px-4 mt-4 rounded'>
            <h5 className='text-base font-semibold mb-6'>This is what to expect next</h5>

            {
                steps?.length ? <>
                    {
                        steps.map((step, idx) => <div key={idx} className='bg-slate-100 mb-6 pt-6 pb-5 px-4 mx-auto grid grid-cols-1 md:grid-cols-2 rounded-md'>
                        <div>
                            <h5 className='text-sm font-semibold'>
                                <Space>
                                    <span className='bg-slate-200 px-3 py-2 rounded-full'>{idx + 1}</span>
                                    {step?.title}
                                </Space>
                            </h5>
                        </div>

                        <div className='text-right ml-auto'>
                            <h5 className='text-sm font-semibold'>
                                <img src={showIcons(idx)} width={40} alt="Premium Plus" />
                            </h5>
                        </div>
                    </div>)
                    }
                </> : ''
            }


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
                        <Link href={`${context}/process`}>
                            {addiInfo?.go_button_title || "Let's GO"}
                        </Link>
                    </Button>
                </ConfigProvider>
            </div>
        </div>
    )
}
