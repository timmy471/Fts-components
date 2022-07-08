import Link from 'next/link';

import Image from 'next/image';
import { Fragment } from 'react';
import { assets } from '@src/assets';
import { CaretDownOutlined } from '@ant-design/icons';
import { Layout, Row, Col, Button, Drawer, Dropdown, Menu } from 'antd';

interface IUser {
  firstName: string;
  lastName: string;
  role: string;
  lastLogin: string;
}
interface IProps {
  showDrawer: () => void;
  user: IUser;
  visible: boolean;
  onClose: () => void;
  classN: string;
  subClassN?: string;
}

export const FundManagerHeader = ({
  showDrawer,
  user,
  classN,
  subClassN,
  visible,
  onClose,
}: IProps) => {
  const { Header } = Layout;

  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <Link href={'/investors/dashboard/investments'} passHref>
              Investor Dashboard
            </Link>
          ),
        },
      ]}
    />
  );

  return (
    <div className='fund-manager-header'>
      <Col xs={2} sm={2} md={3} lg={0} xl={0} className='hamburger-icon'>
        <Image
          src={assets.HamburgerIcon.src}
          alt={assets.HamburgerIcon.alt}
          width={'25'}
          height={'25'}
          onClick={showDrawer}
        />
      </Col>
      <Col xs={0} sm={0} md={0} lg={3} xl={3}>
        <div className='logo-bg'>
          <img
            src={assets.FaLogoLight.src}
            alt={assets.FaLogoLight.alt}
            height='80'
            width='100'
          />
        </div>
      </Col>
      <Col xs={12} sm={12} md={9} lg={6} xl={6} className='user-switch'>
        <Dropdown overlay={menu} placement='bottomLeft'>
          <Button className='btn'>
            <p>You are on</p>
            <br />
            Fund Lead Dashboard <CaretDownOutlined />
          </Button>
        </Dropdown>
      </Col>
      <Col xs={0} sm={0} md={0} lg={9} xl={9} className='menus'>
        <ul>
          {classN === 'investments' ? (
            <li className='active'>
              Investments
              <hr />
            </li>
          ) : (
            <li>Investments</li>
          )}
          {classN === 'portfolio' ? (
            <li className='active'>
              Portfolio
              <hr />
            </li>
          ) : (
            <li>Portfolio</li>
          )}
          {classN === 'network' ? (
            <li className='active'>
              Network
              <hr />
            </li>
          ) : (
            <li>Network</li>
          )}
          {classN === 'settings' ? (
            <li className='active'>
              Settings
              <hr />
            </li>
          ) : (
            <li>Settings</li>
          )}
        </ul>
      </Col>
      <Col xs={6} sm={6} md={10} lg={5} xl={5} className='profile'>
        <Col xs={12} sm={12} md={5} lg={6} xl={6}>
          <div className='notif-bell'>
            <Image
              src={assets.NotificationBellIcon.src}
              alt={assets.NotificationBellIcon.alt}
              height='100'
              width='100'
            />
          </div>
        </Col>
        <Col xs={10} sm={10} md={10} lg={18} xl={18}>
          <Row gutter={[4, 4]}>
            <Col xs={4} sm={4} md={10} lg={6} xl={6}>
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
              md={0}
              lg={2}
              xl={2}
              style={{ float: 'right' }}
              className='mtop-1'>
              <CaretDownOutlined style={{ color: '#3F3F3F' }} />{' '}
            </Col>
          </Row>
        </Col>
      </Col>

      <div className='mobile-drawer'>
        <Drawer
          placement={'left'}
          closable={false}
          onClose={onClose}
          visible={visible}
          width='250'
          key={'left'}>
          <div className='drawer-menu'>
            <div className='logo mt-10 ml-10'>
              <Image
                src={assets.FaLogoLight.src}
                width={150}
                height={60}
                alt='Logo'
                className='changers-logo-mb'
              />
            </div>
            <ul>
              <Fragment>
                <Link href='/investors/dashboard/investments' passHref>
                  {classN === 'investments' ? (
                    <li>
                      <div className='active-item'>
                        <div className='active'>
                          <img
                            src={assets.InvestmentsActiveIcon.src}
                            alt={assets.InvestmentsActiveIcon.alt}
                            height='25'
                            width='25'
                          />
                        </div>
                        Investments
                      </div>
                    </li>
                  ) : (
                    <li className='inactive'>
                      <img
                        src={assets.InvestmentsIcon.src}
                        alt={assets.InvestmentsIcon.alt}
                        height='25'
                        width='25'
                      />
                      <span>Investments</span>
                    </li>
                  )}
                </Link>
              </Fragment>
              <Fragment>
                <Link href='/#' passHref>
                  {classN === 'portfolio' ? (
                    <li>
                      <div className='active-item'>
                        <div className='active'>
                          <img
                            src={assets.PortfolioActiveIcon.src}
                            alt={assets.PortfolioActiveIcon.alt}
                            height='25'
                            width='25'
                          />
                        </div>
                        My Portfolio
                      </div>
                    </li>
                  ) : (
                    <li className='inactive'>
                      <img
                        src={assets.PortfolioIcon.src}
                        alt={assets.PortfolioIcon.alt}
                        height='25'
                        width='25'
                      />
                      <span>My Portfolio</span>
                    </li>
                  )}
                </Link>
              </Fragment>

              <Fragment>
                <Link href='/investors/dashboard/wallet' passHref>
                  {classN === 'wallet' ? (
                    <li>
                      <div className='active-item'>
                        <div className='active'>
                          <img
                            src={assets.WalletActiveIcon.src}
                            alt={assets.WalletActiveIcon.alt}
                            height='25'
                            width='25'
                          />
                        </div>
                        Network
                      </div>
                    </li>
                  ) : (
                    <li className='inactive'>
                      <img
                        src={assets.WalletIcon.src}
                        alt={assets.WalletIcon.alt}
                        height='25'
                        width='25'
                      />
                      <span>Network</span>
                    </li>
                  )}
                </Link>
              </Fragment>
              <li className='inactive'>
                <img
                  src={assets.SettingsIcon.src}
                  alt={assets.SettingsIcon.alt}
                  height='25'
                  width='25'
                />
                Settings
              </li>
              <li className='inactive'>
                <img
                  src={assets.LogoutIcon.src}
                  alt={assets.LogoutIcon.alt}
                  height='25'
                  width='25'
                />
                Logout
              </li>
            </ul>
          </div>
        </Drawer>
      </div>
    </div>
  );
};
