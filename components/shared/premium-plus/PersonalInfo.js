import React from 'react'
import { RightOutlined } from '@ant-design/icons';
import { Button, DatePicker, Form, Input, Select, ConfigProvider, Row, Col } from 'antd';
const { Option } = Select;

export default function PersonalInfo() {
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  return (
    <div className='py-10 px-20'>
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
          name="basic"
          className='mt-10'
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
                    message: 'Please input your First name!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>


          <Row gutter={16}>
            <Col className="gutter-row" span={4}>
              Last Name *
            </Col>
            <Col className="gutter-row" span={20}>
              <Form.Item
                label=""
                name="last_name"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Last name!',
                  },
                ]}
              >
                <Input />
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

          <Form.Item className='text-center '>
            <Button type="primary" htmlType="submit" className='px-10 mt-5 flex m-auto' >
              Next

              <RightOutlined style={{ fontSize: '12px', marginTop: '7px' }}/>
            </Button>
          </Form.Item>
        </Form>
      </ConfigProvider>
    </div>
  )
}
