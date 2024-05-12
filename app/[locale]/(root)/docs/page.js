"use client"

import { Avatar, Col, List, Row } from 'antd';
import { useState } from 'react';
const data = [
  '2023-2024',
  '2022-2023',
  '2021-2022',
  '2020-2021',
];

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
];

export default function Doc() {
  const [selected, setSelected] = useState('2023-2024')
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
        <Col className="gutter-row " span={6}>
          <div className='bg-white p-6 my-5 rounded-md'>
            <h3>Tax Year</h3>
            <List
              className='mt-5'
              size="large"
              dataSource={data}
              renderItem={(item) => <List.Item className={selected === item ? 'active' : ''}
                style={{ 'border-block-end': 0 }}>{item}</List.Item>}
            />
          </div>
        </Col>

        <Col className="gutter-row" span={18}>
          <div className='bg-white p-6 my-5 rounded-md'>
            <h3>Tax Year</h3>

            <List
              className='mt-5'
              itemLayout="horizontal"
              dataSource={data1}
              renderItem={(item, index) => (
                <List.Item
                  actions={[
                    <a key="list-loadmore-edit cursor-pointer">
                      <img src='/assets/icons/folder.svg' alt="folder" />
                    </a>,
                    <a key="list-loadmore-more cursor-pointer">
                      <img src='/assets/icons/delete.svg' alt="delete" />
                    </a>]}>
                  <List.Item.Meta
                    avatar={<Avatar shape="square" size={64} src={`/assets/images/image.png`} />}
                    title={<a>{item.title}</a>}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                  />
                </List.Item>
              )}
            />
          </div>
        </Col>
      </Row>
    </div>
  )
}
