import { GET_DOWNLOAD_TAX_FILE, SAVE_CONSENT_DOC } from '@/scripts/api';
import { getData, postData } from '@/scripts/api-service';
import { Typography, Checkbox, ConfigProvider, Button  } from 'antd';
import { useEffect, useRef, useState } from 'react';
const { Title } = Typography;

export default function ShowDownloadTaxFile({ setShow }) {
    const [fileData, setFileData] = useState();
    const [isConfirm, setIsConfirm] = useState();

    const getDownloadTaxFile = async () => {
        let res = await getData(GET_DOWNLOAD_TAX_FILE);

        if (res) {
            console.log(res);
            setFileData(res?.data)
        }
    }

    const handelSubmit = async() => {
        let res = await postData(SAVE_CONSENT_DOC);

        if (res) {
            setShow(2)
        }
    }
 
    useEffect(() => {
        getDownloadTaxFile()
    }, [])

    return (
        <div>
            <Title level={4}>Please review your Tax return form</Title>

            {
                fileData?.pdf_file_path ? <>
                    <object data={fileData?.pdf_file_path} type="application/pdf" width="100%" height="500vh">
                        <p><a href={fileData?.pdf_file_path}></a></p>
                    </object>
                </> : ''
            }


            <div className='text-center mt-8'>
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
                    <Checkbox onChange={(e) => {setIsConfirm(e.target.checked)}}>I certify all docs provided by me is accurate.</Checkbox>
                        <Button type="primary" disabled={!isConfirm} className='px-10 mt-5 flex m-auto' onClick={() => { handelSubmit() }}>
                        Approve & Sign
                        </Button>
                </ConfigProvider>
            </div>
        </div>
    )
}
