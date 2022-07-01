import OtpInput from 'react-otp-input';
import { Formik, Form } from 'formik';
import { Typography, Button } from '../../components';

interface IPINSetupProps {
  validatePin: () => object;
  onPinSubmit: (values: object) => void;
}

export const PINSetupForm: React.FC<IPINSetupProps> = ({ validatePin, onPinSubmit }) => {
  return (
    <div className='pin-setup-form'>
      <Formik
        initialValues={{
          pin: '',
          confirmPin: '',
        }}
        validationSchema={validatePin}
        onSubmit={onPinSubmit}>
        {({ setFieldValue, values, errors, touched }) => (
          <Form noValidate autoComplete='off'>
            <Typography variant='body7' className='mbottom-2'>
              Pin Code
            </Typography>
            <OtpInput
              value={values.pin}
              inputStyle='otp-input otp-input__grey'
              onChange={(val: string) => setFieldValue('pin', val)}
              numInputs={4}
              shouldAutoFocus
              isInputNum
            />
            <div className='mtop-2'>
              {errors.pin && touched.pin ? (
                <Typography state='error'>{errors.pin}</Typography>
              ) : null}
            </div>

            <div className='mt-2'>
              <Typography variant='body7' className='mbottom-2'>
                {' '}
                Confrim Pin Code
              </Typography>
              <OtpInput
                value={values.confirmPin}
                inputStyle='otp-input otp-input__grey'
                onChange={(val: string) => setFieldValue('confirmPin', val)}
                numInputs={4}
                isInputNum
              />
              <div className='mtop-2'>
                {errors.confirmPin && touched.confirmPin ? (
                  <Typography state='error'>{errors.confirmPin}</Typography>
                ) : null}
              </div>
            </div>
            <div className='d-flex justify-content-end mt-4'>
              <Button type='submit' label='Save Pin' />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PINSetupForm;
