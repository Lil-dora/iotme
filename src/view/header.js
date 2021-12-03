import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import {Layout, Menu} from 'antd';
import { HomeOutlined , LoginOutlined , DashboardOutlined , UserOutlined } from '@ant-design/icons';

const {SubMenu} = Menu;
const {Header} = Layout;

const Head = () =>{
    return(
        <Header>
            <span style={{float:'left',color:'white'}}>My IoT </span>
            <Menu theme="dark" mode="horizontal">
                <Menu.Item key="1" icon={<HomeOutlined />}><Link to="/">Home</Link></Menu.Item>
                <Menu.Item key="2" icon={<LoginOutlined />}>Login</Menu.Item>
                <Menu.Item key="3" icon={<DashboardOutlined />}><Link to="/dashboard">Dashboard</Link></Menu.Item>
                <Menu.Item key="4" icon={<UserOutlined/>}>Account</Menu.Item>
            </Menu>
        </Header>    
    )
}

export default Head;