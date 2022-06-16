import type { NextPage } from 'next';
import Head from 'next/head';
import { Rate } from 'antd';

import { MetaHead, Typography } from '../src/components';

const Login: NextPage = () => {
  return (
    <div className='login'>
      <MetaHead />
      <h1>Login Page</h1>
      <Typography component='h4'>Hello</Typography>
      <Rate allowHalf defaultValue={2.5} />
    </div>
  );
};

export default Login;
