import Link from 'next/link';
import Image from 'next/image';
import { Formik } from 'formik';
import { assets } from '@src/assets';
import type { NextPage } from 'next';
import { Button, Row, Col } from 'antd';
import React, { Fragment } from 'react';
import { Form, Input, Checkbox } from 'formik-antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

interface IFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  terms: boolean;
}

interface Props {
  formData: IFormData;
  onSubmitForm: () => void;
  onFormChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  validateSchema: object;
  onTermsCheck: (event: CheckboxChangeEvent) => void;
}
export const RegisterForm: NextPage<Props> = ({
  formData,
  validateSchema,
  onSubmitForm,
  onFormChange,
  onTermsCheck,
}) => {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      }}
      onSubmit={onSubmitForm}
      validationSchema={validateSchema}>
      {({ errors, touched }) => (
        <Form name='register-form' autoComplete='none'>
          <div className='mt-10'>
            <Input
              placeholder='First Name*'
              value={formData?.firstName}
              name='firstName'
              autoComplete='none'
              onChange={onFormChange}
              className='firstName-input'
              style={errors.firstName && touched.firstName ? { borderColor: 'red' } : {}}
            />
          </div>
          <div>
            <Input
              placeholder='Last Name'
              value={formData?.lastName}
              name='lastName'
              autoComplete='none'
              onChange={onFormChange}
              className='lastName-input'
              style={errors.lastName && touched.lastName ? { borderColor: 'red' } : {}}
            />
          </div>
          <div>
            <Input
              placeholder='Email*'
              value={formData?.email}
              name='email'
              onChange={onFormChange}
              className='email-input'
              style={errors.email && touched.email ? { borderColor: 'red' } : {}}
            />
          </div>
          <div>
            <Input.Password
              className='password-input'
              placeholder='Password*'
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
          </div>
          <div className='check-input'>
            <Row>
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <Checkbox name='terms' value={formData.terms} onChange={onTermsCheck}>
                  <label>
                    I agree to the{' '}
                    <Link href='/terms'>
                      <a> Terms and Conditions</a>
                    </Link>{' '}
                  </label>
                </Checkbox>
              </Col>
            </Row>
          </div>
          <Fragment>
            <Button className='btn-register' htmlType='submit'>
              Sign up
            </Button>
          </Fragment>
        </Form>
      )}
    </Formik>
  );
};
