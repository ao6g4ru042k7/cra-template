import { UploadOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import { useNavigate } from 'react-router-dom';

const CustomMenu = () => {
  const navigate = useNavigate();
  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
      <Menu.Item
        key="1"
        icon={<UserOutlined />}
        onClick={() => {
          navigate('/');
        }}
      >
        Dashboard
      </Menu.Item>
      <SubMenu key="2" icon={<UserOutlined />} title="Page1">
        <Menu.Item
          key="2-1"
          icon={<UserOutlined />}
          onClick={() => {
            navigate('/page/page1-1');
          }}
        >
          Page1-1
        </Menu.Item>
        <Menu.Item
          key="2-2"
          icon={<UserOutlined />}
          onClick={() => {
            navigate('/page/page1-2');
          }}
        >
          Page1-2
        </Menu.Item>
        <Menu.Item
          key="2-3"
          icon={<UserOutlined />}
          onClick={() => {
            navigate('/page/page1-3');
          }}
        >
          Page1-3
        </Menu.Item>
      </SubMenu>
      <Menu.Item
        key="3"
        icon={<UploadOutlined />}
        onClick={() => {
          navigate('/Page2');
        }}
      >
        Page2
      </Menu.Item>
    </Menu>
  );
};

export default CustomMenu;
