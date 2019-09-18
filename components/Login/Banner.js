import React from 'react';
import PropTypes from 'prop-types';
import ScrollElement from 'rc-scroll-anim/lib/ScrollElement';
import { Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';

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
        
      </ScrollElement>
    </section>
  );
}
Banner.propTypes = {
  onEnterChange: PropTypes.func,
};
