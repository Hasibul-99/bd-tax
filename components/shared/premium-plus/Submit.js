import { CloseCircleOutlined, FileTextOutlined } from '@ant-design/icons';
import { Button, Col, ConfigProvider, Row, Space, Typography, Upload } from 'antd';
import { useRef, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';

const { Title } = Typography;

export default function Submit() {
  const ref = useRef(null);
  const signPad = useRef({});
  const [file, setFile] = useState();
  const props = {
    beforeUpload: (file) => {
      return false;
    },
  };


  const handelSubmit = () => {
    console.log("hello", signPad.current.toDataURL());
  }

  return (
    <div ref={ref} className='mt-12' >
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
          canvasProps={{ width: ref.current ? ref.current.offsetWidth : 1000, height: 200, className: 'sigCanvas' }} />

        <div className='text-green-700 absolute right-[15px] top-[85%] cursor-pointer' onClick={() => { signPad.current.clear() }}>
          <Space>
            <CloseCircleOutlined />
            Clear Sign
          </Space>
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
          <Space>
            <Button type="primary" className='px-10 mt-5 flex m-auto' onClick={() => { handelSubmit() }}>
              Submit
            </Button>
          </Space>
        </ConfigProvider>
      </div>
    </div>
  )
}
