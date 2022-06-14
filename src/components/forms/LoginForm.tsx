import { Button, Row, Col } from 'antd';
import type { NextPage } from 'next';
import React, { Fragment } from 'react';
import { Formik } from 'formik';
import { Form, Input, Select, Checkbox } from 'formik-antd';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
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
  validateSchema: any;
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
          <Fragment>
            <Input
              placeholder='Email'
              value={formData?.email}
              name='email'
              onChange={onFormChange}
              className='email-input'
            />
            {errors.email && touched.email ? (
              <span className='error-style'>{errors.email}</span>
            ) : null}
          </Fragment>
          <Fragment>
            <Input.Password
              className='password-input'
              placeholder='Password'
              value={formData?.password}
              onChange={onFormChange}
              name='password'
              iconRender={(visible) => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)}
            />
            {errors.password && touched.password ? (
              <span className='error-style'>{errors.password}</span>
            ) : null}
          </Fragment>
          <Fragment>
            <Row>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Checkbox name='remember' value={formData.remember} onChange={onRememberCheck}>
                  Remember me
                </Checkbox>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <h6>Forgot your password</h6>
              </Col>
            </Row>
          </Fragment>
          <Fragment>
            <Button className='btn-login' htmlType='submit'>
              Lets go
            </Button>
          </Fragment>
        </Form>
      )}
    </Formik>
  );
};
