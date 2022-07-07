import type { NextPage } from 'next';
import { Row, Col, Button } from 'antd';
import { FundManagerDashboardLayout } from '@src/components';

interface IProps {}

const FundManagerDashboard: NextPage<IProps> = () => {
  return (
    <FundManagerDashboardLayout classN='investments'>
      <div className='fund-manager-dashboard'>
        <Row gutter={[25, 25]}>
          <Col xs={17} sm={17} md={17} lg={17} xl={17}>
            <h1>Investments</h1>
          </Col>
          <Col xs={0} sm={0} md={3} lg={3} xl={3}>
            <Button className='fa-green-btn'>New SPV</Button>
          </Col>
          <Col xs={3} sm={3} md={3} lg={3} xl={3}>
            <Button className='fa-green-outline-btn'>New Fund</Button>
          </Col>
        </Row>
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
