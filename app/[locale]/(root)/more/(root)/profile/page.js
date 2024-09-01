'use client'

import WelcomeMessage from '@/components/common/WelcomeMessage'
import {GET_AREAS, GET_USER_PROFILE, PACKAGE_WISE_PROFILE} from '@/scripts/api'
import {getData, postData} from '@/scripts/api-service'
import {alertPop} from '@/scripts/helper'
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

export default function Profile() {
  const [form] = Form.useForm()
  const [areaList, setAreaList] = useState([])
  const [userData, setUserData] = useState()

  const onFinish = async (values) => {
    let profile = {
      first_name: values.first_name,
      last_name: values.last_name,
      ETIN: values.ETIN,
      Gender: values.Gender,
      Email: values.Email,
      Contact: values.Contact,
      NationalId: values.NationalId,
      DOB: dayjs(values.DOB).format('DD-MM-YYYY'),
      AreaOfResidence: values.AreaOfResidence,
      TaxesZone: values.TaxesZone,
      TaxesCircle: values.TaxesCircle,
      GovernmentEmployee: values.GovernmentEmployee,
      module: 'profile',
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
          ETIN: masterData.ETIN,
          NationalId: masterData.NationalId,
          Email: masterData.Email,
          Contact: masterData.Contact,
          Gender: masterData.Gender,
          DOB: masterData.DOB ? dayjs(masterData.DOB) : undefined,
          AreaOfResidence: masterData.AreaOfResidence
            ? parseInt(masterData.AreaOfResidence)
            : undefined,
          TaxesZone: masterData.TaxesZone,
          TaxesCircle: masterData.TaxesCircle,
          GovernmentEmployee: masterData.GovernmentEmployee,
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
          form={form}
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
            <Col className='gutter-row' xs={24} sm={24} md={4}>
              National ID *
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={20}>
              <Form.Item
                label=''
                name='NationalId'
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
              Email *
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={20}>
              <Form.Item
                label=''
                name='Email'
                rules={[
                  {
                    required: true,
                    message: 'Please input your Email!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col className='gutter-row' span={4}>
              Mobile *
            </Col>
            <Col className='gutter-row' span={20}>
              <Form.Item
                name='Contact'
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
                <Input placeholder='Mobile *' />
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
            <Col className='gutter-row' xs={24} sm={24} md={4}>
              Gender *
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={20}>
              <Form.Item
                label=''
                name='Gender'
                rules={[
                  {
                    required: true,
                    message: 'Please select your gender!',
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
          <Row gutter={16} className='mb-4'>
            <Col className='gutter-row' span={4}>
              Are you a government employee? *
            </Col>
            <Col className='gutter-row' span={20}>
              <Form.Item
                label=''
                name='GovernmentEmployee'
                rules={[
                  {
                    required: true,
                    message: 'Please Select!',
                  },
                ]}
              >
                <Select
                  placeholder='Select'
                  allowClear
                  suffixIcon={
                    <img
                      src='/assets/icons/select-icon.svg'
                      alt='select-icon'
                    />
                  }
                >
                  <Option value='N'>NO</Option>
                  <Option value='Y'>YES</Option>
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
