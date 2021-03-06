import React from 'react';
import DocumentTitle from 'react-document-title';
import { enquireScreen } from 'enquire-js';
import Header from '../Main/Header1';
import Signin from '../Signin'

import Footer from '../Main/Footer';



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
      [
        <Header key="header" isFirstScreen={this.state.isFirstScreen} isMobile={this.state.isMobile} />,
        
        <Signin key="signup"/>,
        <Footer key="footer" />,
        <DocumentTitle title="Zenith Software" key="title" />,
      ]
    );
  }
}
export default Home;
