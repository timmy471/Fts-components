import { Col, Row } from 'antd';
import Image from 'next/image';
import { assets } from '@src/assets';
import {
  InvestorsDashboardLayout,
  Typography,
  SelectField,
  PortfolioChart,
  PortfolioDetail,
} from '@src/components';

import type { NextPage } from 'next';
interface IProps {}

const Portfolio: NextPage<IProps> = () => {
  const yearOptions = ['2022', '2021', '2020', '2019', '2018'];

  const showColorIndicators = () => (
    <div className='d-flex'>
      <div className='indicator'>
        <div className='value-indicator'></div>
        <Typography variant='body9'>Portfolio Value</Typography>
      </div>
      <div className='indicator'>
        <div className='ml-4 amount-indicator'></div>
        <Typography variant='body9'>Amount Invested</Typography>
      </div>
    </div>
  );

  return (
    <InvestorsDashboardLayout classN='portfolio' subClassN='portfolio'>
      <div className='portfolio'>
        <Typography className='ml-1' component='h4'>
          Portfolio
        </Typography>
        <div className='mt-2'>
          <Row gutter={[18, 12]}>
            <Col xs={{ span: 24, order: 2 }} xl={{ span: 16, order: 1 }}>
              <div className='chart-container header-card pt-3 px-4 pb-1'>
                <Row>
                  <Col xs={18}>
                    <div className='d-flex justify-content-between align-items-center indicator-container'>
                      <Typography variant='body5'>Portfolio Cummulative</Typography>
                      <div className='desktop-color-indicator'>{showColorIndicators()}</div>
                    </div>
                  </Col>
                  <Col xs={6}>
                    <div className='d-flex justify-content-end'>
                      <SelectField
                        options={yearOptions.map((year) => ({ label: year, value: year }))}
                        onChange={() => {}}
                        defaultValue='2022'
                        required={false}
                        className='date-select'
                      />
                    </div>
                  </Col>
                </Row>
                <div className='mtop-2 pr-2 mobile-color-indicator'>
                  {showColorIndicators()}
                </div>
                <PortfolioChart />
              </div>
            </Col>
            <Col xs={{ span: 24, order: 1 }} xl={{ span: 8, order: 2 }}>
              <div className='h-100'>
                <div className='header-card header-section d-flex pt-4 px-4'>
                  <div className='icon-container'>
                    <Image
                      src={assets.dollarBriefcaseIcon.src}
                      alt={assets.dollarBriefcaseIcon.alt}
                      width='100%'
                      height='100%'
                    />
                  </div>
                  <div>
                    <Typography variant='body8' state='secondary'>
                      Portfolio Value
                    </Typography>
                    <Typography component='h5'>$56,000</Typography>
                    <div className='mtop-2'>
                      <Typography className='font-inline' variant='body9'>
                        You gain $18.6027
                      </Typography>{' '}
                      <Typography className='font-inline font-success' variant='body9'>
                        (12.70%)
                      </Typography>
                    </div>
                  </div>
                </div>
                <div className='header-card header-section mt-1 d-flex pt-4 px-4'>
                  <div className='icon-container'>
                    <Image
                      src={assets.briefcaseIcon.src}
                      alt={assets.briefcaseIcon.alt}
                      width='100%'
                      height='100%'
                    />
                  </div>
                  <div>
                    <Typography variant='body8' state='secondary'>
                      Total Number of Investments
                    </Typography>
                    <Typography component='h5'>4</Typography>
                    <div className='mtop-2'>
                      <Typography variant='body10' state='secondary'>
                        2 SPVs | 2 Funds
                      </Typography>{' '}
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className='mtop-3'>
          <PortfolioDetail />
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

export default Portfolio;
