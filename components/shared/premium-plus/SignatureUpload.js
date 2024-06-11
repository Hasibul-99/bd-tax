import React from 'react'
import { useEffect, useRef, useState } from 'react';
import { CloseCircleOutlined, FileTextOutlined } from '@ant-design/icons';
import { Button, Checkbox, Col, ConfigProvider, Row, Space, Typography, Upload } from 'antd';
import SignatureCanvas from 'react-signature-canvas';
import { postData } from '@/scripts/api-service';
import { SAVE_USER_SIGNATURE, UPLOAD_FILES } from '@/scripts/api';

const { Title } = Typography;

export default function SignatureUpload({ offsetWidth = 1000, setShow }) {
    const signPad = useRef({});
    const [file, setFile] = useState();
    const [isConfirm, setIsConfirm] = useState();

    const props = {
        accept: ".png,.jpg,.jpge",
        beforeUpload: (file) => {
            setFile(file);
            return false;
        },
    };

    const handelSubmit = async () => {
        console.log("hello", signPad.current.toDataURL());
        if (file) {
            const formData = new FormData();
            formData.append("img", file);
            formData.append("file_type", "101");

            let res = await postData(UPLOAD_FILES, formData);

            if (res) {
                setShow(3)
            }
        } else {
            const formData = new FormData();
            formData.append("signature ", signPad.current.toDataURL());

            let res = await postData(SAVE_USER_SIGNATURE, formData);

            if (res) {
                setShow(3)
            }
        }
    }

    return (
        <div>
            <Row gutter={16}>
                <Col className="gutter-row" span={16}>
                    <Title level={4}>Please sign the box below with your finger</Title>
                </Col>
                <Col className="gutter-row text-right" span={8}>
                    <Upload {...props}>
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
                            <Button type="primary" className='px-10 flex m-auto'>
                                <FileTextOutlined className='mt-1' />
                                Upload Signature File
                            </Button>
                        </ConfigProvider>
                    </Upload>

                </Col>
            </Row>

            <div className='border rounded border-slate-300 relative'>
                <SignatureCanvas penColor='black' ref={signPad} className="border-2 border-black "
                    canvasProps={{ width: offsetWidth, height: 200, className: 'sigCanvas' }} />

                <div className='text-green-700 absolute right-[15px] top-[85%] cursor-pointer' onClick={() => { signPad.current.clear() }}>
                    <Space>
                        <CloseCircleOutlined />
                        Clear Sign
                    </Space>
                </div>
            </div>

            <div className='text-center mt-6'>
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
                    <Checkbox onChange={(e) => { setIsConfirm(e.target.checked) }}>I certify all docs provided by me is accurate.</Checkbox>
                    <br />
                    <Space>
                        <Button type="primary" disabled={!isConfirm} className='px-10 mt-5 flex m-auto' onClick={() => { handelSubmit() }}>
                            Submit
                        </Button>
                    </Space>
                </ConfigProvider>
            </div>
        </div>
    )
}
