import {GET_USER_PROFILE, PACKAGE_WISE_PROFILE} from '@/scripts/api'
import {getData, postData} from '@/scripts/api-service'
import {alertPop} from '@/scripts/helper'
import {RightOutlined} from '@ant-design/icons'
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
import dayjs from 'dayjs'
import {useEffect} from 'react'
const {Option} = Select

export default function PersonalInfo({setCurrent}) {
  const [form] = Form.useForm()

  const onFinish = async (values) => {
    let profile = {
      first_name: values.first_name,
      last_name: values.last_name,
      ETIN: values.etin,
      Gender: values.gender,
      Email: values.email,
      Contact: values.mobile,
      NationalId: values.NationalId,
      DOB: dayjs(values.dob).format('DD-MM-YYYY'),
    }

    let res = await postData(PACKAGE_WISE_PROFILE, profile, null, 'showError')

    if (res) {
      if (res.code === 'error') {
        form.setFields(res?.errors)
      } else {
        let masterData = res.data
        alertPop('success', masterData?.message)
        setCurrent(2)
      }
    }
  }

  const getUserData = async () => {
    let res = await getData(GET_USER_PROFILE)

    if (res) {
      let masterData = res?.data

      if (masterData) {
        form.setFieldsValue({
          first_name: masterData.first_name,
          last_name: masterData.last_name,
          etin: masterData.ETIN,
          NationalId: masterData.NationalId,
          email: masterData.Email,
          mobile: masterData.Contact,
          gender: masterData.Gender,
          dob: masterData.DOB ? dayjs(masterData.DOB) : undefined,
        })
      }
    }
  }

  useEffect(() => {
    getUserData()
  }, [])

  return (
    <div className='py-10 px-20'>
      <h3 className='text-xl font-semibold'>Please enter your personal info</h3>

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
          name='basic'
          form={form}
          className='mt-10'
          onFinish={onFinish}
          autoComplete='off'
          size='large'
        >
          <Row gutter={16}>
            <Col className='gutter-row' span={4}>
              First Name *
            </Col>
            <Col className='gutter-row' span={20}>
              <Form.Item
                name='first_name'
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
            <Col className='gutter-row' span={4}>
              Last Name *
            </Col>
            <Col className='gutter-row' span={20}>
              <Form.Item
                label=''
                name='last_name'
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
            <Col className='gutter-row' span={4}>
              ETIN *
            </Col>
            <Col className='gutter-row' span={20}>
              <Form.Item
                name='etin'
                rules={[
                  {
                    required: true,
                    message: 'Please input your ETIN!',
                  },
                  {
                    required: true,
                    message: 'A value must be entered',
                    pattern: new RegExp(/^[0-9]+$/),
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col className='gutter-row' span={4}>
              National ID *
            </Col>
            <Col className='gutter-row' span={20}>
              <Form.Item
                name='NationalId'
                rules={[
                  {
                    required: true,
                    message: 'Please input your National ID!',
                  },
                  {
                    required: true,
                    message: 'A value must be entered',
                    pattern: new RegExp(/^[0-9]+$/),
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col className='gutter-row' span={4}>
              Email *
            </Col>
            <Col className='gutter-row' span={20}>
              <Form.Item
                name='email'
                rules={[
                  {
                    required: true,
                    message: 'Please input email!',
                  },
                  {
                    pattern:
                      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                    message: 'Please enter a valid email address',
                  },
                ]}
              >
                <Input placeholder='Email *' />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col className='gutter-row' span={4}>
              Mobile *
            </Col>
            <Col className='gutter-row' span={20}>
              <Form.Item
                name='mobile'
                rules={[
                  {
                    required: true,
                    message: 'Please input mobile!',
                  },
                  {
                    pattern: /^(?:\+?88)?01[15-9]\d{8}$/,
                    message: 'Please enter a valid mobile no',
                  },
                ]}
              >
                <Input placeholder='Phone *' />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col className='gutter-row' span={4}>
              DOB *
            </Col>
            <Col className='gutter-row' span={20}>
              <Form.Item
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
            <Col className='gutter-row' span={4}>
              Gender *
            </Col>
            <Col className='gutter-row' span={20}>
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
                  placeholder='Select gender'
                  allowClear
                  suffixIcon={
                    <img
                      src='/assets/icons/select-icon.svg'
                      alt='select-icon'
                    />
                  }
                >
                  <Option value='male'>Male</Option>
                  <Option value='female'>Female</Option>
                  {/* <Option value="other">other</Option> */}
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Form.Item className='text-center my-6'>
            <Button
              type='primary'
              htmlType='submit'
              className='prime-button gap-0 w-52 m-auto'
            >
              Next
              <RightOutlined style={{fontSize: '12px'}} />
            </Button>
          </Form.Item>
        </Form>
      </ConfigProvider>
    </div>
  )
}
