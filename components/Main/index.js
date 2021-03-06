import React from 'react';
import DocumentTitle from 'react-document-title';
import { enquireScreen } from 'enquire-js';
import Header from './Header';
import Banner from './Banner';
import Page1 from './Page1';
import Footer from './Footer';
import '../../static/style/style';

let isMobile = false;
enquireScreen((b) => {
  isMobile = b;
});


class Home extends React.Component {
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
        <Banner key="banner" onEnterChange={this.onEnterChange} initial_values = {this.props.props}/>,
        <Page1 key="page1" isMobile={this.state.isMobile} />,        
        <Footer key="footer" />,
        <DocumentTitle title="Zenith Software" key="title" />,
      ]
    );
  }
}



export default Home;
