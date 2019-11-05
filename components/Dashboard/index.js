import React from 'react';
import DocumentTitle from 'react-document-title';
import { enquireScreen } from 'enquire-js';
import Dashboard from '../lateralmenu'
import Headeer from '../Main/Header1'
import Footeer from '../FooterWhite'
import LOGO from '../../static/images/logo_blanco.png'
import { Layout } from 'antd';
const { Header, Sider, Content } = Layout;



let isMobile = false;
enquireScreen((b) => {
  isMobile = b;
});

class Home extends React.PureComponent {
  state = {
    isFirstScreen: true,
    isMobile,
  };

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({
        isMobile: !!b,
      });
    });
  }

  onEnterChange = (mode) => {
    this.setState({
      isFirstScreen: mode === 'enter',
    });
  }
  render() {
    return (
        
        <div>
            <DocumentTitle title="Zenith Software" key="title" />

            <Layout>
              <Header style={{textAlign: 'right'}} ><a href = '/'><img style={{width: '10%'}} src = {LOGO} alt="logowhite"/></a></Header>
              <Layout>
                <Sider><Dashboard/></Sider>
                <Content>Content</Content>
              </Layout>
              <Footeer/>
            </Layout>

            
      
        </div>



      
    );
  }
}
export default Home;
