import React, { Fragment } from 'react'
import Link from 'next/link'

import Axios from 'axios';
import '../static/style/home.less'

import { Menu, Icon, Button } from 'antd';

const { SubMenu } = Menu;

class LateralMenuComponent extends React.Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <div style={{ width: 256 , height: '100%'}}>
        
        <Menu style={{backgroundColor: 'white'}}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          
          
        >
          <Menu.Item key="1">
            <Icon type="wallet" />
            <span>Mi Billetera</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="swap" />
            <span>Compra y Vende</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="user" />
            <span>Mi perfil</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="info-circle" />
            <span>Soporte</span>
          </Menu.Item>
          <Menu.Item key="5">
            <Icon type="logout" />
            <span>Cerrar Sesión</span>
          </Menu.Item>
          
        </Menu>
      </div>
    );
  }
}

export default LateralMenuComponent