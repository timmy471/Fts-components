import { IUser } from 'type.d';
import type { NextPage } from 'next';
import { Fragment, useState } from 'react';
import { FundManagerHeader } from '@src/components';

interface IProps {
  children: JSX.Element[] | JSX.Element;
  classN: string;
  subClassN?: string;
  contentClassName?: string;
}

export const FundManagerDashboardLayout: NextPage<IProps> = ({
  children,
  classN,
  subClassN,
  contentClassName,
}) => {
  const [visible, setVisible] = useState<boolean>(false);
  let user: IUser = {
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

  return (
    <div className='fund-manager-dashboard'>
      <FundManagerHeader
        user={user}
        classN={classN}
        visible={visible}
        subClassN={subClassN}
        onClose={onClose}
        showDrawer={showDrawer}
      />
      <div className='fund-manager-site-layout'>
        <div
          className={`fund-manager-layout-background ${
            contentClassName ? contentClassName : ''
          }`}>
          <Fragment>{children}</Fragment>
        </div>
      </div>
    </div>
  );
};
