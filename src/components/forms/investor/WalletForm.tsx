import { Formik, Form, ErrorMessage } from 'formik';
import { Typography, SelectField, TextField, Button, FormError } from '@src/components';

interface IWalletProps {
  validationSchema: () => object;
  onWalletFundSubmit: (values: object) => void;
}
export const WalletForm: React.FC<IWalletProps> = ({
  validationSchema,
  onWalletFundSubmit,
}) => {
  return (
    <Formik
      initialValues={{
        currency: '',
        amount: '',
      }}
      validationSchema={validationSchema}
      onSubmit={onWalletFundSubmit}>
      {({ setFieldValue, getFieldProps, handleBlur, handleChange, errors, touched }) => (
        <Form noValidate autoComplete='off'>
          <div className=''>
            <Typography component='h5'>Specify Amount</Typography>
            <div className='mt-3'>
              <div>
                <Typography variant='body5'>Select Currency</Typography>
                <SelectField
                  options={[
                    {
                      label: 'Fund with NGN',
                      value: 'NGN',
                    },
                    {
                      label: 'Fund with USD',
                      value: 'USD',
                    },
                  ]}
                  onChange={(value: string) => {
                    setFieldValue('currency', value);
                  }}
                  onBlur={handleBlur}
                  onSelect={handleChange}
                  required={false}
                  hasError={errors.currency && touched.currency}
                />
                <ErrorMessage component={FormError} name='currency' />
              </div>

              <div className='mtop-4 mb-3'>
                <Typography variant='body5'>Enter Amount</Typography>
                <TextField
                  type='number'
                  {...getFieldProps('amount')}
                  hasError={errors.amount && touched.amount}
                />
                <ErrorMessage component={FormError} name='amount' />
                <Typography className='mtop-2'>
                  USD Value: <span className='font-weight-bold'>$833.33</span> @ N600/1USD
                </Typography>
              </div>
              <div className='fund-wallet-cta'>
                <Button label='Proceed To Payment' type='submit' fullWidth />
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default WalletForm;
