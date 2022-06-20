import React from 'react';
import { useRouter } from 'next/router';
import { Button } from '../../../components';

interface IProps {
  handlePrevious: () => void;
  currentStep: number;
}
export const ControlButtons: React.FC<IProps> = ({ handlePrevious, currentStep }) => {
  const router = useRouter();

  const handleBack = () => {
    if (currentStep === 1) return router.push('/');

    return handlePrevious();
  };
  return (
    <div>
      <Button
        label={currentStep === 1 ? 'Cancel' : 'Back'}
        onClick={handleBack}
        variant='secondary'
        size='sm'
      />
      <Button label={currentStep === 4 ? 'Finish' : 'Next'} type='submit' />
    </div>
  );
};
