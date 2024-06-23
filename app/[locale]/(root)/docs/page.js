'use client'

import {GET_ALL_TAX_YEAR, GET_USER_FILE_BY_TAX_YEAR} from '@/scripts/api'
import {getData} from '@/scripts/api-service'
import {Avatar, Col, Empty, List, Row} from 'antd'
import {useEffect, useState} from 'react'

const data1 = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
]

export default function Doc() {
  const [selected, setSelected] = useState()
  const [taxYears, setTaxYears] = useState()
  const [fileList, setFileList] = useState()

  const getAllTaxYear = async () => {
    let res = await getData(GET_ALL_TAX_YEAR)

    if (res) {
      let masterData = res?.data

      setTaxYears(masterData)
      setSelected(masterData[0])
    }
  }

  const getTaxFileByYear = async () => {
    let res = await getData(GET_USER_FILE_BY_TAX_YEAR + `?tax_year=${selected}`)

    if (res) {
      console.log('res', res)
      setFileList(res?.data)
    }
  }

  const isPDF = (file_path) => {
    if (file_path) {
      if (file_path.includes('.pdf')) return true
      else return false
    } else return false
  }

  useEffect(() => {
    if (selected) {
      getTaxFileByYear()
    }
  }, [selected])

  useEffect(() => {
    getAllTaxYear()
  }, [])

  return (
    <div className='container mx-auto my-6 h-full'>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col className='gutter-row ' xs={24} sm={24} md={6}>
          <div className='bg-white p-6 my-5 rounded-xl'>
            <h3 className='font-semibold text-[18px] leading-[22px] text-black'>
              Tax Year
            </h3>
            <List
              className='mt-5'
              size='large'
              dataSource={taxYears}
              renderItem={(item) => (
                <List.Item
                  onClick={() => setSelected(item)}
                  className={
                    selected === item
                      ? 'bg-[#E2ECE5] rounded-xl cursor-pointer    font-semibold text-base leading-[22px] text-[#126A25]'
                      : 'cursor-pointer font-semibold text-base leading-[22px]'
                  }
                  style={{'border-block-end': 0}}
                >
                  {item}
                </List.Item>
              )}
            />
          </div>
        </Col>

        <Col className='gutter-row' xs={24} sm={24} md={18}>
          <div className='bg-white p-6 my-5 rounded-xl'>
            <h3 className='font-semibold text-[18px] leading-[22px] text-black'>
              Documents
            </h3>

            {fileList?.length ? (
              <>
                <List
                  className='mt-5'
                  itemLayout='horizontal'
                  dataSource={fileList}
                  renderItem={(item, index) => (
                    <List.Item
                      actions={[
                        <a
                          key='list-loadmore-edit cursor-pointer'
                          href={`${process.env.NEXT_PUBLIC_PUBLIC_URL}public/${item.file_path}`}
                          target='_blank'
                        >
                          <img src='/assets/icons/folder.svg' alt='folder' />
                        </a>,
                        // <a key="list-loadmore-more cursor-pointer">
                        //   <img src='/assets/icons/delete.svg' alt="delete" />
                        // </a>
                      ]}
                    >
                      <List.Item.Meta
                        avatar={
                          isPDF(item.file_path) ? (
                            <>
                              <img
                                src='/assets/images/Image.png'
                                alt='delete'
                              />
                              {/* <object data={`${process.env.NEXT_PUBLIC_PUBLIC_URL}public/${item.file_path}`} type="application/pdf" width="100%" height="100%">
                            <p><a href={`${process.env.NEXT_PUBLIC_PUBLIC_URL}public/${item.file_path}`}></a></p>
                          </object> */}
                            </>
                          ) : (
                            <Avatar
                              shape='square'
                              size={64}
                              src={`${process.env.NEXT_PUBLIC_PUBLIC_URL}${item.file_path}`}
                            />
                          )
                        }
                        title={
                          <div>
                            <div className='font-semibold text-[13px] leading-[18px] text-[#020617]'>
                              {item.title}
                            </div>
                          </div>
                        }
                        description=''
                      />
                    </List.Item>
                  )}
                />
              </>
            ) : (
              <Empty description={false} />
            )}
          </div>
        </Col>
      </Row>
    </div>
  )
}
