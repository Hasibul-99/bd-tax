"use client"
import React from 'react'
import { Button, Select, Form, Input } from 'antd';
const { Option } = Select;

export default function SignUp() {

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  return (
    <div classname="flex items-center h-screen w-full">
      <div className="w-full p-8 m-4 md:max-w-sm md:mx-auto text-center">
        <h1 className="block w-full font-bold mb-4">Registration</h1>
        <h2>#1 Tax Software in Bangladesh </h2>
        <h3>Let’s Create your BDTax account</h3>

        <Form
          name="basic"
          onFinish={onFinish}
          autoComplete="off"
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
            <Button className='w-full' type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
