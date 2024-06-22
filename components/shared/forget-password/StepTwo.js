import {SUBMIT_PASSWORD} from '@/scripts/api'
import {postData} from '@/scripts/api-service'
import {Button, Form, Input} from 'antd'
import {useRouter} from 'next/navigation'

export default function StepTwo({stepOneRes}) {
  const [form] = Form.useForm()
  const router = useRouter()

  const onFinish = async (values) => {
    let data = {
      password_token: stepOneRes?.token,
      sixdigit_code: values.sixdigit_code,
      password: values.password,
      c_password: values.c_password,
    }
    const res = await postData(SUBMIT_PASSWORD, data)

    if (res) {
      let masterData = res?.data?.data
      router.push('signin')
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
        <Button className='prime-button' type='primary' htmlType='submit'>
          Submit Password
        </Button>
      </Form.Item>
    </Form>
  )
}
