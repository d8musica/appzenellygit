import React from 'react';
import DocumentTitle from 'react-document-title';
import { enquireScreen } from 'enquire-js';
import Header from './Header';
import Login from './login'
import Banner from './Banner';
import Footer from './Footer';
import './static/style';

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
        <Banner key="banner" onEnterChange={this.onEnterChange} />,
        <Login key="login"/>,
        <Footer key="footer" />,
        <DocumentTitle title="Zenith Software" key="title" />,
      ]
    );
  }
}
export default Home;
