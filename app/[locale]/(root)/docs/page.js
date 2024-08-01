'use client'

import {
  DELETE_FILE,
  GET_ALL_TAX_YEAR,
  GET_FILES,
  GET_USER_FILE_BY_TAX_YEAR,
  UPLOAD_FILES,
} from '@/scripts/api'
import {deleteData, getData, postData} from '@/scripts/api-service'
import {alertPop} from '@/scripts/helper'
import {CaretRightOutlined} from '@ant-design/icons'
import {
  Avatar,
  Button,
  Card,
  Col,
  Collapse,
  ConfigProvider,
  Empty,
  Form,
  List,
  Modal,
  Row,
  Select,
  Space,
  theme,
  Upload,
} from 'antd'
import {useEffect, useState} from 'react'
const {Dragger} = Upload

export default function Doc() {
  const [selected, setSelected] = useState()
  const [taxYears, setTaxYears] = useState()
  const [fileList, setFileList] = useState()
  const [fileType, setFileType] = useState()
  const [form] = Form.useForm()

  const {token} = theme.useToken()
  const panelStyle = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: 'none',
  }

  const props = {
    name: 'file',
    multiple: false,
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    beforeUpload() {
      return false
    },
    onChange(info) {
      const {status} = info.file
      if (status !== 'uploading') {
        console.log(info.file, info.fileList)
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

  const getAllTaxYear = async () => {
    let res = await getData(GET_ALL_TAX_YEAR)

    if (res) {
      let masterData = res?.data

      setTaxYears(masterData)
      setSelected(masterData[0])
    }
  }

  const getTaxFileByYear = async () => {
    let res = await getData(GET_USER_FILE_BY_TAX_YEAR + `?tax_year=${selected}`)

    if (res) {
      setFileList(res?.data)
    }
  }

  const getPageFiles = async () => {
    let res = await getData(GET_FILES)

    if (res) {
      let masterData = res?.data[0]
      setFileType(masterData?.file_type)
      getTaxFileByYear()
    }
  }

  const deleteFile = async (fileId) => {
    Modal.warning({
      title: 'Are you sure you want to delete this file?',
      // content: 'some messages...some messages...',
      async onOk() {
        let res = await deleteData(DELETE_FILE + fileId)
        if (res) {
          setFileList((l) => l.filter((item) => item.id !== fileId))
          alertPop('success', res?.data?.message)
        }
      },
    })
  }

  const isPDF = (file_path) => {
    if (file_path) {
      if (file_path.includes('.pdf')) return true
      else return false
    } else return false
  }

  const onFinish = async (values) => {
    let formData = new FormData()

    formData.append('file_type', values?.file_type) //append the values with key, value pair
    formData.append('img', values?.Img?.file)

    let res = await postData(UPLOAD_FILES, formData, null, true)

    if (res) {
      if (res.code === 'error') {
        form.setFields(res?.errors)
      } else {
        form.resetFields()
        getTaxFileByYear()
      }
    }
  }

  const getItems = (panelStyle) => [
    {
      key: '1',
      label: (
        <h2 className='text-[16px] font-semibold'>Upload your Tax documents</h2>
      ),
      children: (
        <Card>
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
                name='Img'
                rules={[
                  {
                    required: true,
                    message: 'Please input File!',
                  },
                ]}
              >
                <Dragger {...props}>
                  <p className='ant-upload-drag-icon'>
                    <img
                      className='m-auto'
                      src='/assets/images/download.png'
                      alt='download'
                    />
                  </p>
                  <p className='ant-upload-text'>File size limit 20 mb</p>
                  <div className='ant-upload-hint mt-3'>
                    <div className='refer-friend-button w-72 m-auto py-2.5'>
                      <Space>
                        <img src='/assets/icons/file.svg' alt='Select File' />
                        Select File
                      </Space>
                    </div>
                    <p className='mt-3 font-semibold'>or drop a file</p>
                  </div>
                </Dragger>
              </Form.Item>
            </Form>
          </ConfigProvider>
        </Card>
      ),
      style: panelStyle,
    },
  ]

  useEffect(() => {
    if (selected) {
      getTaxFileByYear()
    }
  }, [selected])

  useEffect(() => {
    getAllTaxYear()
    getPageFiles()
  }, [])

  return (
    <div className='container px-0 mx-auto my-6 h-full'>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col className='gutter-row ' xs={24} sm={24} md={6}>
          <div className='bg-white p-6 my-5 rounded-xl'>
            <h3 className='font-semibold text-[18px] leading-[22px] text-black'>
              Tax Year
            </h3>
            <List
              className='mt-5'
              size='large'
              dataSource={taxYears}
              renderItem={(item) => (
                <List.Item
                  onClick={() => setSelected(item)}
                  className={
                    selected === item
                      ? 'bg-[#E2ECE5] rounded-xl cursor-pointer font-bold text-base leading-[22px] !text-[#126A25]'
                      : 'cursor-pointer font-normal text-base leading-[22px]'
                  }
                  style={{'border-block-end': 0}}
                >
                  {item}
                </List.Item>
              )}
            />
          </div>
        </Col>

        <Col className='gutter-row' xs={24} sm={24} md={18}>
          <Collapse
            bordered={false}
            expandIcon={({isActive}) => (
              <CaretRightOutlined rotate={isActive ? 90 : 0} />
            )}
            style={{
              background: token.colorBgContainer,
            }}
            items={getItems(panelStyle)}
          />

          <div className='bg-white p-6 my-5 rounded-xl'>
            <h3 className='font-semibold text-[18px] leading-[22px] text-black'>
              Documents
            </h3>

            {fileList?.length ? (
              <>
                <List
                  className='mt-5'
                  itemLayout='horizontal'
                  dataSource={fileList}
                  renderItem={(item, index) => (
                    <List.Item
                      actions={[
                        <a
                          key='list-loadmore-edit cursor-pointer'
                          href={`${process.env.NEXT_PUBLIC_PUBLIC_URL}${item.file_path}`}
                          target='_blank'
                        >
                          <img
                            src='/assets/icons/folder.svg'
                            width={16}
                            height={16}
                            alt='folder'
                          />
                        </a>,
                        <div
                          className='cursor-pointer'
                          onClick={() => {
                            deleteFile(item.id)
                          }}
                        >
                          <img
                            src='/assets/icons/delete.svg'
                            width={16}
                            height={16}
                            alt='folder'
                          />
                        </div>,
                      ]}
                    >
                      <List.Item.Meta
                        avatar={
                          isPDF(item.file_path) ? (
                            <>
                              <img
                                src='/assets/images/Image.png'
                                alt='delete'
                              />
                              {/* <object data={`${process.env.NEXT_PUBLIC_PUBLIC_URL}public/${item.file_path}`} type="application/pdf" width="100%" height="100%">
                            <p><a href={`${process.env.NEXT_PUBLIC_PUBLIC_URL}public/${item.file_path}`}></a></p>
                          </object> */}
                            </>
                          ) : (
                            <Avatar
                              shape='square'
                              size={64}
                              src={`${process.env.NEXT_PUBLIC_PUBLIC_URL}${item.file_path}`}
                            />
                          )
                        }
                        title={
                          <div>
                            <div className='font-bold text-[13px] leading-[18px] text-[#020617]'>
                              {item.file_name}
                            </div>
                            <div className='font-normal text-xs leading-[17px] text-custom-gray'>
                              {item.title}
                            </div>
                          </div>
                        }
                        description=''
                      />
                    </List.Item>
                  )}
                />
              </>
            ) : (
              <Empty description={false} />
            )}
          </div>
        </Col>
      </Row>
    </div>
  )
}
