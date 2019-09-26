import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Row, Col} from 'antd';
import Logo from '../../static/images/logo_blanco.png';




const searchEngine = 'Google';

export default class Header1 extends React.Component {
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


    return (
      <header id="header" className={headerClassName}>
        
        <Row>
          <Col lg={4} md={5} sm={24} xs={24}>

          

            <a id="logo">
              <img alt="logo" src={Logo} width="100%"/>
            </a>
            
          </Col>
          
        </Row>
      </header>
    );
  }
}
