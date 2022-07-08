import Image from 'next/image';
import { assets } from '@src/assets';
import type { NextPage } from 'next';
import Link from 'next/link';
import { Typography } from '@src/components';
import { CaretDownOutlined } from '@ant-design/icons';
import { Layout, Row, Col, Dropdown, Menu } from 'antd';

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
export const TopHeader: NextPage<IProps> = ({ showDrawer, user }) => {
  const { Header } = Layout;

  const profileMenu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <Link href='/investors/dashboard/profile' passHref>
              My Profile
            </Link>
          ),
        },
        {
          key: '2',
          label: (
            <Link href='/fundmanager/dashboard/investments' passHref>
              Lead Dashboard
            </Link>
          ),
        },
        {
          key: '3',
          label: (
            <Typography variant='body7' className='mb-0' state='error'>
              Logout
            </Typography>
          ),
        },
      ]}
    />
  );

  const notificationsMenu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <div className='d-flex justify-content-between align-items-center px-1 py-2'>
              <Typography variant='body5' className='mb-0'>
                Notifications
              </Typography>
              <Typography variant='body7' className='mb-0' state='secondary'>
                Clear
              </Typography>
            </div>
          ),
        },
        {
          key: '2',
          label: (
            <div>
              {/* Loop an array of objects to get this */}
              <div className='px-1 mbottom-3'>
                <Typography state='secondary' variant='body9'>
                  Today
                </Typography>
                <div className='mtop-2'>
                  <Typography variant='body7' className='mbottom-1'>
                    Lorem ipsum dolor sit amet, consect
                  </Typography>
                  <Typography state='secondary' variant='body9'>
                    Just Now
                  </Typography>
                </div>

                <div className='mtop-2'>
                  <Typography variant='body7' className='mbottom-1'>
                    Lorem ipsum dolor sit amet, consect
                  </Typography>
                  <Typography state='secondary' variant='body9'>
                    2h
                  </Typography>
                </div>
              </div>

              <div className='px-1 mb-1'>
                <Typography state='secondary' variant='body9'>
                  Yesterday
                </Typography>
                <div className='mtop-2'>
                  <Typography variant='body8' className='mbottom-1'>
                    Lorem ipsum dolor sit amet, consect
                  </Typography>
                  <Typography state='secondary' variant='body9'>
                    10:30pm
                  </Typography>
                </div>

                <div className='mtop-2'>
                  <Typography variant='body8' className='mbottom-1'>
                    Lorem ipsum dolor sit amet, consect
                  </Typography>
                  <Typography state='secondary' variant='body9'>
                    2:15pm
                  </Typography>
                </div>
              </div>
            </div>
          ),
        },
      ]}
    />
  );

  return (
    <Header className='top-header'>
      <Row>
        <Col xs={3} sm={2} md={2} lg={0} xl={0}>
          <Image
            src={assets.HamburgerIcon.src}
            alt={assets.HamburgerIcon.alt}
            width={'25'}
            height={'25'}
            onClick={showDrawer}
            className='hamburger-icon'
          />
        </Col>
        <Col xs={15} sm={14} md={16} lg={16} xl={19}>
          <h3>Last Login:</h3>
          <span>{user.lastLogin}</span>
        </Col>
        <Col xs={6} sm={8} md={6} lg={8} xl={5}>
          <Row gutter={[20, 20]}>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              <Dropdown
                overlay={notificationsMenu}
                placement='bottom'
                trigger={['click']}
                overlayStyle={{
                  paddingTop: '.2rem',
                }}>
                <div className='notif-bell cursor-pointer'>
                  <Image
                    src={assets.NotificationBellIcon.src}
                    alt={assets.NotificationBellIcon.alt}
                    height='100'
                    width='100'
                  />
                </div>
              </Dropdown>
            </Col>
            <Col xs={12} sm={12} md={18} lg={18} xl={18}>
              <Row gutter={[4, 4]}>
                <Col xs={24} sm={24} md={7} lg={6} xl={6}>
                  <div style={{ height: '40px', width: '40px' }}>
                    <Image
                      src={assets.UserAvatarIcon.src}
                      alt={assets.UserAvatarIcon.alt}
                      height='100'
                      width='100'
                    />
                  </div>
                </Col>
                <Col xs={0} sm={0} md={13} lg={15} xl={15} className='ml-1 mtop-1'>
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
                  style={{ float: 'right', marginTop: '.8rem' }}>
                  <Dropdown
                    overlay={profileMenu}
                    placement='bottomLeft'
                    trigger={['click']}
                    overlayStyle={{
                      minWidth: '7rem',
                      paddingTop: '.7rem',
                    }}>
                    <CaretDownOutlined style={{ color: '#3F3F3F' }} />
                  </Dropdown>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Header>
  );
};
