"use client"

import { SUBMIT_CONTACT } from "@/scripts/api";
import { postData } from "@/scripts/api-service";
import { alertPop } from "@/scripts/helper";
import { Button, Col, ConfigProvider, DatePicker, Form, Input, Row, Select } from "antd";
const { Option } = Select;
const { TextArea } = Input;

export default function ContactUs() {
  const [form] = Form.useForm();
  
  const onFinish = async (values) => {
    let res = await postData(SUBMIT_CONTACT, values, 'no_token', 'showError');

    if (res) {
      if (res.code === "error") {
        form.setFields(res?.errors)
      } else {
        alertPop("success", res.data?.message);
        form.resetFields();
      }
    }
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
          form={form}
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
                    message: 'Please input Name!',
                  },
                ]}
              >
                <Input placeholder='Name *' />
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
                    message: 'Please input email!',
                  },
                  {
                    pattern: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                    message: "Please enter a valid email address",
                  }
                ]}
              >
                <Input placeholder='Last Name *' />
              </Form.Item>
            </Col>
          </Row>


          {/* <Row gutter={16}>
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
          </Row> */}

          <Row gutter={16}>
            <Col className="gutter-row" xs={24} sm={24} md={4}>
              Message *
            </Col>
            <Col className="gutter-row" xs={24} sm={24} md={20}>
              <Form.Item
                label=""
                name="body"
                rules={[
                  {
                    required: true,
                    message: 'Please input Message!',
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
