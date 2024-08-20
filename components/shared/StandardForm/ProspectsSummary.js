import {Get_Tax_Summary} from '@/scripts/api'
import {getData} from '@/scripts/api-service'
import {defaultStore} from '@/store/default'
import {
  ExclamationCircleOutlined,
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons'
import {Button, Col, ConfigProvider, Input, Progress, Row, Space} from 'antd'
import {useEffect, useState} from 'react'

export default function ProspectsSummary({setProsCurrent, setCurrent}) {
  const [showRes, setShowRes] = useState(true)
  const [report, setReport] = useState()

  const getTaxSummary = async () => {
    let res = await getData(Get_Tax_Summary)

    if (res) {
      console.log('res', res)
      setReport(res?.data)
      updateTaxDue(res?.data?.tax_able_income || 0)
      setTimeout(() => {
        setShowRes(false)
      }, 3000)
    }
  }

  const updateTaxDue = defaultStore((state) => state.updateTaxDue)

  useEffect(() => {
    getTaxSummary()
  }, [])
  return (
    <>
      {showRes ? (
        <>
          <div className='bg-white mt-6 rounded-[20px]'>
            <div className='flex flex-col justify-center items-center gap-4 p-6'>
              <img
                src='/assets/icons/Search-Frame.svg'
                alt='search'
                height={55}
                width={55}
              />
              <p className='font-medium text-sm leading-[20px] text-center text-slate-800'>
                We are checking to make sure that all your data and
                <br />
                calculation is 100% accurate
              </p>
              <img
                src='/assets/icons/badge_accuracy.svg'
                alt='search'
                height={121}
                width={117}
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className='bg-white mt-6 rounded-[20px] p-6'>
            <h3 className='font-semibold text-[18px] leading-[22px] text-black mb-2'>
              Below is your Tax summary
            </h3>
            <span className='font-normal text-[13px] leading-[18px] text-slate-800'>
              Congratulations! Your tax return is error free
            </span>

            <div className='mt-6 m-auto md:w-2/3'>
              <div className='font-bold text-xs leading-[17px] text-right md:mr-5'>
                %Complete
              </div>

              <Row className='my-4' gutter={16}>
                <Col
                  xs={24}
                  sm={24}
                  md={3}
                  lg={3}
                  xl={3}
                  className='font-normal text-[14px] leading-[18px] text-[#0F172A] text-right'
                >
                  Income
                </Col>
                <Col xs={20} sm={20} md={17} lg={17} xl={17}>
                  <Progress
                    percent={report?.income_status || 0}
                    showInfo={false}
                    strokeColor='linear-gradient(39.1deg, #126A25 0.46%, #23D049 110.68%)'
                  />
                </Col>

                <Col
                  xs={2}
                  sm={2}
                  md={2}
                  lg={2}
                  xl={2}
                  className='font-normal text-[14px] leading-[18px] text-[#0F172A] text-right'
                >
                  {report?.income_status || 0}%
                </Col>
                <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                  <img
                    src='/assets/icons/check-circle.svg'
                    // className='float-right'
                  />
                </Col>
              </Row>

              {/* start Assets */}
              <Row className='my-4' gutter={16}>
                <Col
                  xs={24}
                  sm={24}
                  md={3}
                  lg={3}
                  xl={3}
                  className='font-normal text-[14px] leading-[18px] text-[#0F172A] text-right'
                >
                  Assets
                </Col>
                <Col xs={20} sm={20} md={17} lg={17} xl={17}>
                  <Progress
                    percent={report?.asset_status || 0}
                    showInfo={false}
                    strokeColor='linear-gradient(39.1deg, #126A25 0.46%, #23D049 110.68%)'
                  />
                </Col>

                <Col
                  xs={2}
                  sm={2}
                  md={2}
                  lg={2}
                  xl={2}
                  className='font-normal text-[14px] leading-[18px] text-[#0F172A] text-right'
                >
                  {report?.asset_status || 0}%
                </Col>
                <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                  <img
                    src='/assets/icons/check-circle.svg'
                    // className='float-right'
                  />
                </Col>
              </Row>
              {/* end Assets */}

              {/* start Liabilities */}
              <Row className='my-4' gutter={16}>
                <Col
                  xs={24}
                  sm={24}
                  md={3}
                  lg={3}
                  xl={3}
                  className='font-normal text-[14px] leading-[18px] text-[#0F172A] text-right'
                >
                  Liabilities
                </Col>
                <Col xs={20} sm={20} md={17} lg={17} xl={17}>
                  <Progress
                    percent={report?.lia_status || 0}
                    showInfo={false}
                    strokeColor='linear-gradient(39.1deg, #126A25 0.46%, #23D049 110.68%)'
                  />
                </Col>

                <Col
                  xs={2}
                  sm={2}
                  md={2}
                  lg={2}
                  xl={2}
                  className='font-normal text-[14px] leading-[18px] text-[#0F172A] text-right'
                >
                  {report?.lia_status || 0}%
                </Col>
                <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                  <img
                    src='/assets/icons/check-circle.svg'
                    // className='float-right'
                  />
                </Col>
              </Row>
              {/* end Liabilities */}

              {/* start Expense */}
              <Row className='my-4' gutter={16}>
                <Col
                  xs={24}
                  sm={24}
                  md={3}
                  lg={3}
                  xl={3}
                  className='font-normal text-[14px] leading-[18px] text-[#0F172A] text-right'
                >
                  Expense
                </Col>
                <Col xs={20} sm={20} md={17} lg={17} xl={17}>
                  <Progress
                    percent={report?.expense_status || 0}
                    showInfo={false}
                    strokeColor='linear-gradient(39.1deg, #126A25 0.46%, #23D049 110.68%)'
                  />
                </Col>

                <Col
                  xs={2}
                  sm={2}
                  md={2}
                  lg={2}
                  xl={2}
                  className='font-normal text-[14px] leading-[18px] text-[#0F172A] text-right'
                >
                  {report?.expense_status || 0}%
                </Col>
                <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                  <img
                    src='/assets/icons/check-circle.svg'
                    // className='float-right'
                  />
                </Col>
              </Row>
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
                <Row className='my-4' gutter={16}>
                  <Col
                    xs={24}
                    sm={24}
                    md={6}
                    lg={6}
                    xl={6}
                    className='font-normal text-[14px] leading-[18px] text-[#0F172A] pt-3'
                  >
                    Total Taxable Income{' '}
                    <ExclamationCircleOutlined
                      style={{
                        marginLeft: '2px',
                        color: '#64748B',
                        width: '12px',
                        height: '12px',
                      }}
                    />
                  </Col>
                  <Col xs={20} sm={20} md={18} lg={18} xl={18}>
                    <Input
                      size='large'
                      value={report?.tax_able_income || 0}
                      readOnly
                    />
                  </Col>
                </Row>

                <Row className='my-4' gutter={16}>
                  <Col
                    xs={24}
                    sm={24}
                    md={6}
                    lg={6}
                    xl={6}
                    className='font-normal text-[14px] leading-[18px] text-[#0F172A] pt-3 text-right'
                  >
                    Tax Due
                    <ExclamationCircleOutlined
                      style={{
                        marginLeft: '5px',
                        color: '#64748B',
                        width: '12px',
                        height: '12px',
                      }}
                    />
                  </Col>
                  <Col xs={20} sm={20} md={18} lg={18} xl={18}>
                    <Input
                      size='large'
                      value={report?.tax_able_income || 0}
                      readOnly
                    />
                  </Col>
                </Row>
              </ConfigProvider>

              <div className='text-center mt-6'>
                <Space>
                  <Button
                    type='primary'
                    className='refer-friend-button gap-0 shadow-none md:w-52'
                    onClick={() => {
                      setProsCurrent(4)
                    }}
                  >
                    <LeftOutlined style={{fontSize: '12px'}} />
                    Back
                  </Button>

                  <Button
                    type='primary'
                    className='prime-button gap-0 md:w-52 m-auto'
                    onClick={() => {
                      setCurrent(5)
                    }}
                  >
                    Next
                    <RightOutlined
                      style={{fontSize: '12px', marginTop: '2px'}}
                    />
                  </Button>
                </Space>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
