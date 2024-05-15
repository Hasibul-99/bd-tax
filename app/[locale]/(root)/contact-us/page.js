"use client"

import { Button, Col, ConfigProvider, DatePicker, Form, Input, Row, Select } from "antd";
const { Option } = Select;
const { TextArea } = Input;

export default function ContactUs() {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  return (
    <div className="bg-white py-6 px-6">
      <h3 className='text-xl font-semibold'>Welcome back, Tareq</h3>
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
        <Form
          className='mt-6'
          name="basic"
          onFinish={onFinish}
          autoComplete="off"
          size='large'
        >
          <Row gutter={16}>
            <Col className="gutter-row" xs={24} sm={24} md={4}>
              Name *
            </Col>
            <Col className="gutter-row" xs={24} sm={24} md={20}>
              <Form.Item
                name="name"
                rules={[
                  {
                    required: true,
                    message: 'Please input First Name!',
                  },
                ]}
              >
                <Input placeholder='First Name *' />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col className="gutter-row" xs={24} sm={24} md={4}>
              Email Adderss *
            </Col>
            <Col className="gutter-row" xs={24} sm={24} md={20}>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Please input Last Name!',
                  },
                ]}
              >
                <Input placeholder='Last Name *' />
              </Form.Item>
            </Col>
          </Row>


          <Row gutter={16}>
            <Col className="gutter-row" xs={24} sm={24} md={4}>
              Subject *
            </Col>
            <Col className="gutter-row" xs={24} sm={24} md={20}>
              <Form.Item
                label=""
                name="subject"
                rules={[
                  {
                    required: true,
                    message: 'Please input your ETIN!',
                  },
                ]}
              >
                <Input />
              </Form.Item>

            </Col>
          </Row>

          <Row gutter={16}>
            <Col className="gutter-row" xs={24} sm={24} md={4}>
              Message *
            </Col>
            <Col className="gutter-row" xs={24} sm={24} md={20}>
              <Form.Item
                label=""
                name="nid"
                rules={[
                  {
                    required: true,
                    message: 'Please input your National ID!',
                  },
                ]}
              >
                <TextArea />
              </Form.Item>

            </Col>
          </Row>

          <Form.Item className="text-right">
            <Button className='btn-hover color-5 !m-0 !h-11 !rounded-xl ml-auto px-10' type="primary" htmlType="submit">
              Save Changes
            </Button>
          </Form.Item>
        </Form>
      </ConfigProvider>
    </div>
  )
}
