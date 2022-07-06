import Image from 'next/image';
import { CaretDownOutlined } from '@ant-design/icons';
import { assets } from '@src/assets';
import type { NextPage } from 'next';
import { Layout, Row, Col, Button, Dropdown, Menu } from 'antd';

interface IUser {
  firstName: string;
  lastName: string;
  role: string;
  lastLogin: string;
}
interface IProps {
  showDrawer: () => void;
  user: IUser;
}

export const FundManagerHeader: NextPage<IProps> = ({ showDrawer, user }) => {
  const { Header } = Layout;

  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <a target='_blank' rel='noopener noreferrer' href='https://www.antgroup.com'>
              Investor Dashboard
            </a>
          ),
        },
      ]}
    />
  );

  return (
    <div className='fund-manager-header'>
      <Col xs={0} sm={0} md={3} lg={3} xl={3}>
        <div className='logo-bg'>
          <img
            src={assets.FaLogoLight.src}
            alt={assets.FaLogoLight.alt}
            height='80'
            width='100'
          />
        </div>
      </Col>
      <Col xs={0} sm={0} md={6} lg={6} xl={6} className='user-switch'>
        <Dropdown overlay={menu} placement='bottomLeft'>
          <Button className='btn'>
            <p>You are on</p>
            <br />
            Fund Lead Dashboard <CaretDownOutlined />
          </Button>
        </Dropdown>
      </Col>
      <Col xs={0} sm={0} md={9} lg={9} xl={9} className='menus'>
        <ul>
          <li>
            Investments
            <hr />
          </li>
          <li>Portfolio</li>
          <li>Network</li>
          <li>Settings</li>
        </ul>
      </Col>
      <Col xs={0} sm={0} md={5} lg={5} xl={5} className='profile'>
        <>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <div className='notif-bell'>
              <Image
                src={assets.NotificationBellIcon.src}
                alt={assets.NotificationBellIcon.alt}
                height='100'
                width='100'
              />
            </div>
          </Col>
          <Col xs={12} sm={12} md={18} lg={18} xl={18}>
            <Row gutter={[4, 4]}>
              <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                <div style={{ height: '40px', width: '40px' }}>
                  <Image
                    src={assets.UserAvatarIcon.src}
                    alt={assets.UserAvatarIcon.alt}
                    height='100'
                    width='100'
                  />
                </div>
              </Col>
              <Col xs={0} sm={0} md={10} lg={10} xl={10} className='ml-1 mtop-1'>
                <div className='user-detail'>
                  <h3>
                    {user.firstName} <br />
                    <span>{user.role}</span>
                  </h3>
                </div>
              </Col>
              <Col
                xs={0}
                sm={0}
                md={2}
                lg={2}
                xl={2}
                style={{ float: 'right' }}
                className='mtop-1'>
                <CaretDownOutlined style={{ color: '#3F3F3F' }} />{' '}
              </Col>
            </Row>
          </Col>
        </>
      </Col>
    </div>
  );
};
