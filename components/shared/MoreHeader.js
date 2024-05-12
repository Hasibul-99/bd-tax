
import { Breadcrumb } from 'antd';
export default function MoreHeader() {
  return (
    <div className="my-6">
      <div className='bg-white py-10 px-4'>
        <h3 className='text-xl font-semibold'>Welcome back, Tareq</h3>

        <Breadcrumb
          items={[
            {
              title: 'Home',
            },
            {
              title: <a href="">More</a>,
            },
            {
              title: 'Profile',
            },
          ]}
        />
      </div>
    </div>
  )
}
