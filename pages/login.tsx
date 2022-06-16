import { Layout, Row, Col, Button } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import * as Yup from 'yup';

import { LoginForm } from '../src/components';
import { assets } from '../src/assets';
import { Fragment } from 'react';

interface Props {}

interface IFormData {
  email: string;
  password: string;
  remember: boolean;
}

const Login: NextPage<Props> = () => {
  const { Content } = Layout;

  const [formData, setFormData] = useState<IFormData>({
    email: '',
    password: '',
    remember: false,
  });

  const onFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onRememberCheck = (e: CheckboxChangeEvent) => {
    setFormData({ ...formData, remember: e.target.checked });
  };

  const validateSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email address is required'),
    password: Yup.string().required('Password is required'),
  });

  const onSubmitForm = () => {
    console.log(formData);
  };

  return (
    <div className='login'>
      <Content className='container'>
        <Fragment>
          <Image src={assets.FaLogo.src} alt={assets.FaLogo.alt} width={100} height={100} />
        </Fragment>
        <div>
          <Row>
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

            <Col
              xs={24}
              sm={24}
              md={24}
              lg={10}
              xl={10}
              className='d-flex justify-content-center'>
              <div className='right-hero'>
                <h1>Welcome back</h1>
                <h6>
                  New to Future Africa Collective? <span>Sign up here</span>
                </h6>
                <div className='login-form'>
                  <LoginForm
                    formData={formData}
                    validateSchema={validateSchema}
                    onSubmitForm={onSubmitForm}
                    onFormChange={onFormChange}
                    onRememberCheck={onRememberCheck}
                  />
                </div>
                <div className='other-socials-login'>
                  <Row>
                    <Col xs={6} sm={6} md={6} lg={6} xl={6} style={{ margin: 'auto' }}>
                      <hr />
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} className='text-center'>
                      Login with other accounts
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6} xl={6} style={{ margin: 'auto' }}>
                      <hr />
                    </Col>
                  </Row>
                  <Row gutter={[16, 16]}>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Button className='btn-social'>Google</Button>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Button className='btn-social'>LinkedIn</Button>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Content>
      <Col xs={24} sm={24} md={24} lg={0} xl={0}>
        <div className='login-mobile-cta'>
          <h1>
            Welcome back, <br />
            co-investor!
            <br />
            <span>
              Log in to your account to access <br /> the Future Africa Collective portal.
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

export default Login;
