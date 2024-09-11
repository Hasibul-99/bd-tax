import {
  DELETE_SALARIES,
  GET_SALARIES,
  SAVE_INCOME_SALARIES,
} from '@/scripts/api'
import {getData, postData} from '@/scripts/api-service'
import {alertPop} from '@/scripts/helper'
import {
  ExclamationCircleFilled,
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons'
import {
  Button,
  Col,
  ConfigProvider,
  Divider,
  Form,
  Input,
  Modal,
  Row,
  Space,
  Typography,
} from 'antd'
import {useEffect, useState} from 'react'
import GovSalaryForm from './SalaryGovAndNonGovForm/GovSalaryForm'
import NonGovSalaryForm from './SalaryGovAndNonGovForm/NonGovSalaryForm'
const {Text, Link} = Typography
const {confirm} = Modal

export default function SalaryForm({
  setCurrent,
  setActiveTab,
  setProsCurrent,
  nextActiveTab,
}) {
  const [form] = Form.useForm()
  const [hasTranspost, setHasTransport] = useState(0)
  const [tranportMonth, setTranportMonth] = useState(1)
  const [ReceivedAnyHouse, setReceivedAnyHouse] = useState('N')
  const [PaidAnyPartOfRent, setPaidAnyPartOfRent] = useState()
  const [employerName, setEmployerName] = useState()
  const [enRequiredError, setEnRequiredError] = useState(false)
  const [salariesData, setSalariesData] = useState()

  const onFinish = async (values) => {
    if (!employerName) {
      setEnRequiredError(true)
      alertPop('error', 'Employer Name is Required!')
      return false
    }

    let data = {...values}

    data.has_transport = hasTranspost === 0 ? 0 : hasTranspost
    data.transport_month = tranportMonth
    data.HEKLCNetTaxable = data.HEKLCNetTaxable ? 'Y' : 'N'
    data.EmployerName = employerName || ''

    let res = await postData(SAVE_INCOME_SALARIES, data, null, 'showError')
    if (res) {
      if (res.code === 'error') {
        form.setFields(res?.errors)
      } else {
        alertPop('success', res.data?.message)
        form.resetFields()
        if (nextActiveTab) {
          setActiveTab(nextActiveTab)
        } else {
          setProsCurrent(2)
        }
      }
    }
  }

  const getSalariesData = async () => {
    let res = await getData(GET_SALARIES)
    if (res) {
      let masterData = res?.data

      if (masterData) {
        setHasTransport(masterData.has_transport)
        setTranportMonth(masterData.transport_month)
        setReceivedAnyHouse(masterData?.ReceivedAnyHouse || 'N')
        setPaidAnyPartOfRent(masterData.PaidAnyPartOfRent)
        setEmployerName(masterData.EmployerName)
        setSalariesData(masterData)

        let formData = {...masterData}

        form.setFieldsValue(formData)
      }
    }
  }

  const DeleteSalaryForm = () => {
    confirm({
      title: 'Do you want to delete these items?',
      icon: <ExclamationCircleFilled />,
      async onOk() {
        let res = await postData(DELETE_SALARIES)
        if (res) {
          form.resetFields()
          alertPop('success', res?.data?.message)
        }
        form.resetFields()
      },
      onCancel() {
        console.log('Cancel')
      },
    })
  }

  useEffect(() => {
    getSalariesData()
  }, [])

  return (
    <div className='bg-white pb-6 px-6'>
      {salariesData ? (
        <>
          <Row gutter={16} className='mb-5'>
            <Col className='gutter-row pt-2' xs={24} sm={24} md={12}>
              <h3 className='text-xl font-semibold'>
                Salary Income Information
              </h3>
            </Col>
            {!salariesData?.EmployerName ? (
              <Col className='gutter-row pt-2' xs={24} sm={24} md={12}>
                <div className='flex gap-6'>
                  <span className='w-48'>Employer Name *</span>
                  <span className='w-full'>
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
                      <Input
                        status={enRequiredError ? 'error' : ''}
                        value={employerName}
                        onChange={(e) => {
                          setEmployerName(e.target.value),
                            setEnRequiredError(false)
                        }}
                      />
                      {enRequiredError ? (
                        <Text type='danger'>Employer Name is Required!</Text>
                      ) : null}
                    </ConfigProvider>
                  </span>
                </div>
              </Col>
            ) : null}
          </Row>

          <Divider />
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
            <Row gutter={16}>
              <Col className='gutter-row pt-2' xs={24} sm={24} md={9}>
                Pay & Allowance
              </Col>
              <Col className='gutter-row' xs={24} sm={24} md={5}>
                Amount of Yearly Income
              </Col>
              <Col className='gutter-row' xs={24} sm={24} md={5}>
                Amount of Exempted Income
              </Col>
              <Col className='gutter-row' xs={24} sm={24} md={5}>
                Net Taxable Income
              </Col>
            </Row>
            <Divider />
            {salariesData?.govt_emp_status === 1 ? (
              <>
                <GovSalaryForm
                  onFinish={onFinish}
                  DeleteSalaryForm={DeleteSalaryForm}
                  Form={Form}
                  form={form}
                />
              </>
            ) : (
              <>
                <NonGovSalaryForm
                  onFinish={onFinish}
                  DeleteSalaryForm={DeleteSalaryForm}
                  Form={Form}
                  form={form}
                  hasTranspost={hasTranspost}
                  setHasTransport={setHasTransport}
                  tranportMonth={tranportMonth}
                  setTranportMonth={setTranportMonth}
                  PaidAnyPartOfRent={PaidAnyPartOfRent}
                  setPaidAnyPartOfRent={setPaidAnyPartOfRent}
                  ReceivedAnyHouse={ReceivedAnyHouse}
                  setReceivedAnyHouse={setReceivedAnyHouse}
                />
              </>
            )}

            <Divider />
            <div className='text-center mt-6'>
              <Space>
                <Button
                  type='primary'
                  className='refer-friend-button shadow-none md:w-52'
                  onClick={() => {
                    setCurrent(3)
                  }}
                >
                  <LeftOutlined style={{fontSize: '12px', marginTop: '2px'}} />
                  Back
                </Button>

                <Button
                  type='primary'
                  className='prime-button gap-0 md:w-52 m-auto'
                  onClick={() => {
                    setActiveTab(nextActiveTab)
                  }}
                >
                  Next
                  <RightOutlined style={{fontSize: '12px', marginTop: '2px'}} />
                </Button>
              </Space>
            </div>
          </ConfigProvider>
        </>
      ) : (
        <>
          <div className='text-center h-[400px] flex justify-items-center items-center relative'>
            <div>
              <img
                className='image'
                src='/assets/icons/loading.svg'
                alt='Premium Plus'
              />
            </div>
          </div>
        </>
      )}
    </div>
  )
}
