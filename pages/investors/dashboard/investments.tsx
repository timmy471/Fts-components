import { Layout, Row, Col, Input, Dropdown, Button, Menu as M } from 'antd';
import type { NextPage } from 'next';
import { Fragment, useState } from 'react';
import { CaretDownOutlined, InfoCircleOutlined } from '@ant-design/icons';
import Image from 'next/image';

import { Menu, TopHeader } from '../../../src/components';
import { assets } from '../../../src/assets';

interface IProps {}

const InvestorsDashboard: NextPage<IProps> = () => {
  const { Content } = Layout;
  const [visible, setVisible] = useState<boolean>(false);

  let user = {
    firstName: 'Abbey',
    lastName: 'Sunkami',
    role: 'Investor',
    lastLogin: 'March 03, 2022 09.23am',
  };

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const menu = (
    <M
      items={[
        {
          key: '1',
          label: (
            <a target='_blank' rel='noopener noreferrer' href='https://www.antgroup.com'>
              1st menu item
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a target='_blank' rel='noopener noreferrer' href='https://www.aliyun.com'>
              2nd menu item
            </a>
          ),
        },
        {
          key: '3',
          label: (
            <a target='_blank' rel='noopener noreferrer' href='https://www.luohanacademy.com'>
              3rd menu item
            </a>
          ),
        },
      ]}
    />
  );

  return (
    <div className='investors-dashboard'>
      <Layout className='layout'>
        <div>
          <Menu
            user={user}
            onClose={onClose}
            visible={visible}
            classN='investments'
            subClassN='investments'
          />
        </div>
        <Layout className='site-layout'>
          <TopHeader showDrawer={showDrawer} user={user} />
          <Content className='site-content'>
            <div className='site-layout-background'>
              <h1>Investments</h1>
              <p>Invest in early stage companies through these funds</p>

              <div className='filter-fields'>
                <Row>
                  <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Input
                      className='search'
                      prefix={
                        <Image
                          src={assets.SearchIcon.src}
                          alt={assets.SearchIcon.alt}
                          width='20'
                          height={'20'}
                        />
                      }
                      placeholder='  Search by deal’s name or industry'
                    />
                  </Col>
                  <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Row>
                      <Col span={3}>
                        <p className='mtop-2'>Filter by:</p>
                      </Col>
                      <Col span={7}>
                        <Dropdown overlay={menu} placement='bottomLeft'>
                          <Button className='dropdown-btn'>
                            All Round <CaretDownOutlined />
                          </Button>
                        </Dropdown>
                      </Col>
                      <Col span={7}>
                        <Dropdown overlay={menu} placement='bottomLeft'>
                          <Button className='dropdown-btn'>
                            All Stage <CaretDownOutlined />
                          </Button>
                        </Dropdown>
                      </Col>
                      <Col span={7}>
                        <Dropdown overlay={menu} placement='bottomLeft'>
                          <Button className='dropdown-btn'>
                            All Industry <CaretDownOutlined />
                          </Button>
                        </Dropdown>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>

              <div className='deals'>
                <div className='deal'>
                  <Row>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={assets.DealCta.src} alt={assets.DealCta.alt} />
                  </Row>
                  <Row>
                    <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                      <Image
                        src={assets.MooiLogo.src}
                        alt={assets.MooiLogo.alt}
                        width='40'
                        height={'40'}
                      />
                    </Col>
                    <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                      <h2>Future Africa Fund II</h2>
                    </Col>
                  </Row>
                  <Fragment>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ipsam
                      doloremque veritatis illo non architecto, aut repudiandae beatae.
                      Praesentium, asperiores. Perferendis sit amet inventore rem repudiandae
                      eaque culpa in ullam eligendi ab! Eos atque error, nobis explicabo,
                      nihil, aliquid esse soluta consectetur quidem amet ab repellendus illum?
                      Dignissimos, eos magnam!
                    </p>
                  </Fragment>
                  <Fragment>
                    <p>
                      Asset Record: <InfoCircleOutlined style={{ color: '#000' }} />
                    </p>
                    <p className='companies'>MamaAfrica, Tosin Food, Gosh Produce, Uber</p>
                  </Fragment>
                  <div className='metrics'>
                    <Row>
                      <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                        <h4>
                          Min Subscription
                          <br />
                          <span>$5k/Quarter</span>
                        </h4>
                      </Col>
                      <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                        <h4>
                          Subscription Period
                          <br />
                          <span>Q1 ‘21 - Q4 ‘23</span>
                        </h4>
                      </Col>
                      <Col xs={4} sm={4} md={4} lg={4} xl={4} className='text-center'>
                        <h4>
                          Frequency
                          <br />
                          <span>Quarterly</span>
                        </h4>
                      </Col>
                      <Col xs={4} sm={4} md={4} lg={4} xl={4} className='text-center'>
                        <h4>
                          Carry
                          <br />
                          <span>20%</span>
                        </h4>
                      </Col>
                      <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                        <h4 className='float-right'>
                          Management Fee
                          <br />
                          <span>2%</span>
                        </h4>
                      </Col>
                      <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                        <h4 className='float-right'>
                          Admin
                          <br />
                          <span>1%</span>
                        </h4>
                      </Col>
                    </Row>
                  </div>
                </div>

                <div className='deal'>
                  <Row>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={assets.DealCta2.src} alt={assets.DealCta2.alt} />
                  </Row>
                  <Row>
                    <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                      <Image
                        src={assets.MooiLogo.src}
                        alt={assets.MooiLogo.alt}
                        width='40'
                        height={'40'}
                      />
                    </Col>
                    <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                      <h2>Future Africa Fund II</h2>
                    </Col>
                  </Row>
                  <Fragment>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ipsam
                      doloremque veritatis illo non architecto, aut repudiandae beatae.
                      Praesentium, asperiores. Perferendis sit amet inventore rem repudiandae
                      eaque culpa in ullam eligendi ab! Eos atque error, nobis explicabo,
                      nihil, aliquid esse soluta consectetur quidem amet ab repellendus illum?
                      Dignissimos, eos magnam!
                    </p>
                  </Fragment>
                  <Fragment>
                    <p>
                      Asset Record: <InfoCircleOutlined style={{ color: '#000' }} />
                    </p>
                    <p className='companies'>MamaAfrica, Tosin Food, Gosh Produce, Uber</p>
                  </Fragment>
                  <div className='metrics'>
                    <Row>
                      <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                        <h4>
                          Min Subscription
                          <br />
                          <span>$5k/Quarter</span>
                        </h4>
                      </Col>
                      <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                        <h4>
                          Subscription Period
                          <br />
                          <span>Q1 ‘21 - Q4 ‘23</span>
                        </h4>
                      </Col>
                      <Col xs={4} sm={4} md={4} lg={4} xl={4} className='text-center'>
                        <h4>
                          Frequency
                          <br />
                          <span>Quarterly</span>
                        </h4>
                      </Col>
                      <Col xs={4} sm={4} md={4} lg={4} xl={4} className='text-center'>
                        <h4>
                          Carry
                          <br />
                          <span>20%</span>
                        </h4>
                      </Col>
                      <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                        <h4 className='float-right'>
                          Management Fee
                          <br />
                          <span>2%</span>
                        </h4>
                      </Col>
                      <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                        <h4 className='float-right'>
                          Admin
                          <br />
                          <span>1%</span>
                        </h4>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
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

export default InvestorsDashboard;
