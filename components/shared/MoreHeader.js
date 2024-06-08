
import { Breadcrumb } from 'antd';
import WelcomeMessage from './WelcomeMessage';
export default function MoreHeader() {
  return (
    <div className="my-6">
      <div className='bg-white py-10 px-4'>
        <WelcomeMessage />
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
