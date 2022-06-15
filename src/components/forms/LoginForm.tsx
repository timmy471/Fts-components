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
          <div className='mt-10'>
            {/* {errors.email && touched.email ? (
              <span className='error-style'>{errors.email}</span>
            ) : null} */}
            <Input
              placeholder='Email'
              value={formData?.email}
              name='email'
              onChange={onFormChange}
              className='email-input'
              style={errors.email && touched.email ? { borderColor: 'red' } : {}}
            />
          </div>
          <div>
            {/* {errors.password && touched.password ? (
              <span className='error-style'>{errors.password}</span>
            ) : null} */}
            <Input.Password
              className='password-input'
              placeholder='Password'
              value={formData?.password}
              onChange={onFormChange}
              name='password'
              style={errors.password && touched.password ? { borderColor: 'red' } : {}}
              iconRender={(visible) => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)}
            />
          </div>
          <div className='check-input'>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <Checkbox name='remember' value={formData.remember} onChange={onRememberCheck}>
                  <label>Remember me</label>
                </Checkbox>
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <h5 className='float-right mt-1'>Forgot your password</h5>
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
