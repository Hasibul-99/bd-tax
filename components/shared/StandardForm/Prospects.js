import {GET_incomeAssetLiabilySourceList} from '@/scripts/api'
import {postData} from '@/scripts/api-service'
import {RightOutlined} from '@ant-design/icons'
import {
  Button,
  Checkbox,
  Col,
  ConfigProvider,
  Divider,
  Row,
  Space,
  Typography,
} from 'antd'
import {Fragment, useEffect, useState} from 'react'
const {Title, Text} = Typography

export default function Prospects() {
  const [contentData, setContentData] = useState()

  const getIncomeAssetLiabilySourceList = async () => {
    let res = await postData(GET_incomeAssetLiabilySourceList)

    if (res) {
      console.log(res)
      let masterData = res?.data?.data
      setContentData(masterData)
    }
  }

  useEffect(() => {
    getIncomeAssetLiabilySourceList()
  }, [])

  return (
    <div className='py-10 px-20 md:mt-8 '>
      <div className='md:h-[80vh] md:overflow-y-scroll scrollbar'>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#4B7F52',
            },
            components: {
              Button: {
                colorPrimary: '#4B7F52',
              },
            },
          }}
        >
          <div>
            <Title level={5}>Your income sources</Title>
            <Text>
              Please select the source of your income from the options below
            </Text>
            <Checkbox.Group
              className='my-5 w-full'
              // onChange={onChange}
            >
              <Row>
                {contentData?.income?.length ? (
                  <>
                    {contentData.income.map((item) => (
                      <Fragment key={item.id}>
                        <Col span={24}>
                          <Checkbox value={item.id}>{item.title}</Checkbox>
                        </Col>
                        <Divider className='my-3' />
                      </Fragment>
                    ))}
                  </>
                ) : null}
              </Row>
            </Checkbox.Group>
          </div>

          <div>
            <Title level={5}>Your assets</Title>
            <Checkbox.Group
              className='my-5 w-full'
              // onChange={onChange}
            >
              <Row>
                {contentData?.assets?.length ? (
                  <>
                    {contentData.assets.map((item) => (
                      <Fragment key={item.id}>
                        <Col span={24}>
                          <Checkbox value={item.id}>{item.title}</Checkbox>
                        </Col>
                        <Divider className='my-3' />
                      </Fragment>
                    ))}
                  </>
                ) : null}
              </Row>
            </Checkbox.Group>
          </div>

          <div>
            <Title level={5}>Your Expence</Title>
            <Checkbox.Group
              className='my-5 w-full'
              // onChange={onChange}
            >
              <Row>
                {contentData?.expence?.length ? (
                  <>
                    {contentData.expence.map((item) => (
                      <Fragment key={item.id}>
                        <Col span={24}>
                          <Checkbox value={item.id}>{item.title}</Checkbox>
                        </Col>
                        <Divider className='my-3' />
                      </Fragment>
                    ))}
                  </>
                ) : null}
              </Row>
            </Checkbox.Group>
          </div>

          <div>
            <Title level={5}>Your Libility</Title>
            <Checkbox.Group
              className='my-5 w-full'
              // onChange={onChange}
            >
              <Row>
                {contentData?.libility?.length ? (
                  <>
                    {contentData.libility.map((item) => (
                      <Fragment key={item.id}>
                        <Col span={24}>
                          <Checkbox value={item.id}>{item.title}</Checkbox>
                        </Col>
                        <Divider className='my-3' />
                      </Fragment>
                    ))}
                  </>
                ) : null}
              </Row>
            </Checkbox.Group>
          </div>
        </ConfigProvider>
      </div>

      <div className='text-center my-6'>
        <Button
          type='primary'
          htmlType='submit'
          className='prime-button w-52 m-auto '
          size='large'
        >
          <Space>
            Next
            <RightOutlined style={{fontSize: '12px', marginTop: '8px'}} />
          </Space>
        </Button>
      </div>
    </div>
  )
}
