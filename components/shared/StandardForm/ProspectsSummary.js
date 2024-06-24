import {Col, Progress, Row} from 'antd'
import {useState} from 'react'

export default function ProspectsSummary() {
  const [showRes, setShowRes] = useState(false)
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
              <div className='font-bold text-xs leading-[17px] text-right'>
                %Complete
              </div>

              <Row className='my-4' gutter={16}>
                <Col
                  xs={24}
                  sm={24}
                  md={3}
                  lg={3}
                  xl={3}
                  className='font-normal text-[16px] leading-[18px] text-[#0F172A] text-right'
                >
                  Income
                </Col>
                <Col xs={20} sm={20} md={17} lg={17} xl={17}>
                  <Progress
                    percent={50}
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
                  className='font-normal text-[16px] leading-[18px] text-[#0F172A] text-right'
                >
                  70%
                </Col>
                <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                  <img
                    src='/assets/icons/check-circle.svg'
                    className='float-right'
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
                  className='font-normal text-[16px] leading-[18px] text-[#0F172A] text-right'
                >
                  Assets
                </Col>
                <Col xs={20} sm={20} md={17} lg={17} xl={17}>
                  <Progress
                    percent={100}
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
                  className='font-normal text-[16px] leading-[18px] text-[#0F172A] text-right'
                >
                  100%
                </Col>
                <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                  <img
                    src='/assets/icons/check-circle.svg'
                    className='float-right'
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
                  className='font-normal text-[16px] leading-[18px] text-[#0F172A] text-right'
                >
                  Liabilities
                </Col>
                <Col xs={20} sm={20} md={17} lg={17} xl={17}>
                  <Progress
                    percent={100}
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
                  className='font-normal text-[16px] leading-[18px] text-[#0F172A] text-right'
                >
                  100%
                </Col>
                <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                  <img
                    src='/assets/icons/check-circle.svg'
                    className='float-right'
                  />
                </Col>
              </Row>
              {/* end Liabilities */}

              {/* start Expences */}
              <Row className='my-4' gutter={16}>
                <Col
                  xs={24}
                  sm={24}
                  md={3}
                  lg={3}
                  xl={3}
                  className='font-normal text-[14px] leading-[18px] text-[#0F172A] text-right'
                >
                  Expences
                </Col>
                <Col xs={20} sm={20} md={17} lg={17} xl={17}>
                  <Progress
                    percent={100}
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
                  100%
                </Col>
                <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                  <img
                    src='/assets/icons/check-circle.svg'
                    className='float-right'
                  />
                </Col>
              </Row>
              {/* end Expences */}
            </div>
          </div>
        </>
      )}
    </>
  )
}
