import {standardStore} from '@/store/standard'
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
import {Fragment} from 'react'
const {Title, Text} = Typography

export default function Prospects({setCurrent, prospectData}) {
  const assetsOptions = standardStore((state) => state.assetsOptions)
  const expenceOptions = standardStore((state) => state.expenceOptions)
  const incomeOptions = standardStore((state) => state.incomeOptions)
  const libilityOptions = standardStore((state) => state.libilityOptions)

  console.log('prospectData', prospectData)

  const updateIncomeOptions = standardStore(
    (state) => state.updateIncomeOptions
  )
  const updateAssetsOptions = standardStore(
    (state) => state.updateAssetsOptions
  )
  const updateExpenceOptions = standardStore(
    (state) => state.updateExpenceOptions
  )
  const updateLibilityOptions = standardStore(
    (state) => state.updateLibilityOptions
  )

  return (
    <div className='p-10 md:mt-8 '>
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
              defaultValue={incomeOptions}
              className='my-5 w-full'
              onChange={(val) => updateIncomeOptions(val)}
            >
              <Row>
                {prospectData?.income?.length ? (
                  <>
                    {prospectData.income.map((item) => (
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
              defaultValue={assetsOptions}
              className='my-5 w-full'
              onChange={(val) => updateAssetsOptions(val)}
            >
              <Row>
                {prospectData?.assets?.length ? (
                  <>
                    {prospectData.assets.map((item) => (
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
              defaultValue={libilityOptions}
              className='my-5 w-full'
              onChange={(val) => updateExpenceOptions(val)}
            >
              <Row>
                {prospectData?.expence?.length ? (
                  <>
                    {prospectData.expence.map((item) => (
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
              defaultValue={expenceOptions}
              className='my-5 w-full'
              onChange={(val) => updateLibilityOptions(val)}
            >
              <Row>
                {prospectData?.libility?.length ? (
                  <>
                    {prospectData.libility.map((item) => (
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
          className='prime-button gap-0 w-52 m-auto '
          size='large'
          onClick={() => {
            setCurrent(3)
          }}
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
