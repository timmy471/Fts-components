import Link from 'next/link';
import Image from 'next/image';
import { assets } from '@src/assets';
import type { NextPage } from 'next';
import { Fragment, useState } from 'react';
import { Row, Col, Input, Checkbox, Button } from 'antd';
import { InvestorsDashboardLayout } from '@src/components';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

interface IProps {}

const Subscription: NextPage<IProps> = () => {
  const [formData, setFormData] = useState({
    value: '$50,000',
    period: 'Quarter',
  });

  const [checks, setChecks] = useState({
    terms: false,
  });
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: `${event.target.value}` });
  };

  const onCheck = (event: CheckboxChangeEvent | any) => {
    setChecks({ ...checks, [event.target.name]: event.target.checked });
  };
  return (
    <InvestorsDashboardLayout classN='investments' subClassN='investments'>
      <div className='subscription'>
        <h1>Subscription</h1>
        <p>Invest in early stage companies through these funds</p>
        <Fragment>
          <Row gutter={[30, 30]}>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <div className='left-aside'>
                <Row>
                  <Image
                    src={assets.PinterestLogo.src}
                    alt={assets.PinterestLogo.alt}
                    width='80'
                    height='80'
                  />
                  <h2>
                    Future Africa Fund{' '}
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
                  </h2>
                </Row>
              </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Row>
                <Col xs={18} sm={18} md={18} lg={18} xl={18}>
                  <div className='right-aside'>
                    <h4 className='mb-1'>Subscription Preview</h4>
                    <Row gutter={[20, 20]}>
                      <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <span>Subscription</span>
                        <h4>4 quarters of $50,000</h4>
                      </Col>
                      <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                        <span>Mgmt. Fee</span>
                        <h4>1%</h4>
                      </Col>
                      <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                        <span>Carry</span>
                        <h4>0%</h4>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                  <div className='last-aside'>
                    <h4 className='mb-1'>Amount Due</h4>
                    <h2>$50,000</h2>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Fragment>

        <div className='sub-container'>
          <div className='item'>
            <h4>Quarterly Subscription</h4>
            <p>Minimum: $50,000</p>
            <Input
              value={formData?.value}
              name='value'
              onChange={onInputChange}
              className='input'
            />
            <div className='sub-item'>
              <span>Wallet Balance: $60,000</span>
              <span className='text-primary'>Fund Wallet</span>
            </div>
          </div>
          <div className='item'>
            <h4>Subscription Period</h4>
            <p>Set by the fund lead</p>
            <Input
              value={formData?.period}
              name='value'
              onChange={onInputChange}
              className='input'
            />
          </div>
        </div>

        <div className='form-container'>
          <p>
            Closing terms
            <br /> I agree to the closing documents provisions. I understand and acknowledge
            that:
          </p>
          <ul>
            <li>
              {' '}
              <Checkbox name='remember' value={checks.terms} onChange={onCheck}>
                <label>
                  I understand that by completing the below, I will be subscribed to the set of
                  closing documents that corresponds with the accreditation information I have
                  previously provided. If I have indicated that I am a qualified purchaser
                  (QP), I will be subscribing to the AngelList Access Fund advised by SAX
                  Capital QP, LP. If I have indicated that I am an accredited investor, I will
                  be subscribing to the AngelList Access Fund advised by SAX Capital, LP.
                </label>
              </Checkbox>
            </li>

            <li>
              {' '}
              <Checkbox name='remember' value={checks.terms} onChange={onCheck}>
                <label>
                  I agree that I am legally committing to invest my subscription amount for at
                  least 4 quarters and that there may be consequences, including the loss of
                  prior quarterly contributions, if I dont fulfill my commitment.
                </label>
              </Checkbox>
            </li>
            <li>
              {' '}
              <Checkbox name='remember' value={checks.terms} onChange={onCheck}>
                <label>
                  I understand that by completing the below, I will be subscribed to the set of
                  closing documents that corresponds with the accreditation information I have
                  previously provided. If I have indicated that I am a qualified purchaser
                  (QP), I will be subscribing to the AngelList Access Fund advised by SAX
                  Capital QP, LP. If I have indicated that I am an accredited investor, I will
                  be subscribing to the AngelList Access Fund advised by SAX Capital, LP.
                </label>
              </Checkbox>
            </li>
          </ul>
          <div className='buttons'>
            <Link href={"'/investors/dashboard/investments'"}>
              <Button className='btn-cancel'>Cancel</Button>
            </Link>
            <Link href={"'/investors/dashboard/investments'"}>
              <Button className='btn-confirm'>Confirm Subscription</Button>
            </Link>
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

export default Subscription;
