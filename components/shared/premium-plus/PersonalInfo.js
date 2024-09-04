import {GET_AREAS, GET_USER_PROFILE, PACKAGE_WISE_PROFILE} from '@/scripts/api'
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
  InputNumber,
  Row,
  Select,
} from 'antd'
import dayjs from 'dayjs'
import {useEffect, useState} from 'react'
const {Option} = Select

import {useRouter} from 'next/navigation'

export default function PersonalInfo({setCurrent, context}) {
  const [form] = Form.useForm()
  const router = useRouter()
  const [areaList, setAreaList] = useState([])
  const [userData, setUserData] = useState()

  const onFinish = async (values) => {
    let profile = {
      first_name: values.first_name,
      last_name: values.last_name,
      ETIN: values.ETIN,
      Gender: values.gender,
      Email: values.email,
      Contact: values.mobile,
      NationalId: values.NationalId,
      DOB: dayjs(values.DOB).format('DD-MM-YYYY'),
      AreaOfResidence: values.AreaOfResidence,
      TaxesZone: values.TaxesZone,
      TaxesCircle: values.TaxesCircle,
    }

    let res = await postData(PACKAGE_WISE_PROFILE, profile, null, 'showError')

    if (res) {
      if (res.code === 'error') {
        form.setFields(res?.errors)
      } else {
        let masterData = res.data
        alertPop('success', masterData?.message)

        if (
          context === 'premium_plus' &&
          masterData.data?.profile_changable === 1
        ) {
          router.push('/premium/process?step=2')
        } else {
          setCurrent(2)
        }
      }
    }
  }

  const getUserData = async () => {
    let res = await getData(GET_USER_PROFILE)

    if (res) {
      let masterData = res?.data

      console.log('masterData', masterData.AreaOfResidence)

      if (masterData) {
        form.setFieldsValue({
          first_name: masterData.first_name,
          last_name: masterData.last_name,
          ETIN: masterData.ETIN,
          NationalId: masterData.NationalId,
          email: masterData.Email,
          mobile: masterData.Contact,
          gender: masterData.Gender,
          DOB: masterData.DOB ? dayjs(masterData.DOB) : undefined,
          AreaOfResidence: masterData.AreaOfResidence
            ? parseInt(masterData.AreaOfResidence)
            : undefined,
          TaxesZone: masterData.TaxesZone,
          TaxesCircle: masterData.TaxesCircle,
        })

        setUserData(masterData)
      }
    }
  }

  const getAreaData = async () => {
    let res = await getData(GET_AREAS)
    if (res) {
      setAreaList(res?.data)
    }
  }

  useEffect(() => {
    getUserData()
    getAreaData()
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
                name='ETIN'
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
                  {
                    required: true,
                    message: 'The ETIN field must be 12 digits.',
                    pattern: new RegExp(/^\d{12}$/),
                  },
                ]}
              >
                <Input disabled={userData?.etin_locked} />
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
                    pattern: /^\+?\d+$/,
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
                name='DOB'
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
                    message: 'Please select your gender!',
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
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col className='gutter-row' span={4}>
              Taxes Circle *
            </Col>
            <Col className='gutter-row' span={20}>
              <Form.Item
                label=''
                name='TaxesCircle'
                rules={[
                  {
                    required: true,
                    message: 'Please input!',
                  },
                ]}
              >
                <InputNumber className='w-full' />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col className='gutter-row' span={4}>
              Taxes Zone *
            </Col>
            <Col className='gutter-row' span={20}>
              <Form.Item
                label=''
                name='TaxesZone'
                rules={[
                  {
                    required: true,
                    message: 'Please input!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col className='gutter-row' span={4}>
              Area of residence *
            </Col>
            <Col className='gutter-row' span={20}>
              <Form.Item
                label=''
                name='AreaOfResidence'
                rules={[
                  {
                    required: true,
                    message: 'Please input!',
                  },
                ]}
              >
                <Select
                  placeholder='Select Area '
                  allowClear
                  suffixIcon={
                    <img
                      src='/assets/icons/select-icon.svg'
                      alt='select-icon'
                    />
                  }
                >
                  {areaList?.length ? (
                    <>
                      {areaList.map((item) => (
                        <Option value={item.id} key={item.id}>
                          {item.name}
                        </Option>
                      ))}
                    </>
                  ) : (
                    ''
                  )}
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
              <RightOutlined style={{fontSize: '14px'}} />
            </Button>
          </Form.Item>
        </Form>
      </ConfigProvider>
    </div>
  )
}
