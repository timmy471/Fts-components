import type { NextPage } from 'next';

import { Typography, TextField } from '../src/components';

const Onboarding: NextPage = () => {
  return (
    <div style={{ height: '100vh', background: 'grey' }}>
      <Typography component='h1' state='primary'>
        Hello
      </Typography>
      <TextField name='name' placeholder={'placeholder'} />
    </div>
  );
};

export default Onboarding;
