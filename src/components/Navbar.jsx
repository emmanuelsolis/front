import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Link }  from 'react-router-dom';
const Navbar = ({user, handleLogout}) => (
  <Menu mode="horizontal" defaultSelectedKeys={['mail']}>
    {!user  && <>
        <Menu.Item key="login" icon={<MailOutlined />}>
            <Link to="/login">Iniciar Sesion</Link> 
        </Menu.Item>
        <Menu.Item key="signup" icon={<AppstoreOutlined />}>
        / <Link to="/signup">Registrate</Link>
        </Menu.Item>
    </>}
    {/* Debe ser dinamico le vamos a decir que aparezca o desaparezca dependiendo el estado */}
    {/*  user ? resultado1 : resultado2 */}
    {/* user && solo elemento a mostrar */}
    {user && <Menu.SubMenu key="user" title="El usuario" icon={<SettingOutlined />}>
      <Menu.Item key="two" icon={<AppstoreOutlined />}>
        Navigation Two
      </Menu.Item>
      <Menu.Item key="three" icon={<AppstoreOutlined />}>
        Navigation Three
      </Menu.Item>
      <Menu.ItemGroup title="Item Group">
        <Menu.Item key="four" icon={<AppstoreOutlined />}>
          Navigation Four
        </Menu.Item>
        <Menu.Item onClick={handleLogout} key="five" icon={<AppstoreOutlined />}>
          cerrar sesion
        </Menu.Item>
      </Menu.ItemGroup>
    </Menu.SubMenu>}
  </Menu>
);

export default Navbar;