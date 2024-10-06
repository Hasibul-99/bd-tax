import {
  GET_AREAS,
  GET_DIVISIONS,
  GET_USER_PROFILE,
  PACKAGE_WISE_PROFILE,
} from '@/scripts/api'
import {getData, postData} from '@/scripts/api-service'
import {alertPop} from '@/scripts/helper'
import {RightOutlined} from '@ant-design/icons'
import parse from 'html-react-parser'
import {
  Button,
  Col,
  ConfigProvider,
  DatePicker,
  Form,
  Input,
  InputNumber,
  notification,
  Row,
  Select,
} from 'antd'
import dayjs from 'dayjs'
import {useEffect, useState} from 'react'
const {Option} = Select
const {TextArea} = Input

export default function PersonalInfo({setCurrent}) {
  const [form] = Form.useForm()
  const [sameAddres, setSameAddress] = useState(false)
  const [userData, setUserData] = useState()
  const [areaList, setAreaList] = useState([])
  const [divisionList, setDivisionList] = useState([])
  const [districtList, setDistrictList] = useState([])
  const [maritalStatus, setMaritalStatus] = useState('Single')
  const [AnyDisabledChild, setAnyDisabledChild] = useState('N')

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
      Status: values.Status,
      ResidentialStatus: values.ResidentialStatus,
      Disability: values.Disability,
      FathersName: values.FathersName,
      MothersName: values.MothersName,
      NoOfAdultInFamily: values.NoOfAdultInFamily,
      NoOfChildInFamily: values.NoOfChildInFamily,
      FreedomFighter: values.FreedomFighter,
      GovernmentEmployee: values.GovernmentEmployee,
      AreaOfResidence: values.AreaOfResidence,
      TaxesZone: values.TaxesZone,
      TaxesCircle: values.TaxesCircle,
      DivisionId: values.DivisionId,
      DistrictId: values.DistrictId,
      PresentAddress: values.PresentAddress,
      PermanentAddress: values.PermanentAddress || values.PresentAddress,
      AnyDisabledChild: values.AnyDisabledChild,
      AvailChildDisabilityExemp: values.AvailChildDisabilityExemp,
      SpouseName: values.SpouseName,
      SpouseETIN: values.SpouseETIN,
      EmployerName: values.EmployerName,
      EmployerAddress: values.EmployerAddress,
    }

    let res = await postData(PACKAGE_WISE_PROFILE, profile, null, 'showError')

    if (res) {
      if (res.code === 'error') {
        form.setFields(res?.errors)
      } else {
        let masterData = res.data
        // alertPop('success', masterData?.message)
        notification.success({
          message: 'Success',
          description: parse(masterData?.message),
          duration: 10,
        })
        setCurrent(2)
      }
    }
  }

  const getUserData = async () => {
    let res = await getData(GET_USER_PROFILE)

    if (res) {
      let masterData = res?.data

      if (masterData) {
        setUserData(masterData)
        setMaritalStatus(masterData.Status)
        setAnyDisabledChild(masterData.AnyDisabledChild)

        form.setFieldsValue({
          first_name: masterData.first_name,
          last_name: masterData.last_name,
          ETIN: masterData.ETIN,
          NationalId: masterData.NationalId,
          email: masterData.Email,
          mobile: masterData.Contact,
          gender: masterData.Gender,
          DOB: masterData.DOB ? dayjs(masterData.DOB) : undefined,
          Status: masterData.Status,
          ResidentialStatus: masterData.ResidentialStatus,
          Disability: masterData.Disability,
          FathersName: masterData.FathersName,
          MothersName: masterData.MothersName,
          NoOfAdultInFamily: masterData.NoOfAdultInFamily,
          NoOfChildInFamily: masterData.NoOfChildInFamily,
          FreedomFighter: masterData.FreedomFighter,
          GovernmentEmployee: masterData.GovernmentEmployee,
          AreaOfResidence: masterData.AreaOfResidence
            ? parseInt(masterData.AreaOfResidence)
            : undefined,
          TaxesZone: masterData.TaxesZone,
          TaxesCircle: masterData.TaxesCircle,
          DivisionId: masterData.DivisionId,
          DistrictId: masterData.DistrictId,
          PresentAddress: masterData.PresentAddress,
          PermanentAddress: masterData.PermanentAddress,
          AvailChildDisabilityExemp: masterData.AvailChildDisabilityExemp,
          AnyDisabledChild: masterData.AnyDisabledChild,
          SpouseName: masterData.SpouseName,
          SpouseETIN: masterData.SpouseETIN,
          EmployerName: masterData.EmployerName,
          EmployerAddress: masterData.EmployerAddress,
        })
      }
    }
  }

  const getAreaData = async () => {
    let res = await getData(GET_AREAS)
    if (res) {
      setAreaList(res?.data)
    }
  }

  const getDivisionData = async () => {
    let res = await getData(GET_DIVISIONS)
    if (res) {
      setDivisionList(res.data)
    }
  }

  const HandelDivision = (val, notReset = true) => {
    if (val) {
      let data = divisionList.find((item) => item.id === val)

      if (data) {
        setDistrictList(data?.dis)
        if (notReset) form.resetFields(['DistrictId'])
      }
    }
  }

  useEffect(() => {
    if (userData && divisionList.length) {
      HandelDivision(userData.DivisionId, false)
    }
  }, [divisionList, userData])

  useEffect(() => {
    getUserData()
    getAreaData()
    getDivisionData()
  }, [])

  return (
    <div className='p-5'>
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
          className='mt-5'
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
                    message: 'Please input your First name!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col className='gutter-row' xs={24} sm={24} md={4}>
              Last Name *
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={20}>
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
            <Col className='gutter-row' xs={24} sm={24} md={4}>
              ETIN *
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={20}>
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
            <Col className='gutter-row' xs={24} sm={24} md={4}>
              National ID *
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={20}>
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
            <Col className='gutter-row' xs={24} sm={24} md={4}>
              Email *
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={20}>
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
            <Col className='gutter-row' xs={24} sm={24} md={4}>
              Mobile *
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={20}>
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
            <Col className='gutter-row' xs={24} sm={24} md={4}>
              DOB *
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={20}>
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
            <Col className='gutter-row' xs={24} sm={24} md={4}>
              Marital Status *
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={20}>
              <Form.Item
                label=''
                name='Status'
                rules={[
                  {
                    required: true,
                    message: 'Please Select Status!',
                  },
                ]}
              >
                <Select
                  placeholder='Select Marital Status'
                  suffixIcon={
                    <img
                      src='/assets/icons/select-icon.svg'
                      alt='select-icon'
                    />
                  }
                  onChange={(val) => setMaritalStatus(val)}
                >
                  <Option value='Single'>Single</Option>
                  <Option value='Married'>Married</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          {maritalStatus === 'Married' ? (
            <>
              <Row gutter={16}>
                <Col className='gutter-row' xs={24} sm={24} md={4}>
                  Spouse's Name
                </Col>
                <Col className='gutter-row' xs={24} sm={24} md={20}>
                  <Form.Item
                    name='SpouseName'
                    rules={[
                      {
                        required: false,
                        message: "Please input your Spouse's name!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col className='gutter-row' xs={24} sm={24} md={4}>
                  Spouse's ETIN
                </Col>
                <Col className='gutter-row' xs={24} sm={24} md={20}>
                  <Form.Item
                    name='SpouseETIN'
                    rules={[
                      {
                        required: false,
                        message: "Please input Spouse's ETIN!",
                      },
                      {
                        required: false,
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
                <Col className='gutter-row' xs={24} sm={24} md={4}>
                  Is any of your children disabled?
                </Col>
                <Col className='gutter-row' xs={24} sm={24} md={20}>
                  <Form.Item
                    label=''
                    name='AnyDisabledChild'
                    rules={[
                      {
                        required: true,
                        message: 'Please Select!',
                      },
                    ]}
                  >
                    <Select
                      placeholder='Select '
                      allowClear
                      onChange={(val) => setAnyDisabledChild(val)}
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

              {AnyDisabledChild === 'Y' ? (
                <Row gutter={16}>
                  <Col className='gutter-row' xs={24} sm={24} md={4}>
                    Has your spouse availed the exemption for disable child?
                  </Col>
                  <Col className='gutter-row' xs={24} sm={24} md={20}>
                    <Form.Item
                      label=''
                      name='AvailChildDisabilityExemp'
                      rules={[
                        {
                          required: true,
                          message: 'Please Select!',
                        },
                      ]}
                    >
                      <Select
                        placeholder='Select '
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
              ) : null}
            </>
          ) : null}

          <Row gutter={16} className='mt-6'>
            <Col className='gutter-row' xs={24} sm={24} md={4}>
              Residential Status *
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={20}>
              <Form.Item
                label=''
                name='ResidentialStatus'
                rules={[
                  {
                    required: true,
                    message: 'Please Select!',
                  },
                ]}
              >
                <Select
                  placeholder='Select Residential Status'
                  allowClear
                  suffixIcon={
                    <img
                      src='/assets/icons/select-icon.svg'
                      alt='select-icon'
                    />
                  }
                >
                  <Option value='N'>Non-resident</Option>
                  <Option value='Y'>Resident</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col className='gutter-row' xs={24} sm={24} md={4}>
              Any kind of disability *
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={20}>
              <Form.Item
                label=''
                name='Disability'
                rules={[
                  {
                    required: true,
                    message: 'Please Select!',
                  },
                ]}
              >
                <Select
                  placeholder='Please Select '
                  allowClear
                  suffixIcon={
                    <img
                      src='/assets/icons/select-icon.svg'
                      alt='select-icon'
                    />
                  }
                >
                  <Option value='NO'>NO</Option>
                  <Option value='YES'>YES</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col className='gutter-row' xs={24} sm={24} md={4}>
              Father's name
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={20}>
              <Form.Item
                name='FathersName'
                rules={[
                  {
                    required: false,
                    message: 'Please input your Father name!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col className='gutter-row' xs={24} sm={24} md={4}>
              Mother's name
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={20}>
              <Form.Item
                name='MothersName'
                rules={[
                  {
                    required: false,
                    message: 'Please input your Mother name!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col className='gutter-row' xs={24} sm={24} md={4}>
              Number of Adult in the Family
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={20}>
              <Form.Item
                name='NoOfAdultInFamily'
                rules={[
                  {
                    required: false,
                    message: 'Please input!',
                  },
                ]}
              >
                <InputNumber className='w-full' />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16} className='mb-3'>
            <Col className='gutter-row' xs={24} sm={24} md={4}>
              Number of Dependant children of the family
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={20}>
              <Form.Item
                name='NoOfChildInFamily'
                rules={[
                  {
                    required: false,
                    message: 'Please input!',
                  },
                ]}
              >
                <InputNumber className='w-full' />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16} className='mb-4'>
            <Col className='gutter-row' xs={24} sm={24} md={4}>
              Are you a gazetted war wounded freedom fighter? *
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={20}>
              <Form.Item
                label=''
                name='FreedomFighter'
                rules={[
                  {
                    required: true,
                    message: 'Please Select!',
                  },
                ]}
              >
                <Select
                  placeholder='Please Select '
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

          <Row gutter={16} className='mb-4'>
            <Col className='gutter-row' xs={24} sm={24} md={4}>
              Are you a government employee? *
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={20}>
              <Form.Item
                label=''
                name='GovernmentEmployee'
                rules={[
                  {
                    required: true,
                    message: 'Please input!',
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

          <Row gutter={16}>
            <Col className='gutter-row' xs={24} sm={24} md={4}>
              Area of residence *
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={20}>
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

          <Row gutter={16}>
            <Col className='gutter-row' xs={24} sm={24} md={4}>
              Taxes Zone *
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={20}>
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
            <Col className='gutter-row' xs={24} sm={24} md={4}>
              Taxes Circle *
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={20}>
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
            <Col className='gutter-row' xs={24} sm={24} md={4}>
              Division *
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={20}>
              <Form.Item
                label=''
                name='DivisionId'
                rules={[
                  {
                    required: true,
                    message: 'Please input!',
                  },
                ]}
              >
                <Select
                  placeholder='Select Division'
                  allowClear
                  suffixIcon={
                    <img
                      src='/assets/icons/select-icon.svg'
                      alt='select-icon'
                    />
                  }
                  onChange={HandelDivision}
                >
                  {divisionList?.length ? (
                    <>
                      {divisionList.map((item) => (
                        <Option value={item.id} key={item.id}>
                          {item.title}
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

          <Row gutter={16}>
            <Col className='gutter-row' xs={24} sm={24} md={4}>
              District *
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={20}>
              <Form.Item
                label=''
                name='DistrictId'
                rules={[
                  {
                    required: true,
                    message: 'Please input!',
                  },
                ]}
              >
                <Select
                  placeholder='Select District'
                  allowClear
                  suffixIcon={
                    <img
                      src='/assets/icons/select-icon.svg'
                      alt='select-icon'
                    />
                  }
                >
                  {districtList?.length ? (
                    <>
                      {districtList.map((item) => (
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

          <Row gutter={16}>
            <Col className='gutter-row' xs={24} sm={24} md={4}>
              Employer Name
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={20}>
              <Form.Item name='EmployerName'>
                <Input placeholder='Employer Name' />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col className='gutter-row' xs={24} sm={24} md={4}>
              Employer Address
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={20}>
              <Form.Item
                name='EmployerAddress'
                rules={[
                  {
                    max: 600,
                    message:
                      'The message cannot be longer than 500 characters!',
                  },
                ]}
              >
                <TextArea
                  maxLength={700}
                  rows={4}
                  placeholder='Employer Address'
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col className='gutter-row' xs={24} sm={24} md={4}>
              Present address *
            </Col>
            <Col className='gutter-row' xs={24} sm={24} md={20}>
              <Form.Item
                name='PresentAddress'
                rules={[
                  {
                    required: true,
                    message: 'Please input your  Present address!',
                  },
                  {
                    max: 600,
                    message:
                      'The message cannot be longer than 500 characters!',
                  },
                ]}
              >
                <TextArea
                  maxLength={700}
                  rows={4}
                  placeholder=' Present address'
                />
              </Form.Item>
            </Col>
          </Row>

          {/* <Checkbox
            onChange={(e) => {
              setSameAddress(e.target.checked)
            }}
            checked={sameAddres}
            className='mb-5'
          >
            Both are same address.
          </Checkbox>

          {!sameAddres ? (
            <>
              <Row gutter={16}>
                <Col className='gutter-row' xs={24} sm={24} md={4}>
                  Permanent address *
                </Col>
                <Col className='gutter-row' xs={24} sm={24} md={20}>
                  <Form.Item
                    name='PermanentAddress'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your Permanent address!',
                      },
                      {
                    max: 600,
                    message:
                      'The message cannot be longer than 500 characters!',
                  },
                    ]}
                  >
                    <TextArea
                      maxLength={700}
                      rows={4}
                      placeholder='Permanent address'
                    />
                  </Form.Item>
                </Col>
              </Row>
            </>
          ) : (
            ''
          )} */}

          <Form.Item className='text-center '>
            <Button
              type='primary'
              htmlType='submit'
              className='prime-button gap-0 !w-52 m-auto'
            >
              Next
              <RightOutlined style={{fontSize: '13px'}} />
            </Button>
          </Form.Item>
        </Form>
      </ConfigProvider>
    </div>
  )
}
