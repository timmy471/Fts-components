import type { NextPage } from 'next';

import { MetaHead } from '../src/components';

const Home: NextPage = () => {
  return (
    <div>
      <MetaHead />
      <h1>Hello World</h1>
    </div>
  );
};

export default Home;
