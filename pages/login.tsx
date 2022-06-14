import { Layout, Row, Col, Input } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import * as Yup from 'yup';

import { MetaHead, LoginForm } from '../src/components';
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
      <MetaHead />
      <Content className='container'>
        <Fragment>
          <Image src={assets.FaLogo.src} alt={assets.FaLogo.alt} width={100} height={100} />
        </Fragment>
        <div>
          <Row>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <div className='left-hero'>
                <div className='image-wrapper'>
                  <Image
                    src={assets.LoginHero.src}
                    alt={assets.LoginHero.alt}
                    // layout='fill'
                    // objectFit='contain'
                    width='100%'
                    height={'100%'}
                  />
                </div>
              </div>
            </Col>

            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <div className='right-hero'>
                <h1>Welcome back</h1>
                <h6>
                  New to Future Africa Collective? <span>Sign up here</span>
                </h6>
                <div>
                  <LoginForm
                    formData={formData}
                    validateSchema={validateSchema}
                    onSubmitForm={onSubmitForm}
                    onFormChange={onFormChange}
                    onRememberCheck={onRememberCheck}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Content>
    </div>
  );
};

export default Login;
