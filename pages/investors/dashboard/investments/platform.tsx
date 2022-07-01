import Link from 'next/link';
import Image from 'next/image';
import { assets } from '@src/assets';
import type { NextPage } from 'next';
import { Row, Col, Button } from 'antd';
import { InvestorsDashboardLayout } from '@src/components';

interface IProps {}

const SelectedInvestment: NextPage<IProps> = () => {
  return (
    <InvestorsDashboardLayout classN='investments' subClassN='investments'>
      <div className='platform'>
        <h1>How do you want to invest?</h1>
        <p>Invest in early stage companies through these funds</p>
        <Row className='mt-2' gutter={[20, 20]}>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <div className='card'>
              <Image
                src={assets.AngelListLogo.src}
                alt={assets.AngelListLogo.alt}
                width='80'
                height='80'
              />
              <h3>AngelList</h3>
              <p>
                Please select AngelList if you live in the United States or Canada and/or meet
                the following criteria:
              </p>
              <ul>
                <li>You are an accredited investor</li>
                <li>Have an annual income of over $200K individually</li>
                <li>Have an annual income of over $350K with spouse </li>
                <li>Have net assets worth over $1 million</li>
              </ul>
              <Row>
                <Col span={12} offset={4} className='mt-1'>
                  <Link href='/investors/dashboard/investments/cordros' passHref>
                    <Button className='btn-invest'>Invest</Button>
                  </Link>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <div className='card'>
              <div>
                <Image
                  src={assets.VaubanLogo.src}
                  alt={assets.VaubanLogo.alt}
                  width='80'
                  height='80'
                />
              </div>
              <h3>Vauban</h3>
              <p>
                Please select Vauban if you live outside the US & Canada and dont meet the
                criteria stated for AngelList.
              </p>
              <ul>
                <li>You are an accredited investor</li>
                <li>Have an annual income of over $200K individually</li>
              </ul>
              <Row>
                <Col span={12} offset={4} className='mt-4 pt-3'>
                  <Link href='/investors/dashboard/investments/cordros' passHref>
                    <Button className='btn-invest'>Invest</Button>
                  </Link>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <div className='card'>
              <Image
                src={assets.CordrosLogo.src}
                alt={assets.CordrosLogo.alt}
                width='80'
                height='80'
              />
              <h3>Cordros</h3>
              <p>
                To join the collective, you are required to complete some KYC before
                proceeding. These includes:
              </p>
              <ul>
                <li>You are an accredited investor</li>
                <li>Have an annual income of over $200K individually</li>
              </ul>
              <Row>
                <Col span={12} offset={4} className='mt-4 pt-3'>
                  <Link href='/investors/dashboard/investments/cordros' passHref>
                    <Button className='btn-invest'>Invest</Button>
                  </Link>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
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

export default SelectedInvestment;
