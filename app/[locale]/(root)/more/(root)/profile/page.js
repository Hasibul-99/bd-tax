"use client"

import { Button, Col, ConfigProvider, DatePicker, Form, Input, Row, Select } from "antd";
const { Option } = Select;

export default function Profile() {
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
            <Col className="gutter-row" span={4}>
              First Name *
            </Col>
            <Col className="gutter-row" span={20}>
              <Form.Item
                name="first_name"
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
            <Col className="gutter-row" span={4}>
              Last Name *
            </Col>
            <Col className="gutter-row" span={20}>
              <Form.Item
                name="last_name"
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
            <Col className="gutter-row" span={4}>
              ETIN *
            </Col>
            <Col className="gutter-row" span={20}>
              <Form.Item
                label=""
                name="etin"
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
            <Col className="gutter-row" span={4}>
              National ID *
            </Col>
            <Col className="gutter-row" span={20}>
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
                <Input />
              </Form.Item>

            </Col>
          </Row>

          <Row gutter={16}>
            <Col className="gutter-row" span={4}>
              DOB *
            </Col>
            <Col className="gutter-row" span={20}>
              <Form.Item
                label=""
                name="dob"
                rules={[
                  {
                    required: true,
                    message: 'Please input your DOB!',
                  },
                ]}
              >
                <DatePicker className='w-full' />
              </Form.Item>

            </Col>
          </Row>

          <Row gutter={16}>
            <Col className="gutter-row" span={4}>
              Gender *
            </Col>
            <Col className="gutter-row" span={20}>
              <Form.Item
                label=""
                name="gender"
                rules={[
                  {
                    required: true,
                    message: 'Please input your DOB!',
                  },
                ]}
              >
                <Select
                  placeholder="Select a option and change input text above"
                  // onChange={onGenderChange}
                  allowClear
                >
                  <Option value="male">male</Option>
                  <Option value="female">female</Option>
                  <Option value="other">other</Option>
                </Select>
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