'use client'

import WelcomeMessage from '@/components/shared/WelcomeMessage'
import {
  Button,
  Col,
  ConfigProvider,
  DatePicker,
  Form,
  Input,
  Row,
  Select,
} from 'antd'
const {Option} = Select

export default function Profile() {
  const onFinish = (values) => {
    console.log('Success:', values)
  }

  return (
    <div className='bg-white py-6 px-6'>
      <WelcomeMessage />
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#126A25',
          },
          components: {
            Button: {
              colorPrimary: '#126A25',
            },
          },
        }}
      >
        <Form
          className='mt-6'
          name='basic'
          onFinish={onFinish}
          autoComplete='off'
          size='large'
        >
          <Row gutter={16}>
            <Col className='gutter-row' xs={24} sm={24} md={4}>
              First Name *
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={20}>
              <Form.Item
                name='first_name'
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
            <Col className='gutter-row' xs={24} sm={24} md={4}>
              Last Name *
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={20}>
              <Form.Item
                name='last_name'
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
            <Col className='gutter-row' xs={24} sm={24} md={4}>
              ETIN *
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={20}>
              <Form.Item
                label=''
                name='etin'
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
            <Col className='gutter-row' xs={24} sm={24} md={4}>
              National ID *
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={20}>
              <Form.Item
                label=''
                name='nid'
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
            <Col className='gutter-row' xs={24} sm={24} md={4}>
              DOB *
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={20}>
              <Form.Item
                label=''
                name='dob'
                rules={[
                  {
                    required: true,
                    message: 'Please input your DOB!',
                  },
                ]}
              >
                <DatePicker
                  className='w-full'
                  suffixIcon={<img src='/assets/icons/datepicker.svg' />}
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col className='gutter-row' xs={24} sm={24} md={4}>
              Gender *
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={20}>
              <Form.Item
                label=''
                name='gender'
                rules={[
                  {
                    required: true,
                    message: 'Please input your DOB!',
                  },
                ]}
              >
                <Select
                  placeholder='Select a option and change input text above'
                  allowClear
                  suffixIcon={
                    <img
                      src='/assets/icons/select-icon.svg'
                      alt='select-icon'
                    />
                  }
                >
                  <Option value='male'>male</Option>
                  <Option value='female'>female</Option>
                  <Option value='other'>other</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Form.Item className='text-right'>
            <Button
              className='btn-hover color-5 !m-0 !h-11 !rounded-xl ml-auto px-10'
              type='primary'
              htmlType='submit'
            >
              Save Changes
            </Button>
          </Form.Item>
        </Form>
      </ConfigProvider>
    </div>
  )
}
