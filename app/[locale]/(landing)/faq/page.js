'use client'
import {GET_FAQ} from '@/scripts/api'
import {getData} from '@/scripts/api-service'
import {Collapse, List, Typography} from 'antd'
import {useEffect, useState} from 'react'
const {Title} = Typography

export default function FAQ() {
  const [haqItems, setFaqItems] = useState([])

  const getFaq = async () => {
    let res = await getData(GET_FAQ)

    if (res) {
      console.log(res)
      let masterData = res?.data
      let items = []
      masterData.forEach((item, idx) => {
        items.push({
          key: (idx + 1).toString(),
          label: (
            <h4 level={5} className='font-medium text-lg leading-7'>
              {' '}
              {item.title}
            </h4>
          ),
          children: <div>{showFaqBody(item.description)}</div>,
        })
      })

      setFaqItems(items)
    }
  }

  const showFaqBody = (description) => {
    if (description.length > 1) {
      return (
        <List
          dataSource={description}
          renderItem={(item) => (
            <List.Item>
              <div className='font-normal text-base leading-6'>{item}</div>
            </List.Item>
          )}
        />
      )
    } else if (description.length) {
      return (
        <div className='font-normal text-base leading-6'>
          {description.at(0)}
        </div>
      )
    } else return null
  }

  useEffect(() => {
    getFaq()
  }, [])
  return (
    <div className='bg-[#F8FAFC] container mx-auto min-h-[80vh] mt-5  pb-16'>
      <div className='custom-container-under bg-white md:mt-10 py-6 px-6 rounded-2xl'>
        <h1 className='mx-auto text-center text-3xl font-bold'>
          Frequently Asked Questions
        </h1>
        <p className='text-xl mx-auto text-center mt-4'>
          Everything you need to know about our product and taxes.
        </p>
        {/* <Divider
          variant='dashed'
          style={{
            borderColor: '#7cb305',
          }}
        ></Divider> */}

        {haqItems?.length ? (
          <>
            <Collapse
              className='mt-10'
              defaultActiveKey={['1']}
              expandIconPosition={'end'}
              items={haqItems}
            />
          </>
        ) : (
          <div className='text-center h-[400px] flex justify-items-center items-center relative'>
            <div>
              <img
                className='image'
                src='/assets/icons/loading.svg'
                alt='Premium Plus'
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
