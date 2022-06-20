import { Layout, Row, Col, Button } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useState, Fragment } from 'react';
import * as Yup from 'yup';

import { assets } from '../src/assets';
import { RegisterForm } from '../src/components';

interface Props {}

interface IFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  terms: boolean;
}

const Register: NextPage<Props> = () => {
  const { Content } = Layout;

  const [formData, setFormData] = useState<IFormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    terms: false,
  });

  const onFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onTermsCheck = (e: CheckboxChangeEvent) => {
    setFormData({ ...formData, terms: e.target.checked });
  };

  const validateSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'First name must be at least 2 characters')
      .max(25, 'First name must be at most 25 characters')
      .required('First name is required'),
    lastName: Yup.string()
      .min(2, 'Last name must be at least 2 characters')
      .max(25, 'Last name must be at most 25 characters')
      .required('Last name is required'),
    email: Yup.string().email('Invalid email address').required('Email address is required'),
    password: Yup.string().required('Password is required'),
    terms: Yup.boolean().required('Terms must be accepted'),
  });

  const onSubmitForm = () => {
    console.log(formData);
  };

  return (
    <div className='register'>
      <Content className='container'>
        <div>
          <Row>
            <Col xs={0} sm={0} md={0} lg={14} xl={14}>
              <Fragment>
                <Image
                  src={assets.FaLogo.src}
                  alt={assets.FaLogo.alt}
                  width={100}
                  height={100}
                />
              </Fragment>
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
              <div className='right-hero mt-4'>
                <Col xs={24} sm={24} md={24} lg={0} xl={0}>
                  <Fragment>
                    <Image
                      src={assets.FaLogo.src}
                      alt={assets.FaLogo.alt}
                      width={100}
                      height={100}
                    />
                  </Fragment>
                </Col>
                <h1>Sign up</h1>
                <h6>
                  Already a member of Future Africa Collective?
                  <Link href='/'>
                    <a> Log in here</a>
                  </Link>
                </h6>
                <span className='required-text'>*Required</span>
                <div className='register-form'>
                  <RegisterForm
                    formData={formData}
                    validateSchema={validateSchema}
                    onSubmitForm={onSubmitForm}
                    onFormChange={onFormChange}
                    onTermsCheck={onTermsCheck}
                  />
                </div>
                <div className='other-socials-register'>
                  <Row>
                    <Col xs={6} sm={6} md={6} lg={6} xl={6} style={{ margin: 'auto' }}>
                      <hr />
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} className='text-center'>
                      Signup with social account
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

export default Register;
