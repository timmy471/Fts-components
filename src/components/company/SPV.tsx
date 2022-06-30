import Image from 'next/image';
import { useState } from 'react';
import { Row, Col, Tabs } from 'antd';
import { ISPVCompanyDetail } from 'type.d';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import { Typography, Pill, Button, TextAreaField } from '@src/components';

interface IProps {
  companyDetail: ISPVCompanyDetail;
}

export const SPV: React.FC<IProps> = ({ companyDetail }) => {
  const [showCustomInfo, setShowCustomInfo] = useState<boolean>(false);
  const {
    logo,
    name: companyName,
    size,
    valuation,
    headquater,
    yearFounded,
    type,
    category,
    website,
    livePositions,
    investedValuation,
    currentValuation,
    founders,
  } = companyDetail;

  const { TabPane } = Tabs;

  const onChange = (key: string) => {
    console.log(key);
  };

  if (!companyDetail) return null;

  return (
    <div>
      <Row gutter={[22, 22]}>
        <Col xs={24} xl={6}>
          <div className='bg-white company-detail-container'>
            <div className='text-center company-intro'>
              <Image src={logo} alt={companyName} height={55} width={70} />
              <Typography component='h6'>{companyName}</Typography>
              <div>
                <Pill className='detail-tag' isTag label={category} />
              </div>
            </div>
            <div className='mobile-company-intro ml-2'>
              <Image src={logo} alt={companyName} height={55} width={70} />
              <div className='mtop-3 ml-3'>
                <Typography component='h6'>{companyName}</Typography>
                <div className='mt-1'>
                  <Pill className='detail-tag' isTag label={category} />
                </div>
              </div>
            </div>
            <div className='mt-2 other-detail'>
              <div className='section-one pb-2'>
                <div className='d-flex justify-content-between'>
                  <Typography variant='body8' state='secondary'>
                    Headquater
                  </Typography>
                  <Typography variant='body7' state='secondary'>
                    {headquater}
                  </Typography>
                </div>
                <div className='d-flex justify-content-between'>
                  <Typography variant='body8' state='secondary'>
                    Company Size
                  </Typography>
                  <Typography variant='body7' state='secondary'>
                    {size}
                  </Typography>
                </div>
                <div className='d-flex justify-content-between'>
                  <Typography variant='body8' state='secondary'>
                    Valuation
                  </Typography>
                  <Typography variant='body7' state='secondary'>
                    {valuation}
                  </Typography>
                </div>
              </div>
              <div className='custom-information pt-2'>
                <div>
                  <div
                    className='d-flex justify-content-between show-custom-cta'
                    onClick={() => setShowCustomInfo(!showCustomInfo)}>
                    <Typography variant='body7'>Custom Information</Typography>
                    <span>{showCustomInfo ? <CaretUpOutlined /> : <CaretDownOutlined />}</span>
                  </div>

                  <div className={`custom-detail-info${showCustomInfo ? '__visible' : ''}`}>
                    <div className='d-flex justify-content-between mtop-3'>
                      <Typography variant='body8' state='secondary'>
                        Industry
                      </Typography>
                      <Typography variant='body7' state='secondary'>
                        {category}
                      </Typography>
                    </div>
                    <div className='d-flex justify-content-between'>
                      <Typography variant='body8' state='secondary'>
                        Founded
                      </Typography>
                      <Typography variant='body7' state='secondary'>
                        {yearFounded}
                      </Typography>
                    </div>
                    <div className='d-flex justify-content-between'>
                      <Typography variant='body8' state='secondary'>
                        Type
                      </Typography>
                      <Typography variant='body7' state='secondary'>
                        {type}
                      </Typography>
                    </div>
                    <div className='d-flex justify-content-between'>
                      <Typography variant='body8' state='secondary'>
                        Website
                      </Typography>
                      <a href={`https://${website}`} target='_blank' rel='noopener noreferrer'>
                        <Typography variant='body7' state='tetiary'>
                          {website}
                        </Typography>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='investment-value-container mt-1 bg-white'>
            <Typography variant='body10' state='secondary' className='total-invested'>
              Total Invested
            </Typography>
            <Typography component='h5'>$100,000</Typography>
            <Typography variant='body10' state='secondary' className='mtop-1'>
              {livePositions} Live position(s)
            </Typography>
            <div className='d-flex mt-3 justify-content-between'>
              <div>
                <Typography variant='body10' state='secondary' className='mbottom-1'>
                  Invested Valuation
                </Typography>
                <Typography variant='body5'>{investedValuation}</Typography>
              </div>
              <div>
                <Typography variant='body10' state='secondary' className='mbottom-1'>
                  Current Valuation
                </Typography>
                <Typography variant='body5'>{currentValuation}</Typography>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={24} xl={18}>
          <div className='fa-tabs'>
            <Tabs defaultActiveKey='1' onChange={onChange} tabBarGutter={7}>
              <TabPane tab='About' key='1'>
                <div className='bg-white about'>
                  <div className='about-intro'>
                    <Typography variant='body8' state='secondary'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus et
                      sagittis, maecenas dignissim sit at non. Sed fringilla proin vestibulum
                      integer fermentum eros, praesent congue. Tincidunt mollis dictumst at
                      nisi, fermentum quisque suspendisse. Et, ornare et duis in sit tellus
                      molestie purus. Morbi enim mauris malesuada ultricies suspendisse in vel.
                      Leo convallis fames non eu elit turpis enim vel velit. Nec mi vulputate
                      leo id tempus. Eget molestie faucibus sit sed sagittis.
                    </Typography>
                    <ul className='mt-1'>
                      <li>
                        Nec mi vulputate leo id tempus. Eget molestie faucibus sit sed
                        sagittis. Nec mi vulputate leo id
                      </li>
                      <li>
                        Nec mi vulputate leo id tempus. Eget molestie faucibus sit sed
                        sagittis. Nec mi vulputate leo id
                      </li>
                      <li>
                        Nec mi vulputate leo id tempus. Eget molestie faucibus sit sed
                        sagittis. Nec mi vulputate leo id
                      </li>
                    </ul>
                  </div>

                  <div className='other-detail'>
                    <div className='other-detail-sub'>
                      <div>
                        <Typography component='h6' state='secondary'>
                          Packaged well for greater things
                        </Typography>
                        <Typography state='secondary' className='mtop-2'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus et
                          sagittis, maecenas dignissim sit at non. Sed fringilla proin
                          vestibulum integer fermentum eros, praesent congue. Tincidunt mollis
                          dictumst at nisi, fermentum quisque suspendisse. Et, ornare et duis
                          in sit tellus molestie purus.{' '}
                        </Typography>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPane>
              <TabPane tab='Founders' key='2'>
                <div className='founders-container d-flex bg-white'>
                  {founders.map((founder, key) => (
                    <div key={key}>
                      <Image src={founder.picture} alt={founder.name} height={80} width={80} />
                      <Typography
                        variant='body2'
                        state='secondary'
                        className='mbottom-1 mt-1 founder-name'>
                        {founder.name}
                      </Typography>
                      <Typography state='secondary'>{founder.position}</Typography>
                    </div>
                  ))}
                </div>
              </TabPane>
            </Tabs>
            <div className='mt-1 px-3 py-3 bg-white'>
              <Typography component='h6'>Your Notes</Typography>
              <TextAreaField
                value=''
                variant='primary'
                className='mt-1 mbottom-3'
                rows={5}
                placeholder='Add notes about your investment here'
              />
              <div className='d-flex justify-content-end'>
                <Button label='Save Changes' />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
