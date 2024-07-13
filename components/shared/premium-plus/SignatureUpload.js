import {SAVE_USER_SIGNATURE, UPLOAD_FILES} from '@/scripts/api'
import {postData} from '@/scripts/api-service'
import {CloseCircleOutlined} from '@ant-design/icons'
import {
  Button,
  Checkbox,
  Col,
  ConfigProvider,
  Row,
  Space,
  Typography,
  Upload,
} from 'antd'
import {useRef, useState} from 'react'
import SignatureCanvas from 'react-signature-canvas'

const {Title} = Typography

export default function SignatureUpload({offsetWidth = 1000, setShow}) {
  const signPad = useRef({})
  const [file, setFile] = useState()
  const [isConfirm, setIsConfirm] = useState()

  const props = {
    accept: '.png,.jpg,.jpge',
    beforeUpload: (file) => {
      setFile(file)
      return false
    },
  }

  const handelSubmit = async () => {
    console.log('hello', signPad.current.toDataURL())
    if (file) {
      const formData = new FormData()
      formData.append('img', file)
      formData.append('file_type', '101')

      let res = await postData(UPLOAD_FILES, formData)

      if (res) {
        setShow(3)
      }
    } else {
      const formData = new FormData()
      formData.append('signature', signPad.current.toDataURL())

      let res = await postData(SAVE_USER_SIGNATURE, formData)

      if (res) {
        setShow(3)
      }
    }
  }

  return (
    <div className='mt-12 p-10'>
      <Row gutter={16} className='mb-3'>
        <Col className='gutter-row' span={16}>
          <Title level={4}>Please sign the box below with your finger</Title>
        </Col>
        <Col className='gutter-row text-right' span={8}>
          <Upload {...props}>
            <Button
              type='primary'
              className='refer-friend-button py-1.5 rounded-md w-52 '
            >
              {/* <FileTextOutlined /> */}
              <img
                src='/assets/icons/document-upload.svg'
                alt='document-upload'
              />
              <span className='text-[#292D32] font-medium'>
                Upload Signature File
              </span>
            </Button>
          </Upload>
        </Col>
      </Row>

      <div className='border rounded border-slate-300 signature-canvas-content relative'>
        <div className={`placeholder`}>Draw here</div>
        <SignatureCanvas
          penColor='black'
          ref={signPad}
          className='border-2 border-black '
          canvasProps={{
            width: offsetWidth,
            height: 200,
            className: 'sigCanvas',
          }}
        />

        <div
          className='text-green-700 absolute right-[15px] top-[85%] cursor-pointer'
          onClick={() => {
            signPad.current.clear()
          }}
        >
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
              colorPrimary: '#4B7F52',
            },
            components: {
              Button: {
                colorPrimary: '#4B7F52',
              },
            },
          }}
        >
          <Checkbox
            onChange={(e) => {
              setIsConfirm(e.target.checked)
            }}
          >
            <span className='font-semibold text-sm leading-[1.4] text-gray-900'>
              I autorize BDTax to submit my tax return
            </span>
          </Checkbox>
          <br />
          <Space>
            <Button
              type='primary'
              disabled={!isConfirm}
              className='prime-button w-52 m-auto mt-5'
              onClick={() => {
                handelSubmit()
              }}
            >
              Submit
            </Button>
          </Space>
        </ConfigProvider>
      </div>
    </div>
  )
}
