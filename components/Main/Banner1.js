import React from 'react';
import PropTypes from 'prop-types';
import ScrollElement from 'rc-scroll-anim/lib/ScrollElement';
import { Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';
import contact from './images/contact.png'

function typeFunc(a) {
  if (a.key === 'line') {
    return 'right';
  } else if (a.key === 'button') {
    return 'bottom';
  }
  return 'left';
}

export default function Banner({ onEnterChange }) {
  return (
    <section className="page banner-wrapper">
      <ScrollElement
        className="page"
        id="banner"
        onChange={({ mode }) => onEnterChange(mode)}
        playScale={0.9}
      >
        <QueueAnim className="banner-text-wrapper" type={typeFunc} delay={400} key="banner">
          <h2 key="h2">Hola, nuestro sitio está en construcción</h2>
          <p key="content">Si necesitas información sobre Zenelly puedes escribirnos para atender tus inquietudes </p>
          <br></br>
          <br></br>
          <a id="logo">
            <img alt="logo" src={contact} width="100%"/>
          </a>
          
        </QueueAnim>
        <Icon type="down" className="down" />
      </ScrollElement>
    </section>
  );
}
Banner.propTypes = {
  onEnterChange: PropTypes.func,
};
