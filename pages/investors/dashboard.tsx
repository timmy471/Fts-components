import { Layout, Collapse } from 'antd';
import type { NextPage } from 'next';

import { Menu } from '../../src/components';

interface IProps {}

const Dashboard: NextPage<IProps> = () => {
  const { Content } = Layout;
  const { Panel } = Collapse;

  return (
    <div className='dashboard'>
      <Layout className='layout'>
        {/* Climate Partner Side Menu and Mobile Menu */}
        <div>
          <Menu />
        </div>
        <Layout className='site-layout'>
          <Content className='site-content'>
            <div className='site-layout-background'>
              <h1>Investments</h1>
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
