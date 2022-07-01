import { Button } from 'antd';
import { Formik } from 'formik';
import type { NextPage } from 'next';
import React, { Fragment } from 'react';
import { Form, Input } from 'formik-antd';
import { FloatLabel } from '@src/components';

interface IFormData {
  email: string;
}
interface Props {
  formData: IFormData;
  onSubmitForm: () => void;
  onFormChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  validateSchema: object;
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
