import 'antd/dist/antd.css';
import { Layout, Menu } from "antd";
import {
    UserAddOutlined,
    UserOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import "./scripts.css";

const { Sider } = Layout;

function SideBar() {
    return (
        <Sider trigger={null}  >
            <div className="logo" />
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={[
                    {
                        key: '1',
                        icon: <UserOutlined />,
                        label: <Link to='/'>Ana Sayfa</Link>,
                    },
                    {
                        key: '2',
                        icon: <UserOutlined />,
                        label: <Link to='/customers'>Müşteriler</Link>,
                    },
                    {
                        key: '3',
                        icon: <UserAddOutlined />,
                        label: <Link to='/addcustomer'>Müşteri Ekle</Link>,
                    }
                ]}
            />
        </Sider>)
}
export default SideBar