import { Button, Col, ConfigProvider, Row, Space } from 'antd';
import Link from 'next/link';

export default function PremiumPlus(props) {
    const { locale, pack } = props;

    return (
        <>
            {
                pack ? <>
                    <div className="block rounded-lg border bg-transparent text-surface shadow-secondary-1 border-[#D4AF37] relative">
                        <div className='bg-[#FFFDCC] border border-[#D4AF37] rounded-xl absolute px-2 py-1 top-[-18px] start-1/3'>Most Popular</div>
                        <div className="bg-[#FFFDCC] rounded-tl-xl rounded-tr-xl border-b-2 border-[#D4AF37] px-6 py-3">
                            <h1 className="font-bold">
                                <Space>
                                    <img src='/assets/images/Premium-Plus.png' alt="Premium Plus" />
                                    <span>{pack.title} (৳{pack.price})</span>
                                </Space>
                            </h1>
                            <p className='my-2'>{pack.description}</p>

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
                                <Button type="primary" className='w-full' size='large'>
                                    <Link href={`/${locale}/premium-plus`}>Select</Link>
                                </Button>
                            </ConfigProvider>
                        </div>
                        <div className="p-6">
                            <ul>
                                {
                                    pack.more.map((item, idx) =>
                                        <li key={idx} className='mb-3'>
                                            <Row gutter={16}>
                                                <Col className="gutter-row p-0" span={3}>
                                                    <img src='/assets/icons/star.svg' alt="Premium Plus" width={25} className='mt-1' />
                                                </Col>
                                                <Col className="gutter-row" span={21}>
                                                    <p className={idx === 0 ? 'font-semibold ' : ''}>{item}</p>
                                                </Col>
                                            </Row>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                        {/* <div className="border-t-2 border-[#D4AF37] px-6 py-3">
                            <h5 className="mb-2 font-semibold leading-tight text-primary">
                                Orhter Value Added Services
                            </h5>

                            <ul>
                                <li className="pt-1">
                                    <Row gutter={16}>
                                        <Col className="gutter-row p-0" span={3}>
                                            <img src='/assets/icons/Check.svg' alt="Premium Plus" width={25} className='mt-1' />
                                        </Col>
                                        <Col className="gutter-row pt-1" span={21}>
                                            <p>Get 24/7 support from our online BDTax specialists</p>
                                        </Col>
                                    </Row>
                                </li>
                                <li className="pt-1">
                                    <Row gutter={16}>
                                        <Col className="gutter-row p-0" span={3}>
                                            <img src='/assets/icons/Check.svg' alt="Premium Plus" width={25} className='mt-1' />
                                        </Col>
                                        <Col className="gutter-row pt-1" span={21}>
                                            <p>Store your return related documents securely</p>
                                        </Col>
                                    </Row>
                                </li>
                                <li className="pt-1">
                                    <Row gutter={16}>
                                        <Col className="gutter-row p-0" span={3}>
                                            <img src='/assets/icons/Check.svg' alt="Premium Plus" width={25} className='mt-1' />
                                        </Col>
                                        <Col className="gutter-row pt-1" span={21}>
                                            <p>Receive bank-level data encryption and protection</p>
                                        </Col>
                                    </Row>
                                </li>
                            </ul>
                        </div> */}
                    </div>
                </> : ''
            }
        </>
    )
}
