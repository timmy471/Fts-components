import { Button, Row, Col } from 'antd';
import type { NextPage } from 'next';
import Image from 'next/image';
import React, { Fragment } from 'react';
import Link from 'next/link';

import { Formik } from 'formik';
import { Form, Input, Checkbox } from 'formik-antd';

import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { assets } from '../../assets';

interface IFormData {
  email: string;
}

interface Props {
  formData: IFormData;
  onSubmitForm: () => void;
  onFormChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  validateSchema: any;
}
export const ForgotPasswordForm: NextPage<Props> = ({
  formData,
  validateSchema,
  onSubmitForm,
  onFormChange,
}) => {
  return (
    <Formik
      initialValues={{
        email: '',
      }}
      onSubmit={onSubmitForm}
      validationSchema={validateSchema}>
      {({ errors, touched }) => (
        <Form name='register-form' autoComplete='none'>
          <div>
            <Input
              placeholder='Email address'
              value={formData?.email}
              name='email'
              onChange={onFormChange}
              className='email-input'
              style={errors.email && touched.email ? { borderColor: 'red' } : {}}
            />
          </div>
          <Fragment>
            <Button className='btn-register' htmlType='submit'>
              Submit
            </Button>
          </Fragment>
        </Form>
      )}
    </Formik>
  );
};
