import {DELETE_FILE, GET_FILES, UPLOAD_FILES} from '@/scripts/api'
import {deleteData, getData, postData} from '@/scripts/api-service'
import {alertPop} from '@/scripts/helper'
import {
  CheckCircleOutlined,
  ExclamationCircleFilled,
  RightOutlined,
} from '@ant-design/icons'
import {
  Avatar,
  Button,
  Card,
  Col,
  ConfigProvider,
  Form,
  List,
  Modal,
  Row,
  Select,
  Space,
  Typography,
  Upload,
} from 'antd'
import {useEffect, useState} from 'react'
const {Dragger} = Upload
const {confirm} = Modal
const {Title, Text} = Typography

export default function Doc({setCurrent, nextCurrent}) {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  const [fileType, setFileType] = useState()
  const [uploadedFile, setUploadedFile] = useState()
  const [floading, setfLoading] = useState(false)
  const [storeFile, setStoreFile] = useState(true)
  const [fileName, setFileName] = useState()
  const [fileLoading, setFileLoading] = useState(true)

  const props = {
    name: 'file',
    multiple: false,
    accept: '.jpg,.png,.pdf',
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    beforeUpload() {
      return false
    },
    onChange(info) {
      const {status} = info.file
      if (status !== 'uploading') {
        setFileLoading(true)
        console.log(info.file, info.fileList)
        setStoreFile(false)
        setFileName(info.file.name)
        setTimeout(() => {
          setFileLoading(false)
        }, 1000)
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`)
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`)
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files)
    },
  }

  const getPageFiles = async () => {
    let res = await getData(GET_FILES)

    if (res) {
      let masterData = res?.data[0]
      setFileType(masterData?.file_type)
      setUploadedFile(masterData?.user_upload)
    }
  }

  const onFinish = async (values) => {
    setfLoading(true)
    let formData = new FormData()

    formData.append('file_type', values?.file_type) //append the values with key, value pair
    formData.append('img', values?.img?.file)

    let res = await postData(UPLOAD_FILES, formData, null, true)

    if (res) {
      if (res.code === 'error') {
        form.setFields(res?.errors)
      } else {
        form.resetFields()
        let masterData = res?.data?.data

        setUploadedFile((oldArray) => [...oldArray, masterData])
        setStoreFile(true)
        setFileName(null)
        setFileLoading(true)
      }

      setfLoading(false)
    }
  }

  const deleteFile = (fileId) => {
    confirm({
      title: 'Are you sure you want to delete this file?',
      icon: <ExclamationCircleFilled />,
      // content: 'some messages...some messages...',
      async onOk() {
        let res = await deleteData(DELETE_FILE + fileId)
        if (res) {
          setUploadedFile((l) => l.filter((item) => item.id !== fileId))
          alertPop('success', res?.data?.message)
        }
      },
      onCancel() {
        console.log('Cancel')
      },
    })
  }

  useEffect(() => {
    getPageFiles()
  }, [])

  return (
    <>
      {loading ? (
        <>
          <div className='text-center h-96 flex justify-items-center items-center relative'>
            <div className='w-[700px] absolute inset-y-1/3 inset-x-1/3'>
              <div className='relative w-full sm:w-1/2 bg-gray-200 rounded'>
                <div
                  style={{width: '100%'}}
                  className='absolute top-0 h-4 rounded shim-green'
                />
              </div>
            </div>

            <div className='m-auto  '>
              <p>Curious about owed taxed? Hang tight as we </p>
              <p>process your dicument</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className='py-5 px-5'>
            <h3 className='text-xl font-semibold'>
              Please upload your Tax documents
            </h3>

            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: '#126A25',
                },
                components: {
                  Button: {
                    colorPrimary: '#126A25',
                  },
                },
              }}
            >
              <Form
                className='text-left'
                name='basic'
                onFinish={onFinish}
                autoComplete='off'
                size='large'
                form={form}
              >
                <Row gutter={16}>
                  <Col className='gutter-row' span={18}>
                    <Form.Item
                      className='mb-1'
                      name='file_type'
                      rules={[
                        {
                          required: true,
                          message: 'Please input file type',
                        },
                      ]}
                    >
                      <Select
                        showSearch
                        placeholder='Select a file type'
                        optionFilterProp='children'
                        className='w-full my-3'
                        suffixIcon={
                          <img
                            src='/assets/icons/select-icon.svg'
                            alt='select-icon'
                          />
                        }
                        options={
                          fileType?.length
                            ? fileType.map((item) => ({
                                value: item.id,
                                label: item.title,
                              }))
                            : []
                        }
                      />
                    </Form.Item>
                  </Col>
                  <Col className='gutter-row' span={6}>
                    <Form.Item className='mb-1'>
                      <Button
                        loading={floading}
                        type='primary'
                        htmlType='submit'
                        className='mt-2 prime-button  m-auto'
                      >
                        Submit
                      </Button>
                    </Form.Item>
                  </Col>
                </Row>

                <Form.Item
                  name='img'
                  rules={[
                    {
                      required: true,
                      message: 'Please input File!',
                    },
                  ]}
                >
                  <Dragger {...props}>
                    {storeFile ? (
                      <>
                        <p className='ant-upload-drag-icon'>
                          <img
                            className='m-auto'
                            src='/assets/images/download.png'
                            alt='download'
                          />
                        </p>
                        <p className='ant-upload-text'>File size limit 20 mb</p>
                        <div className='ant-upload-hint mt-3'>
                          <div className='refer-friend-button w-full md:w-72 m-auto py-2.5'>
                            <Space>
                              <img
                                src='/assets/icons/file.svg'
                                alt='Select File'
                              />
                              Select File
                            </Space>
                          </div>
                          <p className='mt-3 font-semibold'>or drop a file</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <Card className='w-8/12 mx-auto'>
                          <Space className='gap-6'>
                            {fileLoading ? (
                              <img
                                src='/assets/icons/Spin.gif'
                                className='w-20'
                              />
                            ) : (
                              <CheckCircleOutlined
                                style={{fontSize: '30px', color: '#23d049'}}
                              />
                            )}

                            <div className='text-left'>
                              <Title level={5}>{fileName}</Title>
                              <Text>
                                Click "Submit" to upload your file. To replace
                                it, either upload a new file or drag and drop
                                the replacement into the upload area.
                              </Text>
                            </div>
                          </Space>
                        </Card>
                      </>
                    )}
                  </Dragger>
                </Form.Item>
              </Form>
            </ConfigProvider>

            {uploadedFile?.length ? (
              <>
                <List
                  className=''
                  itemLayout='horizontal'
                  dataSource={uploadedFile || []}
                  footer={<div></div>}
                  renderItem={(item, index) => (
                    <List.Item
                      actions={[
                        <a
                          key={index}
                          onClick={() => {
                            deleteFile(item.id)
                          }}
                        >
                          <img
                            src='/assets/icons/delete.svg'
                            alt='Select File'
                          />
                        </a>,
                      ]}
                    >
                      <List.Item.Meta
                        avatar={
                          <Avatar
                            src={`/assets/icons/check-circle.svg`}
                            size={24}
                          />
                        }
                        title={
                          <div>
                            <h5 className='font-semibold text-[13px] leading-[18px] text-custom-slate break-words'>
                              {item.file_name}
                            </h5>
                            <span className='font-normal text-[12px] leading-[17px] text-custom-gray'>
                              {item.title}
                            </span>
                          </div>
                        }
                        // description="Salary Statement . 96KB"
                      />
                    </List.Item>
                  )}
                />
              </>
            ) : null}

            <p>
              Don’t have all the documents? Don’t worry Click “Next” and upload
              documents later.
            </p>

            <Button
              type='primary'
              htmlType='submit'
              className='prime-button gap-0 !w-52 m-auto mt-8'
              onClick={() => {
                setCurrent(nextCurrent || 3)
              }}
            >
              Next
              <RightOutlined style={{fontSize: '14px'}} />
            </Button>
          </div>
        </>
      )}
    </>
  )
}
