import Image from 'next/image';
import { assets } from '@src/assets';
import type { NextPage } from 'next';
import type { MenuProps } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import { Row, Col, Button, Input, Dropdown, Space, Menu, Tag, Table, Collapse } from 'antd';
import { FundManagerDashboardLayout, Typography } from '@src/components';
import { SearchOutlined, CaretDownOutlined, UserOutlined } from '@ant-design/icons';

interface IProps {}

interface DataType {
  key: string;
  company: string;
  stage: string;
  date: string;
  raised: string;
  status: string;
  allocation: string;
  info?: string;
}

const FundManagerDashboard: NextPage<IProps> = () => {
  const { Panel } = Collapse;
  const handleMenuClick: MenuProps['onClick'] = () => {
    console.log('click');
  };

  const determineStatus = (text: string) => {
    if (text === 'Wired') {
      return <span className='wired'>{text}</span>;
    } else if (text === 'Raising') {
      return <span className='raising'>{text}</span>;
    } else {
      return <span className='closing'>{text}</span>;
    }
  };

  // <div className='company'>
  //   <Row gutter={[10, 10]}>
  //     <Col xs={4} sm={4} md={4} lg={4} xl={4}>
  //       <Image
  //         src={assets.PinterestLogo.src}
  //         alt={assets.PinterestLogo.alt}
  //         width='40'
  //         height='40'
  //       />
  //     </Col>
  //     <Col xs={4} sm={4} md={4} lg={4} xl={4}>
  //       <h4>Future Africa Fund 1</h4>
  //       <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate.</span>
  //       <a>Raising for Q1 2022</a>
  //     </Col>
  //   </Row>
  // </div>;

  const displayInfo = (text: string, val: DataType) => {
    return (
      <div className='company'>
        <Row>
          <Col xs={2} sm={2} md={2} lg={2} xl={2}>
            <img
              src={assets.PinterestLogo.src}
              alt={assets.PinterestLogo.alt}
              width='40'
              height='40'
            />
          </Col>
          <Col xs={20} sm={20} md={20} lg={20} xl={20}>
            <h4>
              {val.company}
              <br />
              <span>{val.info}</span>
            </h4>
            <a>Website</a> <a>White Paper</a>
          </Col>
        </Row>
      </div>
    );
  };

  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label: '1st menu item',
          key: '1',
          icon: <UserOutlined />,
        },
        {
          label: '2nd menu item',
          key: '2',
          icon: <UserOutlined />,
        },
        {
          label: '3rd menu item',
          key: '3',
          icon: <UserOutlined />,
        },
      ]}
    />
  );

  const columns: ColumnsType<DataType> = [
    {
      title: 'Company & Description',
      dataIndex: 'company',
      key: 'company',
      render: (text, val) => displayInfo(text, val),
    },
    {
      title: 'Stage',
      dataIndex: 'stage',
      key: 'stage',
      render: (text) => <span className='stage-pill'>{text}</span>,
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (text) => <span>{text}</span>,
    },
    {
      title: '$ Raised',
      key: 'raised',
      dataIndex: 'raised',
      render: (text) => <span>{text}</span>,
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render: (text) => determineStatus(text),
    },
    {
      title: 'Allocation',
      key: 'allocation',
      dataIndex: 'allocation',
      render: (text) => <span>{text}</span>,
    },
  ];

  const tableData: DataType[] = [
    {
      key: '1',
      company: 'Reflective Learning Fund',
      stage: 'Series A',
      date: 'Feb 14',
      raised: '$50,000',
      status: 'Raising',
      allocation: '$250,000',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum quam metus commodo, volutpat morbi amet, purus, diam aliquam. Risus ultricies aliquet.',
    },
    {
      key: '2',
      company: 'Mama’s Cook SPV Fund',
      stage: 'Series A',
      date: 'Feb 14',
      raised: '$50,000',
      status: 'Closing',
      allocation: '$250,000',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum quam metus commodo, volutpat morbi amet, purus, diam aliquam. Risus ultricies aliquet.',
    },
    {
      key: '3',
      company: 'Eden SPV Fund',
      stage: 'Series A',
      date: 'Feb 14',
      raised: '$50,000',
      status: 'Wired',
      allocation: '$250,000',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum quam metus commodo, volutpat morbi amet, purus, diam aliquam. Risus ultricies aliquet.',
    },
  ];

  return (
    <FundManagerDashboardLayout classN='investments'>
      <div className='fund-manager-dashboard'>
        <Row gutter={[25, 25]}>
          <Col xs={16} sm={17} md={16} lg={16} xl={16}>
            <h1>Investments</h1>
          </Col>
          <Col xs={0} sm={0} md={4} lg={4} xl={4}>
            <Button className='fa-green-btn'>New SPV</Button>
          </Col>
          <Col xs={8} sm={7} md={4} lg={4} xl={4}>
            <Button className='fa-green-outline-btn'>New Fund</Button>
          </Col>
        </Row>

        <div className='metrics'>
          <div className='item'>
            <span>Total Raised (SPV + Fund)</span>
            <h1>$5,345,697,000</h1>
          </div>
          <div className='item'>
            <span>Total SPVs</span>
            <h1>15</h1>
          </div>
          <div className='item'>
            <span>SPVs currently Raising</span>
            <h1>9</h1>
          </div>
          <div className='item'>
            <span>Total Funds</span>
            <h1>02</h1>
          </div>
          <div className='item'>
            <span>Fund Currently Raising</span>
            <h1>02</h1>
          </div>
        </div>
        <div className='funds-list'>
          <p>All Funds (2)</p>
          <Row>
            <Col xs={24} sm={24} md={12} lg={6} xl={6} className='fund'>
              <Row gutter={[10, 10]}>
                <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                  <Image
                    src={assets.PinterestLogo.src}
                    alt={assets.PinterestLogo.alt}
                    width='40'
                    height='40'
                  />
                </Col>
                <Col xs={20} sm={20} md={20} lg={20} xl={20}>
                  <h4>Future Africa Fund 1</h4>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate.
                  </span>
                  <a>Raising for Q1 2022</a>
                </Col>
              </Row>
            </Col>

            <Col xs={24} sm={24} md={12} lg={6} xl={6} className='fund'>
              <Row gutter={[10, 10]}>
                <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                  <Image
                    src={assets.MooiLogo.src}
                    alt={assets.MooiLogo.alt}
                    width='40'
                    height='40'
                  />
                </Col>
                <Col xs={20} sm={20} md={20} lg={20} xl={20}>
                  <h4>Future Africa Fund 2</h4>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate.
                  </span>
                  <a>Raising for Q1 2022</a>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>

        <div className='search-container'>
          <p>All SPVs (20)</p>
          <Row gutter={[20, 20]}>
            <Col xs={24} sm={24} md={8} lg={9} xl={9}>
              <Input
                prefix={<SearchOutlined />}
                placeholder='Search Companies'
                // value={formData?.email}
                name='email'
                // onChange={onFormChange}
                className='search-input'
              />
            </Col>
            <Col xs={0} sm={0} md={0} lg={0} xl={3}></Col>
            <Col xs={0} sm={0} md={3} lg={3} xl={2} className='m-auto'>
              <span>Filter by:</span>
            </Col>
            <Col xs={24} sm={0} md={5} lg={5} xl={4}>
              <Dropdown overlay={menu}>
                <Button className='mydropdown'>
                  <Space>
                    All Status
                    <span className='mleft-3'>
                      <CaretDownOutlined />
                    </span>
                  </Space>
                </Button>
              </Dropdown>
            </Col>
            <Col xs={24} sm={0} md={5} lg={5} xl={4}>
              <Dropdown overlay={menu}>
                <Button className='mydropdown'>
                  <Space>
                    All Stage
                    <span className='mleft-3'>
                      <CaretDownOutlined />
                    </span>
                  </Space>
                </Button>
              </Dropdown>
            </Col>
          </Row>
        </div>
        <div className='table'>
          <Table
            columns={columns}
            dataSource={tableData}
            pagination={false}
            className='table-data'
          />
        </div>

        <div className='investment-accordion-container mt-1'>
          {tableData.map(
            (
              { id, company, stage, date, raised, status, allocation, info }: any,
              key: any
            ) => {
              const bodyInfo = [
                { label: 'Id', value: id },
                { label: 'Company', value: company },
                { label: 'Stage', value: stage },
                { label: 'Raised', value: raised },
                { label: 'Allocation', value: allocation },
              ];
              return (
                <Collapse
                  bordered={false}
                  expandIconPosition='end'
                  expandIcon={({ isActive }) => (
                    <CaretDownOutlined rotate={isActive ? 180 : 0} />
                  )}
                  className=''
                  key={key}>
                  <Panel
                    header={
                      <div className='w-100 d-flex justify-content-between pr-1'>
                        <div>
                          <Typography variant='body8'>Company</Typography>{' '}
                          <Typography variant='body7' className='wallet-detail'>
                            {company}
                          </Typography>
                        </div>
                        <div>
                          <Typography variant='body8'>Raised</Typography>{' '}
                          <Typography variant='body7' className='wallet-detail'>
                            {raised}
                          </Typography>
                        </div>
                        <div>
                          <Typography variant='body8'>Status</Typography>{' '}
                          <Typography variant='body7' className='wallet-detail'>
                            {status}
                          </Typography>
                        </div>
                      </div>
                    }
                    key={key}
                    className='wallet-accordion-panel'>
                    <div className='pr-4'>
                      {bodyInfo.map((info, key) => (
                        <div
                          className='d-flex justify-content-between align-items-center'
                          key={key}>
                          <Typography variant='body8'>{info.label}</Typography>
                          <Typography variant='body6'>{info.value}</Typography>
                        </div>
                      ))}
                    </div>
                  </Panel>
                </Collapse>
              );
            }
          )}
        </div>
      </div>
    </FundManagerDashboardLayout>
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

export default FundManagerDashboard;
