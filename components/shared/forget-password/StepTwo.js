import {SUBMIT_PASSWORD} from '@/scripts/api'
import {postData} from '@/scripts/api-service'
import {alertPop} from '@/scripts/helper'
import {Button, Form, Input} from 'antd'
import {useRouter} from 'next/navigation'
import {useState} from 'react'

export default function StepTwo({stepOneRes}) {
  const [form] = Form.useForm()
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const onFinish = async (values) => {
    setLoading(true)
    let data = {
      password_token: stepOneRes?.token,
      sixdigit_code: values.sixdigit_code,
      password: values.password,
      c_password: values.c_password,
    }
    const res = await postData(SUBMIT_PASSWORD, data, 'no_token', 'showError')

    // if (res) {
    //   let masterData = res?.data?.data
    //   router.push('signin')
    // }
    if (res) {
      if (res.code === 'error') {
        form.setFields(res?.errors)
      } else {
        alertPop('success', res.message)
        router.push('signin')
      }

      setLoading(false)
    }
  }

  return (
    <Form
      className='mt-6 text-left'
      name='basic'
      onFinish={onFinish}
      autoComplete='off'
      size='large'
      form={form}
    >
      <Form.Item
        name='password'
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
        name='c_password'
        rules={[
          {
            required: true,
            message: 'Please input confirm password!',
          },
        ]}
      >
        <Input.Password placeholder='Confirm Password *' />
      </Form.Item>

      <Form.Item
        name='sixdigit_code'
        rules={[
          {
            required: true,
            message: 'Please input Code!',
          },
        ]}
      >
        <Input placeholder='Code *' />
      </Form.Item>

      <Form.Item>
        <Button
          className='prime-button'
          type='primary'
          htmlType='submit'
          loading={loading}
        >
          Submit Password
        </Button>
      </Form.Item>
    </Form>
  )
}
