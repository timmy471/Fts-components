/* eslint-disable @next/next/no-img-element */
import { Layout, Drawer, Row, Col } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import type { NextPage } from 'next';
import { Fragment } from 'react';

import { assets } from '../../../../assets';

interface IUser {
  firstName: string;
  lastName: string;
  role: string;
  lastLogin: string;
}
interface IProps {
  user: IUser;
  visible: boolean;
  onClose: () => void;
  classN: string;
  subClassN?: string;
}
export const Menu: NextPage<IProps> = ({ user, visible, onClose, classN, subClassN }) => {
  const { Sider } = Layout;

  const onLogout = () => {
    console.log('logged out');
  };

  return (
    <div>
      <Sider className='menu'>
        <Link href='/dashboard' passHref>
          <div className='logo'>
            <Image src={assets.FaLogoLight.src} width={200} height={50} alt='Logo' />
          </div>
        </Link>

        <div>
          <ul>
            <Link href={'/investors/dashboard/investments'}>
              {classN === 'investments' ? (
                <li className='active-topic'>
                  <div className='active-item-with-dropdown'>
                    <Row>
                      <Col xs={6} sm={6} md={6} lg={6} xl={6} className='active'>
                        <img
                          src={assets.InvestmentsActiveIcon.src}
                          alt={assets.InvestmentsActiveIcon.alt}
                          height='25'
                          width='25'
                        />
                      </Col>
                      <Col xs={16} sm={16} md={16} lg={16} xl={16} className='mt-1'>
                        <span className={subClassN === 'investments' ? '' : 'span-inactive'}>
                          Investments
                        </span>
                        <br />
                        <span
                          className={subClassN === 'syndicate-deals' ? '' : 'span-inactive'}>
                          Syndicate Deals
                        </span>
                        <br />
                        <span className={subClassN === 'funds' ? '' : 'span-inactive'}>
                          Funds
                        </span>
                      </Col>
                    </Row>
                  </div>
                </li>
              ) : (
                <li className='topic'>
                  <img
                    src={assets.InvestmentsIcon.src}
                    alt={assets.InvestmentsIcon.alt}
                    height='25'
                    width='25'
                  />
                  Investments
                </li>
              )}
            </Link>
            {classN === 'portfolio' ? (
              <li className='active-topic'>
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
              <li className='topic'>
                <img
                  src={assets.PortfolioIcon.src}
                  alt={assets.PortfolioIcon.alt}
                  height='25'
                  width='25'
                />
                My Portfolio
              </li>
            )}

            <Link href={'/investors/dashboard/wallet'} passHref>
              {classN === 'wallet' ? (
                <li className='active-topic'>
                  <div className='active-item'>
                    <div className='active'>
                      <img
                        src={assets.WalletActiveIcon.src}
                        alt={assets.WalletActiveIcon.alt}
                        height='25'
                        width='25'
                      />
                    </div>
                    Wallet
                  </div>
                </li>
              ) : (
                <li className='topic'>
                  <img
                    src={assets.WalletIcon.src}
                    alt={assets.WalletIcon.alt}
                    height='25'
                    width='25'
                  />
                  Wallet
                </li>
              )}
            </Link>
          </ul>
        </div>

        <div className='general-action'>
          <ul>
            <li className='topic'>
              <img
                src={assets.CommunityIcon.src}
                alt={assets.CommunityIcon.alt}
                height='25'
                width='25'
              />
              Community
            </li>
            <li className='topic'>
              <img
                src={assets.SettingsIcon.src}
                alt={assets.SettingsIcon.alt}
                height='25'
                width='25'
              />
              Settings
            </li>
            <li className='topic'>
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
      </Sider>

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
                <Link href='/#' passHref>
                  {classN === 'investments' ? (
                    <li className='mt-3'>
                      <div className='active-item-with-dropdown'>
                        <Row>
                          <Col xs={5} sm={5} md={5} lg={5} xl={5} className='active'>
                            <img
                              src={assets.InvestmentsActiveIcon.src}
                              alt={assets.InvestmentsActiveIcon.alt}
                              height='25'
                              width='25'
                            />
                          </Col>
                          <Col xs={16} sm={16} md={16} lg={16} xl={16} className='mtop-2'>
                            <span
                              className={subClassN === 'investments' ? '' : 'span-inactive'}>
                              Investments
                            </span>
                            <br />
                            <span
                              className={
                                subClassN === 'syndicate-deals' ? '' : 'span-inactive'
                              }>
                              Syndicate Deals
                            </span>
                            <br />
                            <span className={subClassN === 'funds' ? '' : 'span-inactive'}>
                              Funds
                            </span>
                          </Col>
                        </Row>
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
                <Link href='/#' passHref>
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
                        Wallet
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
                      <span>Wallet</span>
                    </li>
                  )}
                </Link>
              </Fragment>
            </ul>
            <div className='general-action'>
              <ul>
                <li className='topic'>
                  <img
                    src={assets.CommunityIcon.src}
                    alt={assets.CommunityIcon.alt}
                    height='25'
                    width='25'
                  />
                  Community
                </li>
                <li className='topic'>
                  <img
                    src={assets.SettingsIcon.src}
                    alt={assets.SettingsIcon.alt}
                    height='25'
                    width='25'
                  />
                  Settings
                </li>
                <li className='topic'>
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
          </div>
        </Drawer>
      </div>
    </div>
  );
};
