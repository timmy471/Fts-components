import { Layout, Row, Col, Button } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import * as Yup from 'yup';
import Link from 'next/link';

import { ForgotPasswordForm } from '../src/components';
import { assets } from '../src/assets';
import { Fragment } from 'react';

interface Props {}

interface IFormData {
  email: string;
}

const ForgotPassword: NextPage<Props> = () => {
  const { Content } = Layout;

  const [formData, setFormData] = useState<IFormData>({
    email: '',
  });

  const onFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const validateSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email address is required'),
  });

  const onSubmitForm = () => {
    console.log(formData);
  };

  return (
    <div className='forgot-password'>
      <Content className='container'>
        <div>
          <Row>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={10}
              xl={10}
              className='d-flex justify-content-center'
              style={{ backgroundColor: '#F0F0F0', height: '100vh' }}>
              <div className='right-hero'>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <Fragment>
                    <Image
                      src={assets.FaLogo.src}
                      alt={assets.FaLogo.alt}
                      width={100}
                      height={100}
                    />
                  </Fragment>
                </Col>
                <div>
                  <h1>Forgot Password?</h1>
                  <h6>
                    That’s okay, it happens!
                    <br /> Enter the email address associated with your account and we will
                    send you a link to reset your password.
                  </h6>
                  <div className='register-form'>
                    <ForgotPasswordForm
                      formData={formData}
                      validateSchema={validateSchema}
                      onSubmitForm={onSubmitForm}
                      onFormChange={onFormChange}
                    />
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={0} sm={0} md={0} lg={14} xl={14}>
              <div className='left-hero'>
                <div className='image-wrapper'>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={assets.LoginHero.src}
                    alt={assets.LoginHero.alt}
                    width='100%'
                    height='100%'
                  />
                </div>
                <p>
                  Bridging the gap between the best of Africa’s <br />
                  startups and investors
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Content>
      <Col xs={24} sm={24} md={24} lg={0} xl={0}>
        <div className='register-mobile-cta'>
          <h1>
            Time to be a, <br />
            co-investor!
            <br />
            <span>
              Sign up to your account, to access <br /> the Future Africa Collective portal.
            </span>
          </h1>
          <div className='bottom-row'>
            <div className='float-left'>
              <a>Privacy policy</a>
            </div>
            <div className='float-right'>
              <a>Terms & conditions </a>
            </div>
          </div>
        </div>
      </Col>
    </div>
  );
};

export default ForgotPassword;
