'use client'

import MoreHeader from '@/components/shared/MoreHeader';
import MoreLeftNavebar from '@/components/shared/MoreLeftNavebar';
import { Col, Row } from 'antd';

const RootLayout = ({ children }) => {
  return (
    <>
      <div className="bg-[#F8FAFC] container mx-auto my-6">
        <MoreHeader />
        <Row
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}
        >
          <Col className="gutter-row " span={6}>
            <MoreLeftNavebar />
          </Col>
          <Col className="gutter-row " span={18}>
            <div>
              {children}
            </div>
          </Col>
        </Row>

      </div>
    </>
  );
};

export default RootLayout;