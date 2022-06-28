import Image from 'next/image';
import { Row, Col, Button } from 'antd';
import { assets } from '@src/assets';
import type { NextPage } from 'next';
import { CaretLeftOutlined } from '@ant-design/icons';
import { InvestorsDashboardLayout } from '@src/components';

interface IProps {}

const InvestorsDashboard: NextPage<IProps> = () => {
  return (
    <InvestorsDashboardLayout classN='investments' subClassN='investments'>
      <div className='selected-investment'>
        <span>
          <CaretLeftOutlined />
          Back
        </span>
        <div className='image-cta' style={{ backgroundImage: `url(${assets.DealCta.src})` }}>
          <Row className='deal-name'>
            <Col xs={24} sm={24} md={4} lg={4} xl={4}>
              <Image
                src={assets.FaLogo.src}
                alt={assets.FaLogo.alt}
                width='100'
                height={'100'}
              />
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <h1>Future Africa Fund II</h1>
            </Col>
            <Col xs={24} sm={24} md={6} lg={6} xl={6}>
              <Button>Invest</Button>
            </Col>
          </Row>
        </div>
      </div>
    </InvestorsDashboardLayout>
  );
};

export async function getServerSideProps(context: any) {
  try {
    return {
      props: {},
    };
  } catch (error) {
    return {
      redirect: {
        permanent: false,
        destination: '/?redirect=true',
      },
      props: {},
    };
  }
}

export default InvestorsDashboard;
