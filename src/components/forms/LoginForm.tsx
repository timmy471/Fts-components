import Link from 'next/link';
import Image from 'next/image';
import { Formik } from 'formik';
import type { NextPage } from 'next';
import { assets } from '@src/assets';
import React, { Fragment } from 'react';
import { Button, Row, Col } from 'antd';
import { FloatLabel } from '@src/components';
import { Form, Input, Checkbox } from 'formik-antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

interface IFormData {
  email: string;
  password: string;
  remember: boolean;
}

interface Props {
  formData: IFormData;
  onSubmitForm: () => void;
  onFormChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  validateSchema: object;
  onRememberCheck: (event: CheckboxChangeEvent) => void;
}

export const LoginForm: NextPage<Props> = ({
  formData,
  validateSchema,
  onSubmitForm,
  onFormChange,
  onRememberCheck,
}) => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={onSubmitForm}
      validationSchema={validateSchema}>
      {({ errors, touched }) => (
        <Form name='login-form' autoComplete='none'>
          <div className='mt-10'>
            <FloatLabel label='Email' value={formData.email}>
              <Input
                value={formData?.email}
                name='email'
                onChange={onFormChange}
                className='email-input'
                style={errors.email && touched.email ? { borderColor: 'red' } : {}}
              />
            </FloatLabel>
          </div>
          <div>
            <FloatLabel label='Password' value={formData.password}>
              <Input.Password
                className='password-input'
                value={formData?.password}
                onChange={onFormChange}
                name='password'
                style={errors.password && touched.password ? { borderColor: 'red' } : {}}
                iconRender={(visible) =>
                  visible ? (
                    <Image
                      src={assets.EyeOpen.src}
                      alt={assets.EyeOpen.alt}
                      height={20}
                      width={20}
                    />
                  ) : (
                    <Image
                      src={assets.EyeClose.src}
                      alt={assets.EyeClose.alt}
                      height={20}
                      width={20}
                    />
                  )
                }
              />
            </FloatLabel>
          </div>
          <div className='check-input'>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <Checkbox name='remember' value={formData.remember} onChange={onRememberCheck}>
                  <label>Remember me</label>
                </Checkbox>
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <h5 className='float-right'>
                  <Link href='/forgot-password'>
                    <a className='text-black'> Forgot your password</a>
                  </Link>
                </h5>
              </Col>
            </Row>
          </div>
          <Fragment>
            <Button className='btn-login' htmlType='submit'>
              Sign in
            </Button>
          </Fragment>
        </Form>
      )}
    </Formik>
  );
};
