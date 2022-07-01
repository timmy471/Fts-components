import Link from 'next/link';
import Image from 'next/image';
import { assets } from '@src/assets';
import type { NextPage } from 'next';
import { Row, Col, Button, Tabs } from 'antd';
import { CaretLeftOutlined } from '@ant-design/icons';
import { InvestorsDashboardLayout } from '@src/components';

interface IProps {}

const SelectedInvestment: NextPage<IProps> = () => {
  const { TabPane } = Tabs;

  const onChange = (key: string) => {
    console.log(key);
  };

  return (
    <InvestorsDashboardLayout classN='investments' subClassN='investments'>
      <div className='selected-investment'>
        <Link href='/investors/dashboard/investments' passHref>
          <span className='cursor-pointer '>
            <CaretLeftOutlined />
            Back
          </span>
        </Link>
        <div className='image-cta mt-2' style={{ backgroundImage: `url(${assets.DealCta.src})` }}>
          <Row className='deal-name'>
            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
              <Image
                src={assets.PinterestLogo.src}
                alt={assets.PinterestLogo.alt}
                width='100'
                height={'100'}
              />
            </Col>
            <Col xs={18} sm={18} md={14} lg={14} xl={14}>
              <h1>Future Africa</h1>
            </Col>
            <Col xs={24} sm={24} md={5} lg={5} xl={5}>
              <Link href='/investors/dashboard/investments/platform' passHref>
                <Button className='btn-invest'>Invest</Button>
              </Link>
            </Col>
          </Row>
        </div>
        <div className='card-cta'>
          <div className='card-container'>
            <Tabs type='card'>
              <TabPane tab='Note' key='1'>
                <Row gutter={[40, 40]}>
                  <Col xs={24} sm={24} md={18} lg={18} xl={18}>
                    <p>
                      Our Fund is led by operators who founded, funded and helped build many of
                      Africas fastest-growing startups like Andela, Flutterwave, Jumia, Kobo360
                      and 54gene, amongst several others, from their earliest stages over the
                      last decade. This experience of funding, founding and building
                      high-growth technology businesses gives us a unique understanding of how
                      to be partners that can provide more than capital to these types of
                      businesses. Founders flock to us because of our track record of
                      partnering with companies to provide early-stage capital when they need
                      it most. We also provide coaching on key elements of building a
                      high-growth business including sales and business development, support
                      for future raises, people operations, marketing, product and strategy. We
                      work with a strong community of small businesses, large corporations,
                      angel and institutional investors, government officials and talented
                      professionals, who work with our companies to innovate and grow.
                      <br />
                      <br />
                      Ultimately, we do not just do this because we are good at making great
                      returns for you. We do what we do because of our desire to partner with
                      companies leveraging the miracle of technology and innovation to build
                      out of Africas deeply unsettling challenges global businesses that
                      deliver a more equitable future where prosperity and purpose are within
                      everyones reach. The Fund aims to sell stakes in portfolio companies
                      after that company achieves a $100M+ valuation, instead of waiting for a
                      traditional exit opportunity. Any companies featured above are referenced
                      due to their notoriety in the startup and venture capital community.
                      <br />
                      <br />
                      <i>
                        {' '}
                        These references are provided for illustrative purposes only and are
                        not an exhaustive list of all investments made or involving the Fund
                        Lead. A full list of the Fund Lead’s investment history will be made
                        available upon request.
                      </i>
                    </p>
                  </Col>
                  <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                    <b>
                      <img
                        src={assets.MessageLeadsIcon.src}
                        alt={assets.MessageLeadsIcon.alt}
                        width='15'
                        height={'15'}
                        className='mbottom-1'
                      />
                      {'   '}
                      Message Fund Leads
                    </b>
                    <b>
                      <img
                        src={assets.ClosingDocsIcon.src}
                        alt={assets.ClosingDocsIcon.alt}
                        width='15'
                        height={'15'}
                        className='mbottom-1'
                      />
                      {'   '}
                      Closing Documents
                    </b>
                    <br />
                    <br />
                    <br />
                    <h3>Fund Manager/Lead</h3>
                    <h2>Future Africa</h2>
                    <p className='text-primary'>
                      {' '}
                      <img
                        src={assets.PastInvestmentsIcon.src}
                        alt={assets.PastInvestmentsIcon.alt}
                        width='15'
                        height='15'
                        className='mbottom-1'
                      />
                      {'   '}
                      Past Investments
                    </p>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab='Investments Details' key='2'>
                <Row className='mb-3' gutter={[20, 20]}>
                  <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                    <p>Subscription Start Date</p>
                    <em>April 1, 2022</em>
                  </Col>
                  <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                    <p>Carry</p>
                    <em>Twenty percent (20%)</em>
                  </Col>
                </Row>
                <Row className='mb-3' gutter={[20, 20]}>
                  <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                    <p>Frequency</p>
                    <em>Quarterly</em>
                  </Col>
                  <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                    <p>Minimum Quarterly Subscription</p>
                    <em>$10,000</em>
                  </Col>
                </Row>
                <Row className='mb-3' gutter={[20, 20]}>
                  <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                    <p>Management Fee</p>
                    <em>
                      2% per annum over each funds 10-year life, payable quarterly over the
                      first four years
                    </em>
                  </Col>
                  <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                    <p>GP Commitment</p>
                    <em>
                      Future Africas personal subscription per quarter will be at least $10,000
                      in total.
                    </em>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab='Asset Record' key='3'>
                <span>
                  ** This is a list of companies that investment have been made with by the
                  entity responsible for this
                  <br /> specific rolling fund. These were selected based fund manager’s sole
                  discretion.{' '}
                </span>
                <Row gutter={[30, 30]} className='mt-2'>
                  <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                    <div className='company'>
                      <img
                        src={assets.AlphaLogo.src}
                        alt={assets.AlphaLogo.alt}
                        width='100'
                        height='100'
                      />
                    </div>
                  </Col>
                  <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                    <div className='company'>
                      <img
                        src={assets.MobniaLogo.src}
                        alt={assets.MobniaLogo.alt}
                        width='100'
                        height='100'
                      />
                    </div>
                  </Col>
                  <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                    <div className='company'>
                      <img
                        src={assets.EhealthLogo.src}
                        alt={assets.EhealthLogo.alt}
                        width='100'
                        height='100'
                      />
                    </div>
                  </Col>
                  <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                    <div className='company'>
                      <img
                        src={assets.AellaLogo.src}
                        alt={assets.AellaLogo.alt}
                        width='100'
                        height='100'
                      />
                    </div>
                  </Col>
                  <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                    <div className='company'>
                      <img
                        src={assets.BetwayLogo.src}
                        alt={assets.BetwayLogo.alt}
                        width='100'
                        height='100'
                      />
                    </div>
                  </Col>
                </Row>
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

export default SelectedInvestment;
