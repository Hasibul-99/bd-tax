import { TEMP_PACKAGES } from '@/scripts/api';
import { postData } from '@/scripts/api-service';
import { Button, Col, ConfigProvider, Row, Space } from 'antd';
import { useRouter } from "next/navigation";
import { useState } from 'react';

export default function CardViewStandard(props) {
    const { locale, packageList } = props;
    const router = useRouter();
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div>
            <div className="block rounded-lg border bg-transparent text-surface shadow-secondary-1 border-[#0F172A] relative">
                {
                    packageList ? <>
                        <div className={`bg-[#f5f5f5] rounded-tl-xl rounded-tr-xl px-6 py-3 ${showDetails ? ' border-b-2 border-[#0F172A]' : ''} `}>
                            <h1 className="font-bold">
                                <Space>
                                    <img src='/assets/images/Premium-Plus.png' alt="Premium Plus" />
                                    <span>{packageList.current_package_id_title} (৳{packageList.current_package_id_price})</span>
                                </Space>
                            </h1>
                            <p className='my-2'>{packageList.current_package_id_moredescription}</p>

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
                                <Button type="primary" className='w-full border-[#0F172A] text-[#0F172A]' size='large'>
                                    <Link href={`/${locale}/standard`}>Let's Continue</Link>
                                </Button>
                            </ConfigProvider>
                            <div className='text-center mt-5'>
                                <Button type="text" onClick={() => setShowDetails(thumb => !thumb)}>
                                    <Space>
                                        <span>Learn more </span>
                                        <img className={showDetails ? 'rotate-180' : ''} src='/assets/icons/arrow-down.svg' alt="Premium Plus" />
                                    </Space>
                                </Button>
                            </div>
                        </div>

                        {showDetails ? <>
                            <div className="p-6">
                                <ul>
                                    {
                                        packageList.current_package_more.map((item, idx) => <li className="mb-3" key={idx}>
                                            <Row gutter={16}>
                                                <Col className="gutter-row p-0" span={3}>
                                                    <img src='/assets/icons/Check.svg' alt="Premium Plus" width={25} className='mt-1' />
                                                </Col>
                                                <Col className="gutter-row pt-1" span={21}>
                                                    <p className={idx === 0 ? 'font-semibold' : ''}>{item}</p>

                                                </Col>
                                            </Row>
                                        </li>)
                                    }
                                </ul>
                            </div>
                        </> : ''}

                    </> : ''
                }
            </div>
        </div>
    )
}