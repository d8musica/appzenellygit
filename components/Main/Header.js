import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Menu, Row, Col, Icon, Button, Popover, Badge } from 'antd';


const searchEngine = 'Google';

export default class Header extends React.Component {
  static propTypes = {
    isFirstScreen: PropTypes.bool,
    isMoblie: PropTypes.bool,
  }
  state = {
    menuVisible: false,
  };
  onMenuVisibleChange = (visible) => {
    this.setState({
      menuVisible: visible,
    });
  }
  handleShowMenu = () => {
    this.setState({
      menuVisible: true,
    });
  }

  handleHideMenu = () => {
    this.setState({
      menuVisible: false,
    });
  }

  handleSelectFilter = (value, option) => {
    const optionValue = option.props['data-label'];
    return optionValue === searchEngine ||
      optionValue.indexOf(value.toLowerCase()) > -1;
  }

  render() {
    const { isFirstScreen, isMoblie } = this.props;
    const { menuVisible } = this.state;
    const menuMode = isMoblie ? 'inline' : 'horizontal';
    const headerClassName = classNames({
      clearfix: true,
      'home-nav-white': !isFirstScreen,
    });

    const menu = [
      <Button className="header-lang-button" ghost size="small" key="lang" href="/login">
        Iniciar Sesion
      </Button>,
      <Menu mode={menuMode} defaultSelectedKeys={['home']} id="nav" key="nav">
        <Menu.Item key="home">
          Inicio
        </Menu.Item>
        
        <Menu.Item key="docs/FAQ">
          FAQ
        </Menu.Item>
        
        <Menu.Item key="docs/contact">
          Contáctanos
        </Menu.Item>        
        
      </Menu>,
    ];

    return (
      <header id="header" className={headerClassName}>
        {menuMode === 'inline' ? (
          <Popover
            overlayClassName="popover-menu"
            placement="bottomRight"
            content={menu}
            trigger="click"
            visible={menuVisible}
            arrowPointAtCenter
            onVisibleChange={this.onMenuVisibleChange}
          >
            <Icon
              className="nav-phone-icon"
              type="menu"
              onClick={this.handleShowMenu}
            />
          </Popover>
        ) : null}
        <Row>
          <Col lg={4} md={5} sm={24} xs={24}>
            <a id="logo">
              
              <span>Zenelly</span>
            </a>
          </Col>
          <Col lg={20} md={19} sm={10} xs={10}>
            {menuMode === 'horizontal' ? menu : null}
          </Col>
        </Row>
      </header>
    );
  }
}
