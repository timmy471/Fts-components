import { Drawer } from 'antd';

interface IProps {
  visible: boolean;
  height?: string | number;
  children: JSX.Element[] | JSX.Element;
  handleClose: () => void;
}

export const MobileFilter: React.FC<IProps> = ({ visible, height, children, handleClose }) => {
  return (
    <>
      <Drawer
        placement={'bottom'}
        width={500}
        height={height}
        closable={false}
        onClose={handleClose}
        className='mobile-filter-drawer'
        visible={visible}>
        {children}
      </Drawer>
    </>
  );
};
