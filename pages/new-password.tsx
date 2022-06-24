import * as Yup from 'yup';
import Link from 'next/link';
import Image from 'next/image';
import Router from 'next/router';
import type { NextPage } from 'next';
import { assets } from '@src/assets';
import { useState, Fragment } from 'react';
import { NewPasswordForm } from '@src/components';
import { Layout, Row, Col, Button, Modal } from 'antd';

interface Props {}

interface IFormData {
  password: string;
  confirmPassword: string;
}

const NewPassword: NextPage<Props> = () => {
  const { Content } = Layout;
  const [formData, setFormData] = useState<IFormData>({
    password: '',
    confirmPassword: '',
  });
  const [isVerifyModalVisible, setIsVerifyModalVisible] = useState<boolean>(false);
  const onFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const validateSchema: object = Yup.object().shape({
    password: Yup.string()
      .required('Password is required')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d[\]{};:=<>_+^#$@!%*?&]{8,30}$/,
        'Password must contain at least 8 characters, one number and one letter'
      ),
    confirmPassword: Yup.string().test(
      'password-match',
      'Passwords must match',
      function (value) {
        return this.parent.password === value;
      }
    ),
  });
  const showVerifyModal = () => {
    setIsVerifyModalVisible(true);
  };
  const handleVerifyOk = () => {
    setIsVerifyModalVisible(false);
    setTimeout(() => {
      Router.push('/');
    }, 1000);
  };
  const handleVerifyCancel = () => {
    setIsVerifyModalVisible(false);
  };
  const onSubmitForm = () => {
    console.log(formData);
    showVerifyModal();
  };

  return (
    <div className='new-password'>
      <Content className='container'>
        <div>
          <Row>
            <Col xs={24} sm={24} md={24} lg={12} xl={12} className='left'>
              <div className='left-hero'>
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
                <div className='new-password-box'>
                  <h1>New Password?</h1>
                  <h6>
                    Your new password must be different from previous used passwords
                    <br />
                    Password must contain at least 8 characters, one number and one letter
                  </h6>
                  <div className='new-password-form'>
                    <NewPasswordForm
                      formData={formData}
                      validateSchema={validateSchema}
                      onSubmitForm={onSubmitForm}
                      onFormChange={onFormChange}
                    />
                  </div>
                </div>
                <Row>
                  <Col span={12} offset={6} className='mtop-3'>
                    <Link href='/'>
                      <a> Log in to Future Africa </a>
                    </Link>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col
              xs={0}
              sm={0}
              md={0}
              lg={12}
              xl={12}
              className='d-flex justify-content-center align-items-center'>
              <div className='right-hero'>
                <div className='image-wrapper d-flex justify-content-center align-items-center'>
                  <img
                    src={assets.LoginHero.src}
                    alt={assets.LoginHero.alt}
                    width='80%'
                    height='80%'
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
        <div className='new-password-mobile-cta'>
          <h1>
            Become a <br />
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
      <div className='modal'>
        <Modal
          centered
          className='auth-modal'
          visible={isVerifyModalVisible}
          onOk={handleVerifyOk}
          footer={null}
          closable={false}
          onCancel={handleVerifyCancel}>
          <div className='content'>
            <Image
              src={assets.SendEnvelope.src}
              alt={assets.SendEnvelope.alt}
              height={100}
              width={100}
            />
            <h3>Password changed successfully!</h3>
            <span>
              You have successfully reset your password! Use this password to log in to your
              web dashboard
            </span>
            <Button className='modal-btn' onClick={handleVerifyOk}>
              Login
            </Button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default NewPassword;
