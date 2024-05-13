"use client"
import { Button, ConfigProvider, Form, Input, Select, Space, Typography } from 'antd';
const { Option } = Select;
const { Title, Text } = Typography;

export default function SignUp() {

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  return (
    <div classname="flex items-center h-screen w-full">
      <div className="w-full p-6 m-4 md:max-w-sm md:mx-auto text-center">
        <h1 className="block w-full font-bold mb-2">Registration</h1>
        <Title level={5} className='!mb-0'>#1 Tax Software in Bangladesh</Title>
        <Text type="secondary">Let’s Create your BDTax account</Text>

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
            <Form.Item
              name="first_name"
              rules={[
                {
                  required: true,
                  message: 'Please input first name!',
                },
              ]}
            >
              <Input placeholder='First Name *' />
            </Form.Item>

            <Form.Item
              name="last_name"
              rules={[
                {
                  required: true,
                  message: 'Please input last name!',
                },
              ]}
            >
              <Input placeholder='Last Name *' />
            </Form.Item>

            <Form.Item
              name="etin"
              rules={[
                {
                  required: true,
                  message: 'Please input ETIN!',
                },
              ]}
            >
              <Input placeholder='ETIN *' />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input email!',
                },
              ]}
            >
              <Input placeholder='Email *' />
            </Form.Item>

            <Form.Item
              name="phone"
              rules={[
                {
                  required: true,
                  message: 'Please input phone!',
                },
              ]}
            >
              <Input placeholder='Phone *' />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input password!',
                },
              ]}
            >
              <Input placeholder='Password *' />
            </Form.Item>

            <Form.Item
              name="confirm_password"
              rules={[
                {
                  required: true,
                  message: 'Please input confirm password!',
                },
              ]}
            >
              <Input placeholder='Confirm Password *' />
            </Form.Item>

            <Form.Item
              className='text-left'
              name="hear_about_us"
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Select
                placeholder="How did you hear about us"
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
              </Select>
            </Form.Item>

            <Form.Item>
              <Button className='w-full btn-hover color-5 !m-0 !h-11 !rounded-xl' type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </Form>
        </ConfigProvider>

        <Space>
          <img src='/assets/icons/sms.svg' alt="sms" width={20} />
          support@bdtax.com.bd
        </Space>
        <br />
        <Space>
          <img src='/assets/icons/call.svg' alt="sms" width={20} />
          01409-991225
        </Space>

        <img className='w-full mt-5' src="/assets/images/Frame-3.png" alt="logo" />
      </div>
    </div>
  )
}
