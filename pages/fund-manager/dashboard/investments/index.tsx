import Image from 'next/image';
import type { NextPage } from 'next';
import { Row, Col, Button } from 'antd';
import { FundManagerDashboardLayout } from '@src/components';
import { assets } from '@src/assets';

interface IProps {}

const FundManagerDashboard: NextPage<IProps> = () => {
  return (
    <FundManagerDashboardLayout classN='investments'>
      <div className='fund-manager-dashboard'>
        <Row gutter={[25, 25]}>
          <Col xs={16} sm={17} md={16} lg={16} xl={16}>
            <h1>Investments</h1>
          </Col>
          <Col xs={0} sm={0} md={4} lg={4} xl={4}>
            <Button className='fa-green-btn'>New SPV</Button>
          </Col>
          <Col xs={8} sm={7} md={4} lg={4} xl={4}>
            <Button className='fa-green-outline-btn'>New Fund</Button>
          </Col>
        </Row>

        <div className='metrics'>
          <div className='item'>
            <span>Total Raised (SPV + Fund)</span>
            <h1>$5,345,697,000</h1>
          </div>
          <div className='item'>
            <span>Total SPVs</span>
            <h1>15</h1>
          </div>
          <div className='item'>
            <span>SPVs currently Raising</span>
            <h1>9</h1>
          </div>
          <div className='item'>
            <span>Total Funds</span>
            <h1>02</h1>
          </div>
          <div className='item'>
            <span>Fund Currently Raising</span>
            <h1>02</h1>
          </div>
        </div>
        <div className='funds-list'>
          <p>All Funds (2)</p>
          <Row>
            <Col xs={24} sm={24} md={12} lg={6} xl={6} className='fund'>
              <Row gutter={[10, 10]}>
                <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                  <Image
                    src={assets.PinterestLogo.src}
                    alt={assets.PinterestLogo.alt}
                    width='40'
                    height='40'
                  />
                </Col>
                <Col xs={20} sm={20} md={20} lg={20} xl={20}>
                  <h4>Future Africa Fund 1</h4>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate.
                  </span>
                  <a>Raising for Q1 2022</a>
                </Col>
              </Row>
            </Col>

            <Col xs={24} sm={24} md={12} lg={6} xl={6} className='fund'>
              <Row gutter={[10, 10]}>
                <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                  <Image
                    src={assets.MooiLogo.src}
                    alt={assets.MooiLogo.alt}
                    width='40'
                    height='40'
                  />
                </Col>
                <Col xs={20} sm={20} md={20} lg={20} xl={20}>
                  <h4>Future Africa Fund 2</h4>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate.
                  </span>
                  <a>Raising for Q1 2022</a>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </FundManagerDashboardLayout>
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

export default FundManagerDashboard;
