import React from 'react'
import { Button, Form, Input } from 'antd';
import { FORGET_PASSWORD } from '@/scripts/api';
import { postData } from '@/scripts/api-service';

export default function StepOne({ setStep, setStepOneRes }) {
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        const res = await postData(FORGET_PASSWORD, {
            email: values.email
        })   
        
        if (res) {
            let masterData = res?.data?.data;
            setStepOneRes(masterData);
            setStep(2)
      }
    }

    return (
        <Form
            className='mt-6 text-left'
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

            <Form.Item>
                <Button className='w-full btn-hover color-5 !m-0 !h-11 !rounded-xl' type="primary" htmlType="submit">
                    Forgot Password
                </Button>
            </Form.Item>
        </Form>
    )
}
