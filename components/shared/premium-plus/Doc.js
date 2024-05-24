import { Select, Upload, ConfigProvider, Space, List, Avatar, Button, Row, Col } from "antd";
const { Dragger } = Upload;
import { RightOutlined } from '@ant-design/icons';
import { useState } from "react";


const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

export default function Doc() {
  const [loading, setLoading] = useState(false);

  const props = {
    name: 'file',
    multiple: true,
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    beforeUpload() {
      return false;
    },
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  return (
    <>
      {
        loading ? <>
          <div className='text-center h-96 flex justify-items-center items-center relative'>
            <div className="w-[700px] absolute inset-y-1/3 inset-x-1/3">
              <div className="relative w-full sm:w-1/2 bg-gray-200 rounded">
                <div style={{ width: '100%' }} className="absolute top-0 h-4 rounded shim-green" />
              </div>
            </div>

            <div className="m-auto  ">
              <p>Curious about owed taxed? Hang tight as we </p>
              <p>process your dicument</p>
            </div>
          </div>
        </> : <>
          <div className='py-10 px-20'>
            <h3 className='text-xl font-semibold'>Please upload your Tax documents</h3>

            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#126A25",
                },
                components: {
                  Button: {
                    colorPrimary: "#126A25",
                  },
                },
              }}
            >
              <Row gutter={16}>
                <Col className="gutter-row" span={20}>
                  <Select
                    showSearch
                    placeholder="Select a file type"
                    optionFilterProp="children"
                    className="w-full my-3"
                    options={[
                      {
                        value: 'jack',
                        label: 'Salay statement',
                      },
                      {
                        value: 'lucy',
                        label: 'Bank Statemant',
                      },
                      {
                        value: 'tom',
                        label: 'Insuranse statement ',
                      },
                    ]}
                  />
                </Col>
                <Col className="gutter-row" span={4}>
                  <Button type="primary" className='px-10 mt-3 flex m-auto' >
                    Submit
                  </Button>
                </Col>
              </Row>


              <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                  <img className="m-auto" src="/assets/images/download.png" alt="download" />
                </p>
                <p className="ant-upload-text">File size limit 20 mb</p>
                <div className="ant-upload-hint mt-3">
                  <div className="rounded border border-[#126A25] w-48 py-1 m-auto mt-4 bg-green-200">
                    <Space>
                      <img src='/assets/icons/file.svg' alt="Select File" />
                      Select File
                    </Space>
                  </div>
                  <p className="mt-3 font-semibold">or drop a file</p>
                </div>
              </Dragger>
            </ConfigProvider>

            <List
              itemLayout="horizontal"
              dataSource={data}
              renderItem={(item, index) => (
                <List.Item actions={[<a key="list-loadmore-edit">
                  <img src='/assets/icons/delete.svg' alt="Select File" />
                </a>]}>
                  <List.Item.Meta
                    avatar={<Avatar src={`/assets/icons/Check.svg`} />}
                    title={<a href="#">{item.title}</a>}
                    description="Salary Statement . 96KB"
                  />
                </List.Item>
              )}
            />
            <p>Don’t have all the documents? Don’t worry Click “Next” and upload documents later.</p>

            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#126A25",
                },
                components: {
                  Button: {
                    colorPrimary: "#126A25",
                  },
                },
              }}
            >
              <Button type="primary" htmlType="submit" className='px-10 mt-5 flex m-auto' >
                Next
                <RightOutlined style={{ fontSize: '12px', marginTop: '7px' }} />
              </Button>
            </ConfigProvider>

          </div>
        </>
      }
    </>
  )
}
