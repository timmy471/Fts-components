import { Button, Col } from 'antd';
import type { NextPage } from 'next';
import React, { Fragment } from 'react';

import { Formik } from 'formik';
import { Form, Input, Checkbox } from 'formik-antd';

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
        <Form name='forgot-password-form' autoComplete='none'>
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
            <Button className='btn-forgot-password' htmlType='submit'>
              Submit
            </Button>
          </Fragment>
        </Form>
      )}
    </Formik>
  );
};
