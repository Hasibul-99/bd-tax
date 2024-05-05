"use client"
import React from 'react'
import { Button, Select, Form, Input, Typography, Space, Checkbox, ConfigProvider } from 'antd';
import Link from 'next/link'
const { Text } = Typography;

export default function SignIn() {

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  return (
    <div classname="flex items-center h-screen w-full">
      <div className="w-full p-6 m-4 md:max-w-sm md:mx-auto text-center">
        <h1 className="block w-full font-bold mb-2">Sign In</h1>
        <Text type="secondary">Stress-free tax season starts here!</Text>

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
              className='text-left'
              name="remember"
              valuePropName="checked"
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button className='w-full btn-hover color-5 !m-0 !h-11 !rounded-xl' type="primary" htmlType="submit">
                Log In
              </Button>
            </Form.Item>
          </Form>
        </ConfigProvider>

        <Space>
          New to BDTax?
          <Link href="signup" className='text-emerald-700 hover:text-emerald-700'>Create Account</Link>
        </Space>

        <Space>
          <Link href="signup" className='text-emerald-700 hover:text-emerald-700'>Forgot Password?</Link>
        </Space>

        <img className='mt-5 m-auto' src="/assets/images/Frame.png" alt="logo" />

        <Space>
          <img src='/assets/icons/sms.svg' alt="sms" width={20} />
          support@bdtax.com.bd
        </Space>

        <Space>
          <img src='/assets/icons/call.svg' alt="sms" width={20} />
          01409-991225
        </Space>
        <br />
        <Space className='mt-2'>
          Made in
          <img src='/assets/images/bangladesh.png' alt="sms" width={20} />
        </Space>
      </div>
    </div>
  )
}
