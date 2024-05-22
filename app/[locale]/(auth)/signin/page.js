"use client"

import { LOGIN } from '@/scripts/api';
import { postData } from '@/scripts/api-service';
import { alertPop } from '@/scripts/helper';
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { Button, Checkbox, ConfigProvider, Form, Input, Space, Typography } from 'antd';
import Link from 'next/link';
const { Text } = Typography;

export default function SignIn() {
  const [form] = Form.useForm();
  const router = useRouter();

  const onFinish = async (values) => {
    let res = await postData(LOGIN, values, 'no_token');

    if (res) {
      if (res.code === "error") {
        form.setFields(res?.errors)
      } else {
        let masterData = res?.data?.data;
        console.log("masterData", masterData);
        Cookies.set('bdtax_token', masterData?.token);
        Cookies.set('bdtax_user', masterData);
        alertPop("success", masterData?.message);

        if (masterData.first_time) {
          router.push('/')
        } else {
          router.push('home')
        }
      }
    }
  };

  return (
    <div classname="flex items-center h-screen w-full">
      <div className="p-6 m-4 md:max-w-sm md:mx-auto text-center">
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
            form={form}
          >
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
              <Input.Password placeholder='Password *' />
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

        <Space className='mb-3'>
          New to BDTax?
          <Link href="signup" className='text-emerald-700 hover:text-emerald-700'>Create Account</Link>
        </Space>
        <br />
        <Space>
          <Link href="signup" className='text-emerald-700 hover:text-emerald-700'>Forgot Password?</Link>
        </Space>

        <img className='mt-5 m-auto' src="/assets/images/Frame.png" alt="logo" />

        <Space>
          <img src='/assets/icons/sms.svg' alt="sms" width={20} />
          support@bdtax.com.bd
        </Space>
        <br />
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
