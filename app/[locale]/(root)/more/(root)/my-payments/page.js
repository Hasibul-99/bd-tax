"use client"

import { Space, Table, Tag } from 'antd';

const columns = [
  {
    title: 'Status',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <Tag color={'green'}>
      Valid
    </Tag>,
  },
  {
    title: 'Transaction Date',
    dataIndex: 'age',
    key: 'age',
    render: (text) => <>16/08/2022 9.00 AM</>
  },
  {
    title: 'Tax Year',
    dataIndex: 'address',
    key: 'address',
    render: (text) => <>2020-2021</>
  },
  {
    title: 'Tarnsaction ID',
    dataIndex: 'address',
    key: 'address',
    render: (text) => <>BDTAX_100_5369-5f39417420ec4</>
  },
  {
    title: 'Amount',
    dataIndex: 'address',
    key: 'address',
    render: (text) => <>1700</>
  },
  {
    title: 'Card Type',
    dataIndex: 'address',
    key: 'address',
    render: (text) => <>VISA-City Bank</>
  },
  {
    title: 'Card Issuer',
    dataIndex: 'address',
    key: 'address',
    render: (text) => <>WELLS FARGO</>
  },
  {
    title: 'Bank Transaction ID',
    dataIndex: 'address',
    key: 'address',
    render: (text) => <>CV668720200816</>
  },
  {
    title: 'Error',
    dataIndex: 'address',
    key: 'address',
    render: (text) => <>CANCELLED</>
  },
  {
    title: 'View Receipt',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <img src='/assets/icons/file-2.svg' alt="Premium Plus" />
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

export default function MyPayments() {
  return (
    <div className="bg-white py-6 px-6">
      <h3 className='text-xl font-semibold'>Payment Status</h3>

      <div className='overflow-x-scroll mt-6'>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  )
}
