import { Layout, Collapse } from 'antd';
import type { NextPage } from 'next';

import { Menu, TopHeader } from '../../src/components';

interface IProps {}

const Dashboard: NextPage<IProps> = () => {
  const { Content } = Layout;
  const { Panel } = Collapse;

  return (
    <div className='investors-dashboard'>
      <Layout className='layout'>
        <div>
          <Menu />
        </div>
        <Layout className='site-layout'>
          <TopHeader />
          <Content className='site-content'>
            <div className='site-layout-background'>
              <h1>Loremx200</h1>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export async function getServerSideProps(context: any) {
  try {
    return {
      props: {},
    };
  } catch (error) {
    return {
      redirect: {
        permanent: false,
        destination: '/?redirect=true',
      },
      props: {},
    };
  }
}

export default Dashboard;
