import Image from 'next/image';
import { assets } from '@src/assets';
import type { NextPage } from 'next';
import { Row, Col, Button, Tabs } from 'antd';
import { CaretLeftOutlined } from '@ant-design/icons';
import { InvestorsDashboardLayout } from '@src/components';

interface IProps {}

const InvestorsDashboard: NextPage<IProps> = () => {
  const { TabPane } = Tabs;

  const onChange = (key: string) => {
    console.log(key);
  };

  return (
    <InvestorsDashboardLayout classN='investments' subClassN='investments'>
      <div className='selected-investment'>
        <span>
          <CaretLeftOutlined />
          Back
        </span>
        <div className='image-cta' style={{ backgroundImage: `url(${assets.DealCta.src})` }}>
          <Row className='deal-name'>
            <Col xs={24} sm={24} md={3} lg={3} xl={3}>
              <Image
                src={assets.PinterestLogo.src}
                alt={assets.PinterestLogo.alt}
                width='100'
                height={'100'}
              />
            </Col>
            <Col xs={24} sm={24} md={14} lg={14} xl={14}>
              <h1>Future Africa Fund II</h1>
            </Col>
            <Col xs={24} sm={24} md={5} lg={5} xl={5}>
              <Button className='btn-invest'>Invest</Button>
            </Col>
          </Row>
        </div>
        <div className='card-cta'>
          <div className='card-container'>
            <Tabs type='card'>
              <TabPane tab='Note' key='1'>
                <p>Content of Tab Pane 1</p>
                <p>Content of Tab Pane 1</p>
                <p>Content of Tab Pane 1</p>
              </TabPane>
              <TabPane tab='Investments Details' key='2'>
                <p>Content of Tab Pane 2</p>
                <p>Content of Tab Pane 2</p>
                <p>Content of Tab Pane 2</p>
              </TabPane>
              <TabPane tab='Asset Record' key='3'>
                <p>Content of Tab Pane 3</p>
                <p>Content of Tab Pane 3</p>
                <p>Content of Tab Pane 3</p>
              </TabPane>
            </Tabs>
          </div>
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
