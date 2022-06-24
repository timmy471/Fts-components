import { Button } from 'antd';
import Image from 'next/image';
import { Formik } from 'formik';
import { assets } from '@src/assets';
import type { NextPage } from 'next';
import React, { Fragment } from 'react';
import { Form, Input } from 'formik-antd';


interface IFormData {
  password: string;
  confirmPassword: string;
}

interface Props {
  formData: IFormData;
  onSubmitForm: () => void;
  onFormChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  validateSchema: object;
}
export const NewPasswordForm: NextPage<Props> = ({
  formData,
  validateSchema,
  onSubmitForm,
  onFormChange,
}) => {
  return (
    <Formik
      initialValues={{
        password: '',
        confirmPassword: '',
      }}
      onSubmit={onSubmitForm}
      validationSchema={validateSchema}>
      {({ errors, touched }) => (
        <Form name='new-password-form' autoComplete='none'>
          <div>
            <Input.Password
              className='password-input'
              placeholder='Password'
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
          <div>
            <Input.Password
              className='password-input'
              placeholder='Confirm Password'
              value={formData?.confirmPassword}
              onChange={onFormChange}
              name='confirmPassword'
              style={
                errors.confirmPassword && touched.confirmPassword ? { borderColor: 'red' } : {}
              }
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
          <Fragment>
            <Button className='btn-new-password' htmlType='submit'>
              Submit new password
            </Button>
          </Fragment>
        </Form>
      )}
    </Formik>
  );
};
