import {UPDATE_UserSourcePreferenceSave} from '@/scripts/api'
import {postData} from '@/scripts/api-service'
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
import {Fragment, useEffect} from 'react'
const {Title, Text} = Typography

export default function Prospects({setCurrent, prospectData}) {
  const assetsOptions = standardStore((state) => state.assetsOptions)
  const expenceOptions = standardStore((state) => state.expenceOptions)
  const incomeOptions = standardStore((state) => state.incomeOptions)
  const libilityOptions = standardStore((state) => state.libilityOptions)

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

  const HandelProspect = async () => {
    let data = [
      ...assetsOptions,
      ...expenceOptions,
      ...incomeOptions,
      ...libilityOptions,
    ]

    let res = await postData(UPDATE_UserSourcePreferenceSave, {source_id: data})

    if (res) {
      setCurrent(3)
    }
  }

  const showIncomeDefault = () => {
    if (incomeOptions?.length) {
      return incomeOptions
    } else {
      if (prospectData?.income?.length) {
        let activeIcome = prospectData.income
          .filter((item) => item.status === 1)
          .map((item) => item.id)
        return activeIcome
      } else return []
    }
  }

  const showAssetsDefault = () => {
    if (assetsOptions?.length) {
      return assetsOptions
    } else {
      if (prospectData?.assets?.length) {
        let active = prospectData.assets
          .filter((item) => item.status === 1)
          .map((item) => item.id)
        return active
      } else return []
    }
  }

  const showLibilityDefault = () => {
    if (libilityOptions?.length) {
      return libilityOptions
    } else {
      if (prospectData?.libility?.length) {
        let active = prospectData.libility
          .filter((item) => item.status === 1)
          .map((item) => item.id)
        return active
      } else return []
    }
  }

  const showExpenceDefault = () => {
    if (expenceOptions?.length) {
      return expenceOptions
    } else {
      if (prospectData?.expence?.length) {
        let active = prospectData.expence
          .filter((item) => item.status === 1)
          .map((item) => item.id)
        return active
      } else return []
    }
  }

  useEffect(() => {
    if (prospectData) {
      if (prospectData?.income?.length) {
        let activeIcome = prospectData.income
          .filter((item) => item.status === 1)
          .map((item) => item.id)
        updateIncomeOptions(activeIcome)
      }

      if (prospectData?.assets?.length) {
        let activeAssets = prospectData.assets
          .filter((item) => item.status === 1)
          .map((item) => item.id)
        updateAssetsOptions(activeAssets)
      }

      if (prospectData?.libility?.length) {
        let activeLibility = prospectData.libility
          .filter((item) => item.status === 1)
          .map((item) => item.id)
        updateLibilityOptions(activeLibility)
      }

      if (prospectData?.expence?.length) {
        let activeExpence = prospectData.expence
          .filter((item) => item.status === 1)
          .map((item) => item.id)
        updateExpenceOptions(activeExpence)
      }
    }
  }, [])

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
              defaultValue={showIncomeDefault()}
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
              defaultValue={showAssetsDefault()}
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
              defaultValue={showExpenceDefault()}
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
              defaultValue={showLibilityDefault()}
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
            HandelProspect()
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
