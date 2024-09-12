'use client'

import React from 'react'
import {Collapse, List, Typography} from 'antd'
const {Title} = Typography

export default function FAQ({faq}) {
  const showFaqData = (masterData) => {
    let items = []
    masterData.forEach((item, idx) => {
      items.push({
        key: (idx + 1).toString(),
        label: (
          <h4 level={5} className='text-lg leading-7 font-semibold'>
            {' '}
            {item.title}
          </h4>
        ),
        children: <div>{showFaqBody(item.description)}</div>,
      })
    })

    return items
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
  return (
    <div>
      <Collapse
        className='mt-5'
        defaultActiveKey={['1']}
        expandIconPosition={'end'}
        items={showFaqData(faq || [])}
      />
    </div>
  )
}
