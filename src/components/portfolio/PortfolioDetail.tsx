import Link from 'next/link';
import Image from 'next/image';
import { Col, Row } from 'antd';
import { portfolioData } from '@src/helpers/constants';
import { Pill, Button, Typography } from '@src/components';

export const PortfolioDetail: React.FC = () => {
  return (
    <div className='cursor-pointer'>
      <Row gutter={[16, 22]}>
        {[...portfolioData, ...portfolioData].map(
          (
            {
              companyName,
              companyLogo,
              companyId,
              investmentType,
              dateInvested,
              about,
              amount,
              platform,
              status,
            },
            key
          ) => (
            <Col xs={24} md={12} xl={6} key={key}>
              <div className='portfolio-detail-card'>
                <div className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex align-items-center h-100'>
                    <Image src={companyLogo} alt={companyName} height={25} width={30} />
                    <Typography component='h6'>{companyName}</Typography>
                  </div>
                  <Pill label={investmentType} className='detail-tag' />
                </div>
                <Typography className='mtop-4 mbottom-4' variant='body10' state='secondary'>
                  {about}
                </Typography>
                <Typography variant='body10' state='secondary' className='mb-0'>
                  Amount Invested
                </Typography>
                <Typography component='h5'>{amount}</Typography>
                <div className='mt-1 d-flex justify-content-between'>
                  <div>
                    <Typography variant='body10' state='secondary' className='mb-0'>
                      Date Invested
                    </Typography>
                    <Typography variant='body9'>{dateInvested}</Typography>
                  </div>
                  <div>
                    <Typography variant='body10' state='secondary' className='mb-0'>
                      Platform
                    </Typography>
                    <Typography variant='body9'>{platform}</Typography>
                  </div>
                  <div>
                    <Typography variant='body10' state='secondary' className='mb-0'>
                      Status
                    </Typography>
                    <Typography variant='body9'>{status}</Typography>
                  </div>
                </div>
                <Link href={`/investors/dashboard/company/${companyId}`}>
                  <div className='view-detail-btn mtop-2'>
                    <Button fullWidth label='View Detail' variant='secondary' />
                  </div>
                </Link>
              </div>
            </Col>
          )
        )}
      </Row>
    </div>
  );
};
